export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid #e2e8f0"
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 18,
          flexWrap: "wrap"
        }}
      >
        <a
          href="/ru"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "#0f172a",
            minWidth: 0
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
              justifyContent: "center",
              boxShadow: "0 8px 18px rgba(37,99,235,0.10)"
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
              lineHeight: 1
            }}
          >
            MoiGlaza<span style={{ color: "#2563eb" }}>.uz</span>
          </div>
        </a>

        <nav
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            alignItems: "center"
          }}
        >
          {[
            { label: "Главная", href: "/ru" },
            { label: "Катаракта", href: "/ru/katarakta" },
            {
              label: "Интраокулярные линзы",
              href: "/ru/intraokulyarnye-linzy"
            },
            { label: "Сухой глаз", href: "/ru/suhoj-glaz" }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#334155",
                padding: "10px 12px",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 15,
                lineHeight: 1.2
              }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/uz"
            style={{
              textDecoration: "none",
              color: "#0f172a",
              border: "1px solid #cbd5e1",
              background: "#ffffff",
              padding: "10px 14px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 14,
              lineHeight: 1.2
            }}
          >
            O‘zbekcha
          </a>
        </nav>
      </div>
    </header>
  );
}
