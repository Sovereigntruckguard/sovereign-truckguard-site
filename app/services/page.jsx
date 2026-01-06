"use client";

/* =========================
   CONFIG BÁSICA
   ========================= */

const COLORS = {
  bg: "#050505",
  gold: "#FFD700",
  rose: "#E8B7B7",
  white: "#FFFFFF",
};

const LAYOUT = {
  maxWidth: 1200,
  sidePadding: 20,
};

/* =========================
   HEADER FIJO
   ========================= */

function ServicesHeader() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: LAYOUT.maxWidth,
          margin: "0 auto",
          padding: `10px ${LAYOUT.sidePadding}px`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            textDecoration: "none",
            color: COLORS.white,
          }}
        >
          <img
            src="/logo-sovereign.png"
            alt="Sovereign TruckGuard"
            style={{ width: 36 }}
          />
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Sovereign TruckGuard LLC
            </div>
            <div style={{ fontSize: 11, opacity: 0.7 }}>
              Luxury compliance & business
            </div>
          </div>
        </a>

        <a
          href="#"
          style={{
            padding: "8px 18px",
            borderRadius: 999,
            background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.rose})`,
            color: "#000",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Cotización inmediata
        </a>
      </div>
    </header>
  );
}

/* =========================
   WRAPPER
   ========================= */

function Section({ children, id }) {
  return (
    <section
      id={id}
      style={{
        maxWidth: LAYOUT.maxWidth,
        margin: "0 auto",
        padding: `0 ${LAYOUT.sidePadding}px`,
      }}
    >
      {children}
    </section>
  );
}

/* =========================
   HERO CON VIDEO
   ========================= */

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "88vh",
        overflow: "hidden",
      }}
    >
      <video
        src="/services/hero/hero-services.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.85))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Section>
          <h1
            style={{
              fontSize: 42,
              maxWidth: 720,
              lineHeight: 1.15,
            }}
          >
            Crea tu compañía trucking en USA  
            <span style={{ color: COLORS.gold }}> sin errores, sin estrés</span>
          </h1>

          <p
            style={{
              marginTop: 16,
              fontSize: 16,
              maxWidth: 620,
              lineHeight: 1.7,
              opacity: 0.9,
            }}
          >
            EIN · LLC · DOT · MC · UCR · TXDMV  
            Todo el proceso legal, documentado y acompañado en español.
          </p>

          <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
            <a
              href="#packages"
              style={{
                padding: "12px 26px",
                borderRadius: 999,
                background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.rose})`,
                color: "#000",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Ver paquetes
            </a>

            <a
              href="#individual"
              style={{
                padding: "11px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.4)",
                color: COLORS.white,
                textDecoration: "none",
              }}
            >
              Servicios individuales
            </a>
          </div>
        </Section>
      </div>
    </section>
  );
}

/* =========================
   CARD CON BACKGROUND PNG
   ========================= */

function PackageCard({ bg, title, price, bullets }) {
  return (
    <div
      style={{
        position: "relative",
        height: 380,
        borderRadius: 24,
        overflow: "hidden",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 26px 90px rgba(0,0,0,0.95)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.9))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          padding: 22,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <h3 style={{ color: COLORS.gold, fontSize: 22 }}>{title}</h3>

        <ul style={{ paddingLeft: 18, fontSize: 13, opacity: 0.9 }}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div
          style={{
            marginTop: 10,
            fontSize: 18,
            fontWeight: 800,
          }}
        >
          {price}
        </div>

        <button
          style={{
            marginTop: 12,
            padding: "10px 22px",
            borderRadius: 999,
            background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.rose})`,
            color: "#000",
            fontWeight: 800,
            border: "none",
            cursor: "not-allowed",
            opacity: 0.6,
          }}
        >
          Comprar (próximamente)
        </button>
      </div>
    </div>
  );
}

/* =========================
   PÁGINA PRINCIPAL
   ========================= */

export default function ServicesPage() {
  return (
    <main
      style={{
        background: COLORS.bg,
        color: COLORS.white,
        minHeight: "100vh",
      }}
    >
      <ServicesHeader />
      <div style={{ height: 84 }} />

      <Hero />

      {/* PACKAGES */}
      <Section id="packages">
        <h2 style={{ marginTop: 60, marginBottom: 20 }}>
          Paquetes de creación de compañía
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          <PackageCard
            bg="/services/packages/interstate-bg.png"
            title="Crea tu Compañía Interstate"
            price="USD $1,035"
            bullets={[
              "LLC + EIN",
              "USDOT + MC Authority",
              "BOC-3 + UCR",
              "TXDMV (si aplica)",
            ]}
          />

          <PackageCard
            bg="/services/packages/intrastate-bg.png"
            title="Crea tu Compañía Intrastate"
            price="USD $776.25"
            bullets={[
              "LLC + EIN",
              "USDOT",
              "TXDMV (si aplica)",
              "Sin MC / BOC-3 / UCR",
            ]}
          />
        </div>
      </Section>

      {/* SERVICIOS INDIVIDUALES */}
      <Section id="individual">
        <h2 style={{ marginTop: 70, marginBottom: 18 }}>
          Servicios individuales
        </h2>

        <ul style={{ fontSize: 14, lineHeight: 1.9, opacity: 0.9 }}>
          <li>EIN Filing – USD $99</li>
          <li>BOI Filing – USD $59</li>
          <li>DOT / MCS-150 – USD $149</li>
          <li>MC Authority Assistance – USD $249</li>
          <li>BOC-3 Assistance – USD $69</li>
          <li>UCR Filing – USD $89</li>
          <li>TXDMV Intrastate – USD $179</li>
        </ul>
      </Section>

      <div style={{ height: 120 }} />
    </main>
  );
}
