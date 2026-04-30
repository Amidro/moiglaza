"use client";

import { usePathname } from "next/navigation";
import { EyeIcon } from "./icons";

const languagePairs: Record<string, string> = {
  "/ru": "/uz",
  "/ru/katarakta": "/uz/katarakta",
  "/ru/intraokulyarnye-linzy": "/uz/intraokulyar-linzalar",
  "/ru/suhoj-glaz": "/uz/quruq-koz",
  "/ru/start": "/uz/start",

  "/uz": "/ru",
  "/uz/katarakta": "/ru/katarakta",
  "/uz/intraokulyar-linzalar": "/ru/intraokulyarnye-linzy",
  "/uz/quruq-koz": "/ru/suhoj-glaz",
  "/uz/start": "/ru/start"
};

export default function Header() {
  const pathname = usePathname();

  const isUz = pathname?.startsWith("/uz");

  const navItems = isUz
    ? [
        { label: "Бош саҳифа", href: "/uz" },
        { label: "Катаракта", href: "/uz/katarakta" },
        { label: "Интраокуляр линзалар", href: "/uz/intraokulyar-linzalar" },
        { label: "Қуруқ кўз", href: "/uz/quruq-koz" }
      ]
    : [
        { label: "Главная", href: "/ru" },
        { label: "Катаракта", href: "/ru/katarakta" },
        { label: "Интраокулярные линзы", href: "/ru/intraokulyarnye-linzy" },
        { label: "Сухой глаз", href: "/ru/suhoj-glaz" }
      ];

  const homeHref = isUz ? "/uz" : "/ru";
  const subtitle = isUz
    ? "Кўриш ва катаракта ҳақида содда тилда"
    : "Понятно о зрении и катаракте";

  const langHref = languagePairs[pathname || ""] || (isUz ? "/ru" : "/uz");
  const langLabel = isUz ? "Русский" : "O‘zbekcha";

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .moiglaza-header {
            position: relative !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }

          .moiglaza-header-inner {
            padding: 12px 16px !important;
            gap: 12px !important;
          }

          .moiglaza-brand-subtitle {
            display: none !important;
          }

          .moiglaza-brand-title {
            font-size: 22px !important;
          }

          .moiglaza-logo-badge {
            width: 38px !important;
            height: 38px !important;
          }

          .moiglaza-nav {
            gap: 6px !important;
            width: 100% !important;
            justify-content: flex-start !important;
          }

          .moiglaza-nav-link {
            padding: 8px 10px !important;
            font-size: 13px !important;
          }

          .moiglaza-lang-link {
            padding: 8px 12px !important;
            font-size: 13px !important;
          }
        }
      `}</style>

      <header
        className="moiglaza-header"
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
          className="moiglaza-header-inner"
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
            href={homeHref}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: "#0f172a"
            }}
          >
            <div
              className="moiglaza-logo-badge"
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
              <EyeIcon size={20} />
            </div>

            <div>
              <div
                className="moiglaza-brand-title"
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
                className="moiglaza-brand-subtitle"
                style={{
                  fontSize: 12,
                  color: "#64748b",
                  marginTop: 4
                }}
              >
                {subtitle}
              </div>
            </div>
          </a>

          <nav
            className="moiglaza-nav"
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
                className="moiglaza-nav-link"
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
              href={langHref}
              className="moiglaza-lang-link"
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
              {langLabel}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
