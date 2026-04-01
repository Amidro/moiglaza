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
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20
        }}
      >
        <a
          href="/ru"
          style={{
            fontWeight: 700,
            fontSize: 24,
            color: "#0f172a",
            textDecoration: "none"
          }}
        >
          MoiGlaza<span style={{ color: "#2563eb" }}>.uz</span>
        </a>

        <nav
          style={{
            display: "flex",
            gap: 18,
            flexWrap: "wrap",
            alignItems: "center"
          }}
        >
          <a href="/ru" style={{ textDecoration: "none", color: "#334155" }}>
            Главная
          </a>
          <a href="/ru/katarakta" style={{ textDecoration: "none", color: "#334155" }}>
            Катаракта
          </a>
          <a
            href="/ru/intraokulyarnye-linzy"
            style={{ textDecoration: "none", color: "#334155" }}
          >
            Интраокулярные линзы
          </a>
          <a href="/ru/suhoj-glaz" style={{ textDecoration: "none", color: "#334155" }}>
            Сухой глаз
          </a>
          <a
            href="/uz"
            style={{
              textDecoration: "none",
              color: "#0f172a",
              border: "1px solid #cbd5e1",
              padding: "8px 14px",
              borderRadius: 999
            }}
          >
            O‘zbekcha
          </a>
        </nav>
      </div>
    </header>
  );
}
