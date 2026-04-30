import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { DropIcon, EyeIcon, SparklesIcon, TargetIcon } from "../../../components/icons";

const symptoms = [
  {
    text: "кўзда қуруқлик ёки ачишиш ҳисси",
    icon: <DropIcon size={22} />
  },
  {
    text: "кўзда қум бордек ноқулайлик",
    icon: <EyeIcon size={22} />
  },
  {
    text: "компьютер ёки телефондан кейин чарчаш",
    icon: <TargetIcon size={22} />
  },
  {
    text: "баъзан кўз ёшланиши ёки қизариши",
    icon: <SparklesIcon size={22} />
  }
];

const carePoints = [
  "экран қаршисида танаффус қилиш",
  "хона ҳавоси жуда қуруқ бўлса, бунга эътибор бериш",
  "кўзни ишқаламаслик",
  "шифокор тавсия қилган кўз томчиларидан тўғри фойдаланиш"
];

export default function DryEyePage() {
  return (
    <>
      <Header />

      <main style={{ overflowX: "hidden" }}>
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
              maxWidth: 760,
              margin: "0 auto"
            }}
          >
            <div style={{ maxWidth: 620 }}>
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
                Қуруқ кўз
              </div>

              <h1
                style={{
                  fontSize: "clamp(38px, 8vw, 52px)",
                  lineHeight: 1.08,
                  margin: "0 0 18px",
                  color: "#0f172a",
                  maxWidth: 700,
                  letterSpacing: "-0.03em"
                }}
              >
                Қуруқ кўз: ноқулайлик, ачишиш ва чарчаш ҳақида
              </h1>

              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.75,
                  color: "#475569",
                  maxWidth: 620,
                  margin: "0 0 28px"
                }}
              >
                Қуруқ кўзда кўзда ачишиш, қум бордек ҳис, чарчаш ёки қизариш
                пайдо бўлиши мумкин. Сабабни аниқлаш ва тўғри ёрдам танлаш учун
                шифокор маслаҳати муҳим.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href="/uz/katarakta"
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
                  Катаракта ҳақида ўқиш →
                </a>

                <a
                  href="/uz"
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
                  Бош саҳифага қайтиш
                </a>
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
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
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
                Нима сезилиши мумкин
              </div>

              <h2
                style={{
                  fontSize: "clamp(30px, 6vw, 36px)",
                  lineHeight: 1.2,
                  margin: "0 0 18px",
                  color: "#0f172a",
                  letterSpacing: "-0.02em"
                }}
              >
                Қуруқ кўз ҳар доим ҳам фақат “қуруқлик” билан сезилмайди
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: "0 0 18px"
                }}
              >
                Баъзи одамларда кўз ачишади, баъзиларда эса кўзда қум бордек
                ҳис пайдо бўлади. Айрим ҳолларда кўз ёшланиши ҳам қуруқ кўз
                билан боғлиқ бўлиши мумкин.
              </p>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: 0
                }}
              >
                Белгилар узоқ давом этса ёки кучайса, сабабини аниқлаш учун
                офтальмологга мурожаат қилиш керак.
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
                Кўп учрайдиган белгилар
              </h3>

              <div style={{ display: "grid", gap: 12 }}>
                {symptoms.map((item) => (
                  <div
                    key={item.text}
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
                      {item.icon}
                    </div>

                    <div
                      style={{
                        color: "#334155",
                        lineHeight: 1.75,
                        fontSize: 16
                      }}
                    >
                      {item.text}
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
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
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
                Нимага эътибор бериш керак
              </div>

              <h2
                style={{
                  fontSize: "clamp(30px, 6vw, 36px)",
                  lineHeight: 1.2,
                  margin: "0 0 18px",
                  color: "#0f172a",
                  letterSpacing: "-0.02em"
                }}
              >
                Кундалик одатлар ҳам кўз ҳолатига таъсир қилиши мумкин
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: 0
                }}
              >
                Экранга узоқ қараш, қуруқ ҳаво, кондиционер, шамол ёки айрим
                дорилар кўзда ноқулайликни кучайтириши мумкин. Шунинг учун
                белгиларни кузатиш ва шифокор билан муҳокама қилиш муҳим.
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
                Фойдали оддий қадамлар
              </h3>

              <div style={{ display: "grid", gap: 12 }}>
                {carePoints.map((item, index) => (
                  <div
                    key={item}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "38px minmax(0, 1fr)",
                      gap: 14,
                      alignItems: "center",
                      padding: "14px 0",
                      borderBottom:
                        index === carePoints.length - 1
                          ? "none"
                          : "1px solid #e2e8f0"
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
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
                        fontSize: 16,
                        minWidth: 0
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
                  position: "relative",
                  zIndex: 1
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 14px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.22)",
                    color: "#dbeafe",
                    fontSize: 14,
                    fontWeight: 700,
                    marginBottom: 16
                  }}
                >
                  Тез орада
                </div>

                <h2
                  style={{
                    fontSize: "clamp(32px, 7vw, 40px)",
                    lineHeight: 1.15,
                    margin: "0 0 16px",
                    letterSpacing: "-0.03em"
                  }}
                >
                  Бу бўлим кейинроқ кенгайтирилади
                </h2>

                <p
                  style={{
                    margin: "0 0 24px",
                    color: "#dbeafe",
                    lineHeight: 1.8,
                    fontSize: 18,
                    maxWidth: 720
                  }}
                >
                  Қуруқ кўз бўйича қўшимча маълумот ва кўзни намлашга ёрдам
                  берувчи воситалар ҳақида алоҳида блок кейинроқ қўшилади.
                </p>

                <a
                  href="/uz"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 14,
                    background: "#ffffff",
                    color: "#0f172a",
                    fontWeight: 700,
                    display: "inline-block"
                  }}
                >
                  Бош саҳифага қайтиш →
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
