"use client";

/*
  HOME – Sovereign TruckGuard LLC
  OBJETIVO:
  - Educar + generar confianza
  - Capturar tráfico SEO (DOT, MC, trucking company en USA)
  - Enviar a /services para conversión
*/

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
   TEXTOS SEO – ESPAÑOL
========================= */

const TEXT_ES = {
  hero: {
    subtitle:
      "Sistema soberano de creación y cumplimiento para camioneros latinos en EE. UU.",
    titleLine1: "Creamos tu trucking company legal en USA",
    titleLine2: "DOT · MC · LLC · EIN — sin errores ni retrasos",
    description:
      "Servicio profesional en español para crear tu compañía de trucking en Estados Unidos. Te ayudamos a sacar tu número DOT, MC Authority, LLC y EIN correctamente desde el inicio.",
    ctaPrimary: "Crear mi compañía",
    ctaSecondary: "Ver cómo funciona",
  },
};

/* =========================
   HERO
========================= */

function Hero() {
  const t = TEXT_ES.hero;

  return (
    <section
      style={{
        position: "relative",
        paddingTop: 120,
        paddingBottom: 90,
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
          maxWidth: 760,
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: colors.gold,
            marginBottom: 12,
          }}
        >
          {t.subtitle}
        </p>

        <h1 style={{ fontSize: 32, lineHeight: 1.2, margin: 0 }}>
          {t.titleLine1}
          <br />
          {t.titleLine2}
        </h1>

        <p
          style={{
            marginTop: 18,
            fontSize: 15,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {t.description}
        </p>

        <div style={{ marginTop: 32 }}>
          <a
            href="/services"
            style={{
              padding: "14px 36px",
              borderRadius: 999,
              background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
              color: "#000",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 16px 40px rgba(255,215,0,0.35)",
            }}
          >
            {t.ctaPrimary}
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
            {t.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================
   SERVICE RAIL (BAJO HERO)
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
          ["Seguros comerciales", "Preparación correcta"],
          ["Cumplimiento DOT", "Sin bloqueos ni multas"],
          ["Soporte real", "No desaparecemos"],
        ].map(([title, desc]) => (
          <div
            key={title}
            style={{
              padding: 18,
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
   CÓMO FUNCIONA
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

      <p style={{ marginTop: 10, fontSize: 15, maxWidth: 820 }}>
        Este proceso existe para que no pierdas dinero, tiempo ni autoridad
        ante FMCSA. Todo queda documentado y con responsable real.
      </p>

      <div
        style={{
          marginTop: 28,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          gap: 18,
        }}
      >
        {[
          "Revisamos tu caso antes de registrar nada.",
          "Definimos la estructura correcta según tu objetivo.",
          "Preparamos tu empresa para asegurar sin sobrecostos.",
          "Te acompañamos después del registro.",
        ].map((text, i) => (
          <div
            key={i}
            style={{
              padding: 20,
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
   SERVICE FEE VS GOV FEES
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
        Service fee vs Government fees (sin letra pequeña)
      </h2>

      <p style={{ marginTop: 12, fontSize: 15, maxWidth: 900 }}>
        En Sovereign TruckGuard pagas únicamente por nuestro acompañamiento
        profesional. Los fees oficiales (FMCSA, UCR, TXDMV, SoS, Process Agent)
        los pagas tú directamente en portales oficiales. Nada oculto.
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
        padding: "80px 20px",
        textAlign: "center",
        background:
          "radial-gradient(circle at top, rgba(255,215,0,0.20), rgba(0,0,0,0.95))",
      }}
    >
      <h2 style={{ fontSize: 30 }}>Empieza bien desde el primer día</h2>
      <p style={{ marginTop: 12, fontSize: 16 }}>
        Crear mal tu compañía hoy puede costarte miles después.
      </p>

      <a
        href="/services"
        style={{
          marginTop: 26,
          display: "inline-block",
          padding: "14px 38px",
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
   FOOTER
========================= */

function Footer() {
  return (
    <footer
      style={{
        marginTop: 100,
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
            Sheridan, Wyoming 82801 · USA
          </p>
          <p>
            info@sovereigntruckguard.com<br />
            +1 (608) 557-6282
          </p>
          <p>Lunes a Viernes · 9:00 AM – 6:00 PM CST</p>
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
      <FeeExplanation />
      <FinalCTA />
      <Footer />
    </main>
  );
}
