"use client";

import { useLanguage } from "../../lib/language.js";

const colors = {
  gold: "#FFD700",
  rose: "#E8B7B7",
  white: "#FFFFFF"
};

const layout = {
  maxWidth: 1120,
  sidePadding: 20
};

export default function Header() {
  const { lang } = useLanguage();

  const TEXT = {
    es: {
      tagline: "Sistema soberano de creación y cumplimiento para camioneros latinos",
      nav: {
        services: "Servicios",
        about: "Nosotros",
        contact: "Contacto",
        cta: "Crear mi compañía"
      }
    },
    en: {
      tagline: "Sovereign company setup & compliance for Latino truckers",
      nav: {
        services: "Services",
        about: "About",
        contact: "Contact",
        cta: "Start my company"
      }
    }
  };

  const t = lang === "es" ? TEXT.es : TEXT.en;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          padding: `10px ${layout.sidePadding}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16
        }}
      >
        {/* LOGO + TAGLINE */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: colors.white
          }}
        >
          <img
            src="/logo-sovereign.png"
            alt="Sovereign TruckGuard"
            style={{ width: 34, height: "auto" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "Montserrat, system-ui",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                opacity: 0.9
              }}
            >
              Sovereign TruckGuard LLC
            </span>
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.6)",
                display: "none"
              }}
              className="header-tagline"
            >
              {t.tagline}
            </span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
            fontSize: 13,
            fontFamily: "Montserrat, system-ui"
          }}
          className="desktop-nav"
        >
          <a href="/services" style={linkStyle}>
            {t.nav.services}
          </a>
          <a href="/about" style={linkStyle}>
            {t.nav.about}
          </a>
          <a href="/contact" style={linkStyle}>
            {t.nav.contact}
          </a>

          <a
            href="/services#packages"
            style={{
              padding: "8px 22px",
              borderRadius: 999,
              background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
              color: "#000",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 14px 35px rgba(0,0,0,0.6)"
            }}
          >
            {t.nav.cta}
          </a>
        </nav>

        {/* MOBILE CTA */}
        <a
          href="/services#packages"
          className="mobile-cta"
          style={{
            padding: "8px 18px",
            borderRadius: 999,
            background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
            color: "#000",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: 13,
            display: "none"
          }}
        >
          {t.nav.cta}
        </a>
      </div>

      {/* SIMPLE RESPONSIVE RULES */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
          .mobile-cta {
            display: inline-flex;
          }
        }
      `}</style>
    </header>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "rgba(255,255,255,0.8)"
};
