"use client";

import { useLanguage } from "../lib/language";
import Header from "./components/Header.jsx";

/* =========================
   CONFIG
========================= */

const colors = {
  bg: "#050505",
  gold: "#FFD700",
  rose: "#E8B7B7",
  white: "#FFFFFF",
};

const layout = {
  maxWidth: 1120,
  sidePadding: 20,
};

/* =========================
   TEXTOS
========================= */

const TEXT_ES = {
  hero: {
    subtitle:
      "Sistema soberano de creación y cumplimiento para camioneros latinos en EE. UU.",
    titleLine1: "Creamos tu trucking company legal",
    titleLine2: "y te dejamos listo para asegurar y operar.",
    btnQuote: "Crear mi compañía",
    btnCoverages: "Ver cómo funciona",
  },
};

/* =========================
   HERO (YA OPTIMIZADO)
========================= */

function Hero() {
  const { lang } = useLanguage();
  const t = TEXT_ES.hero;

  return (
    <section
      style={{
        position: "relative",
        paddingTop: 120,
        paddingBottom: 70,
        overflow: "hidden",
      }}
    >
      <video
        src="/hero-truck.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.5)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.92))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.22em",
            color: colors.gold,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {t.subtitle}
        </p>

        <h1 style={{ fontSize: 30, lineHeight: 1.2, margin: 0 }}>
          {t.titleLine1}
          <br />
          {t.titleLine2}
        </h1>

        <div style={{ marginTop: 28 }}>
          <a
            href="/services#packages"
            style={{
              padding: "14px 34px",
              borderRadius: 999,
              background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
              color: "#000",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 16px 40px rgba(255,215,0,0.35)",
            }}
          >
            {t.btnQuote}
          </a>
        </div>

        <div style={{ marginTop: 14 }}>
          <a
            href="#como-funciona"
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.75)",
              textDecoration: "underline",
            }}
          >
            {t.btnCoverages}
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================
   SERVICE RAIL
========================= */

function ServiceRail() {
  return (
    <section
      style={{
        padding: "36px 20px",
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.92), #050505)",
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: 14,
        }}
      >
        {[
          ["Crea tu compañía", "LLC · EIN · DOT · MC"],
          ["Seguros comerciales", "Auto · Cargo · Liability"],
          ["Cumplimiento DOT", "Filings · Workers Comp"],
          ["Soporte real", "No desaparecemos"],
        ].map(([title, desc]) => (
          <div
            key={title}
            style={{
              padding: 16,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(0,0,0,0.85)",
            }}
          >
            <h3 style={{ margin: 0, color: colors.gold }}>{title}</h3>
            <p style={{ marginTop: 6, fontSize: 13 }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================
   COMO FUNCIONA
========================= */

function HowItWorks() {
  return (
    <section
      id="como-funciona"
      style={{
        margin: "90px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px",
      }}
    >
      <h2 style={{ color: colors.gold, fontSize: 26 }}>
        Cómo evitamos errores caros desde el inicio
      </h2>

      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          gap: 18,
        }}
      >
        {[
          "Revisamos tu caso antes de registrar nada.",
          "Creamos la estructura correcta según tu objetivo real.",
          "Te dejamos listo para asegurar sin sobrecostos.",
          "Respondemos después del registro.",
        ].map((text, i) => (
          <div
            key={i}
            style={{
              padding: 18,
              borderRadius: 18,
              background: "rgba(0,0,0,0.9)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <strong style={{ color: colors.gold }}>{i + 1}.</strong> {text}
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================
   CTA FINAL
========================= */

function FinalCTA() {
  return (
    <section
      style={{
        margin: "110px auto 0",
        padding: "70px 20px",
        textAlign: "center",
        background:
          "radial-gradient(circle at top, rgba(255,215,0,0.20), rgba(0,0,0,0.95))",
      }}
    >
      <h2 style={{ fontSize: 28 }}>Empieza bien desde el primer día</h2>
      <p style={{ marginTop: 10, fontSize: 15 }}>
        Una mala estructura legal hoy se paga caro después.
      </p>

      <a
        href="/services#packages"
        style={{
          marginTop: 24,
          display: "inline-block",
          padding: "14px 36px",
          borderRadius: 999,
          background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
          color: "#000",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Crear mi compañía
      </a>
    </section>
  );
}

/* =========================
   FOOTER (LEGAL + MAPS)
========================= */

function Footer() {
  return (
    <footer
      style={{
        marginTop: 80,
        background: "rgba(0,0,0,0.95)",
        borderTop: "1px solid rgba(255,255,255,0.16)",
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          padding: "40px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          gap: 30,
          textAlign: "center",
        }}
      >
        <div>
          <h3 style={{ color: colors.gold }}>Sovereign TruckGuard LLC</h3>
          <p>
            30 N Gould St, Ste N<br />
            Sheridan, WY 82801 · USA
          </p>
          <p>info@sovereigntruckguard.com<br />+1 (608) 557-6282</p>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps?q=30%20N%20Gould%20St%20Ste%20N,%20Sheridan,%20WY%2082801&output=embed"
            width="100%"
            height="180"
            style={{ border: 0, borderRadius: 14 }}
            loading="lazy"
          />
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "14px",
          fontSize: 11,
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} Sovereign TruckGuard LLC · Powered by SOLYON
      </div>
    </footer>
  );
}

/* =========================
   PAGE
========================= */

export default function Page() {
  return (
    <main
      style={{
        background:
          "radial-gradient(circle at top, rgba(255,215,0,0.12), transparent 55%)," +
          "radial-gradient(circle at bottom, rgba(232,183,183,0.12), transparent 55%)," +
          colors.bg,
        color: colors.white,
      }}
    >
      <Header />
      <Hero />
      <ServiceRail />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
