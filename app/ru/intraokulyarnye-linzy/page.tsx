import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function LensesPage() {
  const lenses = [
    {
      title: "Монофокальные ИОЛ",
      text: "Обеспечивают хорошее зрение на одном расстоянии, чаще всего вдаль. Для чтения могут понадобиться очки."
    },
    {
      title: "Торические ИОЛ",
      text: "Используются, если у пациента есть астигматизм. Позволяют скорректировать его во время операции."
    },
    {
      title: "Мультифокальные ИОЛ",
      text: "Помогают видеть на разных расстояниях: вдаль и вблизи. Часто уменьшают зависимость от очков."
    },
    {
      title: "EDOF (расширенный диапазон)",
      text: "Дают хорошее зрение вдаль и на среднем расстоянии (например, компьютер)."
    }
  ];

  return (
    <>
      <Header />

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
              Интраокулярные линзы
            </div>

            <h1
              style={{
                fontSize: 48,
                lineHeight: 1.1,
                maxWidth: 820,
                margin: "0 0 18px",
                color: "#0f172a"
              }}
            >
              Какие бывают интраокулярные линзы (ИОЛ)
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
              Во время операции катаракты естественный хрусталик заменяется
              искусственной линзой. От её типа зависит, как вы будете видеть
              после операции.
            </p>
          </div>
        </section>

        {/* TYPES */}
        <section style={{ padding: "56px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: 34,
                marginBottom: 28,
                color: "#0f172a"
              }}
            >
              Основные типы линз
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
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
                      width: 48,
                      height: 48,
                      borderRadius: 16,
                      background: "#eff6ff",
                      marginBottom: 16
                    }}
                  />

                  <h3
                    style={{
                      fontSize: 22,
                      margin: "0 0 10px",
                      color: "#0f172a"
                    }}
                  >
                    {lens.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "#475569",
                      lineHeight: 1.7
                    }}
                  >
                    {lens.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
              <h2 style={{ fontSize: 32, margin: "0 0 16px" }}>
                Как выбрать подходящую линзу
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#cbd5e1",
                  marginBottom: 20
                }}
              >
                Выбор линзы зависит от образа жизни, зрения и ваших ожиданий.
                Важно обсудить это с врачом перед операцией.
              </p>

              <ul
                style={{
                  paddingLeft: 20,
                  margin: 0,
                  color: "#cbd5e1",
                  lineHeight: 1.9
                }}
              >
                <li>важно ли вам видеть без очков</li>
                <li>есть ли астигматизм</li>
                <li>работаете ли за компьютером</li>
                <li>важно ли чтение без очков</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
