"use client";

import Header from "app/components/Header.jsx";

const colors = {
  bg: "#050505",
  gold: "#FFD700",
  white: "#FFFFFF",
};

export default function AboutPage() {
  return (
    <main style={{ background: colors.bg, color: colors.white, minHeight: "100vh" }}>
      <Header />

      {/* ================= HERO ================= */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 80,
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
          Nosotros · Base legal y operativa
        </p>

        <h1
          style={{
            fontSize: 44,
            lineHeight: 1.1,
            fontFamily: "Montserrat, system-ui",
            marginBottom: 18,
          }}
        >
          Infraestructura de cumplimiento y activación <br />
          <span style={{ color: colors.gold }}>
            para camioneros latinos en Estados Unidos
          </span>
        </h1>

        <p
          style={{
            maxWidth: 780,
            fontSize: 17,
            lineHeight: 1.6,
            opacity: 0.9,
          }}
        >
          Sovereign TruckGuard LLC es una firma registrada en Estados Unidos que
          acompaña al operador latino en la creación, corrección y activación
          legal de su operación de trucking, con procesos claros y seguimiento real.
        </p>

        <p style={{ marginTop: 10, fontSize: 14, opacity: 0.8 }}>
          Cumplimiento · Documentación · Evidencia · Acompañamiento en español
        </p>

        <div style={{ marginTop: 26 }}>
          <a
            href="/services"
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
            Ver servicios regulatorios
          </a>
        </div>
      </section>

      {/* ================= CONFIANZA ================= */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        {/* HISTORIA */}
        <div
          style={{
            borderRadius: 22,
            padding: 26,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h3 style={{ marginTop: 0, color: colors.gold }}>
            Nuestra base
          </h3>

          <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.9 }}>
            Sovereign TruckGuard LLC fue fundada por Sergio Andrés Murillo Estrada,
            tras más de 8 años dentro del ecosistema del transporte comercial,
            cumplimiento regulatorio y mercado trucker latino en Estados Unidos.
          </p>

          <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.9 }}>
            La firma nace para corregir malas prácticas, desinformación,
            intermediarios informales y procesos mal ejecutados que terminan
            bloqueando o retrasando la operación del camionero.
          </p>
        </div>

        {/* MISIÓN */}
        <div
          style={{
            borderRadius: 22,
            padding: 26,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h3 style={{ marginTop: 0, color: colors.gold }}>
            Qué hacemos (y qué no)
          </h3>

          <ul
            style={{
              paddingLeft: 18,
              lineHeight: 1.8,
              fontSize: 15,
              opacity: 0.9,
            }}
          >
            <li>Creamos y ordenamos tu estructura legal de trucking.</li>
            <li>Ejecutamos procesos regulatorios con evidencia.</li>
            <li>Te acompañamos paso a paso, en español.</li>
            <li>Preparamos tu operación para fases posteriores.</li>
            <li><strong>No</strong> improvisamos ni firmamos por ti.</li>
          </ul>
        </div>
      </section>

      {/* ================= BASE LEGAL ================= */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 100px",
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
          <h3 style={{ marginTop: 0, color: colors.gold }}>
            Base legal en Estados Unidos
          </h3>

          <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.9 }}>
            Sovereign TruckGuard LLC está registrada en Sheridan, Wyoming.
            Operamos como firma de asistencia administrativa y acompañamiento
            en procesos regulatorios, alineados a normas estatales y federales.
          </p>

          <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.8 }}>
            No vendemos servicios legales ni aseguradores.
            Nuestro rol es estructurar, documentar y preparar tu operación
            para que avances sin errores ni bloqueos.
          </p>
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
              Infraestructura de cumplimiento y activación
              para operadores de trucking en Estados Unidos.
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
              30 N Gould St, Ste N <br />
              Sheridan, Wyoming 82801
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 900, color: colors.gold, marginBottom: 8 }}>
              Contacto
            </div>
            <p style={{ fontSize: 13, opacity: 0.8, lineHeight: 1.8 }}>
              Email: info@sovereigntruckguard.com <br />
              Tel: +1 (608) 557-6282 <br />
              Atención en español <br />
              Lun–Vie · 9am–6pm EST
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
