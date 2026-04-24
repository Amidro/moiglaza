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

  const wantsSeveralNoGlasses =
    [wantsPhone, wantsReading, wantsComputer, wantsDriving, wantsDaily].filter(Boolean).length >= 2;

  const strongNearNeed =
    hasNear || gadgetsComfort >= 4 || wantsPhone || wantsReading || wantsComputer;

  const strongDistanceNeed =
    hasDistance || wantsDriving || lifestyle === "active";

  const strongAllDistancesNeed =
    hasAllDay || multiFocusCount >= 2 || (strongNearNeed && strongDistanceNeed);

  const strongFreedomNeed = glassesFreedom === "minimum";

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

function StepBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "8px 14px",
        borderRadius: 999,
        background: "#ffffff",
        border: "1px solid #bfdbfe",
        color: "#2563eb",
        fontSize: 14,
        fontWeight: 700
      }}
    >
      {children}
    </div>
  );
}

function ChoiceCard({
  title,
  text,
  active,
  onClick
}: {
  title: string;
  text?: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: "left",
        padding: 22,
        borderRadius: 22,
        border: active ? "2px solid #93c5fd" : "1px solid #e2e8f0",
        background: active
          ? "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)"
          : "#ffffff",
        boxShadow: active
          ? "0 12px 30px rgba(37,99,235,0.10)"
          : "0 10px 30px rgba(15,23,42,0.05)",
        cursor: "pointer",
        width: "100%"
      }}
    >
      <div
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0f172a",
          marginBottom: text ? 8 : 0,
          lineHeight: 1.35
        }}
      >
        {title}
      </div>
      {text ? (
        <div style={{ color: "#475569", lineHeight: 1.75, fontSize: 16 }}>{text}</div>
      ) : null}
    </button>
  );
}

function ScaleButton({
  label,
  active,
  onClick
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: 18,
        borderRadius: 18,
        border: active ? "2px solid #93c5fd" : "1px solid #e2e8f0",
        background: active
          ? "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)"
          : "#ffffff",
        boxShadow: active
          ? "0 12px 30px rgba(37,99,235,0.10)"
          : "0 10px 30px rgba(15,23,42,0.05)",
        cursor: "pointer",
        color: "#0f172a",
        fontWeight: 700,
        lineHeight: 1.45,
        minHeight: 88
      }}
    >
      {label}
    </button>
  );
}

