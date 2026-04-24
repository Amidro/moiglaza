import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { content } from "../../lib/content";

const cards = [
  {
    title: "Зрение стало мутнее?",
    preview:
      "После 40 лет это может быть связано с катарактой или возрастным ухудшением зрения вблизи.",
    expanded:
      "Важно понимать разницу, потому что при катаракте зрение становится менее прозрачным, а при пресбиопии чаще всего становится труднее видеть именно вблизи.",
    linkText: "Подробнее о причинах →",
    href: "/ru/katarakta",
    accent: false
  },
  {
    title: "Что такое катаракта?",
    preview: "Катаракта — это помутнение естественного хрусталика глаза.",
    expanded:
      "Из-за этого свет проходит хуже, и зрение становится менее чётким, как будто через туман. Со временем это состояние прогрессирует, и основным методом лечения становится замена хрусталика на искусственную линзу.",
    linkText: "Подробнее о катаракте →",
    href: "/ru/katarakta",
    accent: false
  },
  {
    title: "Почему хуже видно вблизи?",
    preview:
      "С возрастом глазу становится труднее фокусироваться на близком расстоянии.",
    expanded:
      "Это называется пресбиопией. В отличие от катаракты, при этом зрение обычно остаётся прозрачным, но для чтения и работы вблизи может потребоваться дополнительная коррекция.",
    linkText: "Подробнее о возрастном зрении →",
    href: "/ru/katarakta",
    accent: false
  },
  {
    title: "Как проходит операция при катаракте?",
    preview:
      "Помутневший хрусталик заменяют прозрачной искусственной линзой через небольшой разрез.",
    expanded:
      "Операция обычно занимает около 15–20 минут и, как правило, проходит без боли. Используется местное обезболивание в виде капель, поэтому пациент остаётся в сознании и может видеть яркий свет, не испытывая дискомфорта.",
    linkText: "Подробнее об операции →",
    href: "/ru/katarakta",
    accent: false
  },
  {
    title: "Какое зрение вы бы хотели получить после операции?",
    preview:
      "Короткий опрос поможет понять, какие зрительные решения стоит обсудить с врачом перед операцией.",
    expanded:
      "Ответьте на несколько простых вопросов о вашем образе жизни, зрительных привычках и ожиданиях. В результате вы увидите, какие технологии полезно знать перед консультацией — например, монофокальные ИОЛ, EDOF или трифокальные решения.",
    linkText: "Пройти короткий опрос →",
    href: "/ru/start",
    accent: true
  }
];

