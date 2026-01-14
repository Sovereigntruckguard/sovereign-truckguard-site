"use client";

/**
 * HOME – Sovereign TruckGuard
 * Objetivo: conversión directa (crear compañía / packages)
 * Enfoque: mobile-first, autoridad legal, anti-portales automáticos
 */

import { useLanguage } from "../lib/language";
import Header from "./components/Header.jsx";

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
   COPY (ES / EN)
========================= */

const TEXT_ES = {
  hero: {
    kicker: "Registro legal + DOT + respaldo real",
    title: "Creamos tu trucking company en EE. UU.",
    subtitle: "Sin errores. Sin vueltas. Sin portales automáticos.",
    body:
      "Registramos tu empresa correctamente desde el inicio (LLC, EIN, DOT, MC) para que puedas asegurar y operar sin problemas. No somos un formulario. Somos responsables de lo que hacemos.",
    cta: "Crear mi compañía ahora",
    trust: "Wyoming LLC · Proceso humano · Soporte real",
  },

  diff: {
    title: "Esto es lo que hacemos (y por qué funciona)",
    items: [
      "Registramos tu empresa correctamente desde el inicio.",
      "Evitamos errores que encarecen tu seguro después.",
      "Te dejamos listo para asegurar y operar.",
      "Respondemos si algo falla. No desaparecemos.",
    ],
  },

  process: {
    title: "Nuestro proceso",
    steps: [
      "Revisión real de tu caso y objetivo.",
      "Estructuración legal correcta.",
      "Preparación para seguro comercial.",
      "Soporte y seguimiento continuo.",
    ],
  },

  why: {
    title: "Por qué Sovereign TruckGuard",
    items: [
      "Empresa real registrada en Wyoming (USA).",
      "Especialistas en camioneros latinos.",
      "No somos un portal automático.",
      "Te acompañamos después del registro.",
    ],
  },

  ctaFinal: {
    title: "Empieza bien desde el primer día",
    subtitle:
      "Una mala estructura legal hoy se paga caro después. Hazlo bien desde el inicio.",
    button: "Crear mi compañía",
  },

  footer: {
    company: "Sovereign TruckGuard LLC",
    address: "30 N Gould St, Ste N · Sheridan, WY 82801 · USA",
    note:
      "Registered U.S. Limited Liability Company. EIN disponible bajo solicitud formal.",
    email: "info@sovereigntruckguard.com",
    phone: "+1 (608) 557-6282",
  },
};

const TEXT_EN = {
  hero: {
    kicker: "Legal setup + DOT + real backing",
    title: "We build your U.S. trucking company",
    subtitle: "No mistakes. No portals. No disappearing support.",
    body:
      "We register your company correctly from day one (LLC, EIN, DOT, MC) so you can insure and operate without problems. We are accountable for what we do.",
    cta: "Start my company",
    trust: "Wyoming LLC · Human process · Real support",
  },

  diff: {
    title: "What we do (and why it works)",
    items: [
      "We register your company correctly from the start.",
      "We avoid mistakes that raise insurance costs later.",
      "We prepare you to insure and operate.",
      "We respond if something fails. We don’t disappear.",
    ],
  },

  process: {
    title: "Our process",
    steps: [
      "Real review of your case and goal.",
      "Correct legal structure.",
      "Preparation for commercial insurance.",
      "Ongoing support and follow-up.",
    ],
  },

  why: {
    title: "Why Sovereign TruckGuard",
    items: [
      "Real company registered in Wyoming (USA).",
      "Latino trucking specialists.",
      "Not an automated portal.",
      "Support after registration.",
    ],
  },

  ctaFinal: {
    title: "Start right from day one",
    subtitle:
      "Bad legal structure today becomes expensive tomorrow. Do it right from the start.",
    button: "Start my company",
  },

  footer: {
    company: "Sovereign TruckGuard LLC",
    address: "30 N Gould St, Ste N · Sheridan, WY 82801 · USA",
    note:
      "Registered U.S. Limited Liability Company. EIN available upon formal request.",
    email: "info@sovereigntruckguard.com",
    phone: "+1 (608) 557-6282",
  },
};

/* =========================
   HERO
========================= */

