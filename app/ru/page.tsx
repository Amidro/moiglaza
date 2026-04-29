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
    title: "Зрение стало мутнее?",
    preview: "Почему изображение становится не таким чётким, как раньше.",
    expanded:
      "После 40 лет это может быть связано с катарактой или возрастным ухудшением зрения вблизи. Важно понимать разницу, чтобы спокойнее обсудить её с врачом.",
    linkText: "Подробнее о причинах →",
    href: "/ru/katarakta",
    accent: false,
    icon: <CataractIcon size={26} />
  },
  {
    title: "Что такое катаракта?",
    preview: "Причины, симптомы и как катаракта влияет на качество жизни.",
    expanded:
      "Катаракта — это помутнение естественного хрусталика глаза. Из-за этого свет проходит хуже, и зрение становится менее чётким, как будто через туман.",
    linkText: "Подробнее о катаракте →",
    href: "/ru/katarakta",
    accent: false,
    icon: <QuestionIcon size={26} />
  },
  {
    title: "Почему хуже видно вблизи?",
    preview: "Возрастные изменения и их влияние на чтение и повседневные дела.",
    expanded:
      "С возрастом глазу становится труднее фокусироваться на близком расстоянии. Это состояние называется пресбиопией и часто становится заметным при чтении и работе с телефоном.",
    linkText: "Подробнее о возрастном зрении →",
    href: "/ru/katarakta",
    accent: false,
    icon: <ReadingIcon size={26} />
  },
  {
    title: "Как проходит операция при катаракте?",
    preview: "Безопасно, быстро и обычно без боли.",
    expanded:
      "Помутневший хрусталик заменяют прозрачной искусственной линзой через небольшой разрез. Операция обычно занимает около 15–20 минут и чаще всего проходит без боли.",
    linkText: "Подробнее об операции →",
    href: "/ru/katarakta",
    accent: false,
    icon: <SurgeryIcon size={26} />
  },
  {
    title: "Какое зрение вы хотите после операции?",
    preview: "Подумайте о своих целях и ожиданиях — это важно для выбора линзы.",
    expanded:
      "Короткий опрос поможет понять, какие зрительные решения стоит обсудить с врачом перед операцией. В результате вы увидите, какие технологии полезно знать перед консультацией.",
    linkText: "Пройти короткий опрос →",
    href: "/ru/start",
    accent: true,
    icon: <TargetIcon size={26} />
  }
];

const topics = [
  {
    title: "Катаракта",
    text: "Что это такое, как развивается и как современная хирургия помогает вернуть чёткое зрение.",
    href: "/ru/katarakta",
    icon: <EyeIcon size={26} />
  },
  {
    title: "Интраокулярные линзы",
    text: "Виды линз, их преимущества и как выбирать подходящий вариант вместе с врачом.",
    href: "/ru/intraokulyarnye-linzy",
    icon: <LensIcon size={26} />
  },
  {
    title: "Сухой глаз",
    text: "Причины сухости и дискомфорта и что можно сделать для улучшения состояния.",
    href: "/ru/suhoj-glaz",
    icon: <DropIcon size={26} />
  }
];

const cataractSteps = [
  "Помутневший хрусталик аккуратно удаляется.",
  "На его место устанавливается искусственная линза.",
  "Свет снова проходит свободно, и зрение становится более чётким."
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
                Для пациентов
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
                Простым языком о катаракте, зрении и современных линзах
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
                Понятно объясняем, почему зрение может ухудшаться после 40 лет,
                как лечится катаракта и какие искусственные хрусталики
                (интраокулярные линзы) можно обсудить с врачом.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href="/ru/katarakta"
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
                  Узнать о катаракте →
                </a>

                <a
                  href="/ru/start"
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
                  Пройти короткий опрос
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
                Для пациентов
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
                Когда этот сайт может быть вам полезен
              </h2>

              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#64748b"
                }}
              >
                Ответьте на важные вопросы о своём зрении и узнайте больше о
                возможностях современной офтальмологии.
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
                      Развернуть ↓
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
                      Свернуть ↑
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
                Выберите тему, которая вас интересует
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
                Как лечится катаракта
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: "0 0 22px"
                }}
              >
                Современная хирургия катаракты — это один из самых безопасных и
                эффективных способов вернуть чёткое зрение и качество жизни.
              </p>

              <a
                href="/ru/katarakta"
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
                Подробнее о лечении →
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
                Следующий шаг
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
                    Пройдите короткий опрос перед консультацией
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
                    Опрос поможет лучше понять ваши зрительные приоритеты и
                    подготовить консультацию с учётом ваших целей и образа
                    жизни.
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
                    href="/ru/start"
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
                    Пройти короткий опрос →
                  </a>

                  <a
                    href="/ru/intraokulyarnye-linzy"
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
                    Подробнее о линзах →
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
