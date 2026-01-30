"use client";

import Header from "./components/Header.jsx";

/* =========================
   CONFIG
========================= */

const colors = {
  bg: "#FAFAFA",
  sectionAlt: "#F2F4F5",
  text: "#1A1A1A",
  muted: "#555",
  gold: "#FFD700",
};

const layout = {
  maxWidth: 1120,
  sidePadding: 20,
};

/* =========================
   HERO
========================= */

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "50vh",
        minHeight: 420,
        background: "#EDEDED",
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
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.35,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.95))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
          margin: "0 auto",
          padding: "120px 20px 0",
          textAlign: "center",
          color: colors.text,
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
          Ecosistema soberano de protección y crecimiento
        </p>

        <h1 style={{ fontSize: 36, lineHeight: 1.25 }}>
          Protegemos y ordenamos
          <br />
          tu compañía de camiones en Estados Unidos
        </h1>

        <p style={{ marginTop: 16, fontSize: 16, color: colors.muted }}>
          Creamos tu trucking company correctamente desde el inicio y te
          acompañamos en cumplimiento, preparación para seguros y crecimiento
          limpio. Sin errores, sin bloqueos, sin improvisación.
        </p>

        <a
          href="/services"
          style={{
            marginTop: 30,
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
      </div>
    </section>
  );
}

/* =========================
   SECTION WRAPPER
========================= */

function Section({ children, alt }) {
  return (
    <section
      style={{
        padding: "100px 0",
        background: alt ? colors.sectionAlt : "#FFFFFF",
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          padding: "0 " + layout.sidePadding + "px",
        }}
      >
        {children}
      </div>
    </section>
  );
}

/* =========================
   ECOSYSTEM
========================= */

function Ecosystem() {
  return (
    <Section alt>
      <h2 style={{ fontSize: 28, textAlign: "center" }}>
        Cómo funciona el ecosistema Sovereign
      </h2>

      <p
        style={{
          marginTop: 12,
          maxWidth: 860,
          marginInline: "auto",
          textAlign: "center",
          color: colors.muted,
        }}
      >
        Diagnóstico, creación, cumplimiento, operación y crecimiento. Todo
        guiado, documentado y protegido.
      </p>

      <img
        src="/ecosystem-map.png"
        alt="Ecosistema Sovereign"
        style={{
          marginTop: 40,
          width: "100%",
          maxWidth: 900,
          display: "block",
          marginInline: "auto",
        }}
      />
    </Section>
  );
}

/* =========================
   MOCKUPS
========================= */

function Mockups() {
  return (
    <Section>
      <h2 style={{ fontSize: 28, textAlign: "center" }}>
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
    </Section>
  );
}

/* =========================
   FEES
========================= */

function Fees() {
  return (
    <Section alt>
      <h2 style={{ fontSize: 26, textAlign: "center" }}>
        Transparencia total de costos
      </h2>

      <img
        src="/fees-transparency.png"
        alt="Service fee vs Government fees"
        style={{
          marginTop: 30,
          maxWidth: 720,
          width: "100%",
          display: "block",
          marginInline: "auto",
        }}
      />
    </Section>
  );
}

/* =========================
   OFFICE
========================= */

function Office() {
  return (
    <Section>
      <h2 style={{ fontSize: 26, textAlign: "center" }}>
        Operación real, nivel institucional
      </h2>

      <img
        src="/office-ops.png"
        alt="Oficina institucional Sovereign"
        style={{
          marginTop: 30,
          maxWidth: 920,
          width: "100%",
          display: "block",
          marginInline: "auto",
        }}
      />
    </Section>
  );
}

/* =========================
   CTA FINAL
========================= */

function FinalCTA() {
  return (
    <section
      style={{
        padding: "120px 20px",
        textAlign: "center",
        background:
          "linear-gradient(135deg, rgba(255,215,0,0.25), rgba(255,255,255,1))",
      }}
    >
      <h2 style={{ fontSize: 32 }}>
        Empieza con orden. Crece con respaldo.
      </h2>

      <p style={{ marginTop: 12, color: colors.muted }}>
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
        padding: "40px 20px",
        textAlign: "center",
        background: "#111",
        color: "#FFF",
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
    <main>
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
