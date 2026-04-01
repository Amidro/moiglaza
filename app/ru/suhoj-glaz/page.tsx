import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function DryEyePage() {
  const symptoms = [
    "жжение",
    "ощущение песка в глазах",
    "усталость глаз к вечеру",
    "временное затуманивание зрения",
    "дискомфорт при работе за экраном"
  ];

  const triggers = [
    "долгая работа за компьютером или телефоном",
    "сухой воздух в помещении",
    "кондиционер или отопление",
    "возрастные изменения",
    "недостаточно стабильная слёзная плёнка"
  ];

  const help = [
    "делать перерывы при работе за экраном",
    "чаще моргать во время чтения и работы",
    "избегать слишком сухого воздуха",
    "обсудить с врачом увлажняющие капли",
    "обратиться к специалисту, если симптомы повторяются часто"
  ];

  return (
    <>
      <Header />

      <main>
        <section
          style={{
            background:
              "linear-gradient(135deg, #eff6ff 0%, #ffffff 60%, #f8fafc 100%)",
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
              Сухой глаз
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
              Сухой глаз: почему появляется дискомфорт
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
              Сухость глаз — это не только чувство сухости. Она может
              проявляться жжением, ощущением песка, усталостью глаз и
              периодическим затуманиванием зрения.
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
                Симптомы
              </div>

              <h2
                style={{
                  fontSize: 34,
                  margin: "0 0 18px",
                  color: "#0f172a"
                }}
              >
                Какие ощущения бывают чаще всего
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: 0
                }}
              >
                У разных людей сухой глаз проявляется по-разному. Иногда жалобы
                усиливаются к вечеру, после экрана, в машине, в офисе или в
                помещении с кондиционером.
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
              <ul
                style={{
                  paddingLeft: 20,
                  margin: 0,
                  color: "#475569",
                  lineHeight: 1.9
                }}
              >
                {symptoms.map((item) => (
                  <li key={item}>{item}</li>
                ))}
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
                Причины
              </div>

              <h2
                style={{
                  fontSize: 34,
                  margin: "0 0 18px",
                  color: "#0f172a"
                }}
              >
                Почему сухость усиливается
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: 0
                }}
              >
                Часто дело не в одной причине, а в сочетании факторов. На
                состояние глаз влияет окружающая среда, зрительная нагрузка и
                качество слёзной плёнки.
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
              <ul
                style={{
                  paddingLeft: 20,
                  margin: 0,
                  color: "#475569",
                  lineHeight: 1.9
                }}
              >
                {triggers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
                Что может помочь
              </div>

              <h2 style={{ fontSize: 32, margin: "0 0 16px" }}>
                Простые шаги, которые стоит обсудить
              </h2>

              <ul
                style={{
                  paddingLeft: 20,
                  margin: 0,
                  color: "#cbd5e1",
                  lineHeight: 1.9
                }}
              >
                {help.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
