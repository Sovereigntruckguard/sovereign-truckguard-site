"use client";

import Header from "app/components/Header.jsx";

const colors = {
  bg: "#050505",
  gold: "#FFD700",
  white: "#FFFFFF",
};

export default function ContactPage() {
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
        <p
          style={{
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: colors.gold,
            marginBottom: 14,
          }}
        >
          Contacto directo · Sovereign TruckGuard LLC
        </p>

        <h1
          style={{
            fontSize: 42,
            lineHeight: 1.1,
            fontFamily: "Montserrat, system-ui",
            marginBottom: 18,
          }}
        >
          Hablemos de tu operación <br />
          <span style={{ color: colors.gold }}>
            y de los próximos pasos correctos
          </span>
        </h1>

        <p
          style={{
            maxWidth: 820,
            fontSize: 16,
            lineHeight: 1.6,
            opacity: 0.9,
          }}
        >
          Este canal es para operadores, dueños de camión y pequeñas flotas que
          necesitan claridad sobre su estructura, cumplimiento y activación legal.
          Cada caso se evalúa de forma individual.
        </p>
      </section>

      {/* ================= CONTENIDO ================= */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 28,
        }}
      >
        {/* INFO CONTACTO */}
        <div
          style={{
            borderRadius: 22,
            padding: 26,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h3 style={{ marginTop: 0, color: colors.gold }}>
            Información de contacto
          </h3>

          <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.9 }}>
            <strong>Sovereign TruckGuard LLC</strong><br />
            Registered U.S. Company<br />
            Sheridan, Wyoming
          </p>

          <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.9 }}>
            <strong>Teléfono (USA):</strong><br />
            +1 (608) 557-6282
          </p>

          <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.9 }}>
            <strong>Email:</strong><br />
            info@sovereigntruckguard.com
          </p>

          <p style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.75 }}>
            Horario de referencia:<br />
            Lunes a Viernes · 9:00 a.m. – 6:00 p.m. (EST)
          </p>

          <div
            style={{
              marginTop: 18,
              padding: 14,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(0,0,0,0.35)",
              fontSize: 12,
              lineHeight: 1.6,
              opacity: 0.8,
            }}
          >
            Esta página funciona también como referencia institucional para
            aliados, plataformas de pago y validaciones externas.
          </div>
        </div>

        {/* FORMULARIO */}
        <div
          style={{
            borderRadius: 22,
            padding: 26,
            border: "1px solid rgba(255,255,255,0.12)",
            background:
              "radial-gradient(circle at top, rgba(255,215,0,0.10), rgba(5,5,5,1))",
          }}
        >
          <h3 style={{ marginTop: 0, color: colors.gold }}>
            Envíanos los detalles de tu caso
          </h3>

          <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.85 }}>
            Este formulario es informativo. Un miembro del equipo revisará tu
            situación y te contactará si aplica.
          </p>

          <form style={{ marginTop: 18, display: "grid", gap: 14 }}>
            <input
              type="text"
              placeholder="Nombre completo"
              disabled
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              disabled
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Nombre de la empresa o USDOT (opcional)"
              disabled
              style={inputStyle}
            />

            <textarea
              placeholder="Cuéntanos brevemente tu situación actual y qué necesitas"
              rows={4}
              disabled
              style={textareaStyle}
            />

            <button
              type="button"
              disabled
              style={{
                marginTop: 10,
                padding: "12px 22px",
                borderRadius: 999,
                background: `linear-gradient(90deg, ${colors.gold}, #E8B7B7)`,
                color: "#000",
                fontWeight: 900,
                border: "none",
                opacity: 0.7,
                cursor: "not-allowed",
              }}
            >
              Enviar (activación próxima)
            </button>
          </form>

          <p style={{ marginTop: 14, fontSize: 12, opacity: 0.75 }}>
            Para contacto inmediato puedes escribirnos a
            <br />
            <strong>info@sovereigntruckguard.com</strong>
          </p>

          <div style={{ marginTop: 18 }}>
            <a
              href="/services"
              style={{
                fontSize: 13,
                color: colors.gold,
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              → Ver servicios regulatorios y activación
            </a>
          </div>
        </div>
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
              Firma de cumplimiento y activación para operaciones de trucking
              en Estados Unidos.
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
              Atención en español<br />
              Lun–Vie · 9am–6pm EST
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ================= INPUT STYLES ================= */

const inputStyle = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(0,0,0,0.4)",
  color: "#fff",
};

const textareaStyle = {
  ...inputStyle,
  resize: "none",
};
