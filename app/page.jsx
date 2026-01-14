"use client";

// HOME — Sovereign TruckGuard (conversion-first, SEO-first, mobile-first)
// ✅ Mantiene estética premium
// ✅ Elimina fricción (botones desactivados / “próximamente”)
// ✅ Copy alineado a búsquedas reales (DOT number / MC / crear trucking company en USA)
// ✅ CTA único y claro: /services#packages
// ✅ Footer completo con Google Maps + horario real

import { useMemo } from "react";
import { useLanguage } from "../lib/language";
import Header from "./components/Header.jsx";

/* =========================
   CONFIG
========================= */

const colors = {
  bg: "#050505",
  panel: "#0b0b0b",
  gold: "#FFD700",
  rose: "#E8B7B7",
  white: "#FFFFFF",
};

const layout = {
  maxWidth: 1120,
  sidePadding: 20,
};

/* =========================
   TEXTS
========================= */

const TEXT = {
  es: {
    hero: {
      kicker: "SERVICIOS REGULATORIOS PREMIUM",
      subtitle:
        "Sistema soberano de creación y cumplimiento para camioneros latinos en EE. UU.",
      h1a: "Crea tu trucking company legal en USA",
      h1b: "DOT • MC • LLC • EIN • UCR — sin errores.",
      body:
        "Si estás buscando cómo sacar el DOT number (o cómo obtener un DOT number), este servicio es para ti. Creamos tu estructura legal y te dejamos listo para operar y asegurar sin enredos con FMCSA. Proceso documentado, en español y con responsable real.",
      ctaPrimary: "Ver paquetes y comprar",
      ctaSecondary: "Ver cómo funciona",
      seal:
        "Registered LLC · EIN verificable · Proceso en español · Evidencia + seguimiento diario",
    },
    rail: [
      {
        title: "Crea tu compañía",
        desc: "LLC · EIN · DOT · MC",
        link: "/services#packages",
      },
      {
        title: "Evita errores con FMCSA",
        desc: "Proceso paso a paso",
        link: "#como-funciona",
      },
      {
        title: "Transparencia real",
        desc: "Service fee vs gov fees",
        link: "#fees",
      },
      {
        title: "Soporte real",
        desc: "No desaparecemos",
        link: "#faq",
      },
    ],
    trust: {
      title: "Hecho para convertir (y para protegerte)",
      cards: [
        {
          title: "Transparencia real",
          body:
            "Separa tu service fee de los government fees. Nada de cobros ocultos ni retención de pagos oficiales.",
        },
        {
          title: "Seguimiento diario",
          body:
            "Te informamos estado del proceso, tiempos y próximos pasos. Si algo falla, respondemos.",
        },
        {
          title: "Hecho para latinos",
          body:
            "Todo en español, con estructura. Sin inglés técnico confuso, sin vueltas, sin cuentos.",
        },
        {
          title: "Cero malas prácticas",
          body:
            "No firmamos por ti, no inventamos datos. Evitamos bloqueos y auditorías por errores.",
        },
      ],
    },
    how: {
      kicker: "Cómo funciona",
      title: "De pago a empresa activa, sin improvisación",
      intro:
        "Este flujo existe para eliminar errores, estafas y retrasos. Todo es visible, documentado y con un responsable real asignado.",
      steps: [
        {
          n: "01",
          t: "Eliges paquete",
          d: "Interstate o Intrastate. Ves qué incluye y qué NO incluye (sin letra pequeña).",
        },
        {
          n: "02",
          t: "Formulario post-pago",
          d: "Entregas la info necesaria (incluye 3 nombres).",
        },
        {
          n: "03",
          t: "Validación real",
          d: "Confirmamos coherencia de operación y nombre disponible antes de someter registros.",
        },
        {
          n: "04",
          t: "Ejecución",
          d: "Procesamos LLC/EIN/DOT/MC/etc. con evidencia.",
        },
        {
          n: "05",
          t: "Seguimiento diario",
          d: "Estado, tiempos y próximos pasos. Sin silencio.",
        },
        {
          n: "06",
          t: "Entrega final",
          d: "Documentos listos y camino preparado para seguro/compliance.",
        },
      ],
    },
    fees: {
      title: "Service fee vs Government fees (sin letra pequeña)",
      body:
        "Pagas a Sovereign por el acompañamiento (service fee). Los fees oficiales (FMCSA, UCR, SoS, process agent, TXDMV, etc.) se pagan por separado en portales oficiales o proveedores oficiales. Esto protege tu dinero y evita estafas.",
      note:
        "Nota: no ofrecemos servicios legales. Proveemos asistencia administrativa y acompañamiento en cumplimiento.",
    },
    catalog: {
      kicker: "Servicios individuales",
      title: "Catálogo (informativo)",
      body:
        "Si buscas solo un trámite (por ejemplo: dot number application, actualización DOT/MCS-150, BOI, UCR, BOC-3), aquí ves especificaciones. La compra individual se habilita por solicitud directa mientras consolidamos el flujo automático.",
      cta: "Quiero un servicio puntual",
      items: [
        { title: "EIN Filing", price: "USD $99", desc: "IRS · 24h · Sin fee gubernamental" },
        { title: "BOI Filing (FinCEN)", price: "USD $59", desc: "Reporte de beneficiarios · 24h" },
        { title: "DOT / MCS-150", price: "USD $149", desc: "Registro o actualización · 24–48h" },
        { title: "MC Authority Assistance", price: "USD $249", desc: "FMCSA · guía + preparación" },
        { title: "BOC-3 Assistance", price: "USD $69", desc: "Process Agent · 24h" },
        { title: "UCR Filing", price: "USD $89", desc: "Mismo día · según flota" },
        { title: "TXDMV Intrastate", price: "USD $179", desc: "Texas · 2–7 días (si aplica)" },
        { title: "Compliance Check", price: "USD $75", desc: "Diagnóstico de riesgo · 24h" },
        { title: "Reactivación USDOT / MC", price: "USD $250", desc: "Retorno a operación · depende del caso" },
        { title: "Cambio de nombre compañía", price: "USD $200", desc: "Actualización estatal + coherencia" },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Esto sirve si estoy buscando cómo sacar el DOT number?",
          a: "Sí. Este servicio existe para eso: crear tu estructura (LLC/EIN) y ayudarte con DOT y, si aplica, MC. Evitamos errores con FMCSA y te dejamos documentado.",
        },
        {
          q: "¿Incluye los government fees?",
          a: "No. Pagas el acompañamiento (service fee). Los fees oficiales se pagan aparte en portales oficiales. Es una política de transparencia.",
        },
        {
          q: "¿Cuánto tarda?",
          a: "Depende del paquete. Intrastate suele ser 7–10 días. Interstate puede tardar 25–30 días por activación del MC Authority.",
        },
        {
          q: "¿Hablan español todo el proceso?",
          a: "Sí. Este servicio está diseñado para que no dependas de inglés técnico ni de tramitadores.",
        },
        {
          q: "¿Qué pasa si ninguno de los 3 nombres está disponible?",
          a: "Te contactamos, definimos 3 opciones nuevas y validamos antes de someter registros. Evitamos rechazos y retrasos.",
        },
      ],
    },
    final: {
      title: "Empieza bien desde el primer día",
      body:
        "Una mala estructura legal hoy se paga caro después. Si vas a iniciar, hazlo bien: LLC + EIN + DOT/MC, documentado y sin errores.",
      cta: "Crear mi compañía",
    },
    footer: {
      company: "Sovereign TruckGuard LLC",
      legalLine: "Sheridan, Wyoming · Registered U.S. Limited Liability Company",
      einNote: "EIN disponible para verificación bajo solicitud formal.",
      email: "info@sovereigntruckguard.com",
      phone: "+1 (608) 557-6282",
      hours: "Lun–Vie · 9:00 AM – 6:00 PM CST",
      spanish: "Atención en español",
      mapNote: "* Ubicación de registro / presencia pública.",
      rights: "© {year} Sovereign TruckGuard LLC · Powered by SOLYON Technologies.",
    },
  },

  en: {
    hero: {
      kicker: "PREMIUM REGULATORY SERVICES",
      subtitle: "Sovereign company setup & compliance for Latino truckers in the U.S.",
      h1a: "Start your trucking company in the USA",
      h1b: "DOT • MC • LLC • EIN • UCR — done right.",
      body:
        "If you’re searching how to get a DOT number, we guide you end-to-end. Setup + compliance, documented, Spanish support, and real accountability.",
      ctaPrimary: "See packages & buy",
      ctaSecondary: "How it works",
      seal: "Registered LLC · EIN verifiable · Spanish support · Daily updates",
    },
    rail: [
      { title: "Start your company", desc: "LLC · EIN · DOT · MC", link: "/services#packages" },
      { title: "Avoid FMCSA mistakes", desc: "Step-by-step process", link: "#como-funciona" },
      { title: "Real transparency", desc: "Service fee vs gov fees", link: "#fees" },
      { title: "Real support", desc: "We respond", link: "#faq" },
    ],
    trust: {
      title: "Built to convert (and protect you)",
      cards: [
        { title: "Real transparency", body: "Service fee separated from official government fees." },
        { title: "Daily follow-up", body: "Updates, timelines, next steps. We don’t disappear." },
        { title: "Spanish support", body: "Clear structure, no confusing jargon." },
        { title: "No bad practices", body: "No fake data. Compliance-first." },
      ],
    },
    how: {
      kicker: "How it works",
      title: "From payment to active company — clean execution",
      intro: "A documented flow that removes delays, scams and errors.",
      steps: [
        { n: "01", t: "Pick a package", d: "Interstate or Intrastate — clear scope." },
        { n: "02", t: "Post-payment form", d: "Provide required info (3 names included)." },
        { n: "03", t: "Real validation", d: "We validate consistency before submissions." },
        { n: "04", t: "Execution", d: "We process LLC/EIN/DOT/MC with evidence." },
        { n: "05", t: "Daily updates", d: "Progress + timelines." },
        { n: "06", t: "Final delivery", d: "Documents + next steps." },
      ],
    },
    fees: {
      title: "Service fee vs Government fees",
      body:
        "You pay Sovereign for professional assistance. Official fees are paid separately in official portals/providers — transparency by design.",
      note: "We do not provide legal services. Administrative assistance only.",
    },
    catalog: {
      kicker: "Individual services",
      title: "Catalog (informational)",
      body:
        "Need only one filing? See specs here. Direct purchase is enabled by request while we consolidate automation.",
      cta: "I need a single service",
      items: [
        { title: "EIN Filing", price: "USD $99", desc: "IRS · 24h · No gov fee" },
        { title: "BOI Filing", price: "USD $59", desc: "FinCEN · 24h" },
        { title: "DOT / MCS-150", price: "USD $149", desc: "24–48h" },
        { title: "MC Authority Assistance", price: "USD $249", desc: "FMCSA guidance" },
        { title: "BOC-3 Assistance", price: "USD $69", desc: "24h" },
        { title: "UCR Filing", price: "USD $89", desc: "Same day" },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "Does this help if I need a DOT number?", a: "Yes. Company setup + DOT/MC guidance with compliance." },
        { q: "Are government fees included?", a: "No. They are paid separately in official portals." },
        { q: "How long does it take?", a: "Intrastate: ~7–10 days. Interstate: ~25–30 days (MC activation)." },
      ],
    },
    final: {
      title: "Start right from day one",
      body: "Bad setup becomes expensive later. Do it right: LLC + EIN + DOT/MC.",
      cta: "Start my company",
    },
    footer: {
      company: "Sovereign TruckGuard LLC",
      legalLine: "Sheridan, Wyoming · Registered U.S. Limited Liability Company",
      einNote: "EIN available upon formal request.",
      email: "info@sovereigntruckguard.com",
      phone: "+1 (608) 557-6282",
      hours: "Mon–Fri · 9:00 AM – 6:00 PM CST",
      spanish: "Spanish support available",
      mapNote: "* Registered location / public presence.",
      rights: "© {year} Sovereign TruckGuard LLC · Powered by SOLYON Technologies.",
    },
  },
};

