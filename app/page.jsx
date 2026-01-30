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
   HERO COPY
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
    <section style={{ position: "relative", paddingTop: 120, paddingBottom: 100 }}>
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
          }}
        >
          {HERO.eyebrow}
        </p>

        <h1 style={{ fontSize: 34, lineHeight: 1.2 }}>
          {HERO.title1}
          <br />
          {HERO.title2}
        </h1>

        <p style={{ marginTop: 18, fontSize: 15, color: colors.muted }}>
          {HERO.description}
        </p>

        <a
          href="/services"
          style={{
            marginTop: 34,
            display: "inline-block",
            padding: "14px 38px",
            borderRadius: 999,
            background: `linear-gradient(90deg, ${colors.gold}, #E8B7B7)`,
            color: "#000",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          {HERO.ctaPrimary}
        </a>

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
   ECOSYSTEM MAP
========================= */

function Ecosystem() {
  return (
    <section
      id="ecosistema"
      style={{
        margin: "100px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: colors.gold, fontSize: 26 }}>
        Cómo funciona el ecosistema Sovereign
      </h2>

      <p style={{ marginTop: 12, maxWidth: 860, marginInline: "auto" }}>
        Diagnóstico, creación, cumplimiento, operación y crecimiento.
        Todo guiado, documentado y protegido.
      </p>

      <img
        src="/ecosystem-map.png"
        alt="Ecosistema Sovereign TruckGuard"
        style={{
          marginTop: 40,
          width: "100%",
          maxWidth: 900,
          borderRadius: 18,
        }}
      />
    </section>
  );
}

/* =========================
   MOCKUPS
========================= */

function Mockups() {
  return (
    <section
      style={{
        margin: "120px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px",
      }}
    >
      <h2 style={{ color: colors.gold, fontSize: 26, textAlign: "center" }}>
        Tecnología que te acompaña todos los días
      </h2>

      <div
        style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
          gap: 30,
        }}
      >
        <img src="/mockup-mobile-truckboss.png" alt="TruckBoss App" />
        <img src="/mockup-desktop-azoth.png" alt="AZOTH Control Center" />
        <img src="/mockup-desktop-ops.png" alt="Centro Operativo Sovereign" />
      </div>
    </section>
  );
}

/* =========================
   FEES
========================= */

function Fees() {
  return (
    <section
      style={{
        margin: "120px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: colors.gold, fontSize: 24 }}>
        Transparencia total de costos
      </h2>

      <img
        src="/fees-transparency.png"
        alt="Service fee vs Government fees"
        style={{ marginTop: 30, maxWidth: 700, width: "100%" }}
      />
    </section>
  );
}

/* =========================
   OFFICE
========================= */

function Office() {
  return (
    <section
      style={{
        margin: "120px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: colors.gold, fontSize: 24 }}>
        Operación real, nivel institucional
      </h2>

      <img
        src="/office-ops.png"
        alt="Oficina institucional Sovereign"
        style={{ marginTop: 30, maxWidth: 900, width: "100%" }}
      />
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
        margin: "140px auto 0",
        padding: "90px 20px",
        textAlign: "center",
        background:
          "radial-gradient(circle at top, rgba(255,215,0,0.18), rgba(0,0,0,0.95))",
      }}
    >
      <h2 style={{ fontSize: 30 }}>
        Empieza con orden. Crece con respaldo.
      </h2>
      <p style={{ marginTop: 12 }}>
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
        marginTop: 120,
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.16)",
      }}
    >
      <p>
        <strong>Sovereign TruckGuard LLC</strong>
        <br />
        30 N Gould St, Ste N · Sheridan, Wyoming 82801 · USA
        <br />
        info@sovereigntruckguard.com · +1 (608) 557-6282
      </p>
      <p style={{ fontSize: 12, opacity: 0.7 }}>
        © {new Date().getFullYear()} · Powered by SOLYON
      </p>
    </footer>
  );
}

/* =========================
   PAGE
========================= */

export default function Page() {
  return (
    <main style={{ background: colors.bg, color: colors.white }}>
      <Header />
      <Hero />
      <Ecosystem />
      <Mockups />
      <Fees />
      <Office />
      <FinalCTA />
      <Footer />
    </main>
  );
}
