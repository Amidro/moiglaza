import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

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
  "нестабильная слёзная плёнка"
];

const help = [
  "делать перерывы при работе за экраном",
  "чаще моргать во время чтения и работы",
  "избегать слишком сухого воздуха",
  "обсудить с врачом увлажняющие капли",
  "обратиться к специалисту, если симптомы повторяются часто"
];

const nextSteps = [
  "если сухость и жжение возникают регулярно",
  "если зрение временами становится мутным",
  "если дискомфорт усиливается при работе за экраном",
  "если симптомы мешают в повседневной жизни"
];

export default function DryEyePage() {
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
              Сухой глаз
            </div>

            <h1
              style={{
                fontSize: 50,
                lineHeight: 1.08,
                maxWidth: 860,
                margin: "0 0 18px",
                color: "#0f172a"
              }}
            >
              Сухой глаз: почему появляется дискомфорт и что с этим делать
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
              Сухость глаз — это не только ощущение сухости. Она может
              проявляться жжением, чувством песка, усталостью глаз и временным
              затуманиванием зрения, особенно при работе за экраном и к концу
              дня.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="/ru"
                style={{
                  textDecoration: "none",
                  padding: "14px 22px",
                  borderRadius: 999,
                  background: "#2563eb",
                  color: "#ffffff",
                  fontWeight: 700
                }}
              >
                Вернуться на главную
              </a>

              <a
                href="/ru/katarakta"
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
                Читать о катаракте
              </a>
            </div>
          </div>
        </section>

        {/* SYMPTOMS */}
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
                Симптомы
              </div>

              <h2
                style={{
                  fontSize: 36,
                  lineHeight: 1.2,
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
                  margin: "0 0 18px"
                }}
              >
                У разных людей сухой глаз проявляется по-разному. Иногда жалобы
                усиливаются к вечеру, после длительной работы, в машине, в офисе
                или в помещении с кондиционером.
              </p>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: 0
                }}
              >
                Важно то, что такие ощущения могут быть регулярными и заметно
                влиять на комфорт в течение дня.
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
                Частые жалобы
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

        {/* CAUSES */}
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
                Почему это происходит
              </div>

              <h2
                style={{
                  fontSize: 36,
                  lineHeight: 1.2,
                  margin: "0 0 18px",
                  color: "#0f172a"
                }}
              >
                Что может усиливать сухость глаз
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: "0 0 18px"
                }}
              >
                Часто дело не в одной причине, а в сочетании факторов. На
                состояние глаз влияет окружающая среда, зрительная нагрузка и
                качество слёзной плёнки.
              </p>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: 0
                }}
              >
                Поэтому одни и те же симптомы могут усиливаться и дома, и в
                офисе, и в дороге, особенно если человек долго смотрит в экран и
                редко моргает.
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
                Частые причины и триггеры
              </h3>

              <div style={{ display: "grid", gap: 12 }}>
                {triggers.map((item) => (
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

        {/* HELP */}
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
                Что может помочь
              </div>

              <h2
                style={{
                  fontSize: 36,
                  lineHeight: 1.2,
                  margin: "0 0 18px",
                  color: "#0f172a"
                }}
              >
                С чего обычно начинают
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: "0 0 18px"
                }}
              >
                При сухом глазе важно не только временно снять неприятные
                ощущения, но и понять, что именно провоцирует дискомфорт в вашем
                случае.
              </p>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: 0
                }}
              >
                Простые шаги могут заметно улучшить комфорт, особенно если
                симптомы связаны с экраном, воздухом в помещении или усталостью
                глаз к вечеру.
              </p>
            </div>

            <div
              style={{
                background: "#0f172a",
                color: "#ffffff",
                borderRadius: 28,
                padding: "32px 26px",
                boxShadow: "0 18px 42px rgba(15,23,42,0.18)"
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: 16,
                  fontSize: 24
                }}
              >
                Что можно обсудить и попробовать
              </h3>

              <div style={{ display: "grid", gap: 12 }}>
                {help.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      padding: 14,
                      borderRadius: 18,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.10)"
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        background: "#93c5fd",
                        marginTop: 8,
                        flexShrink: 0
                      }}
                    />
                    <div
                      style={{
                        color: "#dbeafe",
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

        {/* NEXT STEP */}
        <section style={{ padding: "0 20px 72px" }}>
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
                Когда стоит обсудить это с врачом
              </div>

              <h2
                style={{
                  fontSize: 34,
                  lineHeight: 1.2,
                  margin: "0 0 16px"
                }}
              >
                Не откладывайте консультацию, если симптомы повторяются
              </h2>

              <p
                style={{
                  margin: "0 0 20px",
                  color: "#dbeafe",
                  lineHeight: 1.8,
                  fontSize: 18,
                  maxWidth: 820
                }}
              >
                Особенно если сухость, жжение или затуманивание зрения уже
                мешают в привычной жизни.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                  gap: 16,
                  marginBottom: 24
                }}
              >
                {nextSteps.map((item) => (
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

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="/ru"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 999,
                    background: "#ffffff",
                    color: "#0f172a",
                    fontWeight: 700
                  }}
                >
                  Вернуться на главную
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
