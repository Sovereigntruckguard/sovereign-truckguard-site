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

export default function ComoSacarDotEnEspanol() {
  return (
    <main style={{ background: colors.bg, color: colors.white, minHeight: "100vh" }}>
      <Header />

      {/* HERO */}
      <section style={{ paddingTop: 140, paddingBottom: 70, maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.1 }}>
          Cómo sacar el DOT Number <br />
          <span style={{ color: colors.gold }}>en español</span>
        </h1>

        <p style={{ maxWidth: 820, fontSize: 17, lineHeight: 1.6, opacity: 0.9 }}>
          Si no dominas el inglés técnico, este proceso puede volverse riesgoso.
          Aquí te explicamos cómo sacar tu DOT Number en español, con guía clara y
          sin errores.
        </p>

        <p style={{ fontSize: 14, opacity: 0.8 }}>
          Acompañamiento · Validación · Cumplimiento FMCSA
        </p>

        <div style={{ marginTop: 26 }}>
          <a href="/services#packages" style={ctaPrimary}>
            Sacar DOT con ayuda en español
          </a>
        </div>
      </section>

      {/* CONTENIDO */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px 80px" }}>
        <h2>¿Puedo sacar el DOT sin hablar inglés?</h2>
        <p style={p}>
          Sí, pero el riesgo de error es alto si no entiendes los términos
          regulatorios. Un error puede bloquear tu operación desde el inicio.
        </p>

        <h2>Proceso para sacar tu DOT en español</h2>
        <ol style={ol}>
          <li>Revisión de tu operación en español.</li>
          <li>Traducción y validación de datos críticos.</li>
          <li>Registro correcto ante FMCSA.</li>
          <li>Confirmación y evidencia del proceso.</li>
        </ol>

        <h2>Por qué hacerlo acompañado</h2>
        <ul style={ul}>
          <li>Evitas errores técnicos.</li>
          <li>No pierdes tiempo rehaciendo trámites.</li>
          <li>Quedas listo para la siguiente fase.</li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={{ textAlign: "center", paddingBottom: 120 }}>
        <h2>
          Saca tu DOT Number <span style={{ color: colors.gold }}>con guía real</span>
        </h2>
        <p style={{ maxWidth: 800, margin: "0 auto 24px", opacity: 0.9 }}>
          Acompañamiento en español, proceso correcto y sin improvisaciones.
        </p>
        <a href="/services#packages" style={ctaPrimary}>
          Ver servicio DOT
        </a>
      </section>

      {footer}
    </main>
  );
}
