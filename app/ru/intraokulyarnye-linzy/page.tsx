import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function LensesPage() {
  const lenses = [
    {
      title: "Монофокальные ИОЛ",
      text: "Хорошее зрение на одном расстоянии (обычно вдаль). Для чтения чаще всего нужны очки.",
      highlight: "базовый вариант"
    },
    {
      title: "Торические ИОЛ",
      text: "Используются, если есть астигматизм. Позволяют скорректировать его во время операции.",
      highlight: "для астигматизма"
    },
    {
      title: "Мультифокальные ИОЛ",
      text: "Позволяют видеть вдаль и вблизи. Могут уменьшить зависимость от очков.",
      highlight: "максимальная свобода"
    },
    {
      title: "EDOF",
      text: "Обеспечивают хорошее зрение вдаль и на среднем расстоянии (компьютер, повседневные задачи).",
      highlight: "баланс"
    }
  ];

  return (
    <>
      <Header />

      <main>

        {/* HERO */}
        <section style={{ padding: "72px 20px", background: "#f8fafc" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h1 style={{ fontSize: 44 }}>
              Интраокулярные линзы (ИОЛ): от чего зависит ваше зрение после операции
            </h1>

            <p style={{ fontSize: 20, color: "#475569", maxWidth: 800 }}>
              При операции катаракты мутный хрусталик заменяется искусственной линзой.
              Именно от её типа зависит, как вы будете видеть — только вдаль или на всех расстояниях.
            </p>
          </div>
        </section>

        {/* КЛЮЧЕВАЯ МЫСЛЬ */}
        <section style={{ padding: "40px 20px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                background: "#0f172a",
                color: "#fff",
                padding: 28,
                borderRadius: 20
              }}
            >
              <h2 style={{ marginTop: 0 }}>
                Важно понимать
              </h2>
              <p style={{ margin: 0, fontSize: 18, color: "#cbd5e1" }}>
                Операция катаракты — это не только лечение, но и возможность
                выбрать качество зрения на годы вперёд.
              </p>
            </div>
          </div>
        </section>

        {/* ТИПЫ ЛИНЗ */}
        <section style={{ padding: "56px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontSize: 34 }}>Основные варианты линз</h2>

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
                    borderRadius: 20,
                    padding: 24,
                    background: "#fff"
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      color: "#2563eb",
                      fontWeight: 700,
                      marginBottom: 8
                    }}
                  >
                    {lens.highlight}
                  </div>

                  <h3>{lens.title}</h3>

                  <p style={{ color: "#475569" }}>
                    {lens.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* СЦЕНАРИИ */}
        <section style={{ background: "#f1f5f9", padding: "56px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2>Как пациенты обычно выбирают</h2>

            <div style={{ display: "grid", gap: 20, marginTop: 20 }}>
              <div style={{ background: "#fff", padding: 20, borderRadius: 16 }}>
                <b>Хочу просто хорошо видеть вдаль</b>
                <p>Чаще выбирают монофокальные линзы.</p>
              </div>

              <div style={{ background: "#fff", padding: 20, borderRadius: 16 }}>
                <b>Есть астигматизм</b>
                <p>Важно обсудить торические линзы.</p>
              </div>

              <div style={{ background: "#fff", padding: 20, borderRadius: 16 }}>
                <b>Хочу меньше зависеть от очков</b>
                <p>Рассматривают мультифокальные или EDOF решения.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "56px 20px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ background: "#0f172a", color: "#fff", padding: 30, borderRadius: 20 }}>
              <h2>Что обсудить с врачом</h2>

              <ul style={{ lineHeight: 1.9 }}>
                <li>какое зрение для вас важнее — вдаль или без очков</li>
                <li>есть ли астигматизм</li>
                <li>образ жизни (чтение, компьютер, вождение)</li>
                <li>ожидания от результата</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
