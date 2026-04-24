export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 80,
        padding: "48px 20px 36px",
        background: "#ffffff",
        borderTop: "1px solid #e2e8f0"
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 28,
            alignItems: "start"
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 12C4.5 7.8 8 5.5 12 5.5C16 5.5 19.5 7.8 22 12C19.5 16.2 16 18.5 12 18.5C8 18.5 4.5 16.2 2 12Z"
                    stroke="#2563eb"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="12" r="3.2" stroke="#2563eb" strokeWidth="1.8" />
                </svg>
              </div>

              <div
                style={{
                  fontWeight: 700,
                  fontSize: 24,
                  color: "#0f172a"
                }}
              >
                MoiGlaza<span style={{ color: "#2563eb" }}>.uz</span>
              </div>
            </div>

            <p
              style={{
                color: "#475569",
                lineHeight: 1.8,
                maxWidth: 420,
                margin: 0,
                fontSize: 16
              }}
            >
              Информационный сайт о зрении, катаракте, интраокулярных линзах и
              синдроме сухого глаза. Материалы подготовлены в образовательных
              целях и не заменяют консультацию врача.
            </p>
          </div>

          <div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#2563eb",
                marginBottom: 14
              }}
            >
              Разделы
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              {[
                { label: "Главная", href: "/ru" },
                { label: "Катаракта", href: "/ru/katarakta" },
                {
                  label: "Интраокулярные линзы",
                  href: "/ru/intraokulyarnye-linzy"
                },
                { label: "Сухой глаз", href: "/ru/suhoj-glaz" },
                { label: "Короткий опрос", href: "/ru/start" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    color: "#475569",
                    fontSize: 16
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 30,
            paddingTop: 20,
            borderTop: "1px solid #e2e8f0",
            color: "#64748b",
            fontSize: 14
          }}
        >
          © 2026 MoiGlaza.uz
        </div>
      </div>
    </footer>
  );
}
