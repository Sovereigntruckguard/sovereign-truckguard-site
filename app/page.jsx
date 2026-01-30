"use client";

import Header from "./components/Header.jsx";

const theme = {
  black: "#050505",
  ink: "#0E1726",
  text: "#1F2937",
  muted: "#5B6576",
  line: "rgba(15,23,42,0.10)",
  gold: "#C9A227",
  bg: "#F6F7FB",      // fondo institucional
  card: "#FFFFFF",
};

const layout = {
  maxWidth: 1120,
  pad: 22,
};

function Container({ children }) {
  return (
    <div
      style={{
        maxWidth: layout.maxWidth,
        margin: "0 auto",
        padding: `0 ${layout.pad}px`,
      }}
    >
      {children}
    </div>
  );
}

function ButtonPrimary({ href, children }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "14px 22px",
        borderRadius: 999,
        background: theme.gold,
        color: "#000",
        fontWeight: 800,
        textDecoration: "none",
        boxShadow: "0 14px 34px rgba(0,0,0,0.22)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </a>
  );
}

function ButtonGhost({ href, children }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 18px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.10)",
        color: "rgba(255,255,255,0.92)",
        fontWeight: 700,
        textDecoration: "none",
        border: "1px solid rgba(255,255,255,0.18)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </a>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: theme.card,
        border: `1px solid ${theme.line}`,
        borderRadius: 18,
        padding: 22,
        boxShadow: "0 18px 55px rgba(15,23,42,0.08)",
      }}
    >
      {children}
    </div>
  );
}

/* =========================
   HERO (oscuro + video)
========================= */

function Hero() {
  return (
    <section style={{ position: "relative", paddingTop: 140, paddingBottom: 120, overflow: "hidden" }}>
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
            "linear-gradient(to bottom, rgba(0,0,0,0.62), rgba(0,0,0,0.90))",
        }}
      />

      <Container>
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", color: "#fff" }}>
          <p
            style={{
              margin: 0,
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: theme.gold,
              opacity: 0.95,
            }}
          >
            Ecosistema soberano de protección y crecimiento para camioneros latinos
          </p>

          <h1 style={{ marginTop: 14, fontSize: 40, lineHeight: 1.15 }}>
            Protegemos y ordenamos <br />
            tu compañía de camiones en Estados Unidos
          </h1>

          <p style={{ marginTop: 14, fontSize: 16, opacity: 0.9, maxWidth: 860, marginInline: "auto" }}>
            Antes de gastar dinero en trámites o cometer errores, te damos un diagnóstico claro y un plan:
            inicio si eres nuevo, o rescate si ya estás operando con problemas.
          </p>

          <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <ButtonPrimary href="#diagnostico">Quiero mi diagnóstico</ButtonPrimary>
            <ButtonGhost href="/services">Ver servicios</ButtonGhost>
          </div>

          <div style={{ marginTop: 16 }}>
            <a href="#como-funciona" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline", fontSize: 13 }}>
              Cómo funciona el proceso
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   SECCIÓN BASE (clara)
========================= */

function LightSection({ id, title, subtitle, children }) {
  return (
    <section id={id} style={{ background: theme.bg, padding: "84px 0" }}>
      <Container>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ margin: 0, fontSize: 30, color: theme.ink }}>{title}</h2>
          {subtitle ? (
            <p style={{ marginTop: 12, color: theme.muted, fontSize: 16, maxWidth: 860, marginInline: "auto" }}>
              {subtitle}
            </p>
          ) : null}
        </div>

        <div style={{ marginTop: 38 }}>{children}</div>
      </Container>
    </section>
  );
}

/* =========================
   DIAGNÓSTICO SOBERANO (core)
========================= */

function Diagnostico() {
  return (
    <LightSection
      id="diagnostico"
      title="Diagnóstico Soberano"
      subtitle="Te decimos exactamente qué camino seguir antes de gastar dinero: plan de inicio si eres nuevo, o plan de rescate si ya estás operando con problemas."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
          alignItems: "stretch",
        }}
      >
        <Card>
          <h3 style={{ margin: 0, fontSize: 18, color: theme.ink }}>Soy camionero nuevo</h3>
          <p style={{ marginTop: 10, color: theme.muted, lineHeight: 1.55 }}>
            Te damos un checklist completo y te acompañamos paso a paso para crear tu empresa de forma impecable:
            LLC, EIN, DOT/MC, setup y preparación para operar.
          </p>
          <div style={{ marginTop: 16 }}>
            <a href="/services#packages" style={{ color: theme.ink, fontWeight: 800, textDecoration: "none" }}>
              Ver Plan de Inicio →
            </a>
          </div>
        </Card>

        <Card>
          <h3 style={{ margin: 0, fontSize: 18, color: theme.ink }}>Ya tengo compañía / estoy en problemas</h3>
          <p style={{ marginTop: 10, color: theme.muted, lineHeight: 1.55 }}>
            Si tienes bloqueos, vencimientos, desorden o estás al borde: diseñamos un plan estricto de rescate y cumplimiento
            para recuperar control y proteger tu operación.
          </p>
          <div style={{ marginTop: 16 }}>
            <a href="/services#packages" style={{ color: theme.ink, fontWeight: 800, textDecoration: "none" }}>
              Ver Plan de Rescate →
            </a>
          </div>
        </Card>
      </div>
    </LightSection>
  );
}

