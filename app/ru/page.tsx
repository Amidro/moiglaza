import Header from "../../components/Header";

export default function RuPage() {
  const lensTypes = [
    {
      title: "Монофокальные",
      text: "Обычно помогают хорошо видеть вдаль. Для чтения могут понадобиться очки."
    },
    {
      title: "Торические",
      text: "Используются, если вместе с катарактой есть астигматизм."
    },
    {
      title: "Мультифокальные",
      text: "Помогают видеть на разных расстояниях: вдаль и вблизи."
    },
    {
      title: "EDOF",
      text: "Дают расширенный диапазон зрения, особенно вдаль и на среднем расстоянии."
    }
  ];

  const dryEyeSymptoms = [
    "жжение",
    "ощущение песка",
    "усталость глаз",
    "временное затуманивание"
  ];

  return (
    <>
      <Header />

      <main
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          color: "#0f172a",
          background: "#ffffff"
        }}
      >
        <section
          style={{
            padding: "72px 40px 56px",
            background:
              "linear-gradient(135deg, #eff6ff 0%, #ffffff 55%, #f8fafc 100%)"
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              style={{
                display: "inline-block",
                padding: "10px 16px",
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
                fontSize: 52,
                lineHeight: 1.08,
                margin: "0 0 18px",
                maxWidth: 760
              }}
            >
              Простым языком о зрении, катаракте и современных решениях
            </h1>

            <p
              style={{
                fontSize: 20,
                lineHeight: 1.7,
                color: "#475569",
                maxWidth: 760,
                margin: "0 0 28px"
              }}
            >
              Узнайте, что происходит с глазами после 40–50 лет, как лечится
              катаракта, что такое интраокулярные линзы и какие варианты можно
              обсудить с врачом.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap"
              }}
            >
              <a
                href="#cataract"
                style={{
                  padding: "14px 22px",
                  background: "#2563eb",
                  color: "#ffffff",
                  borderRadius: 999,
                  textDecoration: "none",
                  fontWeight: 700
                }}
              >
                Узнать о катаракте
              </a>

              <a
                href="#lenses"
                style={{
                  padding: "14px 22px",
                  background: "#ffffff",
                  color: "#0f172a",
                  borderRadius: 999,
                  textDecoration: "none",
                  fontWeight: 700,
                  border: "1px solid #cbd5e1"
                }}
              >
                Интраокулярные линзы
              </a>

              <a
                href="#dry-eye"
                style={{
                  padding: "14px 22px",
                  background: "#ffffff",
                  color: "#0f172a",
                  borderRadius: 999,
                  textDecoration: "none",
                  fontWeight: 700,
                  border: "1px solid #cbd5e1"
                }}
              >
                Сухой глаз
              </a>
            </div>
          </div>
        </section>

        <section style={{ padding: "24px 40px 72px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 34, marginBottom: 28 }}>
              Выберите тему, которая вас интересует
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 20
              }}
            >
              {[
                {
                  title: "Катаракта",
                  text: "Почему зрение становится мутным и как это лечится."
                },
                {
                  title: "Интраокулярные линзы",
                  text: "Какие линзы бывают и чем они отличаются."
                },
                {
                  title: "Сухой глаз",
                  text: "Жжение, песок, усталость глаз — что это может значить."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    border: "1px solid #e2e8f0",
                    borderRadius: 28,
                    padding: 24,
                    background: "#ffffff",
                    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)"
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
                  <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>{item.title}</h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: "#475569"
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="cataract"
          style={{
            padding: "72px 40px",
            background: "#f8fafc"
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
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

              <h2 style={{ fontSize: 38, margin: "0 0 18px" }}>
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
                borderRadius: 28,
                padding: 24,
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)"
              }}
            >
              {[
                "Помутневший хрусталик аккуратно удаляется.",
                "На его место устанавливается искусственная линза.",
                "Свет снова проходит свободно, и зрение становится более четким."
              ].map((step, index) => (
                <div
                  key={step}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    padding: 16,
                    borderRadius: 20,
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

                  <div
                    style={{
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: "#334155"
                    }}
                  >
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
