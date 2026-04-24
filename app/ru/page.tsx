import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function EyeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12C4.5 7.8 8 5.5 12 5.5C16 5.5 19.5 7.8 22 12C19.5 16.2 16 18.5 12 18.5C8 18.5 4.5 16.2 2 12Z"
        stroke="#2563eb"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.2" stroke="#2563eb" strokeWidth="1.8" />
    </svg>
  );
}

function DropIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3C12 3 6 10 6 14.2C6 17.6 8.7 20 12 20C15.3 20 18 17.6 18 14.2C18 10 12 3 12 3Z"
        stroke="#2563eb"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L13.7 8.3L19 10L13.7 11.7L12 17L10.3 11.7L5 10L10.3 8.3L12 3Z"
        stroke="#2563eb"
        strokeWidth="1.6"
      />
      <path
        d="M18.5 16L19.2 18L21.2 18.7L19.2 19.4L18.5 21.4L17.8 19.4L15.8 18.7L17.8 18L18.5 16Z"
        fill="#2563eb"
      />
    </svg>
  );
}

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
        <section
          style={{
            background:
              "linear-gradient(135deg, #edf5ff 0%, #f7fbff 45%, #eef6ff 100%)",
            padding: "84px 20px 72px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              maxWidth: 1160,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 28,
              alignItems: "center"
            }}
          >
            <div style={{ maxWidth: 640 }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "#ffffff",
                  border: "1px solid #bfdbfe",
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
                  margin: "0 0 18px",
                  color: "#0f172a",
                  maxWidth: 760,
                  letterSpacing: "-0.03em"
                }}
              >
                Сухой глаз: почему появляется дискомфорт и что с этим делать
              </h1>

              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.75,
                  color: "#475569",
                  maxWidth: 640,
                  margin: "0 0 28px"
                }}
              >
                Сухость глаз — это не только ощущение сухости. Она может
                проявляться жжением, чувством песка, усталостью глаз и временным
                затуманиванием зрения, особенно при работе за экраном и к концу
                дня.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href="/ru"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 14,
                    background: "#2563eb",
                    color: "#ffffff",
                    fontWeight: 700,
                    boxShadow: "0 12px 28px rgba(37,99,235,0.20)"
                  }}
                >
                  Вернуться на главную →
                </a>

                <a
                  href="/ru/katarakta"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 14,
                    border: "1px solid #93c5fd",
                    background: "#ffffff",
                    color: "#2563eb",
                    fontWeight: 700
                  }}
                >
                  Читать о катаракте
                </a>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                minHeight: 380,
                borderRadius: 34,
                background:
                  "radial-gradient(circle at 68% 46%, rgba(255,255,255,0.98) 0%, rgba(219,234,254,0.92) 34%, rgba(191,219,254,0.42) 58%, rgba(239,246,255,0.16) 100%)",
                border: "1px solid rgba(191,219,254,0.8)",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "8%",
                  left: "10%",
                  width: 400,
                  height: 400,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.75)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "18%",
                  left: "22%",
                  width: 280,
                  height: 280,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.75)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: "20%",
                  top: "20%",
                  width: 190,
                  height: 190,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.86) 26%, rgba(191,219,254,0.72) 50%, rgba(147,197,253,0.32) 72%, rgba(96,165,250,0.05) 100%)",
                  boxShadow:
                    "0 0 0 12px rgba(255,255,255,0.30), 0 0 50px rgba(96,165,250,0.20)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: "12%",
                  top: "14%",
                  color: "rgba(37,99,235,0.12)",
                  fontSize: 52,
                  fontWeight: 700,
                  lineHeight: 1.02,
                  letterSpacing: "0.22em",
                  textAlign: "center"
                }}
              >
                Ш
                <br />
                Б
                <br />
                М
                <br />
                Н
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "72px 20px" }}>
          <div
            style={{
              maxWidth: 1160,
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
                  color: "#0f172a",
                  letterSpacing: "-0.02em"
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
                  color: "#0f172a",
                  letterSpacing: "-0.01em"
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
                        width: 42,
                        height: 42,
                        borderRadius: 999,
                        background: "#eff6ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <EyeIcon />
                    </div>

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

        <section
          style={{
            background: "#f4f8fc",
            padding: "72px 20px"
          }}
        >
          <div
            style={{
              maxWidth: 1160,
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
                  color: "#0f172a",
                  letterSpacing: "-0.02em"
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
                  color: "#0f172a",
                  letterSpacing: "-0.01em"
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
                        width: 42,
                        height: 42,
                        borderRadius: 999,
                        background: "#eff6ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <DropIcon />
                    </div>

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

        <section style={{ padding: "72px 20px" }}>
          <div
            style={{
              maxWidth: 1160,
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
                  color: "#0f172a",
                  letterSpacing: "-0.02em"
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
                background:
                  "linear-gradient(135deg, #0b2f73 0%, #0f3f9f 40%, #082b68 100%)",
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
                  fontSize: 24,
                  letterSpacing: "-0.01em"
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
                        width: 42,
                        height: 42,
                        borderRadius: 999,
                        background: "rgba(255,255,255,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <SparklesIcon />
                    </div>

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

        <section style={{ padding: "0 20px 72px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div
              style={{
                background:
                  "linear-gradient(135deg, #0b2f73 0%, #0f3f9f 40%, #082b68 100%)",
                color: "#ffffff",
                borderRadius: 28,
                padding: "34px 28px",
                boxShadow: "0 18px 42px rgba(15,23,42,0.18)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: -80,
                  bottom: -80,
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: -20,
                  bottom: -20,
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)"
                }}
              />

              <div
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: "#dbeafe",
                  fontSize: 14,
                  fontWeight: 700,
                  marginBottom: 16,
                  position: "relative",
                  zIndex: 1
                }}
              >
                Когда стоит обсудить это с врачом
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                  gap: 28,
                  alignItems: "start",
                  position: "relative",
                  zIndex: 1
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: 40,
                      lineHeight: 1.15,
                      margin: "0 0 16px",
                      letterSpacing: "-0.03em"
                    }}
                  >
                    Не откладывайте консультацию, если симптомы повторяются
                  </h2>

                  <p
                    style={{
                      margin: 0,
                      color: "#dbeafe",
                      lineHeight: 1.8,
                      fontSize: 18,
                      maxWidth: 620
                    }}
                  >
                    Особенно если сухость, жжение или затуманивание зрения уже
                    мешают в привычной жизни.
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gap: 14
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
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginTop: 24,
                  position: "relative",
                  zIndex: 1
                }}
              >
                <a
                  href="/ru"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 14,
                    background: "#ffffff",
                    color: "#0f172a",
                    fontWeight: 700
                  }}
                >
                  Вернуться на главную →
                </a>

                <a
                  href="/ru/intraokulyarnye-linzy"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.35)",
                    color: "#ffffff",
                    fontWeight: 700
                  }}
                >
                  Подробнее о линзах →
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
