import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CataractIcon,
  DropIcon,
  EyeIcon,
  LensIcon,
  QuestionIcon,
  ReadingIcon,
  SurgeryIcon,
  SparklesIcon,
  TargetIcon
} from "../../components/icons";

const cards = [
  {
    title: "Кўриш хиралашдими?",
    preview: "Нима учун тасвир аввалгидек аниқ кўринмаслиги мумкин.",
    expanded:
      "40 ёшдан кейин кўришнинг хиралашиши катаракта ёки яқин масофада кўришнинг ёшга боғлиқ ўзгаришлари билан боғлиқ бўлиши мумкин. Буни тушуниш шифокор билан суҳбатга тайёрланишга ёрдам беради.",
    linkText: "Сабаблари ҳақида батафсил →",
    href: "/uz/katarakta",
    accent: false,
    icon: <CataractIcon size={26} />
  },
  {
    title: "Катаракта нима?",
    preview: "Сабаблари, белгилари ва кундалик ҳаётга таъсири ҳақида содда тушунча.",
    expanded:
      "Катаракта — бу кўз гавҳарининг хиралашиши. Шу сабабли ёруғлик кўз ичига яхши ўтмайди ва кўриш туман орқали қарагандек хира бўлиб қолиши мумкин.",
    linkText: "Катаракта ҳақида батафсил →",
    href: "/uz/katarakta",
    accent: false,
    icon: <QuestionIcon size={26} />
  },
  {
    title: "Нега яқинни кўриш қийинлашади?",
    preview: "Ёшга боғлиқ ўзгаришлар ўқиш ва кундалик ишларга қандай таъсир қилади.",
    expanded:
      "Ёш ўтгани сари кўз яқин масофага фокусланишда қийналиши мумкин. Бу ҳолат одатда китоб ўқиш, телефондан фойдаланиш ёки майда ёзувларни кўришда сезилади.",
    linkText: "Ёшга боғлиқ кўриш ҳақида →",
    href: "/uz/katarakta",
    accent: false,
    icon: <ReadingIcon size={26} />
  },
  {
    title: "Катаракта операцияси қандай ўтади?",
    preview: "Одатда тез, хавфсиз ва оғриқсиз ўтадиган замонавий амалиёт.",
    expanded:
      "Операция вақтида хиралашган кўз гавҳари олиб ташланади ва унинг ўрнига шаффоф сунъий линза қўйилади. Амалиёт одатда қисқа вақт давом этади ва кўп ҳолатларда оғриқсиз ўтади.",
    linkText: "Операция ҳақида батафсил →",
    href: "/uz/katarakta",
    accent: false,
    icon: <SurgeryIcon size={26} />
  },
  {
    title: "Операциядан кейин қандай кўришни хоҳлайсиз?",
    preview: "Линза танловида кутилмалар ва ҳаёт тарзи муҳим аҳамиятга эга.",
    expanded:
      "Қисқа сўровнома шифокор билан маслаҳатдан олдин қайси мавзуларни муҳокама қилиш кераклигини яхшироқ тушунишга ёрдам беради.",
    linkText: "Қисқа сўровномадан ўтиш →",
    href: "/uz/start",
    accent: true,
    icon: <TargetIcon size={26} />
  }
];

const topics = [
  {
    title: "Катаракта",
    text: "Катаракта нима, у қандай ривожланади ва замонавий даволаш кўришни яхшилашга қандай ёрдам бериши мумкин.",
    href: "/uz/katarakta",
    icon: <EyeIcon size={26} />
  },
  {
    title: "Интраокуляр линзалар",
    text: "ИОЛ турлари, уларнинг фарқлари ва шифокор билан қайси вариантни муҳокама қилиш мумкинлиги ҳақида.",
    href: "/uz/intraokulyar-linzalar",
    icon: <LensIcon size={26} />
  },
  {
    title: "Қуруқ кўз",
    text: "Кўзда қуруқлик, ачишиш ёки ноқулайлик нима сабабдан пайдо бўлиши ва нималарга эътибор бериш кераклиги ҳақида.",
    href: "/uz/quruq-koz",
    icon: <DropIcon size={26} />
  }
];

