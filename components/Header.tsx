export default function Header() {
  const navItems = [
    { label: "Главная", href: "/ru" },
    { label: "Катаракта", href: "/ru/katarakta" },
    { label: "Интраокулярные линзы", href: "/ru/intraokulyarnye-linzy" },
    { label: "Сухой глаз", href: "/ru/suhoj-glaz" }
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(226,232,240,0.95)",
        boxShadow: "0 8px 20px rgba(15,23,42,0.04)"
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
          flexWrap: "wrap"
        }}
      >
        <a
          href="/ru"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "#0f172a"
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
              justifyContent: "center",
              boxShadow: "0 10px 24px rgba(37,99,235,0.12)"
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
                lineHeight: 1,
                letterSpacing: "-0.02em"
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
              Понятно о зрении и катаракте
            </div>
          </div>
        </a>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap"
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#334155",
                padding: "10px 14px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 14,
                lineHeight: 1.2,
                background: "#ffffff"
              }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/uz"
            style={{
              textDecoration: "none",
              color: "#2563eb",
              border: "1px solid #bfdbfe",
              background: "#eff6ff",
              padding: "10px 14px",
              borderRadius: 999,
              fontWeight: 800,
              fontSize: 14,
              lineHeight: 1.2,
              boxShadow: "0 8px 18px rgba(37,99,235,0.08)"
            }}
          >
            O‘zbekcha
          </a>
        </nav>
      </div>
    </header>
  );
}
