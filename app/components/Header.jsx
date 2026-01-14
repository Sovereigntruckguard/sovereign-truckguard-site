"use client";

import { useLanguage } from "../../lib/language.js";

const colors = {
  gold: "#FFD700",
  rose: "#E8B7B7",
};

const layout = {
  maxWidth: 1120,
  sidePadding: 20,
};

export default function Header() {
  const { lang, setLang } = useLanguage();

  const TEXT_ES = {
    tagline: "Sistema soberano de creación y cumplimiento para camioneros latinos",
    nav: {
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      cta: "Crear mi compañía",
    },
  };

  const TEXT_EN = {
    tagline: "Sovereign system for Latino truckers compliance & company creation",
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Start my company",
    },
  };

  const t = lang === "es" ? TEXT_ES : TEXT_EN;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: layout.maxWidth,
          padding: `10px ${layout.sidePadding}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* LOGO + TAGLINE */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src="/logo-sovereign.png"
            alt="Sovereign TruckGuard"
            style={{ width: 36, height: "auto", objectFit: "contain" }}
          />
          <div>
            <div
              style={{
                fontFamily: "Montserrat, system-ui",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Sovereign TruckGuard LLC
            </div>
            <p
              style={{
                margin: 0,
                marginTop: 2,
                fontSize: 11,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {t.tagline}
            </p>
          </div>
        </div>

        {/* NAV + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 26,
              fontSize: 13,
              color: "rgba(255,255,255,0.78)",
              fontFamily: "Montserrat, system-ui",
            }}
          >
            <a
              href="/services"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {t.nav.services}
            </a>

            <a
              href="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {t.nav.about}
            </a>

            <a
              href="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {t.nav.contact}
            </a>

            {/* CTA ÚNICO */}
            <a
              href="/services#packages"
              style={{
                padding: "8px 22px",
                borderRadius: 999,
                background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
                color: "#000",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 14px 35px rgba(0,0,0,0.6)",
                whiteSpace: "nowrap",
              }}
            >
              {t.nav.cta}
            </a>
          </nav>

          {/* IDIOMA */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button
              onClick={() => setLang("es")}
              style={{
                border: "none",
                padding: 0,
                background: "transparent",
                opacity: lang === "es" ? 1 : 0.35,
                cursor: "pointer",
              }}
            >
              <img src="/flag-es.svg" alt="ES" style={{ width: 20, height: 20 }} />
            </button>
            <button
              onClick={() => setLang("en")}
              style={{
                border: "none",
                padding: 0,
                background: "transparent",
                opacity: lang === "en" ? 1 : 0.35,
                cursor: "pointer",
              }}
            >
              <img src="/flag-us.svg" alt="EN" style={{ width: 20, height: 20 }} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
