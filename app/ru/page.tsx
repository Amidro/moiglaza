import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { content } from "../../lib/content";

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
                gap: 20
              }}
            >
              {[
                {
                  title: "Зрение стало мутнее?",
                  text1:
                    "Если зрение стало более мутным, появились блики от света или стало труднее читать и различать детали, это может быть связано с изменениями в хрусталике глаза.",
                  text2:
                    "Чаще всего после 40 лет такие изменения связаны с катарактой или возрастным ухудшением зрения вблизи (пресбиопией). Важно понимать разницу, так как подход к решению в этих случаях отличается.",
                  href: "/ru/katarakta"
                },
                {
                  title: "Что такое катаракта?",
                  text1:
                    "Катаракта — это помутнение естественного хрусталика глаза. Из-за этого свет проходит хуже, и зрение становится менее чётким, как будто через туман.",
                  text2:
                    "Со временем это состояние прогрессирует, и основным методом лечения становится замена хрусталика на прозрачную искусственную линзу.",
                  href: "/ru/katarakta"
                },
                {
                  title: "Почему хуже видно вблизи?",
                  text1:
                    "С возрастом хрусталик постепенно теряет гибкость, и глазу становится труднее фокусироваться на близком расстоянии. Это состояние называется пресбиопией.",
                  text2:
                    "В отличие от катаракты, при этом зрение обычно остаётся прозрачным, но для чтения и работы вблизи может потребоваться дополнительная коррекция.",
                  href: "/ru/katarakta"
                },
                {
                  title: "Как проходит операция при катаракте?",
                  text1:
                    "Во время операции помутневший хрусталик аккуратно удаляют через небольшой разрез и заменяют его прозрачной искусственной линзой. Процедура обычно занимает около 15–20 минут и направлена на восстановление чёткого зрения.",
                  text2:
                    "Операция, как правило, проходит без боли. Используется местное обезболивание в виде капель, поэтому пациент остаётся в сознании и может видеть яркий свет, не испытывая дискомфорта.",
                  href: "/ru/katarakta"
                },
                {
                  title: "Какое зрение можно ожидать после операции?",
                  text1:
                    "После операции зрение у разных пациентов может отличаться. Кто-то хорошо видит вдаль, но пользуется очками для чтения, а кто-то может обходиться без очков и видеть на разных расстояниях.",
                  text2:
                    "Во многом зрительный результат зависит от выбранной искусственной линзы (ИОЛ). Поэтому выбор линзы — одна из важных тем для обсуждения перед операцией: вместе с врачом важно определить, какое зрение вы хотите получить, подходит ли выбранный вариант вашему образу жизни и есть ли необходимость в коррекции астигматизма.",
                  href: "/ru/start"
                }
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 24,
                    padding: 24,
                    boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
                    display: "block"
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
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
                      margin: "0 0 14px",
                      color: "#475569",
                      lineHeight: 1.8,
                      fontSize: 16
                    }}
                  >
                    {item.text1}
                  </p>

                  <p
                    style={{
                      margin: 0,
                      color: "#475569",
                      lineHeight: 1.8,
                      fontSize: 16
                    }}
                  >
                    {item.text2}
                  </p>
                </a>
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