function Hero() {
  const { lang } = useLanguage();
  const t = lang === "es" ? TEXT_ES.hero : TEXT_EN.hero;

  return (
    <section
      style={{
        position: "relative",
        paddingTop: 120,
        paddingBottom: 80,
        background: colors.bg,
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
          filter: "brightness(0.45)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.65), rgba(0,0,0,.92))",
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
          color: "#fff",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: colors.gold,
            marginBottom: 12,
          }}
        >
          {t.kicker}
        </p>

        <h1 style={{ fontSize: 32, lineHeight: 1.2, margin: 0 }}>
          {t.title}
        </h1>

        <p
          style={{
            marginTop: 12,
            fontSize: 18,
            fontWeight: 600,
            color: colors.rose,
          }}
        >
          {t.subtitle}
        </p>

        <p
          style={{
            marginTop: 18,
            fontSize: 15,
            lineHeight: 1.6,
            color: "rgba(255,255,255,.85)",
          }}
        >
          {t.body}
        </p>

        <a
          href="/services#packages"
          style={{
            marginTop: 28,
            display: "inline-block",
            padding: "14px 36px",
            borderRadius: 999,
            background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
            color: "#000",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 16px 40px rgba(255,215,0,.35)",
          }}
        >
          {t.cta}
        </a>

        <p
          style={{
            marginTop: 14,
            fontSize: 12,
            color: "rgba(255,255,255,.6)",
          }}
        >
          {t.trust}
        </p>
      </div>
    </section>
  );
}

/* =========================
   SECTION – DIFFERENTIATION
========================= */

function BulletSection({ title, items }) {
  return (
    <section
      style={{
        maxWidth: layout.maxWidth,
        margin: "80px auto 0",
        padding: `0 ${layout.sidePadding}px`,
      }}
    >
      <h2 style={{ color: colors.gold, marginBottom: 18 }}>{title}</h2>
      <ul style={{ paddingLeft: 20, lineHeight: 1.7 }}>
        {items.map((i) => (
          <li key={i} style={{ marginBottom: 10 }}>
            {i}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* =========================
   CTA FINAL
========================= */

function FinalCTA({ t }) {
  return (
    <section
      style={{
        margin: "100px auto",
        padding: "60px 20px",
        textAlign: "center",
        background:
          "linear-gradient(180deg, rgba(255,215,0,.08), rgba(0,0,0,0))",
      }}
    >
      <h2 style={{ fontSize: 26, marginBottom: 10 }}>{t.title}</h2>
      <p
        style={{
          maxWidth: 520,
          margin: "0 auto 24px",
          color: "rgba(255,255,255,.8)",
        }}
      >
        {t.subtitle}
      </p>
      <a
        href="/services#packages"
        style={{
          padding: "14px 40px",
          borderRadius: 999,
          background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
          color: "#000",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        {t.button}
      </a>
    </section>
  );
}

/* =========================
   FOOTER (RESTAURADO)
========================= */

function Footer() {
  const { lang } = useLanguage();
  const f = lang === "es" ? TEXT_ES.footer : TEXT_EN.footer;

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,.12)",
        padding: "40px 20px",
        textAlign: "center",
        fontSize: 12,
        color: "rgba(255,255,255,.7)",
      }}
    >
      <strong>{f.company}</strong>
      <p>{f.address}</p>
      <p>{f.note}</p>
      <p>
        {f.email} · {f.phone}
      </p>
      <p style={{ marginTop: 10, fontSize: 11 }}>
        © {new Date().getFullYear()} Sovereign TruckGuard · Powered by SOLYON
      </p>
    </footer>
  );
}

/* =========================
   PAGE
========================= */

export default function Page() {
  const { lang } = useLanguage();
  const T = lang === "es" ? TEXT_ES : TEXT_EN;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: colors.bg,
        color: colors.white,
      }}
    >
      <Header />
      <Hero />
      <BulletSection title={T.diff.title} items={T.diff.items} />
      <BulletSection title={T.process.title} items={T.process.steps} />
      <BulletSection title={T.why.title} items={T.why.items} />
      <FinalCTA t={T.ctaFinal} />
      <Footer />
    </main>
  );
}
