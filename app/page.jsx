"use client";

// Landing Sovereign TruckGuard – HOME optimizado a conversión (mobile-first)

import { useLanguage } from "../lib/language";
import Header from "./components/Header.jsx";

const colors = {
  bg: "#050505",
  panel: "#0b0b0b",
  gold: "#FFD700",
  rose: "#E8B7B7",
  white: "#FFFFFF"
};

const layout = {
  maxWidth: 1120,
  sidePadding: 20
};

/* =========================
   COPY ESTRATÉGICO ES / EN
========================= */

const TEXT_ES = {
  hero: {
    subtitle: "Empresa registrada en EE. UU. · Cumplimiento real · Sin intermediarios",
    titleLine1: "Creamos tu trucking company",
    titleLine2: "legal y asegurable desde el día uno.",
    body:
      "Registramos tu LLC, EIN, DOT y MC correctamente para que puedas operar y asegurar sin errores que luego cuestan miles. No solo sacamos números: construimos tu base legal.",
    btnQuote: "Crear mi compañía ahora",
    btnCoverages: "Ver qué incluye"
  },
  rail: [
    { title: "Crear compañía", desc: "LLC · EIN · DOT · MC", link: "/services#packages" },
    { title: "Seguro comercial", desc: "Auto · Cargo · Liability", link: "#servicios" },
    { title: "Cumplimiento DOT", desc: "Filings · Workers Comp", link: "/services" },
    { title: "Soporte real", desc: "Acompañamiento post-registro", link: "/contact" }
  ],
  services: {
    title: "Esto es lo que hacemos (y por qué funciona)",
    bullets: [
      "Registramos tu empresa correctamente desde el inicio.",
      "Evitamos errores que encarecen tu seguro después.",
      "Te dejamos listo para asegurar y operar.",
      "Respondemos si algo falla."
    ]
  },
  process: {
    title: "Nuestro proceso",
    steps: [
      "Revisión de tu caso y objetivo real.",
      "Estructuración legal correcta.",
      "Preparación para seguro comercial.",
      "Soporte y seguimiento."
    ]
  },
  why: {
    title: "Por qué Sovereign TruckGuard",
    bullets: [
      "Empresa real registrada en Wyoming (USA).",
      "Especialistas en camioneros latinos.",
      "No somos un portal automático.",
      "Te acompañamos después del registro."
    ]
  }
};

const TEXT_EN = {
  hero: {
    subtitle: "U.S. Registered Company · Real Compliance · No Middlemen",
    titleLine1: "We build your trucking company",
    titleLine2: "legal and insurable from day one.",
    body:
      "We set up your LLC, EIN, DOT and MC the right way so you can operate and insure without costly mistakes later.",
    btnQuote: "Start my company",
    btnCoverages: "See what’s included"
  },
  rail: [
    { title: "Company setup", desc: "LLC · EIN · DOT · MC", link: "/services#packages" },
    { title: "Commercial insurance", desc: "Auto · Cargo · Liability", link: "#servicios" },
    { title: "DOT compliance", desc: "Filings · Workers Comp", link: "/services" },
    { title: "Real support", desc: "After setup support", link: "/contact" }
  ],
  services: {
    title: "What we do (and why it works)",
    bullets: [
      "Correct company setup from day one.",
      "Avoid mistakes that increase insurance costs.",
      "Ready to operate and insure.",
      "We stand behind our work."
    ]
  },
  process: {
    title: "Our process",
    steps: [
      "Case review and goal alignment.",
      "Correct legal structure.",
      "Insurance-ready setup.",
      "Ongoing support."
    ]
  },
  why: {
    title: "Why Sovereign TruckGuard",
    bullets: [
      "Real U.S. registered company (Wyoming).",
      "Latino trucking specialists.",
      "Not an automated portal.",
      "Support beyond registration."
    ]
  }
};

/* =========================
   HERO (MOBILE-FIRST)
========================= */

function Hero() {
  const { lang } = useLanguage();
  const t = lang === "es" ? TEXT_ES.hero : TEXT_EN.hero;

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        paddingTop: 120,
        paddingBottom: 64,
        overflow: "hidden"
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
          filter: "brightness(0.45)"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.95))"
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
          color: colors.white
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: colors.gold
          }}
        >
          {t.subtitle}
        </p>

        <h1 style={{ fontSize: 30, lineHeight: 1.2, margin: "14px 0" }}>
          {t.titleLine1}
          <br />
          {t.titleLine2}
        </h1>

        <p style={{ fontSize: 15, opacity: 0.85 }}>{t.body}</p>

        <a
          href="/services#packages"
          style={{
            display: "inline-block",
            marginTop: 26,
            padding: "14px 36px",
            borderRadius: 999,
            background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
            color: "#000",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 16px 40px rgba(255,215,0,0.35)"
          }}
        >
          {t.btnQuote}
        </a>

        <div style={{ marginTop: 12 }}>
          <a href="#servicios" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
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
  const { lang } = useLanguage();
  const items = lang === "es" ? TEXT_ES.rail : TEXT_EN.rail;

  return (
    <section style={{ padding: "32px 20px" }}>
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: 14
        }}
      >
        {items.map((i) => (
          <a
            key={i.title}
            href={i.link}
            style={{
              padding: 16,
              borderRadius: 16,
              background: colors.panel,
              border: "1px solid rgba(255,255,255,0.12)",
              textDecoration: "none",
              color: colors.white
            }}
          >
            <h3 style={{ margin: 0, color: colors.gold }}>{i.title}</h3>
            <p style={{ fontSize: 13, opacity: 0.8 }}>{i.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

/* =========================
   SERVICES
========================= */

function Services() {
  const { lang } = useLanguage();
  const s = lang === "es" ? TEXT_ES.services : TEXT_EN.services;

  return (
    <section id="servicios" style={{ padding: "48px 20px" }}>
      <div style={{ maxWidth: layout.maxWidth, margin: "0 auto" }}>
        <h2 style={{ color: colors.gold }}>{s.title}</h2>
        <ul style={{ marginTop: 12 }}>
          {s.bullets.map((b) => (
            <li key={b} style={{ marginBottom: 8 }}>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* =========================
   PROCESS
========================= */

function Process() {
  const { lang } = useLanguage();
  const p = lang === "es" ? TEXT_ES.process : TEXT_EN.process;

  return (
    <section style={{ padding: "48px 20px" }}>
      <div style={{ maxWidth: layout.maxWidth, margin: "0 auto" }}>
        <h2 style={{ color: colors.gold }}>{p.title}</h2>
        <ol>
          {p.steps.map((s) => (
            <li key={s} style={{ marginBottom: 6 }}>
              {s}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* =========================
   WHY
========================= */

function WhyChooseUs() {
  const { lang } = useLanguage();
  const w = lang === "es" ? TEXT_ES.why : TEXT_EN.why;

  return (
    <section style={{ padding: "48px 20px" }}>
      <div style={{ maxWidth: layout.maxWidth, margin: "0 auto" }}>
        <h2 style={{ color: colors.gold }}>{w.title}</h2>
        <ul>
          {w.bullets.map((b) => (
            <li key={b} style={{ marginBottom: 6 }}>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* =========================
   PAGE
========================= */

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(255,215,0,0.12), transparent 55%)," +
          "radial-gradient(circle at bottom, rgba(232,183,183,0.12), transparent 55%)," +
          colors.bg,
        color: colors.white,
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}
    >
      <Header />
      <Hero />
      <ServiceRail />
      <Services />
      <Process />
      <WhyChooseUs />
    </main>
  );
}
