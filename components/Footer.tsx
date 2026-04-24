export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 80,
        padding: "56px 20px 36px",
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        borderTop: "1px solid #e2e8f0"
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 32,
            alignItems: "start"
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 999,
                  background: "linear-gradient(135deg, #e0ecff 0%, #f8fbff 100%)",
                  border: "1px solid #cfe1ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <svg
                  width="20"
                  height="20"
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

              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 24,
                    color: "#0f172a",
                    lineHeight: 1
                  }}
                >
                  MoiGlaza<span style={{ color: "#2563eb" }}>.uz</span>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#64748b",
                    marginTop: 4
                  }}
                >
                  Информационный patient-сайт
                </div>
              </div>
            </div>

            <p
              style={{
                color: "#475569",
                lineHeight: 1.8,
                maxWidth: 460,
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
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#2563eb",
                marginBottom: 14
              }}
            >
              Разделы сайта
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              {[
                { label: "Главная", href: "/ru" },
                { label: "Катаракта", href: "/ru/katarakta" },
                { label: "Интраокулярные линзы", href: "/ru/intraokulyarnye-linzy" },
                { label: "Сухой глаз", href: "/ru/suhoj-glaz" },
                { label: "Короткий опрос", href: "/ru/start" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    color: "#334155",
                    fontSize: 16,
                    fontWeight: 600
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
            marginTop: 32,
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
