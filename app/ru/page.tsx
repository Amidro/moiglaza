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
    href: "/ru/katarakta"
  },
  {
    title: "Что такое катаракта?",
    preview:
      "Катаракта — это помутнение естественного хрусталика глаза.",
    expanded:
      "Из-за этого свет проходит хуже, и зрение становится менее чётким, как будто через туман. Со временем это состояние прогрессирует, и основным методом лечения становится замена хрусталика на искусственную линзу.",
    linkText: "Подробнее о катаракте →",
    href: "/ru/katarakta"
  },
  {
    title: "Почему хуже видно вблизи?",
    preview:
      "С возрастом глазу становится труднее фокусироваться на близком расстоянии.",
    expanded:
      "Это называется пресбиопией. В отличие от катаракты, при этом зрение обычно остаётся прозрачным, но для чтения и работы вблизи может потребоваться дополнительная коррекция.",
    linkText: "Подробнее о возрастном зрении →",
    href: "/ru/katarakta"
  },
  {
    title: "Как проходит операция при катаракте?",
    preview:
      "Помутневший хрусталик заменяют прозрачной искусственной линзой через небольшой разрез.",
    expanded:
      "Операция обычно занимает около 15–20 минут и, как правило, проходит без боли. Используется местное обезболивание в виде капель, поэтому пациент остаётся в сознании и может видеть яркий свет, не испытывая дискомфорта.",
    linkText: "Подробнее об операции →",
    href: "/ru/katarakta"
  },
  {
    title: "Какое зрение можно ожидать после операции?",
    preview:
      "Результат после операции может отличаться у разных пациентов и во многом зависит от выбранной искусственной линзы.",
    expanded:
      "Кто-то хорошо видит вдаль, но пользуется очками для чтения, а кто-то может обходиться без очков и видеть на разных расстояниях. Поэтому перед операцией важно обсудить с врачом, какое зрение вы хотите получить.",
    linkText: "Ответьте на 5 вопросов →",
    href: "/ru/start"
  }
];

export default function Page() {
  const data = content.ru;

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main>
        {/* HERO */}
        <section
          style={{
            background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 60%, #f8fafc 100%)",
            padding: "72px 20px 56px"
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
                lineHeight: 1.1,
                maxWidth: 760,
                margin: "0 0 18px",
                color: "#0f172a"
              }}
            >
              {data.heroTitle}
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
              {data.heroText}
            </p>
          </div>
        </section>

        {/* WHEN SITE IS USEFUL */}
        <section style={{ padding: "56px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                maxWidth: 760,
                marginBottom: 28
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
                  fontSize: 34,
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
                медицинской подготовки.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
                gap: 20,
                alignItems: "start"
              }}
            >
              {cards.map((item, index) => (
                <details
                  key={item.title}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 24,
                    padding: 24,
                    boxShadow: "0 10px 30px rgba(15,23,42,0.06)"
                  }}
                >
                  <summary
                    style={{
                      listStyle: "none",
                      cursor: "pointer"
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 16,
                        background:
                          index === 4
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
                        fontSize: 22,
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
                        marginTop: 16,
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
        <section style={{ padding: "56px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: 34,
                marginBottom: 28,
                color: "#0f172a"
              }}
            >
              Выберите тему, которая вас интересует
            </h2>

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
        <section
          style={{
            background: "#f8fafc",
            padding: "64px 20px"
          }}
        >
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
                  margin: 0
                }}
              >
                При катаракте естественный хрусталик становится мутным. Во время
                операции его заменяют прозрачной интраокулярной линзой, чтобы
                свет снова проходил свободно и зрение стало более чётким.
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
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
