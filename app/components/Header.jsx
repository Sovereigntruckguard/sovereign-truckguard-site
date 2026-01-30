"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../../lib/language";

const theme = {
  bg: "rgba(5,5,5,0.78)",
  border: "rgba(255,255,255,0.10)",
  text: "rgba(255,255,255,0.90)",
  muted: "rgba(255,255,255,0.70)",
  gold: "#C9A227",
};

export default function Header() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  const TEXT = {
    es: {
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      cta: "Iniciar diagnóstico",
    },
    en: {
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Start assessment",
    },
  };
  const t = lang === "es" ? TEXT.es : TEXT.en;

  useEffect(() => {
    const onScroll = () => {
      // header aparece después de pasar el hero (umbral simple)
      setVisible(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 12,
        left: 0,
        right: 0,
        zIndex: 200,
        pointerEvents: visible ? "auto" : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-18px)",
        transition: "opacity 220ms ease, transform 220ms ease",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 16,
            background: theme.bg,
            backdropFilter: "blur(14px)",
            border: `1px solid ${theme.border}`,
            padding: "0 14px",
          }}
        >
          {/* Left */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              color: theme.text,
              minWidth: 0,
            }}
          >
            {/* Recomendado: icon para header (se ve más pro y limpio) */}
            <img
              src="/logo-sovereign-icon.png"
              alt="Sovereign"
              style={{ width: 34, height: 34, objectFit: "contain" }}
            />
            <div style={{ lineHeight: 1.1 }}>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                }}
              >
                SOVEREIGN
              </div>
              <div style={{ fontSize: 12, color: theme.muted, whiteSpace: "nowrap" }}>
                TruckGuard LLC
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="nav" style={{ display: "flex", alignItems: "center", gap: 18 }}>
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
                marginLeft: 6,
                padding: "10px 16px",
                borderRadius: 999,
                background: theme.gold,
                color: "#000",
                fontWeight: 900,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {t.cta}
            </a>
          </nav>

          <style>{`
            @media (max-width: 900px) {
              .nav { display: none !important; }
            }
          `}</style>
        </div>
      </div>
    </header>
  );
}

const linkStyle = {
  color: "rgba(255,255,255,0.86)",
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 700,
};
