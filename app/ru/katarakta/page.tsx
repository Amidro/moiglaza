import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { EyeIcon, LensIcon, SparklesIcon } from "../../../components/icons";

const symptoms = [
  "зрение как через туман",
  "яркий свет начинает мешать сильнее",
  "цвета кажутся менее яркими",
  "сложнее читать мелкий текст",
  "хуже видно вечером и ночью"
];

const steps = [
  "Помутневший хрусталик аккуратно удаляется.",
  "На его место устанавливается искусственная линза.",
  "Свет снова проходит свободно, и зрение становится более чётким."
];

const questions = [
  "какой вариант линзы больше подходит вашему образу жизни",
  "что для вас важнее: зрение вдаль, вблизи или на разных расстояниях",
  "насколько важно меньше зависеть от очков",
  "какое зрение вы ждёте после операции"
];

export default function KataraktaPage() {
  return (
    <>
      <Header />

      <main style={{ overflowX: "hidden" }}>
        <section
          style={{
            background:
              "linear-gradient(135deg, #edf5ff 0%, #f7fbff 45%, #eef6ff 100%)",
            padding: "84px 20px 72px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto"
            }}
          >
            <div style={{ maxWidth: 620 }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "#ffffff",
                  border: "1px solid #bfdbfe",
                  color: "#2563eb",
                  fontSize: 14,
                  fontWeight: 700,
                  marginBottom: 18
                }}
              >
                Катаракта
              </div>

              <h1
                style={{
                  fontSize: "clamp(38px, 8vw, 52px)",
                  lineHeight: 1.08,
                  margin: "0 0 18px",
                  color: "#0f172a",
                  maxWidth: 700,
                  letterSpacing: "-0.03em"
                }}
              >
                Катаракта: что это такое и как лечится
              </h1>

              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.75,
                  color: "#475569",
                  maxWidth: 620,
                  margin: "0 0 28px"
                }}
              >
                Катаракта — это помутнение естественного хрусталика глаза. Из-за
                этого зрение становится размытым, тусклым и менее контрастным.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href="/ru/start"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 14,
                    background: "#2563eb",
                    color: "#ffffff",
                    fontWeight: 700,
                    boxShadow: "0 12px 28px rgba(37,99,235,0.20)"
                  }}
                >
                  Пройти короткий опрос →
                </a>

                <a
                  href="/ru/intraokulyarnye-linzy"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 14,
                    border: "1px solid #93c5fd",
                    background: "#ffffff",
                    color: "#2563eb",
                    fontWeight: 700
                  }}
                >
                  Подробнее о линзах
                </a>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "72px 20px" }}>
          <div
            style={{
              maxWidth: 1160,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: 28,
              alignItems: "start"
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#2563eb",
                  marginBottom: 14
                }}
              >
                Что происходит
              </div>

              <h2
                style={{
                  fontSize: "clamp(30px, 6vw, 36px)",
                  lineHeight: 1.2,
                  margin: "0 0 18px",
                  color: "#0f172a",
                  letterSpacing: "-0.02em"
                }}
              >
                Почему зрение становится мутным
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: "0 0 18px"
                }}
              >
                При катаракте естественный хрусталик теряет прозрачность. Свет
                проходит хуже, и человек начинает видеть как будто через туман
                или мутное стекло.
              </p>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: 0
                }}
              >
                Со временем такие изменения становятся заметнее в повседневной
                жизни: при чтении, вождении, прогулках и в условиях слабого
                освещения.
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: 24,
                padding: 24,
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(15,23,42,0.06)"
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: 16,
                  fontSize: 24,
                  color: "#0f172a",
                  letterSpacing: "-0.01em"
                }}
              >
                Частые жалобы пациентов
              </h3>

              <div style={{ display: "grid", gap: 12 }}>
                {symptoms.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      padding: 14,
                      borderRadius: 18,
                      background: "#f8fafc"
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 999,
                        background: "#eff6ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <EyeIcon />
                    </div>

                    <div
                      style={{
                        color: "#334155",
                        lineHeight: 1.75,
                        fontSize: 16
                      }}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            background: "#f4f8fc",
            padding: "72px 20px"
          }}
        >
          <div
            style={{
              maxWidth: 1160,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: 28,
              alignItems: "start"
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#2563eb",
                  marginBottom: 14
                }}
              >
                Лечение
              </div>

              <h2
                style={{
                  fontSize: "clamp(30px, 6vw, 36px)",
                  lineHeight: 1.2,
                  margin: "0 0 18px",
                  color: "#0f172a",
                  letterSpacing: "-0.02em"
                }}
              >
                Как лечится катаракта
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: "0 0 18px"
                }}
              >
                Если хрусталик уже помутнел, основным методом лечения является
                операция. Во время процедуры мутный хрусталик заменяют
                прозрачной интраокулярной линзой.
              </p>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: 0
                }}
              >
                Для пациента важна не только сама операция, но и то, каким будет
                зрение после неё и какие вопросы стоит обсудить заранее.
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: 24,
                padding: 24,
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
                maxWidth: "100%",
                overflow: "hidden"
              }}
            >
              {steps.map((step, index) => (
                <div
                  key={step}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "42px minmax(0, 1fr) 24px",
                    gap: 18,
                    alignItems: "center",
                    padding: "16px 0",
                    borderBottom:
                      index === steps.length - 1 ? "none" : "1px solid #e2e8f0"
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 999,
                      background: "#2563eb",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 20,
                      flexShrink: 0
                    }}
                  >
                    {index + 1}
                  </div>

                  <div
                    style={{
                      color: "#334155",
                      lineHeight: 1.75,
                      fontSize: 18,
                      minWidth: 0
                    }}
                  >
                    {step}
                  </div>

                  <div style={{ justifySelf: "end", display: "flex" }}>
                    {index === 0 ? (
                      <EyeIcon size={22} />
                    ) : index === 1 ? (
                      <LensIcon size={22} />
                    ) : (
                      <SparklesIcon size={22} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "72px 20px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div
              style={{
                background:
                  "linear-gradient(135deg, #0b2f73 0%, #0f3f9f 40%, #082b68 100%)",
                color: "#ffffff",
                borderRadius: 28,
                padding: "34px 28px",
                boxShadow: "0 18px 42px rgba(15,23,42,0.18)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: -80,
                  bottom: -80,
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: -20,
                  bottom: -20,
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)"
                }}
              />

              <div
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: "#dbeafe",
                  fontSize: 14,
                  fontWeight: 700,
                  marginBottom: 16,
                  position: "relative",
                  zIndex: 1
                }}
              >
                Перед консультацией
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                  gap: 28,
                  alignItems: "start",
                  position: "relative",
                  zIndex: 1
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "clamp(32px, 7vw, 40px)",
                      lineHeight: 1.15,
                      margin: "0 0 16px",
                      letterSpacing: "-0.03em"
                    }}
                  >
                    Что полезно обсудить с врачом заранее
                  </h2>

                  <p
                    style={{
                      margin: 0,
                      color: "#dbeafe",
                      lineHeight: 1.8,
                      fontSize: 18,
                      maxWidth: 620
                    }}
                  >
                    Чем понятнее ваши ожидания до операции, тем содержательнее
                    и спокойнее будет разговор о вариантах линз и о том, какого
                    зрения ждать после лечения.
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gap: 14
                  }}
                >
                  {questions.map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: 18,
                        borderRadius: 20,
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        color: "#dbeafe",
                        lineHeight: 1.7,
                        fontSize: 16
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginTop: 24,
                  position: "relative",
                  zIndex: 1
                }}
              >
                <a
                  href="/ru/start"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 14,
                    background: "#ffffff",
                    color: "#0f172a",
                    fontWeight: 700
                  }}
                >
                  Пройти короткий опрос →
                </a>

                <a
                  href="/ru/intraokulyarnye-linzy"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.35)",
                    color: "#ffffff",
                    fontWeight: 700
                  }}
                >
                  Подробнее о линзах →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