const cataractSteps = [
  "Хиралашган кўз гавҳари эҳтиёткорлик билан олиб ташланади.",
  "Унинг ўрнига сунъий линза қўйилади.",
  "Ёруғлик яна эркин ўтади ва кўриш аниқроқ бўлиши мумкин."
];

export default function Page() {
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
                Пациентлар учун
              </div>

              <h1
                style={{
                  fontSize: "clamp(38px, 8vw, 54px)",
                  lineHeight: 1.08,
                  margin: "0 0 18px",
                  color: "#0f172a",
                  maxWidth: 620,
                  letterSpacing: "-0.03em"
                }}
              >
                Катаракта, кўриш ва замонавий линзалар ҳақида содда тилда
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
                40 ёшдан кейин кўриш нега ёмонлашиши мумкин, катаракта қандай
                даволанади ва операциядан олдин қайси интраокуляр линзаларни
                шифокор билан муҳокама қилиш кераклигини тушунтирамиз.
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
                  Катаракта ҳақида билиш →
                </a>

                <a
                  href="/uz/start"
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
                  Қисқа сўровномадан ўтиш
                </a>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "72px 20px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div
              style={{
                textAlign: "center",
                maxWidth: 760,
                margin: "0 auto 34px"
              }}
            >
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
                Пациентлар учун
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
                Бу сайт сизга қачон фойдали бўлиши мумкин
              </h2>

              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#64748b"
                }}
              >
                Кўришингиз ҳақида муҳим саволларга жавоб топинг ва замонавий
                офтальмология имкониятлари ҳақида содда маълумот олинг.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 210px), 1fr))",
                gap: 18,
                alignItems: "stretch"
              }}
            >
              {cards.map((item) => (
                <details
                  key={item.title}
                  style={{
                    background: item.accent
                      ? "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)"
                      : "#ffffff",
                    border: item.accent
                      ? "2px solid #93c5fd"
                      : "1px solid #e2e8f0",
                    borderRadius: 24,
                    padding: 20,
                    boxShadow: item.accent
                      ? "0 14px 34px rgba(37,99,235,0.10)"
                      : "0 10px 30px rgba(15,23,42,0.05)",
                    minHeight: 320,
                    height: "100%",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  {item.accent && (
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        width: 24,
                        height: 24,
                        borderRadius: 999,
                        background: "#2563eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        fontSize: 14,
                        fontWeight: 700
                      }}
                    >
                      ✓
                    </div>
                  )}

                  <summary
                    style={{
                      listStyle: "none",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 999,
                        background: item.accent ? "#dbeafe" : "#eff6ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 18,
                        flexShrink: 0
                      }}
                    >
                      {item.icon}
                    </div>

                    <h3
                      style={{
                        fontSize: 21,
                        lineHeight: 1.35,
                        color: "#0f172a",
                        margin: "0 0 12px",
                        letterSpacing: "-0.01em"
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        margin: "0 0 18px",
                        color: "#475569",
                        lineHeight: 1.75,
                        fontSize: 16,
                        minHeight: 112
                      }}
                    >
                      {item.preview}
                    </p>

                    <div
                      style={{
                        marginTop: "auto",
                        color: "#2563eb",
                        fontWeight: 700,
                        fontSize: 15
                      }}
                    >
                      Очиш ↓
                    </div>
                  </summary>

                  <div
                    style={{
                      marginTop: 18,
                      paddingTop: 18,
                      borderTop: "1px solid #e2e8f0"
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 18px",
                        color: "#475569",
                        lineHeight: 1.8,
                        fontSize: 16
                      }}
                    >
                      {item.expanded}
                    </p>

                    <a
                      href={item.href}
                      style={{
                        display: "inline-block",
                        color: "#2563eb",
                        fontWeight: 700,
                        textDecoration: "none",
                        fontSize: 15
                      }}
                    >
                      {item.linkText}
                    </a>

                    <div
                      style={{
                        marginTop: 14,
                        color: "#64748b",
                        fontWeight: 700,
                        fontSize: 14
                      }}
                    >
                      Ёпиш ↑
                    </div>
                  </div>
                </details>
              ))}
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
            <div
              style={{
                textAlign: "center",
                maxWidth: 760,
                margin: "0 auto 30px"
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(30px, 6vw, 36px)",
                  lineHeight: 1.2,
                  margin: "0 0 14px",
                  color: "#0f172a",
                  letterSpacing: "-0.02em"
                }}
              >
                Сизни қизиқтирган мавзуни танланг
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                gap: 20
              }}
            >
              {topics.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    border: "1px solid #e2e8f0",
                    borderRadius: 24,
                    padding: 28,
                    background: "#ffffff",
                    boxShadow: "0 10px 30px rgba(15,23,42,0.05)"
                  }}
                >
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 999,
                      background: "#edf4ff",
                      marginBottom: 18,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {item.icon}
                  </div>

                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: 12,
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {item.title}
                  </div>

                  <p
                    style={{
                      margin: "0 0 20px",
                      color: "#475569",
                      lineHeight: 1.75,
                      fontSize: 17
                    }}
                  >
                    {item.text}
                  </p>

                  <div
                    style={{
                      color: "#2563eb",
                      fontSize: 24,
                      lineHeight: 1
                    }}
                  >
                    →
                  </div>
                </a>
              ))}
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
              gap: 30,
              alignItems: "center"
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(30px, 6vw, 36px)",
                  lineHeight: 1.2,
                  margin: "0 0 16px",
                  color: "#0f172a",
                  letterSpacing: "-0.02em"
                }}
              >
                Катаракта қандай даволанади
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: "0 0 22px"
                }}
              >
                Замонавий катаракта операцияси кўришни яхшилаш ва кундалик ҳаёт
                сифатини оширишга ёрдам бериши мумкин бўлган усуллардан биридир.
              </p>

              <a
                href="/uz/katarakta"
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                  padding: "14px 20px",
                  borderRadius: 14,
                  border: "1px solid #93c5fd",
                  color: "#2563eb",
                  fontWeight: 700,
                  background: "#ffffff"
                }}
              >
                Даволаш ҳақида батафсил →
              </a>
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: 24,
                padding: 24,
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
                maxWidth: "100%",
                overflow: "hidden"
              }}
            >
              {cataractSteps.map((step, index) => (
                <div
                  key={step}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "42px minmax(0, 1fr) 24px",
                    gap: 16,
                    alignItems: "center",
                    padding: "16px 0",
                    borderBottom:
                      index === cataractSteps.length - 1
                        ? "none"
                        : "1px solid #e2e8f0"
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 999,
                      background: "#2563eb",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 20,
                      flexShrink: 0
                    }}
                  >
                    {index + 1}
                  </div>

                  <div
                    style={{
                      color: "#334155",
                      lineHeight: 1.75,
                      fontSize: 18,
                      minWidth: 0
                    }}
                  >
                    {step}
                  </div>

                  <div style={{ justifySelf: "end", display: "flex" }}>
                    {index === 0 ? (
                      <EyeIcon size={22} />
                    ) : index === 1 ? (
                      <LensIcon size={22} />
                    ) : (
                      <SparklesIcon size={22} />
                    )}
                  </div>
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
                  alignItems: "center",
                  position: "relative",
                  zIndex: 1
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "clamp(32px, 7vw, 42px)",
                      lineHeight: 1.15,
                      margin: "0 0 14px",
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
                    Сўровнома кўриш бўйича устувор эҳтиёжларингизни яхшироқ
                    тушунишга ва шифокор билан суҳбатга тайёрланишга ёрдам беради.
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gap: 14,
                    justifyItems: "start"
                  }}
                >
                  <a
                    href="/uz/start"
                    style={{
                      textDecoration: "none",
                      padding: "16px 24px",
                      width: "100%",
                      maxWidth: 320,
                      textAlign: "center",
                      borderRadius: 14,
                      background: "#ffffff",
                      color: "#0f172a",
                      fontWeight: 700
                    }}
                  >
                    Сўровномадан ўтиш →
                  </a>

                  <a
                    href="/uz/intraokulyar-linzalar"
                    style={{
                      textDecoration: "none",
                      padding: "16px 24px",
                      width: "100%",
                      maxWidth: 320,
                      textAlign: "center",
                      borderRadius: 14,
                      border: "1px solid rgba(255,255,255,0.35)",
                      color: "#ffffff",
                      fontWeight: 700
                    }}
                  >
                    Линзалар ҳақида батафсил →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
