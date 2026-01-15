"use client";

import Header from "app/components/Header.jsx";

const colors = {
  bg: "#050505",
  gold: "#FFD700",
  white: "#FFFFFF",
};

const ctaPrimary = {
  padding: "14px 30px",
  borderRadius: 999,
  background: "linear-gradient(90deg, #FFD700, #E8B7B7)",
  color: "#000",
  fontWeight: 900,
  textDecoration: "none",
  boxShadow: "0 18px 50px rgba(0,0,0,0.9)",
};

const p = { fontSize: 16, lineHeight: 1.7, opacity: 0.9 };
const ol = { lineHeight: 1.8, fontSize: 16, opacity: 0.9 };
const ul = { lineHeight: 1.8, fontSize: 15, opacity: 0.9 };

const footer = (
  <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#000", padding: "40px 20px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <strong>Sovereign TruckGuard LLC 🇺🇸</strong>
      <p style={{ fontSize: 12, opacity: 0.7 }}>
        Infraestructura de cumplimiento y activación para trucking en USA.
        No vendemos seguros ni asesoría legal.
      </p>
    </div>
  </footer>
);

export default function ComoObtenerDotNumber() {
  return (
    <main style={{ background: colors.bg, color: colors.white, minHeight: "100vh" }}>
      <Header />

      {/* HERO */}
      <section style={{ paddingTop: 140, paddingBottom: 70, maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.1 }}>
          Cómo obtener tu DOT Number <br />
          <span style={{ color: colors.gold }}>en Estados Unidos</span>
        </h1>

        <p style={{ maxWidth: 820, fontSize: 17, lineHeight: 1.6, opacity: 0.9 }}>
          El DOT Number es el primer paso obligatorio para operar legalmente en el
          transporte comercial en USA. Aquí te explicamos cómo obtenerlo
          correctamente y sin errores.
        </p>

        <p style={{ fontSize: 14, opacity: 0.8 }}>
          Proceso guiado · Cumplimiento FMCSA · En español
        </p>

        <div style={{ marginTop: 26 }}>
          <a href="/services#packages" style={ctaPrimary}>
            Obtener DOT correctamente
          </a>
        </div>
      </section>

      {/* CONTENIDO */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px 80px" }}>
        <h2>¿Qué es el DOT Number?</h2>
        <p style={p}>
          El USDOT Number es un registro obligatorio ante la FMCSA que identifica
          a empresas y operadores de transporte comercial. Sin DOT válido, no
          puedes operar legalmente.
        </p>

        <h2>Pasos para obtener tu DOT Number</h2>
        <ol style={ol}>
          <li>Definir correctamente tu tipo de operación.</li>
          <li>Validar información de la empresa o propietario.</li>
          <li>Registrar el DOT ante FMCSA.</li>
          <li>Verificar coherencia con LLC y otros permisos.</li>
          <li>Evitar errores que generan bloqueos.</li>
        </ol>

        <h2>Errores comunes al sacar el DOT</h2>
        <ul style={ul}>
          <li>Registrar mal el tipo de carga.</li>
          <li>Incoherencia con MC o LLC.</li>
          <li>Información incompleta o incorrecta.</li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={{ textAlign: "center", paddingBottom: 120 }}>
        <h2>
          Obtén tu DOT Number <span style={{ color: colors.gold }}>sin errores</span>
        </h2>
        <p style={{ maxWidth: 800, margin: "0 auto 24px", opacity: 0.9 }}>
          Hazlo bien desde el inicio. Nuestro proceso evita reprocesos y pérdidas
          de tiempo.
        </p>
        <a href="/services#packages" style={ctaPrimary}>
          Ver servicio DOT
        </a>
      </section>
      {/* ================= TAMBIÉN TE PUEDE SERVIR ================= */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 70px",
        }}
      >
        <div
          style={{
            borderRadius: 22,
            padding: 22,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div style={{ fontWeight: 950, color: colors.gold, marginBottom: 10 }}>
            También te puede servir
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 12,
            }}
          >
            <a href="/permisos-dot-mc-usa" style={linkCardStyle}>
              permisos DOT y MC en USA
            </a>

            <a href="/crear-trucking-company-usa" style={linkCardStyle}>
              crear trucking company en USA
            </a>

            <a href="/como-sacar-dot-number-en-espanol" style={linkCardStyle}>
              cómo sacar el DOT number en español
            </a>
          </div>

          <div style={{ marginTop: 12 }}>
            <a
              href="/services#packages"
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: 999,
                background: `linear-gradient(90deg, ${colors.gold}, #E8B7B7)`,
                color: "#000",
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Ver servicio DOT
            </a>
          </div>
        </div>
      </section>

      {footer}
    </main>
  );
}

const linkCardStyle = {
  display: "block",
  padding: "14px 14px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(0,0,0,0.35)",
  color: "rgba(255,255,255,0.92)",
  textDecoration: "none",
  fontWeight: 850,
};
