import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  IntermediateIcon,
  LensIcon,
  MultifocalIcon,
  ToricIcon
} from "../../../components/icons";

const lenses = [
  {
    title: "Монофокал ИОЛ",
    text:
      "Одатда битта асосий масофада — кўпинча узоқни яхши кўришга йўналтирилади. Операциядан кейин ўқиш ёки яқин масофадаги майда ишлар учун кўзойнак керак бўлиши мумкин.",
    highlight: "содда ечим",
    icon: <LensIcon />
  },
  {
    title: "Чуқурлаштирилган фокусли линза (EDOF)",
    text:
      "Узоқ ва ўрта масофада қулайроқ кўришга ёрдам бериши мумкин. Масалан: экран, меню, автомобил панели, кундалик ишлар. Майда матн учун баъзи ҳолларда кўзойнак керак бўлиши мумкин.",
    highlight: "узоқ + ўрта масофа",
    icon: <IntermediateIcon />
  },
  {
    title: "Трифокал ИОЛ",
    text:
      "Кун давомида турли масофаларда — узоқ, ўрта ва яқин масофада кўришга ёрдам бериши мумкин. Айрим пациентларда кўзойнакка боғлиқликни камайтириш имкониятини беради.",
    highlight: "кўзойнакдан кўпроқ эркинлик",
    icon: <MultifocalIcon />
  },
  {
    title: "Торик ИОЛ",
    text:
      "Агар пациентда астигматизм бўлса, шифокор торик ИОЛ вариантини муҳокама қилиши мумкин. Бу линза кўриш масофаси билан бирга астигматизмни ҳам ҳисобга олишга ёрдам беради.",
    highlight: "астигматизмда",
    icon: <ToricIcon />
  }
];

const scenarios = [
  {
    title: "Асосий мақсад — узоқни яхши кўриш",
    text:
      "Агар сиз учун машина ҳайдаш, сайр қилиш, телевизор кўриш ва уйдан ташқаридаги кундалик фаоллик муҳим бўлса, шифокор узоқни кўришга йўналтирилган ечимларни тушунтириши мумкин."
  },
  {
    title: "Узоқ ва ўрта масофада қулайлик муҳим",
    text:
      "Агар сизга экран, меню, автомобил панели, магазиндаги ёзувлар ёки кундалик ўрта масофадаги ишлар муҳим бўлса, бу ҳақда шифокор билан алоҳида гаплашиш фойдали."
  },
  {
    title: "Кўзойнакка камроқ боғлиқ бўлиш хоҳиши бор",
    text:
      "Агар кун давомида турли масофаларда кўриш ва кўзойнакдан камроқ фойдаланиш сиз учун муҳим бўлса, шифокор кенгроқ имкониятли линзалар ҳақида маълумот бериши мумкин."
  }
];

const questions = [
  "Операциядан кейин қандай кўришни кутяпсиз",
  "Сиз учун нима муҳимроқ: узоқни, ўрта масофани, яқинни ёки турли масофаларни кўриш",
  "Кўзойнакка камроқ боғлиқ бўлиш сиз учун қанчалик муҳим",
  "Қайси кундалик ҳолатлар сиз учун муҳим: кўча, компьютер, ўқиш, телефон"
];

