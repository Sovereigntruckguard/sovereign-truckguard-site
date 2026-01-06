"use client";

/* =========================
   CONFIG
   ========================= */

const colors = {
  bg: "#050505",
  gold: "#FFD700",
  rose: "#E8B7B7",
  white: "#FFFFFF",
};

const layout = {
  maxWidth: 1180,
  sidePadding: 20,
};

/* =========================
   HEADER ESTÁTICO
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
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: layout.maxWidth,
          padding: "10px " + layout.sidePadding + "px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <img
            src="/logo-sovereign.png"
            alt="Sovereign TruckGuard Logo"
            style={{ width: 36, height: "auto", objectFit: "contain" }}
          />
          <div>
            <div
              style={{
                fontFamily: "Montserrat, system-ui",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Sovereign TruckGuard LLC
            </div>
            <p
              style={{
                margin: 0,
                marginTop: 2,
                fontSize: 11,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Luxury compliance & business
            </p>
          </div>
        </a>

        <a
          href="/#cotizar"
          style={{
            padding: "8px 20px",
            borderRadius: 999,
            background: "linear-gradient(90deg, " + colors.gold + ", " + colors.rose + ")",
            color: "#000",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 14px 35px rgba(0,0,0,0.6)",
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

function Section({ children, id, style }) {
  return (
    <section
      id={id}
      style={{
        margin: "0 auto",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

/* =========================
   BUTTON (disabled)
   ========================= */

function DisabledCTA({ label }) {
  return (
    <button
      disabled
      style={{
        padding: "10px 20px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.18)",
        background: "linear-gradient(90deg, rgba(255,215,0,0.18), rgba(232,183,183,0.18))",
        color: "rgba(255,255,255,0.65)",
        fontWeight: 700,
        cursor: "not-allowed",
        opacity: 0.8,
      }}
      title="Pagos en línea se habilitan en breve (Stripe)"
    >
      {label}
    </button>
  );
}

/* =========================
   HERO VIDEO FULL BLEED
   ========================= */

function HeroVideo() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <video
        src="/services/hero/hero-services.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
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
          background: "rgba(0,0,0,0.55)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.80), rgba(0,0,0,0.35), rgba(0,0,0,0.15))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Section style={{ paddingTop: 90, paddingBottom: 60 }}>
          <div style={{ maxWidth: 680 }}>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: colors.gold,
                fontFamily: "Montserrat, system-ui",
              }}
            >
              Servicios regulatorios premium
            </p>

            <h1
              style={{
                margin: "10px 0 10px",
                fontSize: 46,
                lineHeight: 1.1,
                fontFamily: "Montserrat, system-ui",
              }}
            >
              Crea tu compañía trucking en USA{" "}
              <span style={{ color: colors.gold }}>sin errores</span>, sin estrés
            </h1>

            <p
              style={{
                margin: "0 0 18px",
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.88)",
              }}
            >
              EIN · LLC · DOT · MC · UCR · TXDMV · BOI
              <br />
              Proceso legal, documentado y acompañado en español.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <a
                href="#packages"
                style={{
                  padding: "12px 26px",
                  borderRadius: 999,
                  background: "linear-gradient(90deg, " + colors.gold + ", " + colors.rose + ")",
                  color: "#000",
                  fontWeight: 800,
                  fontSize: 13,
                  textDecoration: "none",
                  boxShadow: "0 18px 60px rgba(0,0,0,0.9)",
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
                  color: colors.white,
                  fontSize: 12,
                  textDecoration: "none",
                  background: "rgba(0,0,0,0.25)",
                }}
              >
                Servicios individuales
              </a>
            </div>

            <div
              style={{
                marginTop: 16,
                fontSize: 12,
                color: "rgba(255,255,255,0.65)",
              }}
            >
              * Government fees se pagan por separado directamente en portales oficiales.
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}

/* =========================
   CARD FULL BLEED (PNG BG)
   ========================= */

function PackageCard({ bg, badge, title, price, bullets }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 26,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 26px 90px rgba(0,0,0,0.95)",
        minHeight: 440,
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.92))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          padding: 26,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            padding: "6px 12px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(0,0,0,0.35)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {badge}
        </div>

        <h3
          style={{
            margin: 0,
            fontSize: 26,
            fontFamily: "Montserrat, system-ui",
            color: colors.gold,
          }}
        >
          {title}
        </h3>

        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "rgba(255,255,255,0.92)", lineHeight: 1.6 }}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div style={{ fontSize: 20, fontWeight: 800 }}>
          {price}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <DisabledCTA label="Comprar (próximamente)" />
          <a
            href="#how"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.25)",
              color: "rgba(255,255,255,0.85)",
              textDecoration: "none",
              fontWeight: 700,
              background: "rgba(0,0,0,0.2)",
            }}
          >
            Ver cómo funciona
          </a>
        </div>

        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.70)", marginTop: 6 }}>
          Service fee Sovereign. Government fees se pagan aparte.
        </div>
      </div>
    </div>
  );
}