/* =========================
   CÓMO FUNCIONA
========================= */

function ComoFunciona() {
  const steps = [
    ["Diagnóstico", "Entendemos tu situación y definimos el camino correcto."],
    ["Plan", "Inicio o Rescate, con checklist y responsables claros."],
    ["Ejecución", "Trámites, estructura y puesta en marcha sin errores."],
    ["Cumplimiento", "Calendario, seguimiento y control para evitar multas."],
    ["Crecimiento", "Orden financiero, herramientas y acompañamiento real."],
  ];

  return (
    <LightSection
      id="como-funciona"
      title="Cómo funciona (sin improvisación)"
      subtitle="Proceso simple, documentado y trazable. Así se protege un negocio real."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 14,
        }}
      >
        {steps.map(([t, d], idx) => (
          <div
            key={t}
            style={{
              background: theme.card,
              border: `1px solid ${theme.line}`,
              borderRadius: 16,
              padding: 18,
            }}
          >
            <div style={{ fontWeight: 900, color: theme.gold, fontSize: 12, letterSpacing: "0.12em" }}>
              PASO {idx + 1}
            </div>
            <div style={{ marginTop: 8, fontSize: 16, fontWeight: 900, color: theme.ink }}>{t}</div>
            <div style={{ marginTop: 8, color: theme.muted, lineHeight: 1.55 }}>{d}</div>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

/* =========================
   ECOSYSTEM MAP (contenida + con copy)
========================= */

function EcosystemMap() {
  return (
    <LightSection
      id="ecosistema"
      title="Mapa del ecosistema"
      subtitle="Visual, claro y en español. Así te llevamos de cero a operación sólida, y de problemas a control."
    >
      <div
        style={{
          background: theme.card,
          border: `1px solid ${theme.line}`,
          borderRadius: 18,
          padding: 18,
          boxShadow: "0 18px 55px rgba(15,23,42,0.08)",
        }}
      >
        <img
          src="/ecosystem-map.png"
          alt="Ecosistema Sovereign TruckGuard"
          style={{ width: "100%", maxWidth: 980, display: "block", margin: "0 auto", borderRadius: 14 }}
        />
      </div>
    </LightSection>
  );
}

/* =========================
   TECNOLOGÍA (mockups con captions)
========================= */

function Tecnologia() {
  const items = [
    {
      src: "/mockup-mobile-truckboss.png",
      title: "TruckBoss (operación del camionero)",
      desc: "Checklist, control y guía diaria para operar sin errores.",
    },
    {
      src: "/mockup-desktop-azoth.png",
      title: "AZOTH (control ejecutivo)",
      desc: "Panel institucional para seguimiento, casos y trazabilidad.",
    },
    {
      src: "/mockup-desktop-ops.png",
      title: "Centro Operativo (seguimiento)",
      desc: "Calendario, alertas y cumplimiento bajo control.",
    },
  ];

  return (
    <LightSection
      id="tecnologia"
      title="Tecnología que respalda el ecosistema"
      subtitle="No vendemos humo. Esto es operación real: control, seguimiento, evidencia y decisiones."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
          alignItems: "start",
        }}
      >
        {items.map((it) => (
          <div
            key={it.src}
            style={{
              background: theme.card,
              border: `1px solid ${theme.line}`,
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 18px 55px rgba(15,23,42,0.08)",
            }}
          >
            <div style={{ padding: 14, borderBottom: `1px solid ${theme.line}` }}>
              <div style={{ fontWeight: 900, color: theme.ink }}>{it.title}</div>
              <div style={{ marginTop: 6, color: theme.muted, fontSize: 14, lineHeight: 1.5 }}>{it.desc}</div>
            </div>
            <div style={{ padding: 14 }}>
              <img src={it.src} alt={it.title} style={{ width: "100%", display: "block", borderRadius: 12 }} />
            </div>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

/* =========================
   FEES (con copy real)
========================= */

function Transparencia() {
  return (
    <LightSection
      id="transparencia"
      title="Transparencia total de costos"
      subtitle="Pagas por acompañamiento profesional. Los fees gubernamentales se pagan directamente en portales oficiales."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 18,
          alignItems: "center",
        }}
      >
        <Card>
          <h3 style={{ margin: 0, color: theme.ink }}>Sin letra pequeña</h3>
          <p style={{ marginTop: 10, color: theme.muted, lineHeight: 1.6 }}>
            En Sovereign TruckGuard no retenemos ni controlamos fees gubernamentales. Tú pagas directamente a FMCSA,
            Secretary of State, UCR, TXDMV/IRP/IFTA y Process Agent.
          </p>
          <p style={{ marginTop: 10, color: theme.muted, lineHeight: 1.6 }}>
            Esto protege tu dinero y tu operación. Es la base de la confianza.
          </p>
          <div style={{ marginTop: 16 }}>
            <a href="/services" style={{ color: theme.ink, fontWeight: 900, textDecoration: "none" }}>
              Ver servicios y paquetes →
            </a>
          </div>
        </Card>

        <div
          style={{
            background: theme.card,
            border: `1px solid ${theme.line}`,
            borderRadius: 18,
            padding: 14,
            boxShadow: "0 18px 55px rgba(15,23,42,0.08)",
          }}
        >
          <img
            src="/fees-transparency.png"
            alt="Service fee vs Government fees"
            style={{ width: "100%", maxWidth: 680, display: "block", margin: "0 auto", borderRadius: 12 }}
          />
        </div>
      </div>
    </LightSection>
  );
}

/* =========================
   OPERACIÓN (lujo institucional)
========================= */

function Operacion() {
  return (
    <LightSection
      id="operacion"
      title="Operación real, nivel institucional"
      subtitle="No somos un call center. Somos una operación estructurada con seguimiento, procesos y control."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 18,
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: theme.card,
            border: `1px solid ${theme.line}`,
            borderRadius: 18,
            padding: 14,
            boxShadow: "0 18px 55px rgba(15,23,42,0.08)",
          }}
        >
          <img
            src="/office-ops.png"
            alt="Oficina institucional Sovereign"
            style={{ width: "100%", display: "block", borderRadius: 12 }}
          />
        </div>

        <Card>
          <h3 style={{ margin: 0, color: theme.ink }}>Acompañamiento y seguimiento</h3>
          <p style={{ marginTop: 10, color: theme.muted, lineHeight: 1.6 }}>
            Te guiamos paso a paso, dejamos evidencia y te mantenemos al día con calendarios, checklist y recordatorios.
            El objetivo es simple: proteger tu compañía y hacerla crecer con orden.
          </p>
          <div style={{ marginTop: 16 }}>
            <ButtonPrimary href="#diagnostico">Quiero mi diagnóstico</ButtonPrimary>
          </div>
        </Card>
      </div>
    </LightSection>
  );
}

/* =========================
   CTA FINAL
========================= */

function FinalCTA() {
  return (
    <section style={{ background: theme.black, padding: "110px 0", color: "#fff" }}>
      <Container>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 34, margin: 0 }}>Empieza con orden. Crece con respaldo.</h2>
          <p style={{ marginTop: 12, opacity: 0.85, fontSize: 16, maxWidth: 860, marginInline: "auto" }}>
            Antes de crear tu compañía, recibe un diagnóstico claro y un plan real.
            Eso evita errores caros y te pone a operar como se debe.
          </p>
          <div style={{ marginTop: 26 }}>
            <ButtonPrimary href="#diagnostico">Quiero mi diagnóstico</ButtonPrimary>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   FOOTER
========================= */

function Footer() {
  return (
    <footer style={{ background: theme.black, color: "rgba(255,255,255,0.86)", padding: "34px 0" }}>
      <Container>
        <div style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 22 }}>
          <div style={{ fontWeight: 900 }}>Sovereign TruckGuard LLC</div>
          <div style={{ marginTop: 8, fontSize: 13, opacity: 0.85 }}>
            30 N Gould St, Ste N · Sheridan, Wyoming 82801 · USA · info@sovereigntruckguard.com · +1 (608) 557-6282
          </div>
          <div style={{ marginTop: 10, fontSize: 12, opacity: 0.65 }}>
            © {new Date().getFullYear()} · Powered by SOLYON
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* =========================
   PAGE
========================= */

export default function Page() {
  return (
    <main style={{ background: theme.black }}>
      <Header />
      <Hero />
      <Diagnostico />
      <ComoFunciona />
      <EcosystemMap />
      <Tecnologia />
      <Transparencia />
      <Operacion />
      <FinalCTA />
      <Footer />
    </main>
  );
}