export default function LensesPage() {
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
                Интраокуляр линзалар
              </div>

              <h1
                style={{
                  fontSize: "clamp(38px, 8vw, 50px)",
                  lineHeight: 1.08,
                  margin: "0 0 18px",
                  color: "#0f172a",
                  maxWidth: 760,
                  letterSpacing: "-0.03em"
                }}
              >
                Интраокуляр линзалар: операциядан кейинги кўриш нималарга
                боғлиқ?
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
                Катаракта операцияси вақтида хиралашган кўз гавҳари сунъий
                линза, яъни интраокуляр линза билан алмаштирилади. Операциядан
                кейинги кўриш кўп жиҳатдан линзанинг турига боғлиқ бўлади.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href="/uz/start"
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
                  Қисқа сўровномадан ўтиш →
                </a>

                <a
                  href="/uz/katarakta"
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
                  Катаракта ҳақида батафсил
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
                Нега бу муҳим
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
                Линза фақат операцияга эмас, кейинги кундалик кўришга ҳам таъсир
                қилади
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: "0 0 18px"
                }}
              >
                Бир пациент учун энг муҳими — узоқни аниқ кўриш. Бошқаси учун
                телефон, компьютер, ўқиш ёки кўзойнакдан камроқ фойдаланиш
                муҳим бўлиши мумкин.
              </p>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: 0
                }}
              >
                Шунинг учун линза танлаш — фақат тиббий масала эмас. Бу, аввало,
                операциядан кейин қандай кўришни хоҳлашингиз ҳақидаги суҳбатдир.
              </p>
            </div>

            <div
              style={{
                background: "#0f172a",
                color: "#ffffff",
                padding: 28,
                borderRadius: 26,
                boxShadow: "0 16px 38px rgba(15,23,42,0.14)"
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
                Муҳим
              </div>

              <p
                style={{
                  margin: "0 0 14px",
                  color: "#dbeafe",
                  fontSize: 18,
                  lineHeight: 1.8
                }}
              >
                Катаракта операцияси — фақат даволаш эмас, балки операциядан
                кейинги кўриш сифати ҳақида олдиндан ўйлаб кўриш имконияти ҳамдир.
              </p>

              <p
                style={{
                  margin: 0,
                  color: "#dbeafe",
                  fontSize: 18,
                  lineHeight: 1.8
                }}
              >
                Кутилмаларингиз қанчалик аниқ бўлса, шифокор билан суҳбат
                шунчалик тушунарли ва фойдали бўлади.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "72px 20px",
            background: "#f4f8fc"
          }}
        >
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div style={{ maxWidth: 760, marginBottom: 28 }}>
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
                Асосий вариантлар
              </div>

              <h2
                style={{
                  fontSize: "clamp(30px, 6vw, 36px)",
                  lineHeight: 1.2,
                  margin: "0 0 14px",
                  color: "#0f172a",
                  letterSpacing: "-0.02em"
                }}
              >
                Операциядан олдин қайси линзалар муҳокама қилинади
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#475569",
                  lineHeight: 1.8,
                  fontSize: 18
                }}
              >
                Ҳар хил линзаларнинг кўриш бўйича асосий мақсади турлича. Қуйида
                уларни содда тилда тушунтирамиз.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
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
                      width: 56,
                      height: 56,
                      borderRadius: 999,
                      background: "#eff6ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16
                    }}
                  >
                    {lens.icon}
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      color: "#2563eb",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      marginBottom: 10
                    }}
                  >
                    {lens.highlight}
                  </div>

                  <h3
                    style={{
                      margin: "0 0 12px",
                      fontSize: 24,
                      lineHeight: 1.3,
                      color: "#0f172a",
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {lens.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "#475569",
                      lineHeight: 1.8,
                      fontSize: 16
                    }}
                  >
                    {lens.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "72px 20px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div style={{ maxWidth: 760, marginBottom: 28 }}>
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
                Қандай танланади
              </div>

              <h2
                style={{
                  fontSize: "clamp(30px, 6vw, 36px)",
                  lineHeight: 1.2,
                  margin: "0 0 14px",
                  color: "#0f172a",
                  letterSpacing: "-0.02em"
                }}
              >
                Линза танлови кўришдан нимани кутишингиздан бошланади
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#475569",
                  lineHeight: 1.8,
                  fontSize: 18
                }}
              >
                Қуйида шифокор билан суҳбатни бошлашга ёрдам берадиган оддий
                ҳаётий ҳолатлар келтирилган.
              </p>
            </div>

            <div style={{ display: "grid", gap: 18 }}>
              {scenarios.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#ffffff",
                    padding: 22,
                    borderRadius: 22,
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 30px rgba(15,23,42,0.06)"
                  }}
                >
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: 10,
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {item.title}
                  </div>

                  <p
                    style={{
                      margin: 0,
                      color: "#475569",
                      lineHeight: 1.8,
                      fontSize: 16
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
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
                Кейинги қадам
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                  gap: 28,
                  alignItems: "start",
                  position: "relative",
                  zIndex: 1
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "clamp(32px, 7vw, 40px)",
                      lineHeight: 1.15,
                      margin: "0 0 16px",
                      letterSpacing: "-0.03em"
                    }}
                  >
                    Маслаҳатдан олдин қисқа сўровномадан ўтинг
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
                    У кутилмаларингизни аниқроқ ифодалашга ва линза танлови
                    бўйича шифокор билан нималарни муҳокама қилишни тушунишга
                    ёрдам беради.
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gap: 14
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
                  href="/uz/start"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 14,
                    background: "#ffffff",
                    color: "#0f172a",
                    fontWeight: 700
                  }}
                >
                  Қисқа сўровномадан ўтиш →
                </a>

                <a
                  href="/uz/katarakta"
                  style={{
                    textDecoration: "none",
                    padding: "14px 22px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.35)",
                    color: "#ffffff",
                    fontWeight: 700
                  }}
                >
                  Катаракта ҳақида маълумотга қайтиш →
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
