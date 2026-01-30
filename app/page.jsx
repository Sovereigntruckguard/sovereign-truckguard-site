"use client";

/*
  HOME – Sovereign TruckGuard LLC
  POSICIONAMIENTO:
  Ecosistema soberano de protección y crecimiento
  para compañías de camiones latinas en EE. UU.
*/

import Header from "./components/Header.jsx";

/* =========================
   CONFIG
========================= */

const colors = {
  bg: "#050505",
  gold: "#FFD700",
  white: "#FFFFFF",
  muted: "rgba(255,255,255,0.82)",
};

const layout = {
  maxWidth: 1120,
  sidePadding: 20,
};

/* =========================
   COPY PRINCIPAL (SEO + MARCA)
========================= */

const HERO = {
  eyebrow:
    "Ecosistema soberano de protección y crecimiento para camioneros latinos",
  title1: "Protegemos y ordenamos",
  title2: "tu compañía de camiones en Estados Unidos",
  description:
    "Creamos tu trucking company correctamente desde el inicio y te acompañamos en cumplimiento, preparación para seguros y crecimiento limpio. Sin errores, sin bloqueos, sin improvisación.",
  ctaPrimary: "Crear mi compañía",
  ctaSecondary: "Cómo funciona el ecosistema",
};

/* =========================
   HERO
========================= */

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: 120,
        paddingBottom: 100,
        overflow: "hidden",
      }}
    >
      {/* Video Hero */}
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
          filter: "brightness(0.55)",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.92))",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 820,
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
          color: colors.white,
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: colors.gold,
            marginBottom: 14,
          }}
        >
          {HERO.eyebrow}
        </p>

        <h1 style={{ fontSize: 34, lineHeight: 1.2, margin: 0 }}>
          {HERO.title1}
          <br />
          {HERO.title2}
        </h1>

        <p
          style={{
            marginTop: 18,
            fontSize: 15,
            lineHeight: 1.6,
            color: colors.muted,
          }}
        >
          {HERO.description}
        </p>

        <div style={{ marginTop: 34 }}>
          <a
            href="/services"
            style={{
              padding: "14px 38px",
              borderRadius: 999,
              background: `linear-gradient(90deg, ${colors.gold}, #E8B7B7)`,
              color: "#000",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 16px 40px rgba(255,215,0,0.35)",
            }}
          >
            {HERO.ctaPrimary}
          </a>
        </div>

        <div style={{ marginTop: 14 }}>
          <a
            href="#ecosistema"
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.75)",
              textDecoration: "underline",
            }}
          >
            {HERO.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================
   PILARES DEL ECOSISTEMA
========================= */

function Ecosystem() {
  return (
    <section
      id="ecosistema"
      style={{
        margin: "90px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px",
      }}
    >
      <h2 style={{ color: colors.gold, fontSize: 26 }}>
        Un ecosistema creado desde la experiencia real
      </h2>

      <p style={{ marginTop: 10, fontSize: 15, maxWidth: 860 }}>
        No somos un trámite suelto. Somos una estructura completa que protege,
        ordena y potencia compañías de camiones latinas desde su nacimiento hasta
        su crecimiento.
      </p>

      <div
        style={{
          marginTop: 32,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: 18,
        }}
      >
        {[
          ["Start", "LLC · EIN · DOT · MC sin errores"],
          ["Compliance", "Cumplimiento DOT real y documentado"],
          ["Insurance Readiness", "Preparación correcta para asegurar"],
          ["Rescue", "Rescate de compañías en riesgo o bloqueadas"],
          ["Growth", "Seguimiento, educación y estructura"],
        ].map(([title, desc]) => (
          <div
            key={title}
            style={{
              padding: 22,
              borderRadius: 18,
              background: "rgba(0,0,0,0.9)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <h3 style={{ margin: 0, color: colors.gold }}>{title}</h3>
            <p style={{ marginTop: 8, fontSize: 14 }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================
   TRANSPARENCIA DE FEES
========================= */

function FeeExplanation() {
  return (
    <section
      style={{
        margin: "100px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px",
      }}
    >
      <h2 style={{ color: colors.gold, fontSize: 24 }}>
        Service fee vs Government fees
      </h2>

      <p style={{ marginTop: 12, fontSize: 15, maxWidth: 900 }}>
        Nuestro fee es únicamente por el acompañamiento profesional. Los fees
        oficiales (FMCSA, UCR, TXDMV, Secretary of State, Process Agent) los pagas
        tú directamente en portales oficiales. Transparencia total.
      </p>
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
        margin: "120px auto 0",
        padding: "90px 20px",
        textAlign: "center",
        background:
          "radial-gradient(circle at top, rgba(255,215,0,0.18), rgba(0,0,0,0.95))",
      }}
    >
      <h2 style={{ fontSize: 30 }}>
        Empieza con orden. Crece con respaldo.
      </h2>
      <p style={{ marginTop: 12, fontSize: 16 }}>
        La improvisación quiebra compañías. La estructura las hace crecer.
      </p>

      <a
        href="/services"
        style={{
          marginTop: 26,
          display: "inline-block",
          padding: "14px 40px",
          borderRadius: 999,
          background: `linear-gradient(90deg, ${colors.gold}, #E8B7B7)`,
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
   FOOTER
========================= */

function Footer() {
  return (
    <footer
      style={{
        marginTop: 110,
        background: "rgba(0,0,0,0.95)",
        borderTop: "1px solid rgba(255,255,255,0.16)",
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: colors.gold }}>Sovereign TruckGuard LLC</h3>
        <p>
          30 N Gould St, Ste N · Sheridan, Wyoming 82801 · USA
          <br />
          info@sovereigntruckguard.com · +1 (608) 557-6282
        </p>
        <p style={{ fontSize: 12, opacity: 0.7 }}>
          © {new Date().getFullYear()} · Powered by SOLYON
        </p>
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
          colors.bg,
        color: colors.white,
      }}
    >
      <Header />
      <Hero />
      <Ecosystem />
      <FeeExplanation />
      <FinalCTA />
      <Footer />
    </main>
  );
}
