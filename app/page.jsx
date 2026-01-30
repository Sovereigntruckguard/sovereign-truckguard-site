"use client";

import Header from "./components/Header.jsx";

const theme = {
  bg: "#050505",
  gold: "#C9A227",
  white: "#FFFFFF",
  ink: "rgba(255,255,255,0.92)",
  muted: "rgba(255,255,255,0.70)",
  line: "rgba(255,255,255,0.10)",
  soft: "rgba(255,255,255,0.06)",
};

const layout = {
  max: 1120,
  pad: 22,
};

function Container({ children }) {
  return (
    <div style={{ maxWidth: layout.max, margin: "0 auto", padding: `0 ${layout.pad}px` }}>
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: theme.line, margin: "54px 0" }} />;
}

function GoldTag({ children }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 14px",
        borderRadius: 999,
        border: `1px solid ${theme.line}`,
        background: "rgba(0,0,0,0.35)",
        color: theme.gold,
        fontWeight: 800,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        fontSize: 11,
      }}
    >
      {children}
    </div>
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
        padding: "14px 22px",
        borderRadius: 999,
        background: theme.gold,
        color: "#000",
        fontWeight: 900,
        textDecoration: "none",
        boxShadow: "0 18px 48px rgba(0,0,0,0.45)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </a>
  );
}

function GhostCTA({ href, children }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 18px",
        borderRadius: 999,
        border: `1px solid ${theme.line}`,
        background: "rgba(255,255,255,0.05)",
        color: "rgba(255,255,255,0.88)",
        fontWeight: 800,
        textDecoration: "none",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </a>
  );
}

