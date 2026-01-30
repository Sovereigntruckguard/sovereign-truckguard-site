"use client";

import Header from "./components/Header.jsx";

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

const HERO = {
  eyebrow: "Ecosistema soberano de protección y crecimiento para camioneros latinos",
  title1: "Protegemos y ordenamos",
  title2: "tu compañía de camiones en Estados Unidos",
  description:
    "Creamos tu trucking company correctamente desde el inicio y te acompañamos en cumplimiento, preparación para seguros y crecimiento limpio.",
  ctaPrimary: "Crear mi compañía",
  ctaSecondary: "Cómo funciona el ecosistema",
};

function Hero() {
  return (
    <section style={{ position: "relative", paddingTop: 140, paddingBottom: 100 }}>
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
        <p style={{ fontSize: 11, letterSpacing: "0.22em", color: colors.gold }}>
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
          <a href="#ecosistema" style={{ color: "rgba(255,255,255,0.75)" }}>
            {HERO.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main style={{ background: colors.bg, color: colors.white }}>
      <Header />
      <Hero />

      <section id="ecosistema" style={{ textAlign: "center", marginTop: 100 }}>
        <img src="/ecosystem-map.png" style={{ maxWidth: 900, width: "100%" }} />
      </section>

      <section style={{ marginTop: 120, textAlign: "center" }}>
        <img src="/mockup-mobile-truckboss.png" />
        <img src="/mockup-desktop-azoth.png" />
        <img src="/mockup-desktop-ops.png" />
      </section>

      <section style={{ marginTop: 120, textAlign: "center" }}>
        <img src="/fees-transparency.png" style={{ maxWidth: 700, width: "100%" }} />
      </section>

      <section style={{ marginTop: 120, textAlign: "center" }}>
        <img src="/office-ops.png" style={{ maxWidth: 900, width: "100%" }} />
      </section>

      <footer style={{ marginTop: 120, textAlign: "center", padding: 40 }}>
        <p>
          <strong>Sovereign TruckGuard LLC</strong><br />
          30 N Gould St, Ste N · Sheridan, WY · USA
        </p>
        <p style={{ fontSize: 12, opacity: 0.7 }}>
          © {new Date().getFullYear()} · Powered by SOLYON
        </p>
      </footer>
    </main>
  );
}
