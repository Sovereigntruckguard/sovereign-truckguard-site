"use client";

const colors = {
  bg: "#050505",
  gold: "#FFD700",
  rose: "#E8B7B7",
  white: "#FFFFFF"
};

const layout = {
  maxWidth: 1120,
  sidePadding: 20
};

/* =========================
   HEADER ESTÁTICO /about
   ========================= */

function AboutHeader() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(14px)"
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
          gap: 16
        }}
      >
        {/* Logo + tagline con enlace al home */}
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            gap: 12
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
                color: "rgba(255,255,255,0.9)"
              }}
            >
              Sovereign TruckGuard LLC
            </div>
            <p
              style={{
                margin: 0,
                marginTop: 2,
                fontSize: 11,
                color: "rgba(255,255,255,0.6)"
              }}
            >
              Agencia de seguros de lujo para camioneros latinos
            </p>
          </div>
        </a>

        {/* Menú */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
            fontSize: 13,
            color: "rgba(255,255,255,0.78)",
            fontFamily: "Montserrat, system-ui"
          }}
        >
          <a href="/coverages" style={{ textDecoration: "none", color: "inherit" }}>
            Coberturas
          </a>
          <a href="/technology" style={{ textDecoration: "none", color: "inherit" }}>
            Tecnología
          </a>
          <a href="/services" style={{ textDecoration: "none", color: "inherit" }}>
            Servicios
          </a>
          <a href="/states" style={{ textDecoration: "none", color: "inherit" }}>
            Estados
          </a>
          <a href="/about" style={{ textDecoration: "none", color: "inherit" }}>
            Nosotros
          </a>
          <a href="/testimonials" style={{ textDecoration: "none", color: "inherit" }}>
            Testimonios
          </a>
          <a href="/contact" style={{ textDecoration: "none", color: "inherit" }}>
            Contacto
          </a>
          <a
            href="/#cotizar"
            style={{
              padding: "8px 20px",
              borderRadius: 999,
              background:
                "linear-gradient(90deg, " + colors.gold + ", " + colors.rose + ")",
              color: "#000",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 14px 35px rgba(0,0,0,0.6)"
            }}
          >
            Cotización inmediata
          </a>
        </nav>
      </div>
    </header>
  );
}

