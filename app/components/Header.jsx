"use client";

import { useLanguage } from "../../lib/language";

const theme = {
  bg: "rgba(255,255,255,0.72)",
  border: "rgba(15,23,42,0.10)",
  text: "#1F2937",
  muted: "#4B5563",
  gold: "#C9A227",
};

const layout = {
  maxWidth: 1120,
  pad: 20,
  height: 72,
};

export default function Header() {
  const { lang } = useLanguage();

  const TEXT = {
    es: {
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      cta: "Quiero mi diagnóstico",
    },
    en: {
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Get my assessment",
    },
  };

  const t = lang === "es" ? TEXT.es : TEXT.en;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: layout.height,
        zIndex: 100,
        background: theme.bg,
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          height: "100%",
          padding: `0 ${layout.pad}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: theme.text,
          }}
        >
          <img
            src="/logo-sovereign-full.png"
            alt="Sovereign TruckGuard"
            style={{ width: 36, height: "auto" }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Sovereign TruckGuard
          </span>
        </a>

        {/* NAV */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          <a href="/services" style={linkStyle}>
            {t.services}
          </a>
          <a href="/about" style={linkStyle}>
            {t.about}
          </a>
          <a href="/contact" style={linkStyle}>
            {t.contact}
          </a>

          <a
            href="#diagnostico"
            style={{
              marginLeft: 8,
              padding: "10px 18px",
              borderRadius: 999,
              background: theme.gold,
              color: "#000",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 10px 28px rgba(0,0,0,0.18)",
              whiteSpace: "nowrap",
            }}
          >
            {t.cta}
          </a>
        </nav>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

const linkStyle = {
  color: "#1F2937",
  textDecoration: "none",
};