export default function Page() {
  const data = content.ru;

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section
          style={{
            background:
              "linear-gradient(135deg, #eff6ff 0%, #ffffff 58%, #f8fafc 100%)",
            padding: "84px 20px 72px"
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
              Для пациентов
            </div>

            <h1
              style={{
                fontSize: 54,
                lineHeight: 1.08,
                maxWidth: 780,
                margin: "0 0 18px",
                color: "#0f172a"
              }}
            >
              {data.heroTitle}
            </h1>

            <p
              style={{
                fontSize: 20,
                lineHeight: 1.75,
                color: "#475569",
                maxWidth: 760,
                margin: "0 0 28px"
              }}
            >
              {data.heroText}
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="/ru/katarakta"
                style={{
                  textDecoration: "none",
                  padding: "14px 22px",
                  borderRadius: 999,
                  background: "#2563eb",
                  color: "#ffffff",
                  fontWeight: 700
                }}
              >
                Узнать о катаракте
              </a>

              <a
                href="/ru/start"
                style={{
                  textDecoration: "none",
                  padding: "14px 22px",
                  borderRadius: 999,
                  border: "1px solid #cbd5e1",
                  background: "#ffffff",
                  color: "#0f172a",
                  fontWeight: 700
                }}
              >
                Пройти короткий опрос
              </a>
            </div>
          </div>
        </section>

        {/* USEFUL BLOCK */}
        <section style={{ padding: "72px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                maxWidth: 760,
                marginBottom: 32
              }}
            >
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
                Для пациентов
              </div>

              <h2
                style={{
                  fontSize: 36,
                  lineHeight: 1.2,
                  margin: "0 0 14px",
                  color: "#0f172a"
                }}
              >
                Когда этот сайт может быть вам полезен
              </h2>

              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  maxWidth: 760
                }}
              >
                Мы собрали информацию так, чтобы она была понятна человеку без
                медицинской подготовки и помогала спокойнее подготовиться к
                консультации.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
                gap: 20,
                alignItems: "stretch"
              }}
            >
              {cards.map((item) => (
                <details
                  key={item.title}
                  style={{
                    background: item.accent
                      ? "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)"
                      : "#ffffff",
                    border: item.accent
                      ? "1px solid #bfdbfe"
                      : "1px solid #e2e8f0",
                    borderRadius: 24,
                    padding: 24,
                    boxShadow: item.accent
                      ? "0 16px 38px rgba(37,99,235,0.10)"
                      : "0 10px 30px rgba(15,23,42,0.06)",
                    height: "100%"
                  }}
                >
                  <summary
                    style={{
                      listStyle: "none",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      minHeight: 250
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 16,
                        background: item.accent
                          ? "linear-gradient(135deg, #bfdbfe 0%, #dbeafe 100%)"
                          : "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 18
                      }}
                    >
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          background: "#2563eb"
                        }}
                      />
                    </div>

                    <h3
                      style={{
                        fontSize: item.accent ? 24 : 22,
                        lineHeight: 1.35,
                        color: "#0f172a",
                        margin: "0 0 14px"
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: "#475569",
                        lineHeight: 1.8,
                        fontSize: 16
                      }}
                    >
                      {item.preview}
                    </p>

                    <div
                      style={{
                        marginTop: "auto",
                        paddingTop: 16,
                        color: "#2563eb",
                        fontWeight: 700,
                        fontSize: 15
                      }}
                    >
                      Развернуть ↓
                    </div>
                  </summary>

                  <div
                    style={{
                      marginTop: 18,
                      paddingTop: 18,
                      borderTop: "1px solid #e2e8f0"
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 18px",
                        color: "#475569",
                        lineHeight: 1.8,
                        fontSize: 16
                      }}
                    >
                      {item.expanded}
                    </p>

                    <a
                      href={item.href}
                      style={{
                        display: "inline-block",
                        color: "#2563eb",
                        fontWeight: 700,
                        textDecoration: "none",
                        fontSize: 15
                      }}
                    >
                      {item.linkText}
                    </a>

                    <div
                      style={{
                        marginTop: 14,
                        color: "#64748b",
                        fontWeight: 700,
                        fontSize: 14
                      }}
                    >
                      Свернуть ↑
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* TOPICS */}
        <section
          style={{
            padding: "72px 20px",
            background: "#f8fafc"
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ maxWidth: 760, marginBottom: 28 }}>
              <h2
                style={{
                  fontSize: 36,
                  lineHeight: 1.2,
                  margin: "0 0 14px",
                  color: "#0f172a"
                }}
              >
                Выберите тему, которая вас интересует
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#475569",
                  lineHeight: 1.8,
                  fontSize: 18
                }}
              >
                Здесь можно начать с базовой информации о катаракте, линзах и
                причинах зрительного дискомфорта.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 20
              }}
            >
              {data.topics.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    border: "1px solid #e2e8f0",
                    borderRadius: 24,
                    padding: 24,
                    background: "#ffffff",
                    boxShadow: "0 10px 30px rgba(15,23,42,0.06)"
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 16,
                      background: "#eff6ff",
                      marginBottom: 16
                    }}
                  />

                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: 10
                    }}
                  >
                    {item.title}
                  </div>

                  <p
                    style={{
                      margin: 0,
                      color: "#475569",
                      lineHeight: 1.7
                    }}
                  >
                    {item.text}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CATARACT BLOCK */}
        <section style={{ padding: "72px 20px" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
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
                Катаракта
              </div>

              <h2
                style={{
                  fontSize: 36,
                  lineHeight: 1.2,
                  margin: "0 0 18px",
                  color: "#0f172a"
                }}
              >
                Как лечится катаракта
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: "0 0 24px"
                }}
              >
                При катаракте естественный хрусталик становится мутным. Во время
                операции его заменяют прозрачной интраокулярной линзой, чтобы
                свет снова проходил свободно и зрение стало более чётким.
              </p>

              <a
                href="/ru/katarakta"
                style={{
                  textDecoration: "none",
                  color: "#2563eb",
                  fontWeight: 700
                }}
              >
                Подробнее о катаракте →
              </a>
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
              {[
                "Помутневший хрусталик аккуратно удаляется.",
                "На его место устанавливается искусственная линза.",
                "Свет снова проходит свободно, и зрение становится более чётким."
              ].map((step, index) => (
                <div
                  key={step}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    padding: 16,
                    borderRadius: 18,
                    background: "#f8fafc",
                    marginBottom: index === 2 ? 0 : 12
                  }}
                >
                  <div
                    style={{
                      minWidth: 36,
                      height: 36,
                      borderRadius: 999,
                      background: "#2563eb",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700
                    }}
                  >
                    {index + 1}
                  </div>

                  <div style={{ color: "#334155", lineHeight: 1.7 }}>
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          style={{
            padding: "0 20px 72px"
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
                color: "#ffffff",
                borderRadius: 30,
                padding: "34px 28px",
                boxShadow: "0 18px 42px rgba(15,23,42,0.18)"
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#bfdbfe",
                  marginBottom: 14
                }}
              >
                Следующий шаг
              </div>

              <h2
                style={{
                  fontSize: 34,
                  lineHeight: 1.2,
                  margin: "0 0 14px"
                }}
              >
                Пройдите короткий опрос перед консультацией
              </h2>

              <p
                style={{
                  margin: "0 0 22px",
                  color: "#dbeafe",
                  lineHeight: 1.8,
                  fontSize: 18,
                  maxWidth: 760
                }}
              >
                Он поможет лучше понять ваши зрительные привычки и покажет,
                какие технологии полезно знать перед обсуждением с врачом.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="/ru/start"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 999,
                    background: "#ffffff",
                    color: "#0f172a",
                    fontWeight: 700
                  }}
                >
                  Пройти короткий опрос
                </a>

                <a
                  href="/ru/intraokulyarnye-linzy"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.35)",
                    color: "#ffffff",
                    fontWeight: 700
                  }}
                >
                  Подробнее о линзах
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
