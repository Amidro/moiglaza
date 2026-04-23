"use client";

import { useMemo, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

type LifestyleValue = "active" | "calm" | "balanced";
type VisionFocusValue = "distance" | "intermediate" | "near" | "all_day";
type GlassesFreedomValue = "ok_with_glasses" | "prefer_less" | "minimum";
type NoGlassesSituationValue =
  | "driving"
  | "phone"
  | "reading"
  | "computer"
  | "daily_tasks"
  | "not_important";

type Answers = {
  lifestyle?: LifestyleValue;
  visualFocuses: VisionFocusValue[];
  gadgetsComfort?: 1 | 2 | 3 | 4 | 5;
  glassesFreedom?: GlassesFreedomValue;
  noGlassesSituations: NoGlassesSituationValue[];
};

type ResultProfile = {
  id: "distance" | "near" | "all_distances" | "between_edof_panoptix";
  title: string;
  meaning: string;
  discuss: string;
  technologyLabel: string;
};

const initialAnswers: Answers = {
  visualFocuses: [],
  noGlassesSituations: []
};

function toggleArrayValue<T extends string>(arr: T[], value: T) {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

function getResultProfile(answers: Answers): ResultProfile {
  const lifestyle = answers.lifestyle;
  const visualFocuses = answers.visualFocuses;
  const gadgetsComfort = answers.gadgetsComfort ?? 3;
  const glassesFreedom = answers.glassesFreedom;
  const noGlassesSituations = answers.noGlassesSituations;

  const hasDistance = visualFocuses.includes("distance");
  const hasIntermediate = visualFocuses.includes("intermediate");
  const hasNear = visualFocuses.includes("near");
  const hasAllDay = visualFocuses.includes("all_day");

  const multiFocusCount = [hasDistance, hasIntermediate, hasNear, hasAllDay].filter(Boolean).length;

  const wantsPhone = noGlassesSituations.includes("phone");
  const wantsReading = noGlassesSituations.includes("reading");
  const wantsComputer = noGlassesSituations.includes("computer");
  const wantsDriving = noGlassesSituations.includes("driving");
  const wantsDaily = noGlassesSituations.includes("daily_tasks");

  const wantsSeveralNoGlasses = [wantsPhone, wantsReading, wantsComputer, wantsDriving, wantsDaily].filter(Boolean)
    .length >= 2;

  const strongNearNeed =
    hasNear || gadgetsComfort >= 4 || wantsPhone || wantsReading || wantsComputer;

  const strongDistanceNeed =
    hasDistance || wantsDriving || lifestyle === "active";

  const strongAllDistancesNeed =
    hasAllDay || multiFocusCount >= 2 || (strongNearNeed && strongDistanceNeed);

  const strongFreedomNeed = glassesFreedom === "minimum";
  const mediumFreedomNeed = glassesFreedom === "prefer_less";

  if (
    strongDistanceNeed &&
    !strongNearNeed &&
    !strongAllDistancesNeed &&
    glassesFreedom === "ok_with_glasses"
  ) {
    return {
      id: "distance",
      title: "Для вас особенно важно хорошее зрение вдаль",
      meaning:
        "По вашим ответам можно предположить, что для вас особенно важно чётко видеть вдаль — например, при вождении, прогулках и в других повседневных ситуациях вне дома.",
      discuss:
        "На консультации стоит обсудить монофокальные ИОЛ, если ваш главный приоритет — качественное зрение вдаль, а очки для чтения, телефона или других близких задач не являются для вас большой проблемой.",
      technologyLabel: "Clareon IQ (Айкю)"
    };
  }

  if (
    strongNearNeed &&
    !strongAllDistancesNeed &&
    !strongFreedomNeed &&
    (lifestyle === "calm" || gadgetsComfort >= 4)
  ) {
    return {
      id: "near",
      title: "Для вас особенно важны близкие и привычные повседневные задачи",
      meaning:
        "По вашим ответам можно предположить, что для вас особенно важны чтение, телефон, мелкий текст, домашние дела и другие действия на близком расстоянии.",
      discuss:
        "На консультации стоит обсудить, какие зрительные решения лучше соответствуют такому образу жизни и какой уровень комфорта можно ожидать при близких задачах после операции.",
      technologyLabel: "Clareon IQ (Айкю)"
    };
  }

  if (strongAllDistancesNeed && strongFreedomNeed && wantsSeveralNoGlasses) {
    return {
      id: "all_distances",
      title: "Для вас особенно важна большая свобода от очков в течение дня",
      meaning:
        "По вашим ответам можно предположить, что вам важно хорошо видеть вдаль, на среднем расстоянии и вблизи, а также как можно меньше зависеть от очков в повседневной жизни.",
      discuss:
        "На консультации стоит обсудить трифокальные ИОЛ, если для вас особенно важны разные расстояния и вы хотите максимально сократить использование очков после операции.",
      technologyLabel: "PanOptix"
    };
  }

  return {
    id: "between_edof_panoptix",
    title: "Для вас важны и повседневный комфорт, и большая зрительная свобода",
    meaning:
      "По вашим ответам можно предположить, что для вас важны несколько зрительных задач одновременно: хорошее зрение вдаль, комфорт на среднем расстоянии и стремление как можно реже пользоваться очками.",
    discuss:
      "На консультации стоит обсудить оба направления — EDOF и трифокальные ИОЛ. Если для вас важнее комфорт вдаль и на среднем расстоянии, а очки для мелкого текста вас не сильно смущают, врач может предложить обсудить EDOF. Если же для вас принципиально важно как можно меньше зависеть от очков и хорошо видеть на разных расстояниях в течение дня, стоит обсудить трифокальные ИОЛ.",
    technologyLabel: "Vivity / PanOptix"
  };
}

export default function StartPage() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  const result = useMemo(() => getResultProfile(answers), [answers]);

  const steps = [
    {
      id: "lifestyle",
      title: "Как проходит ваш обычный день?"
    },
    {
      id: "visualFocuses",
      title: "В каких ситуациях вам особенно важно видеть чётко?"
    },
    {
      id: "gadgetsComfort",
      title: "Насколько для вас важно комфортно пользоваться телефоном и компьютером без напряжения?"
    },
    {
      id: "glassesFreedom",
      title: "Насколько для вас важно меньше зависеть от очков после операции?"
    },
    {
      id: "noGlassesSituations",
      title: "В каких ситуациях вам особенно хотелось бы обходиться без очков?"
    }
  ];

const isLastStep = step === steps.length - 1;

const currentStepId = step < steps.length ? steps[step].id : null;

const canGoNext = (() => {
  switch (currentStepId) {
    case "lifestyle":
      return !!answers.lifestyle;
    case "visualFocuses":
      return answers.visualFocuses.length > 0;
    case "gadgetsComfort":
      return !!answers.gadgetsComfort;
    case "glassesFreedom":
      return !!answers.glassesFreedom;
    case "noGlassesSituations":
      return answers.noGlassesSituations.length > 0;
    default:
      return false;
  }
})();

const isComplete =
  step >= steps.length &&
  !!answers.lifestyle &&
  answers.visualFocuses.length > 0 &&
  !!answers.gadgetsComfort &&
  !!answers.glassesFreedom &&
  answers.noGlassesSituations.length > 0;

  const restart = () => {
    setStarted(false);
    setStep(0);
    setAnswers(initialAnswers);
  };

  return (
    <>
      <Header />

      <main>
        <section
          style={{
            background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 60%, #f8fafc 100%)",
            padding: "72px 20px 48px"
          }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: 999,
                background: "#ffffff",
                border: "1px solid #dbeafe",
                color: "#2563eb",
                fontSize: 14,
                fontWeight: 700,
                marginBottom: 18
              }}
            >
              Короткий опрос
            </div>

            <h1
              style={{
                fontSize: 46,
                lineHeight: 1.1,
                maxWidth: 760,
                margin: "0 0 18px",
                color: "#0f172a"
              }}
            >
              Какое зрение вы бы хотели получить после операции?
            </h1>

            <p
              style={{
                fontSize: 20,
                lineHeight: 1.7,
                color: "#475569",
                maxWidth: 760,
                margin: 0
              }}
            >
              Ответьте на несколько коротких вопросов, чтобы понять, какие зрительные
              решения стоит обсудить с врачом.
            </p>

            {!started && (
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginTop: 22,
                  color: "#475569",
                  fontSize: 15
                }}
              >
                <span>займёт около 1 минуты</span>
                <span>•</span>
                <span>без регистрации</span>
                <span>•</span>
                <span>не заменяет консультацию врача</span>
              </div>
            )}
          </div>
        </section>

        <section style={{ padding: "24px 20px 64px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div
              style={{
                background: "#ffffff",
                borderRadius: 28,
                padding: 28,
                border: "1px solid #e2e8f0",
                boxShadow: "0 12px 34px rgba(15,23,42,0.06)"
              }}
            >
              {!started ? (
                <div>
                  <p
                    style={{
                      margin: "0 0 20px",
                      color: "#475569",
                      lineHeight: 1.8,
                      fontSize: 17
                    }}
                  >
                    Опросник не является диагнозом. Его результат поможет лучше
                    подготовиться к разговору с врачом.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStarted(true)}
                    style={{
                      padding: "14px 24px",
                      borderRadius: 999,
                      border: "none",
                      background: "#2563eb",
                      color: "#ffffff",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: 16
                    }}
                  >
                    Начать
                  </button>
                </div>
              ) : isComplete ? (
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "8px 14px",
                      borderRadius: 999,
                      background: "#eff6ff",
                      color: "#2563eb",
                      fontSize: 14,
                      fontWeight: 700,
                      marginBottom: 18
                    }}
                  >
                    Что стоит обсудить с врачом
                  </div>

                  <h2
                    style={{
                      fontSize: 34,
                      lineHeight: 1.2,
                      color: "#0f172a",
                      margin: "0 0 18px"
                    }}
                  >
                    Ваш приоритет
                  </h2>

                  <div
                    style={{
                      background: "#f8fafc",
                      borderRadius: 24,
                      padding: 22,
                      border: "1px solid #e2e8f0",
                      marginBottom: 20
                    }}
                  >
                    <div
                      style={{
                        fontSize: 28,
                        lineHeight: 1.3,
                        color: "#0f172a",
                        fontWeight: 700
                      }}
                    >
                      {result.title}
                    </div>
                  </div>

                  <div style={{ marginBottom: 22 }}>
                    <h3
                      style={{
                        margin: "0 0 10px",
                        fontSize: 22,
                        color: "#0f172a"
                      }}
                    >
                      Что это может означать
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        color: "#475569",
                        lineHeight: 1.8,
                        fontSize: 17
                      }}
                    >
                      {result.meaning}
                    </p>
                  </div>

                  <div style={{ marginBottom: 22 }}>
                    <h3
                      style={{
                        margin: "0 0 10px",
                        fontSize: 22,
                        color: "#0f172a"
                      }}
                    >
                      Что стоит обсудить с врачом
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        color: "#475569",
                        lineHeight: 1.8,
                        fontSize: 17
                      }}
                    >
                      {result.discuss}
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#f8fafc",
                      borderRadius: 22,
                      padding: 20,
                      border: "1px solid #e2e8f0",
                      marginBottom: 22
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#2563eb",
                        marginBottom: 10
                      }}
                    >
                      Название, которое полезно знать перед консультацией
                    </div>

                    <div
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#0f172a"
                      }}
                    >
                      {result.technologyLabel}
                    </div>
                  </div>

                  <div
                    style={{
                      background: "#0f172a",
                      color: "#ffffff",
                      borderRadius: 24,
                      padding: 22,
                      marginBottom: 22
                    }}
                  >
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        marginBottom: 8
                      }}
                    >
                      Важно
                    </div>
                    <p
                      style={{
                        margin: 0,
                        color: "#cbd5e1",
                        lineHeight: 1.8,
                        fontSize: 16
                      }}
                    >
                      Опросник не ставит диагноз и не заменяет обследование. Он
                      помогает лучше подготовиться к разговору с врачом и понять,
                      какие зрительные решения стоит обсудить на консультации.
                    </p>
                  </div>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a
                      href="/ru/intraokulyarnye-linzy"
                      style={{
                        textDecoration: "none",
                        padding: "14px 22px",
                        borderRadius: 999,
                        background: "#2563eb",
                        color: "#ffffff",
                        fontWeight: 700
                      }}
                    >
                      Подробнее о линзах
                    </a>

                    <button
                      type="button"
                      onClick={restart}
                      style={{
                        padding: "14px 22px",
                        borderRadius: 999,
                        border: "1px solid #cbd5e1",
                        background: "#ffffff",
                        color: "#334155",
                        fontWeight: 700,
                        cursor: "pointer"
                      }}
                    >
                      Пройти заново
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ marginBottom: 22 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 10
                      }}
                    >
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#2563eb"
                        }}
                      >
                        Вопрос {step + 1} из {steps.length}
                      </div>
                      <div style={{ fontSize: 14, color: "#64748b" }}>
                        {Math.round(((step + 1) / steps.length) * 100)}%
                      </div>
                    </div>

                    <div
                      style={{
                        height: 8,
                        background: "#e2e8f0",
                        borderRadius: 999,
                        overflow: "hidden"
                      }}
                    >
                      <div
                        style={{
                          width: `${((step + 1) / steps.length) * 100}%`,
                          height: "100%",
                          background: "#2563eb",
                          borderRadius: 999
                        }}
                      />
                    </div>
                  </div>

                  {step === 0 && (
                    <div>
                      <h2 style={{ fontSize: 32, lineHeight: 1.25, color: "#0f172a", margin: "0 0 18px" }}>
                        Как проходит ваш обычный день?
                      </h2>

                      <div style={{ display: "grid", gap: 14 }}>
                        {[
                          {
                            value: "active" as LifestyleValue,
                            title: "Активно",
                            text: "Много времени провожу на улице, за рулём или в движении."
                          },
                          {
                            value: "calm" as LifestyleValue,
                            title: "Спокойно",
                            text: "Чаще нахожусь дома, читаю, работаю за столом или занимаюсь домашними делами."
                          },
                          {
                            value: "balanced" as LifestyleValue,
                            title: "Сбалансированно",
                            text: "В течение дня у меня есть и дела в помещении, и прогулки, и разные повседневные задачи."
                          }
                        ].map((item) => {
                          const active = answers.lifestyle === item.value;
                          return (
                            <button
                              key={item.value}
                              type="button"
                              onClick={() => setAnswers((prev) => ({ ...prev, lifestyle: item.value }))}
                              style={{
                                textAlign: "left",
                                padding: 20,
                                borderRadius: 22,
                                border: active ? "2px solid #2563eb" : "1px solid #e2e8f0",
                                background: active ? "#eff6ff" : "#ffffff",
                                cursor: "pointer"
                              }}
                            >
                              <div style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>
                                {item.title}
                              </div>
                              <div style={{ color: "#475569", lineHeight: 1.7 }}>{item.text}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <h2 style={{ fontSize: 32, lineHeight: 1.25, color: "#0f172a", margin: "0 0 10px" }}>
                        В каких ситуациях вам особенно важно видеть чётко?
                      </h2>
                      <p style={{ margin: "0 0 18px", color: "#475569", fontSize: 16 }}>
                        Можно выбрать несколько вариантов.
                      </p>

                      <div style={{ display: "grid", gap: 14 }}>
                        {[
                          {
                            value: "distance" as VisionFocusValue,
                            title: "Вдаль",
                            text: "Например: вождение, телевизор, дорожные знаки, прогулки"
                          },
                          {
                            value: "intermediate" as VisionFocusValue,
                            title: "На среднем расстоянии",
                            text: "Например: меню в ресторане, ценники в магазине, экран компьютера / планшета / телефона, приборная панель автомобиля"
                          },
                          {
                            value: "near" as VisionFocusValue,
                            title: "Вблизи",
                            text: "Например: чтение книг, инструкции к лекарствам, макияж, рукоделие"
                          },
                          {
                            value: "all_day" as VisionFocusValue,
                            title: "На разных расстояниях в течение дня",
                            text: ""
                          }
                        ].map((item) => {
                          const active = answers.visualFocuses.includes(item.value);
                          return (
                            <button
                              key={item.value}
                              type="button"
                              onClick={() =>
                                setAnswers((prev) => ({
                                  ...prev,
                                  visualFocuses: toggleArrayValue(prev.visualFocuses, item.value)
                                }))
                              }
                              style={{
                                textAlign: "left",
                                padding: 20,
                                borderRadius: 22,
                                border: active ? "2px solid #2563eb" : "1px solid #e2e8f0",
                                background: active ? "#eff6ff" : "#ffffff",
                                cursor: "pointer"
                              }}
                            >
                              <div style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>
                                {item.title}
                              </div>
                              {item.text && <div style={{ color: "#475569", lineHeight: 1.7 }}>{item.text}</div>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h2 style={{ fontSize: 32, lineHeight: 1.25, color: "#0f172a", margin: "0 0 18px" }}>
                        Насколько для вас важно комфортно пользоваться телефоном и компьютером без напряжения?
                      </h2>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
                          gap: 12
                        }}
                      >
                        {[
                          { value: 1 as const, label: "Совсем не важно" },
                          { value: 2 as const, label: "Скорее не важно" },
                          { value: 3 as const, label: "Не уверен(а)" },
                          { value: 4 as const, label: "Достаточно важно" },
                          { value: 5 as const, label: "Очень важно" }
                        ].map((item) => {
                          const active = answers.gadgetsComfort === item.value;
                          return (
                            <button
                              key={item.value}
                              type="button"
                              onClick={() =>
                                setAnswers((prev) => ({ ...prev, gadgetsComfort: item.value }))
                              }
                              style={{
                                padding: 18,
                                borderRadius: 20,
                                border: active ? "2px solid #2563eb" : "1px solid #e2e8f0",
                                background: active ? "#eff6ff" : "#ffffff",
                                cursor: "pointer",
                                color: "#0f172a",
                                fontWeight: 700,
                                lineHeight: 1.5
                              }}
                            >
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h2 style={{ fontSize: 32, lineHeight: 1.25, color: "#0f172a", margin: "0 0 18px" }}>
                        Насколько для вас важно меньше зависеть от очков после операции?
                      </h2>

                      <div style={{ display: "grid", gap: 14 }}>
                        {[
                          {
                            value: "ok_with_glasses" as GlassesFreedomValue,
                            text: "Меня не смущает, если очки понадобятся для отдельных задач"
                          },
                          {
                            value: "prefer_less" as GlassesFreedomValue,
                            text: "Мне было бы комфортнее как можно реже пользоваться очками"
                          },
                          {
                            value: "minimum" as GlassesFreedomValue,
                            text: "Для меня очень важно свести использование очков к минимуму"
                          }
                        ].map((item) => {
                          const active = answers.glassesFreedom === item.value;
                          return (
                            <button
                              key={item.value}
                              type="button"
                              onClick={() =>
                                setAnswers((prev) => ({ ...prev, glassesFreedom: item.value }))
                              }
                              style={{
                                textAlign: "left",
                                padding: 20,
                                borderRadius: 22,
                                border: active ? "2px solid #2563eb" : "1px solid #e2e8f0",
                                background: active ? "#eff6ff" : "#ffffff",
                                cursor: "pointer",
                                color: "#0f172a",
                                lineHeight: 1.7,
                                fontSize: 17
                              }}
                            >
                              {item.text}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div>
                      <h2 style={{ fontSize: 32, lineHeight: 1.25, color: "#0f172a", margin: "0 0 10px" }}>
                        В каких ситуациях вам особенно хотелось бы обходиться без очков?
                      </h2>
                      <p style={{ margin: "0 0 18px", color: "#475569", fontSize: 16 }}>
                        Можно выбрать несколько вариантов.
                      </p>

                      <div style={{ display: "grid", gap: 14 }}>
                        {[
                          { value: "driving" as NoGlassesSituationValue, label: "На улице и за рулём" },
                          { value: "phone" as NoGlassesSituationValue, label: "При использовании телефона" },
                          { value: "reading" as NoGlassesSituationValue, label: "При чтении" },
                          { value: "computer" as NoGlassesSituationValue, label: "За компьютером" },
                          { value: "daily_tasks" as NoGlassesSituationValue, label: "При повседневных делах" },
                          { value: "not_important" as NoGlassesSituationValue, label: "Это не принципиально для меня" }
                        ].map((item) => {
                          const active = answers.noGlassesSituations.includes(item.value);
                          return (
                            <button
                              key={item.value}
                              type="button"
                              onClick={() =>
                                setAnswers((prev) => ({
                                  ...prev,
                                  noGlassesSituations: toggleArrayValue(prev.noGlassesSituations, item.value)
                                }))
                              }
                              style={{
                                textAlign: "left",
                                padding: 20,
                                borderRadius: 22,
                                border: active ? "2px solid #2563eb" : "1px solid #e2e8f0",
                                background: active ? "#eff6ff" : "#ffffff",
                                cursor: "pointer",
                                color: "#0f172a",
                                lineHeight: 1.7,
                                fontSize: 17
                              }}
                            >
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 12,
                      marginTop: 28,
                      flexWrap: "wrap"
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
                      disabled={step === 0}
                      style={{
                        padding: "14px 18px",
                        borderRadius: 999,
                        border: "1px solid #cbd5e1",
                        background: step === 0 ? "#f8fafc" : "#ffffff",
                        color: step === 0 ? "#94a3b8" : "#334155",
                        cursor: step === 0 ? "not-allowed" : "pointer",
                        fontWeight: 700
                      }}
                    >
                      Назад
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (!canGoNext) return;
                        if (isLastStep) {
                          setStep(steps.length);
                        } else {
                          setStep((prev) => prev + 1);
                        }
                      }}
                      disabled={!canGoNext}
                      style={{
                        padding: "14px 22px",
                        borderRadius: 999,
                        border: "none",
                        background: canGoNext ? "#2563eb" : "#cbd5e1",
                        color: "#ffffff",
                        cursor: canGoNext ? "pointer" : "not-allowed",
                        fontWeight: 700
                      }}
                    >
                      {isLastStep ? "Показать результат" : "Далее"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
