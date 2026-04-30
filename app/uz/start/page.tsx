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
  id: "distance" | "all_distances" | "between_edof_panoptix";
  priorityTitle: string;
  priorityText: string;
  technologyLabel: string;
  technologyNote: string;
};

const initialAnswers: Answers = {
  visualFocuses: [],
  noGlassesSituations: []
};

const discussionPoints = [
  "қайси линза варианти ҳаёт тарзингизга кўпроқ мос келиши мумкин;",
  "астигматизм бор-йўқлиги ва торик ИОЛ керак-керак эмаслиги;",
  "кўзойнакка боғлиқликни қанчалик камайтириш мумкинлиги;",
  "қайси ҳолатларда кўзойнак барибир керак бўлиши мумкинлиги."
];

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

  const wantsPhone = noGlassesSituations.includes("phone");
  const wantsReading = noGlassesSituations.includes("reading");
  const wantsComputer = noGlassesSituations.includes("computer");
  const wantsDriving = noGlassesSituations.includes("driving");
  const wantsDaily = noGlassesSituations.includes("daily_tasks");

  const wantsLessGlasses =
    glassesFreedom === "prefer_less" || glassesFreedom === "minimum";

  const wantsMinimumGlasses = glassesFreedom === "minimum";

  const nearOrScreenNeed =
    hasNear || wantsPhone || wantsReading || wantsComputer || gadgetsComfort >= 4;

  const distanceNeed = hasDistance || wantsDriving || lifestyle === "active";

  const intermediateNeed =
    hasIntermediate || wantsComputer || wantsDaily || gadgetsComfort >= 4;

  const allDistanceNeed =
    hasAllDay ||
    (distanceNeed && nearOrScreenNeed) ||
    (distanceNeed && intermediateNeed && wantsLessGlasses);

  const manyNoGlassesSituations =
    [wantsPhone, wantsReading, wantsComputer, wantsDriving, wantsDaily].filter(Boolean)
      .length >= 2;

  if (
    wantsMinimumGlasses &&
    (hasAllDay || manyNoGlassesSituations || nearOrScreenNeed)
  ) {
    return {
      id: "all_distances",
      priorityTitle: "Кун давомида кўзойнакдан кўпроқ эркинлик",
      priorityText:
        "Сиз учун турли масофаларда — узоқ, ўрта ва яқин масофада кўриш ҳамда кундалик ҳаётда кўзойнакдан имкони борича камроқ фойдаланиш муҳим.",
      technologyLabel: "Трифокал ИОЛ / Clareon PanOptix",
      technologyNote:
        "Бу даволаш тавсияси эмас, балки шифокор маслаҳатида муҳокама қилиш мумкин бўлган технология номи."
    };
  }

  if (
    intermediateNeed ||
    nearOrScreenNeed ||
    allDistanceNeed ||
    glassesFreedom === "prefer_less"
  ) {
    return {
      id: "between_edof_panoptix",
      priorityTitle: "Кундалик қулайлик ва кўришда эркинлик",
      priorityText:
        "Сиз учун узоқ ва ўрта масофада қулай кўриш, шунингдек экран, меню, мулоқот, сайр ва кундалик ишлар каби ҳолатларда ўзингизни эркин ҳис қилиш муҳим.",
      technologyLabel: "Чуқурлаштирилган фокусли линза (EDOF) / Clareon Vivity",
      technologyNote:
        "Бу даволаш тавсияси эмас, балки шифокор маслаҳатида муҳокама қилиш мумкин бўлган технология номи. Шифокор EDOF ва трифокал ИОЛ ўртасидаги фарқни ҳам тушунтириб беради."
    };
  }

  return {
    id: "distance",
    priorityTitle: "Узоқни яхши кўриш",
    priorityText:
      "Сиз учун узоқни аниқ кўриш муҳим: масалан, машина ҳайдаш, сайр қилиш, телевизор кўриш ва уйдан ташқаридаги кундалик ҳолатлар. Шу билан бирга, ўқиш ёки телефон учун кўзойнак керак бўлиши сиз учун мақбул бўлиши мумкин.",
    technologyLabel: "Монофокал ИОЛ / Clareon IQ",
    technologyNote:
      "Бу даволаш тавсияси эмас, балки шифокор маслаҳатида муҳокама қилиш мумкин бўлган технология номи."
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
        <div style={{ color: "#475569", lineHeight: 1.75, fontSize: 16 }}>
          {text}
        </div>
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

      <main style={{ overflowX: "hidden" }}>
        <section
          style={{
            background:
              "linear-gradient(135deg, #edf5ff 0%, #f7fbff 45%, #eef6ff 100%)",
            padding: "84px 20px 64px"
          }}
        >
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto"
            }}
          >
            <div style={{ maxWidth: 620 }}>
              <StepBadge>Қисқа сўровнома</StepBadge>

              <h1
                style={{
                  fontSize: "clamp(38px, 8vw, 50px)",
                  lineHeight: 1.08,
                  margin: "18px 0 18px",
                  color: "#0f172a"
                }}
              >
                Операциядан кейин қандай кўришни хоҳлайсиз?
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
                Бир нечта қисқа саволга жавоб беринг. Бу шифокор маслаҳатидан
                олдин қайси кўриш ечимларини муҳокама қилиш мумкинлигини яхшироқ
                тушунишга ёрдам беради.
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
                  <span>тахминан 1 дақиқа</span>
                  <span>•</span>
                  <span>рўйхатдан ўтиш керак эмас</span>
                  <span>•</span>
                  <span>шифокор маслаҳатини алмаштирмайди</span>
                </div>
              )}
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
                    Сўровнома диагноз қўймайди. Натижа шифокор билан суҳбатга
                    яхшироқ тайёрланишга ва маслаҳатдан олдин билиб қўйиш фойдали
                    бўлган технология номларини тушунишга ёрдам беради.
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
                    Бошлаш
                  </button>
                </div>
              ) : isComplete ? (
                <div style={{ display: "grid", gap: 18 }}>
                  <StepBadge>Сўровнома натижаси</StepBadge>

                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: 24,
                      padding: 24,
                      boxShadow: "0 10px 30px rgba(15,23,42,0.06)"
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#2563eb",
                        marginBottom: 12
                      }}
                    >
                      Сизнинг устувор эҳтиёжингиз
                    </div>

                    <h2
                      style={{
                        margin: "0 0 12px",
                        fontSize: "clamp(26px, 6vw, 34px)",
                        lineHeight: 1.2,
                        color: "#0f172a",
                        letterSpacing: "-0.02em"
                      }}
                    >
                      {result.priorityTitle}
                    </h2>

                    <p
                      style={{
                        margin: 0,
                        color: "#334155",
                        fontSize: 18,
                        lineHeight: 1.8
                      }}
                    >
                      {result.priorityText}
                    </p>
                  </div>

                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #0b2f73 0%, #0f3f9f 45%, #082b68 100%)",
                      color: "#ffffff",
                      borderRadius: 26,
                      padding: 26,
                      boxShadow: "0 18px 42px rgba(15,23,42,0.18)",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        right: -70,
                        bottom: -70,
                        width: 250,
                        height: 250,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.12)"
                      }}
                    />

                    <div style={{ position: "relative", zIndex: 1 }}>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 800,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "#bfdbfe",
                          marginBottom: 12
                        }}
                      >
                        Маслаҳатдан олдин билиб қўйиш фойдали бўлган ном
                      </div>

                      <h2
                        style={{
                          margin: "0 0 12px",
                          fontSize: "clamp(26px, 6vw, 36px)",
                          lineHeight: 1.18,
                          letterSpacing: "-0.03em",
                          color: "#ffffff"
                        }}
                      >
                        {result.technologyLabel}
                      </h2>

                      <p
                        style={{
                          margin: 0,
                          color: "#dbeafe",
                          fontSize: 16,
                          lineHeight: 1.75,
                          maxWidth: 720
                        }}
                      >
                        {result.technologyNote}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: 24,
                      padding: 24,
                      boxShadow: "0 10px 30px rgba(15,23,42,0.06)"
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#2563eb",
                        marginBottom: 14
                      }}
                    >
                      Шифокор билан нималарни муҳокама қилиш керак
                    </div>

                    <div style={{ display: "grid", gap: 12 }}>
                      {discussionPoints.map((item) => (
                        <div
                          key={item}
                          style={{
                            display: "flex",
                            gap: 12,
                            alignItems: "flex-start",
                            color: "#334155",
                            fontSize: 16,
                            lineHeight: 1.75
                          }}
                        >
                          <span
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: 999,
                              background: "#2563eb",
                              marginTop: 10,
                              flexShrink: 0
                            }}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: 20,
                      padding: 18,
                      color: "#64748b",
                      fontSize: 14,
                      lineHeight: 1.75
                    }}
                  >
                    <strong style={{ color: "#334155" }}>Муҳим:</strong>{" "}
                    сўровнома диагноз қўймайди ва шифокор маслаҳатини
                    алмаштирмайди. Даволаш ва линза танлаш бўйича якуний қарор
                    текширувдан кейин шифокор томонидан қабул қилинади.
                  </div>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
                    <a
                      href="/uz/intraokulyar-linzalar"
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
                      Линзалар ҳақида батафсил
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
                      Қайта ўтиш
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
                        Савол {step + 1} / {steps.length}
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
                        Одатда кунингиз қандай ўтади?
                      </h2>

                      <div style={{ display: "grid", gap: 14 }}>
                        <ChoiceCard
                          title="Фаол"
                          text="Кўп вақтим кўчада, машинада ёки ҳаракатда ўтади."
                          active={answers.lifestyle === "active"}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, lifestyle: "active" }))
                          }
                        />
                        <ChoiceCard
                          title="Сокин"
                          text="Кўпроқ уйда бўламан, ўқийман, столда ишлайман ёки уй ишлари билан шуғулланаман."
                          active={answers.lifestyle === "calm"}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, lifestyle: "calm" }))
                          }
                        />
                        <ChoiceCard
                          title="Мувозанатли"
                          text="Кун давомида уйдаги ишлар ҳам, сайр ҳам, турли кундалик вазифалар ҳам бор."
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
                        Қайси ҳолатларда аниқ кўриш сиз учун айниқса муҳим?
                      </h2>

                      <p style={{ margin: "0 0 18px", color: "#475569", fontSize: 16 }}>
                        Бир нечта вариантни танлаш мумкин.
                      </p>

                      <div style={{ display: "grid", gap: 14 }}>
                        <ChoiceCard
                          title="Узоқни кўриш"
                          text="Масалан: машина ҳайдаш, телевизор, йўл белгилари, сайр"
                          active={answers.visualFocuses.includes("distance")}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              visualFocuses: toggleArrayValue(prev.visualFocuses, "distance")
                            }))
                          }
                        />
                        <ChoiceCard
                          title="Ўрта масофада кўриш"
                          text="Масалан: ресторан менюси, дўкондаги ёзувлар, компьютер / планшет / телефон экрани, автомобил панели"
                          active={answers.visualFocuses.includes("intermediate")}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              visualFocuses: toggleArrayValue(prev.visualFocuses, "intermediate")
                            }))
                          }
                        />
                        <ChoiceCard
                          title="Яқинни кўриш"
                          text="Масалан: китоб ўқиш, дори йўриқномаси, макияж, қўл ишлари"
                          active={answers.visualFocuses.includes("near")}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              visualFocuses: toggleArrayValue(prev.visualFocuses, "near")
                            }))
                          }
                        />
                        <ChoiceCard
                          title="Кун давомида турли масофаларда кўриш"
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
                        Телефон ва компьютердан зўриқмасдан фойдаланиш сиз учун қанчалик муҳим?
                      </h2>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(min(100%, 130px), 1fr))",
                          gap: 12
                        }}
                      >
                        <ScaleButton
                          label="Умуман муҳим эмас"
                          active={answers.gadgetsComfort === 1}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, gadgetsComfort: 1 }))
                          }
                        />
                        <ScaleButton
                          label="Унчалик муҳим эмас"
                          active={answers.gadgetsComfort === 2}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, gadgetsComfort: 2 }))
                          }
                        />
                        <ScaleButton
                          label="Аниқ эмас"
                          active={answers.gadgetsComfort === 3}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, gadgetsComfort: 3 }))
                          }
                        />
                        <ScaleButton
                          label="Анча муҳим"
                          active={answers.gadgetsComfort === 4}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, gadgetsComfort: 4 }))
                          }
                        />
                        <ScaleButton
                          label="Жуда муҳим"
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
                        Операциядан кейин кўзойнакка камроқ боғлиқ бўлиш сиз учун қанчалик муҳим?
                      </h2>

                      <div style={{ display: "grid", gap: 14 }}>
                        <ChoiceCard
                          title="Айрим ишлар учун кўзойнак керак бўлса, бу мени безовта қилмайди"
                          active={answers.glassesFreedom === "ok_with_glasses"}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              glassesFreedom: "ok_with_glasses"
                            }))
                          }
                        />
                        <ChoiceCard
                          title="Кўзойнакдан имкони борича камроқ фойдаланишни хоҳлардим"
                          active={answers.glassesFreedom === "prefer_less"}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              glassesFreedom: "prefer_less"
                            }))
                          }
                        />
                        <ChoiceCard
                          title="Кўзойнакдан фойдаланишни минимумга тушириш мен учун жуда муҳим"
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
                        Қайси ҳолатларда кўзойнаксиз юришни айниқса хоҳлар эдингиз?
                      </h2>

                      <p style={{ margin: "0 0 18px", color: "#475569", fontSize: 16 }}>
                        Бир нечта вариантни танлаш мумкин.
                      </p>

                      <div style={{ display: "grid", gap: 14 }}>
                        {[
                          { value: "driving" as NoGlassesSituationValue, label: "Кўчада ва машинада" },
                          { value: "phone" as NoGlassesSituationValue, label: "Телефондан фойдаланганда" },
                          { value: "reading" as NoGlassesSituationValue, label: "Ўқишда" },
                          { value: "computer" as NoGlassesSituationValue, label: "Компьютерда ишлаганда" },
                          { value: "daily_tasks" as NoGlassesSituationValue, label: "Кундалик ишларда" },
                          { value: "not_important" as NoGlassesSituationValue, label: "Бу мен учун принципиал эмас" }
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
                      Орқага
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
                      {isLastStep ? "Натижани кўриш" : "Давом этиш"}
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
