"use client";

import Header from "app/components/Header.jsx";

const colors = {
  bg: "#050505",
  gold: "#FFD700",
  white: "#FFFFFF",
};

export default function PermisosDotMcUSA() {
  return (
    <main style={{ background: colors.bg, color: colors.white, minHeight: "100vh" }}>
      <Header />

      {/* ================= HERO ================= */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 70,
          maxWidth: 1200,
          margin: "0 auto",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <h1
          style={{
            fontSize: 44,
            lineHeight: 1.1,
            fontFamily: "Montserrat, system-ui",
            marginBottom: 16,
          }}
        >
          Permisos DOT y MC en USA <br />
          <span style={{ color: colors.gold }}>
            proceso correcto, sin errores
          </span>
        </h1>

        <p
          style={{
            maxWidth: 820,
            fontSize: 17,
            lineHeight: 1.6,
            opacity: 0.9,
          }}
        >
          Te ayudamos a obtener tus permisos DOT y MC Authority en Estados Unidos
          de forma correcta, con proceso guiado en español, validación previa y
          seguimiento real hasta quedar operativo.
        </p>

        <p style={{ marginTop: 10, fontSize: 14, opacity: 0.8 }}>
          Cumplimiento FMCSA · Documentación · Activación legal
        </p>

        <div style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a
            href="/services#packages"
            style={{
              padding: "12px 26px",
              borderRadius: 999,
              background: `linear-gradient(90deg, ${colors.gold}, #E8B7B7)`,
              color: "#000",
              fontWeight: 900,
              textDecoration: "none",
              boxShadow: "0 18px 50px rgba(0,0,0,0.9)",
            }}
          >
            Ver paquete DOT + MC
          </a>

          <a
            href="/contact"
            style={{
              padding: "12px 26px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.35)",
              color: "#fff",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Consultar mi caso
          </a>
        </div>
      </section>

      {/* ================= BLOQUE EXPLICATIVO ================= */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 28,
        }}
      >
        <div
          style={{
            borderRadius: 22,
            padding: 26,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h2 style={{ color: colors.gold, marginTop: 0 }}>
            ¿Qué es el permiso DOT?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.9 }}>
            El USDOT Number es el registro obligatorio ante FMCSA para identificar
            a las empresas y operadores que realizan transporte comercial en
            Estados Unidos. Es la base de todo el cumplimiento.
          </p>
        </div>

        <div
          style={{
            borderRadius: 22,
            padding: 26,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h2 style={{ color: colors.gold, marginTop: 0 }}>
            ¿Qué es el permiso MC?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.9 }}>
            El MC Authority es obligatorio si transportas carga para terceros
            (for-hire). Sin MC activo, no puedes operar legalmente en rutas
            interestatales.
          </p>
        </div>
      </section>

      {/* ================= PASOS ================= */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 80px",
        }}
      >
        <h2 style={{ fontSize: 30, marginBottom: 18 }}>
          Cómo obtener tus permisos DOT y MC
        </h2>

        <ol
          style={{
            maxWidth: 900,
            lineHeight: 1.8,
            fontSize: 16,
            opacity: 0.9,
          }}
        >
          <li>Validamos tu tipo de operación y estructura.</li>
          <li>Revisamos coherencia de información antes de aplicar.</li>
          <li>Registramos DOT correctamente ante FMCSA.</li>
          <li>Iniciamos MC Authority si aplica.</li>
          <li>Te acompañamos durante el periodo de activación.</li>
          <li>Entregamos evidencia y checklist final.</li>
        </ol>
      </section>

      {/* ================= ERRORES ================= */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 80px",
        }}
      >
        <div
          style={{
            borderRadius: 26,
            padding: 30,
            border: "1px solid rgba(255,255,255,0.14)",
            background:
              "radial-gradient(circle at top, rgba(255,215,0,0.10), rgba(5,5,5,1))",
          }}
        >
          <h2 style={{ color: colors.gold, marginTop: 0 }}>
            Errores comunes al sacar DOT y MC
          </h2>

          <ul style={{ lineHeight: 1.8, fontSize: 15, opacity: 0.9 }}>
            <li>Registrar mal el tipo de operación.</li>
            <li>Incoherencia entre DOT, MC y LLC.</li>
            <li>No entender cuándo aplica MC Authority.</li>
            <li>Bloqueos por errores iniciales.</li>
            <li>Pérdida de tiempo y dinero por rehacer procesos.</li>
          </ul>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 120px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 32, marginBottom: 14 }}>
          Obtén tus permisos DOT y MC <br />
          <span style={{ color: colors.gold }}>de forma correcta</span>
        </h2>

        <p style={{ maxWidth: 820, margin: "0 auto 26px", opacity: 0.9 }}>
          Si vas a empezar, hazlo bien desde el día uno. Nuestro proceso está
          diseñado para evitar errores y dejarte listo para la siguiente fase.
        </p>

        <a
          href="/services#packages"
          style={{
            padding: "14px 30px",
            borderRadius: 999,
            background: `linear-gradient(90deg, ${colors.gold}, #E8B7B7)`,
            color: "#000",
            fontWeight: 900,
            textDecoration: "none",
            boxShadow: "0 18px 50px rgba(0,0,0,0.9)",
          }}
        >
          Ver paquete Interstate
        </a>
      </section>

      {/* ================= FOOTER INLINE ================= */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(0,0,0,0.95)",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          <div>
            <div style={{ fontWeight: 900 }}>
              Sovereign TruckGuard LLC 🇺🇸
            </div>
            <p style={{ fontSize: 13, opacity: 0.8, lineHeight: 1.6, marginTop: 10 }}>
              Infraestructura de cumplimiento y activación para operaciones
              de trucking en Estados Unidos.
            </p>
            <p style={{ fontSize: 12, opacity: 0.65, lineHeight: 1.6 }}>
              Nota legal: No ofrecemos asesoría legal ni vendemos seguros.
              Brindamos acompañamiento administrativo y operativo.
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 900, color: colors.gold, marginBottom: 8 }}>
              Ubicación
            </div>
            <p style={{ fontSize: 13, opacity: 0.8, lineHeight: 1.6 }}>
              30 N Gould St, Ste N<br />
              Sheridan, Wyoming 82801
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 900, color: colors.gold, marginBottom: 8 }}>
              Contacto
            </div>
            <p style={{ fontSize: 13, opacity: 0.8, lineHeight: 1.8 }}>
              Teléfono: +1 (608) 557-6282<br />
              Email: info@sovereigntruckguard.com<br />
              Atención en español
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