/* =========================
   UI HELPERS
========================= */

function Container({ children, id, style }) {
  return (
    <section
      id={id}
      style={{
        maxWidth: layout.maxWidth,
        margin: "0 auto",
        padding: `0 ${layout.sidePadding}px`,
        ...style,
      }}
    >
      {children}
    </section>
  );
}

function Pill({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 12px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.18)",
        background: "rgba(0,0,0,0.35)",
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.86)",
        fontFamily: "Montserrat, system-ui",
      }}
    >
      {children}
    </span>
  );
}

function PrimaryCTA({ href, children }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "14px 34px",
        borderRadius: 999,
        background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
        color: "#000",
        fontWeight: 800,
        textDecoration: "none",
        boxShadow: "0 16px 44px rgba(255,215,0,0.28)",
        fontFamily: "Montserrat, system-ui",
        fontSize: 14,
      }}
    >
      {children}
    </a>
  );
}

function SoftLink({ href, children }) {
  return (
    <a
      href={href}
      style={{
        fontSize: 13,
        color: "rgba(255,255,255,0.76)",
        textDecoration: "underline",
      }}
    >
      {children}
    </a>
  );
}

/* =========================
   HERO (cards removed, rail moved below)
========================= */

function Hero({ t }) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        paddingTop: 120,
        paddingBottom: 64,
        background: colors.bg,
      }}
    >
      <video
        src="/hero-truck.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.5) saturate(1.05)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.64), rgba(0,0,0,0.92))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 860,
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Pill>{t.hero.kicker}</Pill>

        <p
          style={{
            margin: "14px 0 0",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: colors.gold,
            fontFamily: "Montserrat, system-ui",
          }}
        >
          {t.hero.subtitle}
        </p>

        <h1
          style={{
            margin: "12px 0 0",
            fontSize: 34,
            lineHeight: 1.15,
            fontWeight: 900,
            fontFamily: "Montserrat, system-ui",
          }}
        >
          {t.hero.h1a}
          <br />
          <span style={{ color: colors.gold }}>{t.hero.h1b}</span>
        </h1>

        <p
          style={{
            margin: "16px auto 0",
            maxWidth: 780,
            fontSize: 15,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {t.hero.body}
        </p>

        <div
          style={{
            marginTop: 24,
            display: "flex",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <PrimaryCTA href="/services#packages">{t.hero.ctaPrimary}</PrimaryCTA>
          <SoftLink href="#como-funciona">{t.hero.ctaSecondary}</SoftLink>
        </div>

        <p
          style={{
            marginTop: 16,
            fontSize: 11,
            color: "rgba(255,255,255,0.68)",
          }}
        >
          {t.hero.seal}
        </p>
      </div>
    </section>
  );
}

/* =========================
   SERVICE RAIL (below hero)
========================= */

function ServiceRail({ t }) {
  return (
    <section
      style={{
        padding: "28px 0 8px",
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.92), rgba(5,5,5,1))",
      }}
    >
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
            gap: 14,
            marginTop: 8,
          }}
        >
          {t.rail.map((s) => (
            <a
              key={s.title}
              href={s.link}
              style={{
                borderRadius: 18,
                padding: 16,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(0,0,0,0.70)",
                textDecoration: "none",
                color: "white",
                boxShadow: "0 18px 55px rgba(0,0,0,0.85)",
              }}
            >
              <div
                style={{
                  fontFamily: "Montserrat, system-ui",
                  fontWeight: 900,
                  color: colors.gold,
                  fontSize: 15,
                }}
              >
                {s.title}
              </div>
              <div style={{ marginTop: 6, fontSize: 13, color: "rgba(255,255,255,0.82)" }}>
                {s.desc}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================
   TRUST
========================= */

function Trust({ t }) {
  return (
    <section style={{ padding: "56px 0 0" }}>
      <Container>
        <h2
          style={{
            margin: 0,
            fontSize: 26,
            fontFamily: "Montserrat, system-ui",
          }}
        >
          {t.trust.title}
        </h2>

        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {t.trust.cards.map((it) => (
            <div
              key={it.title}
              style={{
                borderRadius: 20,
                padding: 18,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.03)",
                boxShadow: "0 18px 60px rgba(0,0,0,0.85)",
              }}
            >
              <div
                style={{
                  color: colors.gold,
                  fontWeight: 900,
                  marginBottom: 8,
                  fontFamily: "Montserrat, system-ui",
                }}
              >
                {it.title}
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.86)" }}>
                {it.body}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================
   HOW IT WORKS
========================= */

function HowItWorks({ t }) {
  return (
    <section id="como-funciona" style={{ padding: "70px 0 0" }}>
      <Container>
        <p
          style={{
            margin: 0,
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: colors.gold,
            fontFamily: "Montserrat, system-ui",
          }}
        >
          {t.how.kicker}
        </p>

        <h2 style={{ margin: "10px 0 0", fontSize: 28, fontFamily: "Montserrat, system-ui" }}>
          {t.how.title}
        </h2>

        <p
          style={{
            marginTop: 10,
            maxWidth: 900,
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.7,
          }}
        >
          {t.how.intro}
        </p>

        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {t.how.steps.map((s) => (
            <div
              key={s.n}
              style={{
                borderRadius: 18,
                padding: 18,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div style={{ fontSize: 12, letterSpacing: "0.2em", color: colors.gold }}>
                {s.n}
              </div>
              <div style={{ marginTop: 6, fontSize: 15, fontWeight: 950 }}>
                {s.t}
              </div>
              <div style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
                {s.d}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 22 }}>
          <PrimaryCTA href="/services#packages">Ver paquetes y comprar</PrimaryCTA>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   FEES (transparency)
========================= */

function Fees({ t }) {
  return (
    <section id="fees" style={{ padding: "70px 0 0" }}>
      <Container>
        <div
          style={{
            borderRadius: 24,
            padding: 22,
            background:
              "radial-gradient(circle at top, rgba(255,215,0,0.10), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 24px 70px rgba(0,0,0,0.95)",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 22, color: colors.gold, fontFamily: "Montserrat, system-ui" }}>
            {t.fees.title}
          </h2>
          <p style={{ marginTop: 10, fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
            {t.fees.body}
          </p>
          <p style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.78)" }}>
            {t.fees.note}
          </p>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   CATALOG (informational only — no “Buy” buttons)
========================= */

function Catalog({ t }) {
  return (
    <section style={{ padding: "70px 0 0" }}>
      <Container>
        <p
          style={{
            margin: 0,
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: colors.gold,
            fontFamily: "Montserrat, system-ui",
          }}
        >
          {t.catalog.kicker}
        </p>

        <h2 style={{ margin: "10px 0 0", fontSize: 28, fontFamily: "Montserrat, system-ui" }}>
          {t.catalog.title}
        </h2>

        <p
          style={{
            marginTop: 10,
            maxWidth: 900,
            color: "rgba(255,255,255,0.80)",
            lineHeight: 1.7,
          }}
        >
          {t.catalog.body}
        </p>

        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 14,
          }}
        >
          {t.catalog.items.map((s) => (
            <div
              key={s.title}
              style={{
                borderRadius: 18,
                padding: 16,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.03)",
                boxShadow: "0 18px 60px rgba(0,0,0,0.80)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline" }}>
                <div style={{ fontWeight: 950, color: colors.gold, fontFamily: "Montserrat, system-ui" }}>
                  {s.title}
                </div>
                <div style={{ fontWeight: 950 }}>{s.price}</div>
              </div>
              <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.82)", lineHeight: 1.5 }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18 }}>
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 22px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.28)",
              background: "rgba(0,0,0,0.35)",
              color: "rgba(255,255,255,0.92)",
              textDecoration: "none",
              fontWeight: 800,
              fontFamily: "Montserrat, system-ui",
              fontSize: 13,
            }}
          >
            {t.catalog.cta}
          </a>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   FAQ
========================= */

function FAQ({ t }) {
  return (
    <section id="faq" style={{ padding: "70px 0 0" }}>
      <Container>
        <h2 style={{ margin: 0, fontSize: 28, fontFamily: "Montserrat, system-ui" }}>
          {t.faq.title}
        </h2>

        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 16,
          }}
        >
          {t.faq.items.map((it) => (
            <div
              key={it.q}
              style={{
                borderRadius: 18,
                padding: 18,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div style={{ fontWeight: 950, color: colors.gold }}>{it.q}</div>
              <div style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                {it.a}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 22 }}>
          <PrimaryCTA href="/services#packages">Ver paquetes y comprar</PrimaryCTA>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   FINAL CTA
========================= */

function FinalCTA({ t }) {
  return (
    <section
      style={{
        marginTop: 80,
        padding: "70px 20px",
        textAlign: "center",
        background:
          "radial-gradient(circle at top, rgba(255,215,0,0.18), rgba(0,0,0,0.95))",
        borderTop: "1px solid rgba(255,255,255,0.10)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <h2 style={{ margin: 0, fontSize: 30, fontFamily: "Montserrat, system-ui" }}>
        {t.final.title}
      </h2>
      <p style={{ marginTop: 10, fontSize: 15, color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
        {t.final.body}
      </p>

      <div style={{ marginTop: 20 }}>
        <PrimaryCTA href="/services#packages">{t.final.cta}</PrimaryCTA>
      </div>
    </section>
  );
}

/* =========================
   FOOTER (full, not opaque, with map + hours)
========================= */

function Footer({ t }) {
  const year = new Date().getFullYear();
  const rights = t.footer.rights.replace("{year}", String(year));

  const googleMapsEmbed =
    "https://www.google.com/maps?q=30%20N%20Gould%20St%20Ste%20N,%20Sheridan,%20WY%2082801&output=embed";

  return (
    <footer
      style={{
        marginTop: 0,
        borderTop: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(0,0,0,0.92)",
      }}
    >
      <Container style={{ paddingTop: 34, paddingBottom: 34 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 22,
            alignItems: "start",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/logo-sovereign.png" alt="Sovereign" style={{ width: 36, height: "auto" }} />
              <div style={{ fontWeight: 950, fontFamily: "Montserrat, system-ui" }}>
                {t.footer.company}
              </div>
            </div>

            <div style={{ marginTop: 10, fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.6 }}>
              {t.footer.legalLine}
              <br />
              30 N Gould St, Ste N
              <br />
              Sheridan, WY 82801 · USA
            </div>

            <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
              {t.footer.einNote}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 950, color: colors.gold, marginBottom: 10, fontFamily: "Montserrat, system-ui" }}>
              Ubicación
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.10)" }}>
              <iframe
                src={googleMapsEmbed}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.72)" }}>
              {t.footer.mapNote}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 950, color: colors.gold, marginBottom: 10, fontFamily: "Montserrat, system-ui" }}>
              Contacto
            </div>

            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.9 }}>
              Email:{" "}
              <a
                href={`mailto:${t.footer.email}`}
                style={{ color: colors.gold, textDecoration: "none", fontWeight: 800 }}
              >
                {t.footer.email}
              </a>
              <br />
              Teléfono: <span style={{ color: colors.gold, fontWeight: 800 }}>{t.footer.phone}</span>
              <br />
              Horario: <span style={{ color: "rgba(255,255,255,0.92)" }}>{t.footer.hours}</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.80)" }}>{t.footer.spanish}</span>
            </div>

            <div style={{ marginTop: 14 }}>
              <PrimaryCTA href="/services#packages">Ver paquetes</PrimaryCTA>
            </div>
          </div>
        </div>
      </Container>

      <div
        style={{
          textAlign: "center",
          padding: "12px 10px",
          fontSize: 11,
          color: "rgba(255,255,255,0.72)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {rights}
      </div>
    </footer>
  );
}

/* =========================
   PAGE
========================= */

export default function Page() {
  const { lang } = useLanguage();

  const t = useMemo(() => {
    return lang === "en" ? TEXT.en : TEXT.es;
  }, [lang]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(255,215,0,0.12), transparent 55%)," +
          "radial-gradient(circle at bottom, rgba(232,183,183,0.12), transparent 55%)," +
          colors.bg,
        color: colors.white,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Header viene de /components/Header.jsx */}
      <Header />

      {/* Home conversion flow */}
      <Hero t={t} />
      <ServiceRail t={t} />
      <Trust t={t} />
      <HowItWorks t={t} />
      <Fees t={t} />
      <Catalog t={t} />
      <FAQ t={t} />
      <FinalCTA t={t} />
      <Footer t={t} />
    </main>
  );
}
