export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e2e8f0"
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "14px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20
        }}
      >
        <a
          href="/ru"
          style={{
            textDecoration: "none",
            color: "#0f172a",
            fontSize: 24,
            fontWeight: 700
          }}
        >
          MoiGlaza<span style={{ color: "#2563eb" }}>.uz</span>
        </a>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap"
          }}
        >
          <a
            href="/ru"
            style={{
              textDecoration: "none",
              color: "#334155",
              padding: "10px 14px",
              borderRadius: 999,
              fontWeight: 600
            }}
          >
            Главная
          </a>

          <a
            href="/ru/katarakta"
            style={{
              textDecoration: "none",
              color: "#334155",
              padding: "10px 14px",
              borderRadius: 999,
              fontWeight: 600
            }}
          >
            Катаракта
          </a>

          <a
            href="/ru/intraokulyarnye-linzy"
            style={{
              textDecoration: "none",
              color: "#334155",
              padding: "10px 14px",
              borderRadius: 999,
              fontWeight: 600
            }}
          >
            Интраокулярные линзы
          </a>

          <a
            href="/ru/suhoj-glaz"
            style={{
              textDecoration: "none",
              color: "#334155",
              padding: "10px 14px",
              borderRadius: 999,
              fontWeight: 600
            }}
          >
            Сухой глаз
          </a>

          <a
            href="/uz"
            style={{
              textDecoration: "none",
              color: "#0f172a",
              padding: "10px 16px",
              borderRadius: 999,
              fontWeight: 700,
              border: "1px solid #cbd5e1",
              background: "#fff"
            }}
          >
            O‘zbekcha
          </a>
        </nav>
      </div>
    </header>
  );
}
