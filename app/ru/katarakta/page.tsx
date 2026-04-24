import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

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
  "какой тип линзы подходит именно вам",
  "что для вас важнее: зрение вдаль, вблизи или на разных расстояниях",
  "насколько важно меньше зависеть от очков",
  "каких зрительных задач вы ждёте от результата операции"
];

export default function KataraktaPage() {
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
              Катаракта
            </div>

            <h1
              style={{
                fontSize: 52,
                lineHeight: 1.08,
                maxWidth: 840,
                margin: "0 0 18px",
                color: "#0f172a"
              }}
            >
              Катаракта: что это такое и как лечится
            </h1>

            <p
              style={{
                fontSize: 20,
                lineHeight: 1.75,
                color: "#475569",
                maxWidth: 820,
                margin: "0 0 28px"
              }}
            >
              Катаракта — это помутнение естественного хрусталика глаза. Из-за
              этого зрение становится размытым, тусклым и менее контрастным.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="/ru/start"
                style={{
                  textDecoration: "none",
                  padding: "14px 22px",
                  borderRadius: 999,
                  background: "#2563eb",
                  color: "#ffffff",
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
                  border: "1px solid #cbd5e1",
                  background: "#ffffff",
                  color: "#0f172a",
                  fontWeight: 700
                }}
              >
                Подробнее о линзах
              </a>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS */}
        <section style={{ padding: "72px 20px" }}>
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
                  fontSize: 36,
                  lineHeight: 1.2,
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
                Со временем такие изменения могут становиться заметнее в
                повседневной жизни: при чтении, вождении, прогулках и в условиях
                слабого освещения.
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
                  color: "#0f172a"
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
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        background: "#2563eb",
                        marginTop: 8,
                        flexShrink: 0
                      }}
                    />
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

        {/* TREATMENT */}
        <section
          style={{
            background: "#f8fafc",
            padding: "72px 20px"
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
                зрение после неё и какие зрительные задачи можно будет решать в
                повседневной жизни.
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
              {steps.map((step, index) => (
                <div
                  key={step}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    padding: 16,
                    borderRadius: 18,
                    background: "#f8fafc",
                    marginBottom: index === steps.length - 1 ? 0 : 12
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
                      color: "#334155",
                      lineHeight: 1.75,
                      fontSize: 16
                    }}
                  >
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT TO DISCUSS */}
        <section style={{ padding: "72px 20px" }}>
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
                Перед консультацией
              </div>

              <h2
                style={{
                  fontSize: 34,
                  lineHeight: 1.2,
                  margin: "0 0 16px"
                }}
              >
                Что полезно обсудить с врачом заранее
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                  gap: 16,
                  marginTop: 22
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

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
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
