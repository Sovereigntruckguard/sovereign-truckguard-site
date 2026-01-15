"use client";

import Header from "app/components/Header.jsx";

const colors = {
  bg: "#050505",
  gold: "#FFD700",
  white: "#FFFFFF",
};

export default function CrearTruckingCompanyUSA() {
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
          Crear tu trucking company en USA <br />
          <span style={{ color: colors.gold }}>
            paso a paso, sin errores
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
          Te ayudamos a crear tu empresa de trucking en Estados Unidos de forma
          correcta: estructura legal, registros regulatorios y activación real
          para operar sin bloqueos ni reprocesos.
        </p>

        <p style={{ marginTop: 10, fontSize: 14, opacity: 0.8 }}>
          LLC · EIN · DOT · MC · Cumplimiento FMCSA
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
            Ver paquete Interstate
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

      {/* ================= QUÉ INCLUYE ================= */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 22,
        }}
      >
        {[
          {
            t: "LLC en Estados Unidos",
            d: "Creamos la estructura legal de tu empresa con validación previa de nombre.",
          },
          {
            t: "EIN (IRS)",
            d: "Obtención del EIN para operar legalmente y abrir cuentas.",
          },
          {
            t: "USDOT Number",
            d: "Registro correcto ante FMCSA según tu tipo de operación.",
          },
          {
            t: "MC Authority",
            d: "Si transportas carga for-hire, gestionamos el MC y su activación.",
          },
          {
            t: "Validación y coherencia",
            d: "Revisamos que toda la información sea consistente desde el día uno.",
          },
          {
            t: "Seguimiento y evidencia",
            d: "Acompañamiento real hasta quedar listo para operar.",
          },
        ].map((item) => (
          <div
            key={item.t}
            style={{
              borderRadius: 18,
              padding: 22,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <h3 style={{ color: colors.gold, marginTop: 0 }}>{item.t}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.9 }}>{item.d}</p>
          </div>
        ))}
      </section>

      {/* ================= PROCESO ================= */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 80px",
        }}
      >
        <h2 style={{ fontSize: 30, marginBottom: 18 }}>
          Cómo crear tu trucking company correctamente
        </h2>

        <ol
          style={{
            maxWidth: 900,
            lineHeight: 1.8,
            fontSize: 16,
            opacity: 0.9,
          }}
        >
          <li>Definimos tu tipo de operación y estado base.</li>
          <li>Validamos nombre y estructura de la empresa.</li>
          <li>Registramos LLC y EIN.</li>
          <li>Gestionamos DOT y MC si aplica.</li>
          <li>Acompañamos el proceso de activación.</li>
          <li>Entregamos documentación y checklist final.</li>
        </ol>
      </section>

      {/* ================= ERRORES COMUNES ================= */}
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
            Errores comunes al crear una trucking company
          </h2>

          <ul style={{ lineHeight: 1.8, fontSize: 15, opacity: 0.9 }}>
            <li>Registrar mal el tipo de operación.</li>
            <li>No saber cuándo necesitas MC Authority.</li>
            <li>Inconsistencias entre LLC, DOT y MC.</li>
            <li>Bloqueos por errores iniciales.</li>
            <li>Pérdida de tiempo y dinero rehaciendo procesos.</li>
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
          Crea tu trucking company <br />
          <span style={{ color: colors.gold }}>con el proceso correcto</span>
        </h2>

        <p style={{ maxWidth: 820, margin: "0 auto 26px", opacity: 0.9 }}>
          Si vas a iniciar, hazlo bien desde el día uno. Nuestro proceso está
          diseñado para evitar errores y dejarte listo para operar.
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