export default function StartPage() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  const result = useMemo(() => getResultProfile(answers), [answers]);

  const steps = [
    "lifestyle",
    "visualFocuses",
    "gadgetsComfort",
    "glassesFreedom",
    "noGlassesSituations"
  ] as const;

  const isLastStep = step === steps.length - 1;
  const currentStepId = step < steps.length ? steps[step] : null;

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
            background:
              "linear-gradient(135deg, #edf5ff 0%, #f7fbff 45%, #eef6ff 100%)",
            padding: "84px 20px 64px"
          }}
        >
          <div
            style={{
              maxWidth: 1160,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 28,
              alignItems: "center"
            }}
          >
            <div style={{ maxWidth: 620 }}>
              <StepBadge>Короткий опрос</StepBadge>

              <h1
                style={{
                  fontSize: 50,
                  lineHeight: 1.08,
                  margin: "18px 0 18px",
                  color: "#0f172a"
                }}
              >
                Какое зрение вы хотите получить после операции?
              </h1>

              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.75,
                  color: "#475569",
                  margin: 0,
                  maxWidth: 620
                }}
              >
                Ответьте на несколько коротких вопросов, чтобы понять, какие
                зрительные решения стоит обсудить с врачом перед консультацией.
              </p>

              {!started && (
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    marginTop: 22,
                    color: "#64748b",
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

            <div
              style={{
                minHeight: 320,
                borderRadius: 30,
                background:
                  "radial-gradient(circle at 65% 45%, rgba(255,255,255,0.95) 0%, rgba(219,234,254,0.88) 38%, rgba(191,219,254,0.38) 62%, rgba(239,246,255,0.15) 100%)",
                border: "1px solid rgba(191,219,254,0.8)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "12%",
                  left: "12%",
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.75)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "22%",
                  left: "24%",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.75)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: "13%",
                  top: "18%",
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.82) 30%, rgba(191,219,254,0.72) 55%, rgba(147,197,253,0.28) 78%, rgba(96,165,250,0.06) 100%)",
                  boxShadow:
                    "0 0 0 10px rgba(255,255,255,0.32), 0 0 40px rgba(96,165,250,0.18)"
                }}
              />
            </div>
          </div>
        </section>

        <section style={{ padding: "0 20px 72px" }}>
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
                      margin: "0 0 22px",
                      color: "#475569",
                      lineHeight: 1.8,
                      fontSize: 17,
                      maxWidth: 760
                    }}
                  >
                    Опросник не является диагнозом. Его результат поможет лучше
                    подготовиться к разговору с врачом и понять, какие названия
                    технологий полезно знать перед консультацией.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStarted(true)}
                    style={{
                      padding: "14px 24px",
                      borderRadius: 14,
                      border: "none",
                      background: "#2563eb",
                      color: "#ffffff",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: 16,
                      boxShadow: "0 12px 28px rgba(37,99,235,0.18)"
                    }}
                  >
                    Начать
                  </button>
                </div>
              ) : isComplete ? (
                <div>
                  <StepBadge>Что стоит обсудить с врачом</StepBadge>

                  <div style={{ marginTop: 22, marginBottom: 24 }}>
                    <h2
                      style={{
                        fontSize: 34,
                        lineHeight: 1.2,
                        color: "#0f172a",
                        margin: "0 0 16px"
                      }}
                    >
                      Ваш приоритет
                    </h2>

                    <div
                      style={{
                        background: "#f8fafc",
                        borderRadius: 24,
                        padding: 22,
                        border: "1px solid #e2e8f0"
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
                  </div>

                  <div style={{ marginBottom: 24 }}>
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

                  <div style={{ marginBottom: 24 }}>
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
                      borderRadius: 24,
                      padding: 22,
                      border: "1px solid #e2e8f0",
                      marginBottom: 24
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
                      background:
                        "linear-gradient(135deg, #0b2f73 0%, #0f3f9f 40%, #082b68 100%)",
                      color: "#ffffff",
                      borderRadius: 26,
                      padding: 22,
                      marginBottom: 24
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
                        color: "#dbeafe",
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
                        borderRadius: 14,
                        background: "#2563eb",
                        color: "#ffffff",
                        fontWeight: 700,
                        boxShadow: "0 12px 28px rgba(37,99,235,0.18)"
                      }}
                    >
                      Подробнее о линзах
                    </a>

                    <button
                      type="button"
                      onClick={restart}
                      style={{
                        padding: "14px 22px",
                        borderRadius: 14,
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
                  <div style={{ marginBottom: 24 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 12,
                        flexWrap: "wrap"
                      }}
                    >
                      <StepBadge>
                        Вопрос {step + 1} из {steps.length}
                      </StepBadge>

                      <div style={{ fontSize: 14, color: "#64748b", fontWeight: 700 }}>
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
                      <h2
                        style={{
                          fontSize: 32,
                          lineHeight: 1.25,
                          color: "#0f172a",
                          margin: "0 0 18px"
                        }}
                      >
                        Как проходит ваш обычный день?
                      </h2>

                      <div style={{ display: "grid", gap: 14 }}>
                        <ChoiceCard
                          title="Активно"
                          text="Много времени провожу на улице, за рулём или в движении."
                          active={answers.lifestyle === "active"}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, lifestyle: "active" }))
                          }
                        />
                        <ChoiceCard
                          title="Спокойно"
                          text="Чаще нахожусь дома, читаю, работаю за столом или занимаюсь домашними делами."
                          active={answers.lifestyle === "calm"}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, lifestyle: "calm" }))
                          }
                        />
                        <ChoiceCard
                          title="Сбалансированно"
                          text="В течение дня у меня есть и дела в помещении, и прогулки, и разные повседневные задачи."
                          active={answers.lifestyle === "balanced"}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, lifestyle: "balanced" }))
                          }
                        />
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <h2
                        style={{
                          fontSize: 32,
                          lineHeight: 1.25,
                          color: "#0f172a",
                          margin: "0 0 10px"
                        }}
                      >
                        В каких ситуациях вам особенно важно видеть чётко?
                      </h2>

                      <p style={{ margin: "0 0 18px", color: "#475569", fontSize: 16 }}>
                        Можно выбрать несколько вариантов.
                      </p>

                      <div style={{ display: "grid", gap: 14 }}>
                        <ChoiceCard
                          title="Вдаль"
                          text="Например: вождение, телевизор, дорожные знаки, прогулки"
                          active={answers.visualFocuses.includes("distance")}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              visualFocuses: toggleArrayValue(prev.visualFocuses, "distance")
                            }))
                          }
                        />
                        <ChoiceCard
                          title="На среднем расстоянии"
                          text="Например: меню в ресторане, ценники в магазине, экран компьютера / планшета / телефона, приборная панель автомобиля"
                          active={answers.visualFocuses.includes("intermediate")}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              visualFocuses: toggleArrayValue(prev.visualFocuses, "intermediate")
                            }))
                          }
                        />
                        <ChoiceCard
                          title="Вблизи"
                          text="Например: чтение книг, инструкции к лекарствам, макияж, рукоделие"
                          active={answers.visualFocuses.includes("near")}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              visualFocuses: toggleArrayValue(prev.visualFocuses, "near")
                            }))
                          }
                        />
                        <ChoiceCard
                          title="На разных расстояниях в течение дня"
                          active={answers.visualFocuses.includes("all_day")}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              visualFocuses: toggleArrayValue(prev.visualFocuses, "all_day")
                            }))
                          }
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h2
                        style={{
                          fontSize: 32,
                          lineHeight: 1.25,
                          color: "#0f172a",
                          margin: "0 0 18px"
                        }}
                      >
                        Насколько для вас важно комфортно пользоваться телефоном и компьютером без напряжения?
                      </h2>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
                          gap: 12
                        }}
                      >
                        <ScaleButton
                          label="Совсем не важно"
                          active={answers.gadgetsComfort === 1}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, gadgetsComfort: 1 }))
                          }
                        />
                        <ScaleButton
                          label="Скорее не важно"
                          active={answers.gadgetsComfort === 2}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, gadgetsComfort: 2 }))
                          }
                        />
                        <ScaleButton
                          label="Не уверен(а)"
                          active={answers.gadgetsComfort === 3}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, gadgetsComfort: 3 }))
                          }
                        />
                        <ScaleButton
                          label="Достаточно важно"
                          active={answers.gadgetsComfort === 4}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, gadgetsComfort: 4 }))
                          }
                        />
                        <ScaleButton
                          label="Очень важно"
                          active={answers.gadgetsComfort === 5}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, gadgetsComfort: 5 }))
                          }
                        />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h2
                        style={{
                          fontSize: 32,
                          lineHeight: 1.25,
                          color: "#0f172a",
                          margin: "0 0 18px"
                        }}
                      >
                        Насколько для вас важно меньше зависеть от очков после операции?
                      </h2>

                      <div style={{ display: "grid", gap: 14 }}>
                        <ChoiceCard
                          title="Меня не смущает, если очки понадобятся для отдельных задач"
                          active={answers.glassesFreedom === "ok_with_glasses"}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              glassesFreedom: "ok_with_glasses"
                            }))
                          }
                        />
                        <ChoiceCard
                          title="Мне было бы комфортнее как можно реже пользоваться очками"
                          active={answers.glassesFreedom === "prefer_less"}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              glassesFreedom: "prefer_less"
                            }))
                          }
                        />
                        <ChoiceCard
                          title="Для меня очень важно свести использование очков к минимуму"
                          active={answers.glassesFreedom === "minimum"}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              glassesFreedom: "minimum"
                            }))
                          }
                        />
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div>
                      <h2
                        style={{
                          fontSize: 32,
                          lineHeight: 1.25,
                          color: "#0f172a",
                          margin: "0 0 10px"
                        }}
                      >
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
                        ].map((item) => (
                          <ChoiceCard
                            key={item.value}
                            title={item.label}
                            active={answers.noGlassesSituations.includes(item.value)}
                            onClick={() =>
                              setAnswers((prev) => ({
                                ...prev,
                                noGlassesSituations: toggleArrayValue(prev.noGlassesSituations, item.value)
                              }))
                            }
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 12,
                      marginTop: 30,
                      flexWrap: "wrap"
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
                      disabled={step === 0}
                      style={{
                        padding: "14px 18px",
                        borderRadius: 14,
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
                        borderRadius: 14,
                        border: "none",
                        background: canGoNext ? "#2563eb" : "#cbd5e1",
                        color: "#ffffff",
                        cursor: canGoNext ? "pointer" : "not-allowed",
                        fontWeight: 700,
                        boxShadow: canGoNext
                          ? "0 12px 28px rgba(37,99,235,0.18)"
                          : "none"
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