/* =========================
   HERO = PUERTA (sin header)
========================= */
function HeroPortal() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        // si en móvil te queda demasiado alto, cambia a 92vh:
        // minHeight: "92vh",
        display: "flex",
        alignItems: "center",
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
          filter: "brightness(0.55)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 20%, rgba(201,162,39,0.18), transparent 45%)," +
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.92))",
        }}
      />

      <Container>
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", color: theme.ink }}>
          {/* Sello minimal (sin header) */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
            <GoldTag>PORTAL SOBERANO</GoldTag>
          </div>

          {/* Marca como acto */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
            <img
              src="/logo-sovereign-full.png"
              alt="Sovereign TruckGuard"
              style={{
                width: 168,
                maxWidth: "55vw",
                height: "auto",
                filter: "drop-shadow(0 18px 40px rgba(0,0,0,0.55))",
              }}
            />
          </div>

          <h1 style={{ margin: "0 auto", fontSize: 44, lineHeight: 1.08, maxWidth: 980 }}>
            Protección y crecimiento <br />
            para compañías de camiones latinas
          </h1>

          <p style={{ marginTop: 16, color: theme.muted, fontSize: 16, maxWidth: 860, marginInline: "auto" }}>
            Esto no es un trámite. Es un sistema de orden, cumplimiento y control.
            Si vas a entrar, primero evaluamos tu situación y definimos el camino correcto.
          </p>

          <div style={{ marginTop: 30, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <PrimaryCTA href="#diagnostico">Iniciar Diagnóstico Soberano</PrimaryCTA>
            <GhostCTA href="/services">Ver servicios</GhostCTA>
          </div>

          <div style={{ marginTop: 18 }}>
            <a
              href="#manifiesto"
              style={{ color: "rgba(255,255,255,0.70)", textDecoration: "underline", fontSize: 13 }}
            >
              Entrar al sistema ↓
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   MANIFIESTO (editorial)
========================= */
function Manifiesto() {
  return (
    <section id="manifiesto" style={{ background: theme.bg, padding: "90px 0" }}>
      <Container>
        <div style={{ maxWidth: 900 }}>
          <GoldTag>MANIFIESTO</GoldTag>

          <h2 style={{ marginTop: 18, fontSize: 34, lineHeight: 1.15, color: theme.ink }}>
            No creamos compañías. <br />
            Creamos estructura.
          </h2>

          <div style={{ marginTop: 22, color: theme.muted, fontSize: 17, lineHeight: 1.75 }}>
            <p style={{ margin: 0 }}>
              No vendemos trámites. Protegemos operaciones reales.
            </p>
            <p style={{ margin: "10px 0 0" }}>
              No prometemos éxito. Construimos orden, cumplimiento y control.
            </p>
            <p style={{ margin: "10px 0 0" }}>
              La mayoría quiebra por desorden, no por falta de trabajo. Sovereign existe para evitar eso.
            </p>
          </div>

          <Divider />

          <div style={{ color: theme.ink, fontSize: 18, lineHeight: 1.7 }}>
            <span style={{ color: theme.gold, fontWeight: 900 }}>Regla:</span>{" "}
            antes de avanzar, se define el camino. Sin diagnóstico, no hay sistema.
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   UMBRAL + DIAGNÓSTICO
========================= */
function Diagnostico() {
  return (
    <section id="diagnostico" style={{ background: theme.bg, padding: "90px 0" }}>
      <Container>
        <div style={{ textAlign: "center" }}>
          <GoldTag>ENTRADA</GoldTag>

          <h2 style={{ marginTop: 18, fontSize: 34, color: theme.ink }}>
            Entrar al Sistema Soberano
          </h2>

          <p style={{ marginTop: 12, color: theme.muted, fontSize: 16, maxWidth: 860, marginInline: "auto" }}>
            Elige tu realidad. Nosotros diseñamos el plan y ejecutamos con trazabilidad.
          </p>
        </div>

        <div
          style={{
            marginTop: 36,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 18,
            alignItems: "stretch",
          }}
        >
          {/* Opción 1 */}
          <div
            style={{
              padding: 26,
              borderRadius: 18,
              border: `1px solid ${theme.line}`,
              background: theme.soft,
            }}
          >
            <div style={{ color: theme.gold, fontWeight: 900, letterSpacing: "0.14em", fontSize: 11 }}>
              CAMINO 1
            </div>
            <div style={{ marginTop: 10, color: theme.ink, fontWeight: 900, fontSize: 20 }}>
              Iniciar una compañía desde cero
            </div>
            <div style={{ marginTop: 10, color: theme.muted, lineHeight: 1.65 }}>
              Plan de inicio: LLC, EIN, DOT/MC, setup, checklist operativo y preparación para operar sin errores.
            </div>
            <div style={{ marginTop: 16 }}>
              <a href="/services#packages" style={{ color: theme.ink, fontWeight: 900, textDecoration: "none" }}>
                Ver Plan de Inicio →
              </a>
            </div>
          </div>

          {/* Opción 2 */}
          <div
            style={{
              padding: 26,
              borderRadius: 18,
              border: `1px solid ${theme.line}`,
              background: theme.soft,
            }}
          >
            <div style={{ color: theme.gold, fontWeight: 900, letterSpacing: "0.14em", fontSize: 11 }}>
              CAMINO 2
            </div>
            <div style={{ marginTop: 10, color: theme.ink, fontWeight: 900, fontSize: 20 }}>
              Recuperar una compañía en riesgo
            </div>
            <div style={{ marginTop: 10, color: theme.muted, lineHeight: 1.65 }}>
              Plan de rescate: cumplimiento, vencimientos, bloqueos, orden documental, control y seguimiento estricto.
            </div>
            <div style={{ marginTop: 16 }}>
              <a href="/services#packages" style={{ color: theme.ink, fontWeight: 900, textDecoration: "none" }}>
                Ver Plan de Rescate →
              </a>
            </div>
          </div>
        </div>

        <Divider />

        <div style={{ textAlign: "center" }}>
          <p style={{ color: theme.muted, fontSize: 15, maxWidth: 900, marginInline: "auto", lineHeight: 1.7 }}>
            Ningún proceso comienza sin un diagnóstico claro.  
            Aquí no se improvisa: se entra con estructura.
          </p>
          <div style={{ marginTop: 18 }}>
            <PrimaryCTA href="/services#packages">Iniciar Diagnóstico Soberano</PrimaryCTA>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   EVIDENCIA (sin galería)
========================= */
function Evidencia() {
  return (
    <section style={{ background: theme.bg, padding: "90px 0" }}>
      <Container>
        <div style={{ textAlign: "center" }}>
          <GoldTag>EVIDENCIA</GoldTag>
          <h2 style={{ marginTop: 18, fontSize: 34, color: theme.ink }}>
            El sistema existe. Opera.
          </h2>
          <p style={{ marginTop: 12, color: theme.muted, maxWidth: 900, marginInline: "auto", lineHeight: 1.7 }}>
            Control, seguimiento y trazabilidad. No vendemos humo.
          </p>
        </div>

        <Divider />

        {/* 1) Tecnología */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18 }}>
          <div style={{ maxWidth: 920 }}>
            <div style={{ color: theme.gold, fontWeight: 900, letterSpacing: "0.14em", fontSize: 11 }}>
              TECNOLOGÍA
            </div>
            <div style={{ marginTop: 10, color: theme.ink, fontWeight: 900, fontSize: 22 }}>
              Herramientas diarias para operar con control
            </div>
            <div style={{ marginTop: 10, color: theme.muted, lineHeight: 1.7 }}>
              TruckBoss (camionero) + AZOTH (control ejecutivo) + Ops (seguimiento).  
              Esto se usa todos los días.
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              alignItems: "start",
            }}
          >
            {[
              { src: "/mockup-mobile-truckboss.png", alt: "TruckBoss" },
              { src: "/mockup-desktop-azoth.png", alt: "AZOTH" },
              { src: "/mockup-desktop-ops.png", alt: "Ops" },
            ].map((it) => (
              <div
                key={it.src}
                style={{
                  borderRadius: 18,
                  border: `1px solid ${theme.line}`,
                  background: "rgba(255,255,255,0.04)",
                  padding: 12,
                }}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: 14,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* 2) Transparencia */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 18, alignItems: "center" }}>
          <div style={{ maxWidth: 820 }}>
            <div style={{ color: theme.gold, fontWeight: 900, letterSpacing: "0.14em", fontSize: 11 }}>
              TRANSPARENCIA
            </div>
            <div style={{ marginTop: 10, color: theme.ink, fontWeight: 900, fontSize: 22 }}>
              Service fee vs Government fees
            </div>
            <div style={{ marginTop: 10, color: theme.muted, lineHeight: 1.7 }}>
              Tú pagas fees gubernamentales directamente en portales oficiales.  
              Sovereign cobra solo acompañamiento profesional. Sin letra pequeña.
            </div>
            <div style={{ marginTop: 14 }}>
              <a href="/services" style={{ color: theme.ink, fontWeight: 900, textDecoration: "none" }}>
                Ver servicios y paquetes →
              </a>
            </div>
          </div>

          <div
            style={{
              borderRadius: 18,
              border: `1px solid ${theme.line}`,
              background: "rgba(255,255,255,0.04)",
              padding: 12,
            }}
          >
            <img
              src="/fees-transparency.png"
              alt="Fees transparency"
              style={{ width: "100%", display: "block", borderRadius: 14 }}
            />
          </div>
        </div>

        <Divider />

        {/* 3) Operación */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 18, alignItems: "center" }}>
          <div
            style={{
              borderRadius: 18,
              border: `1px solid ${theme.line}`,
              background: "rgba(255,255,255,0.04)",
              padding: 12,
            }}
          >
            <img
              src="/office-ops.png"
              alt="Operación institucional"
              style={{ width: "100%", display: "block", borderRadius: 14 }}
            />
          </div>

          <div style={{ maxWidth: 820 }}>
            <div style={{ color: theme.gold, fontWeight: 900, letterSpacing: "0.14em", fontSize: 11 }}>
              OPERACIÓN
            </div>
            <div style={{ marginTop: 10, color: theme.ink, fontWeight: 900, fontSize: 22 }}>
              Acompañamiento real, nivel institucional
            </div>
            <div style={{ marginTop: 10, color: theme.muted, lineHeight: 1.7 }}>
              Esto no es un call center. Es una operación con seguimiento, procesos y control.
            </div>
            <div style={{ marginTop: 18 }}>
              <PrimaryCTA href="#diagnostico">Iniciar Diagnóstico</PrimaryCTA>
            </div>
          </div>
        </div>

        <Divider />

        {/* 4) Ecosistema */}
        <div style={{ textAlign: "center" }}>
          <div style={{ color: theme.gold, fontWeight: 900, letterSpacing: "0.14em", fontSize: 11 }}>
            ECOSISTEMA
          </div>
          <div style={{ marginTop: 10, color: theme.ink, fontWeight: 900, fontSize: 22 }}>
            Mapa del sistema
          </div>
          <div style={{ marginTop: 10, color: theme.muted, maxWidth: 900, marginInline: "auto", lineHeight: 1.7 }}>
            Diagnóstico → Inicio/Rescate → Creación → Operación → Control → Crecimiento.
          </div>

          <div
            style={{
              marginTop: 18,
              borderRadius: 18,
              border: `1px solid ${theme.line}`,
              background: "rgba(255,255,255,0.04)",
              padding: 12,
              maxWidth: 980,
              marginInline: "auto",
            }}
          >
            <img
              src="/ecosystem-map.png"
              alt="Ecosystem map"
              style={{ width: "100%", display: "block", borderRadius: 14 }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   CIERRE (Acceso)
========================= */
function FinalAccess() {
  return (
    <section style={{ background: "#000", padding: "120px 0" }}>
      <Container>
        <div style={{ textAlign: "center", color: theme.ink }}>
          <GoldTag>ACCESO</GoldTag>

          <h2 style={{ marginTop: 18, fontSize: 38, lineHeight: 1.12 }}>
            Empieza con orden. <br />
            Crece con respaldo.
          </h2>

          <p style={{ marginTop: 14, color: theme.muted, maxWidth: 920, marginInline: "auto", lineHeight: 1.7 }}>
            Si vas a construir una compañía real, entra con estructura.  
            El diagnóstico define el camino. El sistema ejecuta.
          </p>

          <div style={{ marginTop: 26 }}>
            <PrimaryCTA href="#diagnostico">Solicitar acceso al sistema</PrimaryCTA>
          </div>

          <div style={{ marginTop: 28, color: "rgba(255,255,255,0.55)", fontSize: 12 }}>
            powered by Solyon Technologies
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#000", padding: "36px 0", borderTop: `1px solid ${theme.line}` }}>
      <Container>
        <div style={{ textAlign: "center", color: "rgba(255,255,255,0.78)", fontSize: 13, lineHeight: 1.8 }}>
          <div style={{ fontWeight: 900, color: "rgba(255,255,255,0.92)" }}>Sovereign TruckGuard LLC</div>
          <div>30 N Gould St, Ste N · Sheridan, Wyoming 82801 · USA</div>
          <div>info@sovereigntruckguard.com · +1 (608) 557-6282</div>
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
    <main style={{ background: theme.bg }}>
      {/* Header aparece solo después de scroll */}
      <Header />

      {/* Portal */}
      <HeroPortal />
      <Manifiesto />
      <Diagnostico />
      <Evidencia />
      <FinalAccess />
      <Footer />
    </main>
  );
}
