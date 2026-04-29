import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  EyeIcon,
  IntermediateIcon,
  LensIcon,
  MultifocalIcon,
  ToricIcon
} from "../../../components/icons";

const lenses = [
  {
    title: "Монофокальные ИОЛ",
    text:
      "Чаще всего ориентированы на хорошее зрение на одном основном расстоянии — обычно вдаль. Для чтения или работы вблизи после операции могут понадобиться очки.",
    highlight: "простое решение",
    icon: <LensIcon />
  },
  {
    title: "EDOF",
    text:
      "Ориентированы на комфортное зрение вдаль и на среднем расстоянии — например, для повседневных дел, экрана, меню и приборной панели. Для мелкого текста иногда могут понадобиться очки.",
    highlight: "даль + среднее расстояние",
    icon: <IntermediateIcon />
  },
  {
    title: "Трифокальные ИОЛ",
    text:
      "Помогают видеть на нескольких расстояниях в течение дня и могут дать больше свободы от очков в повседневной жизни.",
    highlight: "больше свободы от очков",
    icon: <MultifocalIcon />
  },
  {
    title: "Торические ИОЛ",
    text:
      "Используются, если у пациента есть астигматизм. Их задача — дополнительно учитывать этот фактор при выборе зрительного решения.",
    highlight: "при астигматизме",
    icon: <ToricIcon />
  }
];

const scenarios = [
  {
    title: "Главное — хорошо видеть вдаль",
    text:
      "Если для вас важнее всего вождение, прогулки, телевизор и повседневная активность вне дома, врач может обсудить решения, ориентированные прежде всего на зрение вдаль."
  },
  {
    title: "Важен комфорт вдаль и на среднем расстоянии",
    text:
      "Если вам часто нужны экран, меню, приборная панель и другие задачи на среднем расстоянии, стоит обсудить варианты, которые дают больше удобства в таких ситуациях."
  },
  {
    title: "Хочется меньше зависеть от очков",
    text:
      "Если для вас важно хорошо видеть на разных расстояниях в течение дня и как можно реже пользоваться очками, врач может обсудить более широкий спектр решений."
  }
];

const questions = [
  "Какое зрение вы ждёте после операции",
  "Что для вас важнее: даль, среднее расстояние, близь или несколько расстояний в течение дня",
  "Насколько для вас важно меньше зависеть от очков",
  "Какие привычные ситуации для вас особенно важны: улица, компьютер, чтение, телефон"
];

export default function LensesPage() {
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
            <div style={{ maxWidth: 640 }}>
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
                Интраокулярные линзы
              </div>

              <h1
                style={{
                  fontSize: "clamp(38px, 8vw, 50px)",
                  lineHeight: 1.08,
                  margin: "0 0 18px",
                  color: "#0f172a",
                  maxWidth: 760,
                  letterSpacing: "-0.03em"
                }}
              >
                Интраокулярные линзы: от чего зависит зрение после операции
              </h1>

              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.75,
                  color: "#475569",
                  maxWidth: 640,
                  margin: "0 0 28px"
                }}
              >
                Во время операции катаракты мутный хрусталик заменяют
                искусственной линзой. Именно от её типа во многом зависит, каким
                будет зрение после операции и насколько вы будете зависеть от
                очков в повседневной жизни.
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
                  href="/ru/katarakta"
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
                  Подробнее о катаракте
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
                Почему это важно
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
                Линза влияет не только на саму операцию, но и на повседневное
                зрение после неё
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: "0 0 18px"
                }}
              >
                Для одного пациента главное — чётко видеть вдаль. Для другого —
                комфортно пользоваться телефоном, компьютером и реже брать в
                руки очки.
              </p>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: 0
                }}
              >
                Поэтому выбор линзы — это не только медицинский вопрос, но и
                разговор о том, какое зрение вы хотите получить после операции.
              </p>
            </div>

            <div
              style={{
                background: "#0f172a",
                color: "#ffffff",
                padding: 28,
                borderRadius: 26,
                boxShadow: "0 16px 38px rgba(15,23,42,0.14)"
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#93c5fd",
                  marginBottom: 14
                }}
              >
                Важно понимать
              </div>

              <p
                style={{
                  margin: "0 0 14px",
                  color: "#dbeafe",
                  fontSize: 18,
                  lineHeight: 1.8
                }}
              >
                Операция катаракты — это не только лечение, но и возможность
                заранее обсудить качество зрения после неё.
              </p>

              <p
                style={{
                  margin: 0,
                  color: "#dbeafe",
                  fontSize: 18,
                  lineHeight: 1.8
                }}
              >
                Чем понятнее ваши ожидания до операции, тем содержательнее будет
                разговор с врачом.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "72px 20px",
            background: "#f4f8fc"
          }}
        >
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div style={{ maxWidth: 760, marginBottom: 28 }}>
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
                Основные варианты
              </div>

              <h2
                style={{
                  fontSize: "clamp(30px, 6vw, 36px)",
                  lineHeight: 1.2,
                  margin: "0 0 14px",
                  color: "#0f172a",
                  letterSpacing: "-0.02em"
                }}
              >
                Какие линзы обычно обсуждают перед операцией
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#475569",
                  lineHeight: 1.8,
                  fontSize: 18
                }}
              >
                У разных типов линз разные зрительные акценты. Ниже — базовое
                объяснение простыми словами.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
                gap: 20
              }}
            >
              {lenses.map((lens) => (
                <div
                  key={lens.title}
                  style={{
                    border: "1px solid #e2e8f0",
                    borderRadius: 24,
                    padding: 24,
                    background: "#ffffff",
                    boxShadow: "0 10px 30px rgba(15,23,42,0.06)"
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 999,
                      background: "#eff6ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16
                    }}
                  >
                    {lens.icon}
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      color: "#2563eb",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      marginBottom: 10
                    }}
                  >
                    {lens.highlight}
                  </div>

                  <h3
                    style={{
                      margin: "0 0 12px",
                      fontSize: 24,
                      lineHeight: 1.3,
                      color: "#0f172a",
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {lens.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "#475569",
                      lineHeight: 1.8,
                      fontSize: 16
                    }}
                  >
                    {lens.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "72px 20px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div style={{ maxWidth: 760, marginBottom: 28 }}>
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
                Как обычно выбирают
              </div>

              <h2
                style={{
                  fontSize: "clamp(30px, 6vw, 36px)",
                  lineHeight: 1.2,
                  margin: "0 0 14px",
                  color: "#0f172a",
                  letterSpacing: "-0.02em"
                }}
              >
                Выбор линзы начинается с ожиданий от зрения
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#475569",
                  lineHeight: 1.8,
                  fontSize: 18
                }}
              >
                Ниже — упрощённые жизненные сценарии, с которых обычно и
                начинается разговор на консультации.
              </p>
            </div>

            <div style={{ display: "grid", gap: 18 }}>
              {scenarios.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#ffffff",
                    padding: 22,
                    borderRadius: 22,
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 30px rgba(15,23,42,0.06)"
                  }}
                >
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: 10,
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {item.title}
                  </div>

                  <p
                    style={{
                      margin: 0,
                      color: "#475569",
                      lineHeight: 1.8,
                      fontSize: 16
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "0 20px 72px" }}>
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
                Следующий шаг
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
                    Пройдите короткий опрос перед консультацией
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
                    Он поможет лучше сформулировать ваши ожидания и понять, что
                    именно стоит обсудить с врачом при выборе линзы.
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
                  href="/ru/katarakta"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.35)",
                    color: "#ffffff",
                    fontWeight: 700
                  }}
                >
                  Вернуться к информации о катаракте →
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