/* =========================
   BLOQUES DE CONFIANZA
   ========================= */

function TrustBlocks() {
  return (
    <Section style={{ paddingTop: 60 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 18,
        }}
      >
        <TrustCard
          title="Transparencia real"
          text="Separa tu service fee de los government fees. Nada de cobros ocultos ni retención de pagos oficiales."
        />
        <TrustCard
          title="Seguimiento diario"
          text="Te informamos el estado del proceso, tiempos y próximos pasos. No desaparecemos."
        />
        <TrustCard
          title="Hecho para latinos"
          text="Te explicamos todo en español, con estructura y sin inglés técnico confuso."
        />
        <TrustCard
          title="Cero malas prácticas"
          text="No firmamos por ti, no inventamos datos, no te exponemos a bloqueos ni auditorías por errores."
        />
      </div>
    </Section>
  );
}

function TrustCard({ title, text }) {
  return (
    <div
      style={{
        borderRadius: 20,
        padding: 18,
        border: "1px solid rgba(255,255,255,0.10)",
        background:
          "linear-gradient(135deg, rgba(12,12,12,0.96), rgba(20,20,20,0.96))",
        boxShadow: "0 18px 55px rgba(0,0,0,0.9)",
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 800, color: colors.gold }}>
        {title}
      </div>
      <div style={{ marginTop: 8, fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.85)" }}>
        {text}
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Eliges paquete o servicio", d: "Ves claramente qué incluye y qué NO incluye." },
    { n: "02", t: "Formulario post-pago", d: "Nos entregas la info necesaria (incluye 3 nombres)." },
    { n: "03", t: "Validación real", d: "Confirmamos nombre disponible y coherencia de operación." },
    { n: "04", t: "Ejecución", d: "Procesamos EIN / DOT / MC / etc. con evidencia." },
    { n: "05", t: "Seguimiento diario", d: "Te informamos estado y tiempos. Sin silencio." },
    { n: "06", t: "Entrega final", d: "Te entregamos documentos y dejamos el camino listo para seguro." },
  ];

  return (
    <Section id="how" style={{ paddingTop: 70 }}>
      <h2 style={{ margin: 0, fontSize: 26, fontFamily: "Montserrat, system-ui" }}>
        Cómo funciona
      </h2>
      <p style={{ marginTop: 10, maxWidth: 760, color: "rgba(255,255,255,0.80)", lineHeight: 1.7 }}>
        Este flujo existe para eliminar errores, estafas y retrasos. Todo es visible, documentado y con responsable.
      </p>

      <div
        style={{
          marginTop: 18,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 18,
        }}
      >
        {steps.map((s) => (
          <div
            key={s.n}
            style={{
              borderRadius: 20,
              padding: 18,
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div style={{ fontSize: 12, letterSpacing: "0.2em", color: colors.gold }}>
              {s.n}
            </div>
            <div style={{ marginTop: 6, fontSize: 15, fontWeight: 800 }}>
              {s.t}
            </div>
            <div style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
              {s.d}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function TransparencyBlock() {
  return (
    <Section style={{ paddingTop: 70 }}>
      <div
        style={{
          borderRadius: 24,
          padding: 22,
          background:
            "radial-gradient(circle at top, rgba(255,215,0,0.10), rgba(5,5,5,1))",
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow: "0 24px 70px rgba(0,0,0,0.95)",
        }}
      >
        <h2 style={{ margin: 0, fontSize: 22, color: colors.gold, fontFamily: "Montserrat, system-ui" }}>
          Service fee vs Government fees (sin letra pequeña)
        </h2>
        <p style={{ marginTop: 10, fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
          En Sovereign pagas solo por nuestro acompañamiento profesional (service fee).
          Los fees oficiales (FMCSA, TXDMV, UCR, SoS, process agent, etc.) los pagas tú directamente en portales oficiales.
        </p>
        <p style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.75)" }}>
          Nota legal: Sovereign TruckGuard LLC no vende servicios legales. Ofrecemos asistencia administrativa y acompañamiento en procesos de cumplimiento.
        </p>
      </div>
    </Section>
  );
}

/* =========================
   LISTAS DE SERVICIOS
   ========================= */

function ServicesLists() {
  const individuales = [
    { name: "EIN Filing", price: "USD $99" },
    { name: "BOI Filing", price: "USD $59" },
    { name: "DOT / MCS-150", price: "USD $149" },
    { name: "MC Authority Assistance", price: "USD $249" },
    { name: "BOC-3 Assistance", price: "USD $69" },
    { name: "UCR Filing", price: "USD $89" },
    { name: "TXDMV Intrastate", price: "USD $179" },
  ];

  const adicionales = [
    { name: "Corrección / actualización USDOT", price: "USD $80" },
    { name: "Biennial Update (MCS-150)", price: "USD $100" },
    { name: "Cambio de nombre compañía", price: "USD $200" },
    { name: "Reactivación USDOT / MC", price: "USD $250" },
    { name: "Compliance Check (diagnóstico)", price: "USD $75" },
  ];

  return (
    <Section id="individual" style={{ paddingTop: 70 }}>
      <h2 style={{ margin: 0, fontSize: 26, fontFamily: "Montserrat, system-ui" }}>
        Servicios individuales
      </h2>
      <p style={{ marginTop: 10, maxWidth: 820, color: "rgba(255,255,255,0.80)", lineHeight: 1.7 }}>
        Si no necesitas todo el paquete, puedes iniciar por un servicio puntual. Los pagos en línea se habilitan en breve (Stripe).
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18, marginTop: 18 }}>
        <div style={{ borderRadius: 20, padding: 18, border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.03)" }}>
          <div style={{ fontSize: 14, fontWeight: 900, color: colors.gold, marginBottom: 10 }}>
            Individuales
          </div>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, fontSize: 13, color: "rgba(255,255,255,0.9)" }}>
            {individuales.map((s) => (
              <li key={s.name}>
                {s.name} — <strong>{s.price}</strong>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 14 }}>
            <DisabledCTA label="Comprar (próximamente)" />
          </div>
        </div>

        <div style={{ borderRadius: 20, padding: 18, border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.03)" }}>
          <div style={{ fontSize: 14, fontWeight: 900, color: colors.gold, marginBottom: 10 }}>
            Adicionales (rápidos)
          </div>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, fontSize: 13, color: "rgba(255,255,255,0.9)" }}>
            {adicionales.map((s) => (
              <li key={s.name}>
                {s.name} — <strong>{s.price}</strong>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 14 }}>
            <DisabledCTA label="Comprar (próximamente)" />
          </div>
        </div>
      </div>
    </Section>
  );
}

/* =========================
   PÁGINA
   ========================= */

export default function ServicesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: colors.bg,
        color: colors.white,
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <ServicesHeader />
      <div style={{ height: 84 }} />

      <HeroVideo />

      <TrustBlocks />
      <HowItWorks />
      <TransparencyBlock />

      {/* PACKAGES */}
      <Section id="packages" style={{ paddingTop: 70 }}>
        <h2 style={{ margin: 0, fontSize: 26, fontFamily: "Montserrat, system-ui" }}>
          Paquetes de creación de compañía
        </h2>
        <p style={{ marginTop: 10, maxWidth: 820, color: "rgba(255,255,255,0.80)", lineHeight: 1.7 }}>
          Elige el paquete correcto según tu operación. Si operas fuera de un solo estado, necesitas Interstate.
        </p>

        <div
          style={{
            marginTop: 20,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          <PackageCard
            bg="/services/packages/interstate-bg.png"
            badge="Interstate · Completa"
            title="Crea tu Compañía Interstate"
            price="USD $1,035"
            bullets={[
              "LLC + EIN",
              "USDOT + MC Authority",
              "BOC-3 + UCR",
              "TXDMV (si aplica)",
              "Seguimiento diario + evidencia",
            ]}
          />

          <PackageCard
            bg="/services/packages/intrastate-bg.png"
            badge="Intrastate · Simple"
            title="Crea tu Compañía Intrastate"
            price="USD $776.25"
            bullets={[
              "LLC + EIN",
              "USDOT",
              "TXDMV (si aplica)",
              "Sin MC / BOC-3 / UCR",
              "Seguimiento diario + evidencia",
            ]}
          />
        </div>
      </Section>

      <ServicesLists />

      <div style={{ height: 110 }} />
    </main>
  );
}