/* =========================
   ABOUT PAGE
   ========================= */

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(255,215,0,0.12), transparent 55%)," +
          "radial-gradient(circle at bottom, rgba(232,183,183,0.12), transparent 55%)," +
          colors.bg,
        color: colors.white,
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}
    >
      <AboutHeader />
      <div style={{ height: 80 }} />

      {/* Encabezado */}
      <section
        style={{
          margin: "0 auto",
          maxWidth: layout.maxWidth,
          padding: "30px " + layout.sidePadding + "px 20px"
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: colors.gold,
            fontFamily: "Montserrat, system-ui"
          }}
        >
          Nosotros – Base legal, historia y propósito
        </p>

        <h1
          style={{
            margin: "8px 0 12px",
            fontSize: 28,
            fontFamily: "Montserrat, system-ui"
          }}
        >
          La primera agencia de seguros de lujo creada para el camionero latino en
          Estados Unidos.
        </h1>

        <p
          style={{
            margin: 0,
            marginBottom: 16,
            fontSize: 15,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 760
          }}
        >
          Sovereign TruckGuard LLC nace desde una realidad: el camionero latino ha
          sido históricamente atendido con servicios mínimos, pólizas confusas,
          falta de acompañamiento y barreras de idioma. Nosotros cambiamos esa
          historia con{" "}
          <strong>
            lujo funcional, tecnología soberana y procesos claros,
            transparentes y dignos
          </strong>
          .
        </p>
      </section>

      {/* BLOQUE HISTORIA — FUNDADOR */}
      <section
        style={{
          margin: "10px auto 0",
          maxWidth: layout.maxWidth,
          padding: "0 " + layout.sidePadding + "px 40px",
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
          gap: 26
        }}
      >
        {/* Columna 1 */}
        <div
          style={{
            borderRadius: 24,
            padding: 20,
            background: "rgba(5,5,5,0.95)",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 20,
              fontFamily: "Montserrat, system-ui",
              marginBottom: 10
            }}
          >
            Nuestra historia
          </h2>
          <p
            style={{
              margin: "0 0 14px",
              fontSize: 14,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7
            }}
          >
            Sovereign TruckGuard LLC fue fundada por{" "}
            <strong>Sergio Andrés Murillo Estrada</strong>, tras 8 años dentro del
            ecosistema del transporte, seguros comerciales y el mercado trucker
            latino en Estados Unidos. Tras observar abusos, tarifas injustas,
            desinformación y procesos que no respetaban al operador latino, decidió
            construir una agencia radicalmente distinta.
          </p>
          <p
            style={{
              margin: "0 0 14px",
              fontSize: 14,
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.7
            }}
          >
            Con sede legal en Sheridan, Wyoming, y conectada al ecosistema
            tecnológico **SOLYON**, Sovereign TruckGuard combina estructura
            empresarial estadounidense con{" "}
            <strong>tecnología cognitiva, precisión de datos y experiencia de lujo</strong>.
          </p>
        </div>

        {/* Columna 2 */}
        <div
          style={{
            borderRadius: 24,
            padding: 20,
            background:
              "radial-gradient(circle at top, rgba(255,215,0,0.14), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 20,
              fontFamily: "Montserrat, system-ui",
              marginBottom: 10
            }}
          >
            Propósito y misión
          </h2>
          <p
            style={{
              margin: "0 0 14px",
              fontSize: 14,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7
            }}
          >
            Nuestro propósito es{" "}
            <strong>proteger, educar y empoderar</strong> al operador latino con
            infraestructura real, precios justos y tecnología soberana.
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              fontSize: 14,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.6
            }}
          >
            <li>Políticas claras sin letra pequeña.</li>
            <li>Cotizaciones precisas basadas en datos reales.</li>
            <li>Acompañamiento personalizado y humano.</li>
            <li>Educación bilingüe (EL-VIA) para entender DOT y procesos.</li>
            <li>Integración con TruckBoss para un flujo operativo completo.</li>
          </ul>
        </div>
      </section>

      {/* BLOQUE SOLYON / INFRAESTRUCTURA */}
      <section
        style={{
          margin: "20px auto 0",
          maxWidth: layout.maxWidth,
          padding: "0 " + layout.sidePadding + "px 40px"
        }}
      >
        <div
          style={{
            borderRadius: 24,
            padding: 20,
            background:
              "radial-gradient(circle at top, rgba(232,183,183,0.14), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 18px 55px rgba(0,0,0,0.9)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 20,
              fontFamily: "Montserrat, system-ui",
              marginBottom: 10
            }}
          >
            SOLYON: infraestructura cognitiva y soberana
          </h2>

          <p
            style={{
              margin: 0,
              marginBottom: 12,
              fontSize: 14,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7,
              maxWidth: 820
            }}
          >
            Sovereign TruckGuard LLC forma parte del ecosistema SOLYON Technologies:
          </p>

          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              fontSize: 14,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.6
            }}
          >
            <li>
              <strong>Arcanum Core:</strong> motor de IA cognitiva con memoria
              fractal.
            </li>
            <li>
              <strong>Nexus Grid:</strong> orquestador de procesos, documentos y
              flujos.
            </li>
            <li>
              <strong>TruckBoss Integration:</strong> app del camionero latino para
              cotizar, documentar, gestionar y operar.
            </li>
            <li>
              <strong>EL-VIA DOT Express:</strong> educación bilingüe y manejo del
              mundo DOT para operadores hispanos.
            </li>
          </ul>
        </div>
      </section>

      {/* BLOQUE LEGAL */}
      <section
        style={{
          margin: "20px auto 40px",
          maxWidth: layout.maxWidth,
          padding: "0 " + layout.sidePadding + "px 40px"
        }}
      >
        <div
          style={{
            borderRadius: 24,
            padding: 20,
            background: "rgba(5,5,5,0.95)",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 18px 55px rgba(0,0,0,0.9)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 20,
              fontFamily: "Montserrat, system-ui",
              marginBottom: 10
            }}
          >
            Base legal en Estados Unidos
          </h2>
          <p
            style={{
              margin: 0,
              marginBottom: 12,
              fontSize: 14,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7
            }}
          >
            <strong>Sovereign TruckGuard LLC</strong> está registrada en{" "}
            <strong>Sheridan, Wyoming</strong>. Nuestro EIN federal es verificable
            bajo solicitud formal y toda nuestra operación está alineada a las
            normas de cumplimiento estatales y federales.
          </p>

          <p
            style={{
              margin: 0,
              fontSize: 14,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7
            }}
          >
            Respetamos la estructura legal del sector asegurador, trabajamos con
            procesos internos estrictos y estamos integrando nuestras plataformas al
            ecosistema cognitivo de SOLYON para ofrecer seguridad, claridad y
            respaldo tecnológico a la altura de los operadores latinos.
          </p>
        </div>
      </section>
    </main>
  );
}
