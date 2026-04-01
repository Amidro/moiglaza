export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 80,
        padding: "40px 20px",
        background: "#f8fafc",
        borderTop: "1px solid #e2e8f0"
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            fontWeight: 700,
            fontSize: 22,
            marginBottom: 12,
            color: "#0f172a"
          }}
        >
          MoiGlaza<span style={{ color: "#2563eb" }}>.uz</span>
        </div>

        <p
          style={{
            color: "#475569",
            lineHeight: 1.7,
            maxWidth: 700,
            margin: 0
          }}
        >
          Информационный сайт о зрении, катаракте, интраокулярных линзах (ИОЛ) и
          синдроме сухого глаза. Материалы подготовлены в образовательных целях
          и не заменяют консультацию врача.
        </p>

        <div
          style={{
            marginTop: 20,
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
