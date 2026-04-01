import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function KataraktaPage() {
  return (
    <>
      <Header />

      <main>
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
              Катаракта
            </div>

            <h1
              style={{
                fontSize: 52,
                lineHeight: 1.08,
                maxWidth: 820,
                margin: "0 0 18px",
                color: "#0f172a"
              }}
            >
              Катаракта: что это такое и как лечится
            </h1>

            <p
              style={{
                fontSize: 20,
                lineHeight: 1.7,
                color: "#475569",
                maxWidth: 820,
                margin: 0
              }}
            >
              Катаракта — это помутнение естественного хрусталика глаза. Из-за
              этого зрение становится размытым, тусклым и менее контрастным.
            </p>
          </div>
        </section>

        <section style={{ padding: "56px 20px" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 28
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
                  fontSize: 34,
                  margin: "0 0 18px",
                  color: "#0f172a"
                }}
              >
                Почему зрение становится мутным
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: 0
                }}
              >
                При катаракте естественный хрусталик теряет прозрачность. Свет
                проходит хуже, и пациент начинает видеть как будто через туман
                или мутное стекло.
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
                  fontSize: 22,
                  color: "#0f172a"
                }}
              >
                Частые жалобы пациентов
              </h3>

              <ul
                style={{
                  paddingLeft: 20,
                  margin: 0,
                  color: "#475569",
                  lineHeight: 1.9
                }}
              >
                <li>зрение как через туман</li>
                <li>цвета кажутся менее яркими</li>
                <li>яркий свет начинает мешать</li>
                <li>сложнее читать мелкий текст</li>
                <li>хуже видно вечером и ночью</li>
              </ul>
            </div>
          </div>
        </section>

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
                Лечение
              </div>

              <h2
                style={{
                  fontSize: 34,
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
                Если хрусталик уже помутнел, основным методом лечения является
                операция. Во время процедуры мутный хрусталик заменяют
                прозрачной интраокулярной линзой (ИОЛ).
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
                "Удаляется помутневший естественный хрусталик.",
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

        <section style={{ padding: "56px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                background: "#0f172a",
                color: "#ffffff",
                borderRadius: 28,
                padding: "36px 28px"
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
                Что обсудить с врачом
              </div>

              <h2
                style={{
                  fontSize: 32,
                  margin: "0 0 18px"
                }}
              >
                Важные вопросы перед операцией
              </h2>

              <ul
                style={{
                  paddingLeft: 20,
                  margin: 0,
                  color: "#cbd5e1",
                  lineHeight: 1.9
                }}
              >
                <li>какой тип линзы подходит именно вам</li>
                <li>есть ли астигматизм</li>
                <li>на каком расстоянии вам важно хорошо видеть</li>
                <li>нужна ли коррекция для чтения и работы за компьютером</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
