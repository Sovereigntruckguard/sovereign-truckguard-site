"use client";

import Header from "./components/Header.jsx";

const theme = {
  bg: "#050505",
  gold: "#C9A227",
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
   HERO — VIDEO VISIBLE (CAPAS OK)
========================= */
function HeroPortal() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* VIDEO DE FONDO */}
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
          zIndex: 0,
        }}
      />

      {/* OVERLAY (NO TAPA EL VIDEO) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(circle at 20% 10%, rgba(201,162,39,0.22), transparent 40%)," +
            "radial-gradient(circle at 80% 90%, rgba(255,255,255,0.04), transparent 55%)," +
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.92))",
        }}
      />

      <Container>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: theme.ink,
          }}
        >
          <img
            src="/logo-sovereign-mono.png"
            alt="Sovereign TruckGuard"
            style={{
              width: 260,
              maxWidth: "80vw",
              marginBottom: 28,
              filter: "drop-shadow(0 30px 70px rgba(0,0,0,0.7))",
            }}
          />

          <h1 style={{ fontSize: 44, lineHeight: 1.08 }}>
            Protección y crecimiento <br />
            para compañías de camiones latinas
          </h1>

          <p
            style={{
              marginTop: 16,
              color: theme.muted,
              fontSize: 16,
              maxWidth: 860,
              marginInline: "auto",
            }}
          >
            Un ecosistema creado desde la experiencia real para evitar la quiebra,
            ordenar la operación y posicionar a los camioneros latinos como empresarios.
          </p>

          <div
            style={{
              marginTop: 30,
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <PrimaryCTA href="#diagnostico">Iniciar Diagnóstico Soberano</PrimaryCTA>
            <GhostCTA href="/services">Ver servicios</GhostCTA>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   ECOSISTEMA — EJE (REDUCIDO)
========================= */
function Ecosystem() {
  return (
    <section style={{ background: theme.bg, padding: "90px 0" }}>
      <Container>
        <div style={{ textAlign: "center" }}>
          <GoldTag>EL SISTEMA</GoldTag>

          <h2 style={{ marginTop: 18, fontSize: 34, color: theme.ink }}>
            El orden evita la quiebra
          </h2>

          <p style={{ marginTop: 14, color: theme.muted, maxWidth: 900, marginInline: "auto", lineHeight: 1.7 }}>
            Diagnóstico → Inicio/Rescate → Creación → Operación → Control → Crecimiento.
            Una arquitectura que direcciona, articula y ejecuta.
          </p>

          <div
            style={{
              marginTop: 32,
              maxWidth: 520,
              marginInline: "auto",
              padding: 12,
              borderRadius: 18,
              border: `1px solid ${theme.line}`,
              background: theme.soft,
            }}
          >
            <img
              src="/ecosystem-map.png"
              alt="Ecosistema Sovereign"
              style={{ width: "100%", display: "block", borderRadius: 14 }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   EXPERIENCIA / EMPODERAMIENTO
========================= */
function Manifiesto() {
  return (
    <section id="manifiesto" style={{ background: theme.bg, padding: "90px 0" }}>
      <Container>
        <div style={{ maxWidth: 900 }}>
          <GoldTag>EXPERIENCIA</GoldTag>

          <h2 style={{ marginTop: 18, fontSize: 34, color: theme.ink }}>
            Nacido desde la experiencia, diseñado para empoderar
          </h2>

          <p style={{ marginTop: 18, color: theme.muted, fontSize: 17, lineHeight: 1.7 }}>
            Años viendo el mismo patrón: trabajo duro + desorden = quiebra.
            Este sistema existe para romper ese ciclo con criterio, estructura y acompañamiento real.
          </p>

          <Divider />

          <div style={{ color: theme.ink, fontSize: 18 }}>
            <strong style={{ color: theme.gold }}>Regla:</strong> sin orden no hay crecimiento.
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   DIAGNÓSTICO — ENTRADA
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
            Antes de avanzar, evaluamos tu situación y definimos el camino correcto.
            Aquí no se improvisa.
          </p>

          <div style={{ marginTop: 26 }}>
            <PrimaryCTA href="/services#packages">Iniciar Diagnóstico Soberano</PrimaryCTA>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   EVIDENCIA — TEXTO + IMÁGENES
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
            Tecnología, operación y reglas claras. No vendemos humo.
          </p>
        </div>

        <Divider />

        {/* TECNOLOGÍA */}
        <div style={{ maxWidth: 900 }}>
          <h3 style={{ color: theme.ink }}>Tecnología diaria</h3>
          <p style={{ color: theme.muted }}>
            Herramientas reales usadas todos los días para control, trazabilidad y decisiones.
          </p>
        </div>

        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
            gap: 16,
          }}
        >
          <img src="/mockup-mobile-truckboss.png" alt="TruckBoss App" style={{ width: "100%", borderRadius: 14 }} />
          <img src="/mockup-desktop-azoth.png" alt="AZOTH Control Center" style={{ width: "100%", borderRadius: 14 }} />
          <img src="/mockup-desktop-ops.png" alt="Centro Operativo" style={{ width: "100%", borderRadius: 14 }} />
        </div>

        <Divider />

        {/* TRANSPARENCIA */}
        <div style={{ maxWidth: 900 }}>
          <h3 style={{ color: theme.ink }}>Transparencia total</h3>
          <p style={{ color: theme.muted }}>
            Fees gubernamentales se pagan en portales oficiales. Sovereign cobra solo acompañamiento profesional.
          </p>
        </div>

        <img
          src="/fees-transparency.png"
          alt="Transparencia de fees"
          style={{ width: "100%", maxWidth: 820, margin: "18px auto", display: "block", borderRadius: 14 }}
        />

        <Divider />

        {/* OPERACIÓN */}
        <div style={{ maxWidth: 900 }}>
          <h3 style={{ color: theme.ink }}>Operación real</h3>
          <p style={{ color: theme.muted }}>
            No es un call center. Es una operación con procesos, seguimiento y responsables.
          </p>
        </div>

        <img
          src="/office-ops.png"
          alt="Operación institucional"
          style={{ width: "100%", borderRadius: 14 }}
        />
      </Container>
    </section>
  );
}

/* =========================
   CIERRE
========================= */
function FinalAccess() {
  return (
    <section style={{ background: "#000", padding: "120px 0" }}>
      <Container>
        <div style={{ textAlign: "center", color: theme.ink }}>
          <GoldTag>ACCESO</GoldTag>

          <h2 style={{ marginTop: 18, fontSize: 38 }}>
            Empieza con orden. Crece con respaldo.
          </h2>

          <p style={{ marginTop: 14, color: theme.muted }}>
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
        <div style={{ textAlign: "center", color: "rgba(255,255,255,0.78)", fontSize: 13 }}>
          <strong style={{ color: theme.ink }}>Sovereign TruckGuard LLC</strong>
          <div>30 N Gould St, Ste N · Sheridan, Wyoming 82801 · USA</div>
          <div>info@sovereigntruckguard.com · +1 (608) 557-6282</div>
          <div style={{ marginTop: 10, fontSize: 12 }}>
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
      <Header />
      <HeroPortal />
      <Ecosystem />
      <Manifiesto />
      <Diagnostico />
      <Evidencia />
      <FinalAccess />
      <Footer />
    </main>
  );
}
