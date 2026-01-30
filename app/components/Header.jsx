"use client";

import { useLanguage } from "../../lib/language.js";

const colors = {
  bg: "rgba(255,255,255,0.92)",
  border: "rgba(0,0,0,0.08)",
  text: "#1A1A1A",
  muted: "#666",
  gold: "#FFD700",
  rose: "#E8B7B7",
};

const layout = {
  maxWidth: 1120,
  sidePadding: 20,
  headerHeightDesktop: 72,
  headerHeightMobile: 64,
};

export default function Header() {
  const { lang } = useLanguage();

  const TEXT = {
    es: {
      nav: {
        services: "Servicios",
        about: "Nosotros",
        contact: "Contacto",
        cta: "Crear mi compañía",
      },
    },
    en: {
      nav: {
        services: "Services",
        about: "About",
        contact: "Contact",
        cta: "Start my company",
      },
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
        height: layout.headerHeightDesktop,
        zIndex: 100,
        background: colors.bg,
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          height: "100%",
          padding: `0 ${layout.sidePadding}px`,
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
            color: colors.text,
            minWidth: 0,
          }}
        >
          <img
            src="/logo-sovereign.png"
            alt="Sovereign TruckGuard"
            style={{
              width: 32,
              height: "auto",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "Montserrat, system-ui",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: colors.text,
              opacity: 0.85,
            }}
          >
            Sovereign TruckGuard LLC
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 13,
            fontFamily: "Montserrat, system-ui",
          }}
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
              padding: "10px 24px",
              borderRadius: 999,
              background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
              color: "#000",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              whiteSpace: "nowrap",
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
            display: "none",
            padding: "8px 18px",
            borderRadius: 999,
            background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
            color: "#000",
            fontWeight: 700,
            fontSize: 12,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          {t.nav.cta}
        </a>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          header {
            height: ${layout.headerHeightMobile}px;
          }

          .desktop-nav {
            display: none !important;
          }

          .mobile-cta {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  opacity: 0.85,
};
