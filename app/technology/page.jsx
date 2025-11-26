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
   HEADER ESTÁTICO /technology
   ========================= */

function TechnologyHeader() {
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
   PÁGINA /technology
   ========================= */

export default function TechnologyPage() {
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
      <TechnologyHeader />
      <div style={{ height: 80 }} />

      {/* Encabezado Tecnología */}
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
          Infraestructura soberana – Arcanum, Nexus, TruckBoss, EL-VIA
        </p>
        <h1
          style={{
            margin: "8px 0 6px",
            fontSize: 26,
            fontFamily: "Montserrat, system-ui"
          }}
        >
          La tecnología soberana detrás de Sovereign TruckGuard.
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: 14,
            lineHeight: 1.7,
            maxWidth: 780,
            color: "rgba(255,255,255,0.78)"
          }}
        >
          Sovereign TruckGuard LLC no opera sobre software genérico. Estamos
          construidos sobre el ecosistema tecnológico SOLYON:{" "}
          <strong>Arcanum Core, Nexus Grid, TruckBoss y EL-VIA DOT Express</strong>.
          Esta infraestructura DeepTech nos permite tomar decisiones más justas,
          precisas y rápidas para el camionero latino, conectando seguros, datos y
          educación en un mismo sistema.
        </p>
      </section>

      {/* Grid de tecnologías */}
      <section
        style={{
          margin: "10px auto 0",
          maxWidth: layout.maxWidth,
          padding: "0 " + layout.sidePadding + "px 50px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 18
        }}
      >
        {/* Arcanum Core */}
        <div
          style={{
            borderRadius: 24,
            padding: 18,
            background:
              "radial-gradient(circle at top, rgba(255,215,0,0.14), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)",
            display: "flex",
            flexDirection: "column",
            gap: 8
          }}
        >
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "Montserrat, system-ui"
            }}
          >
            IA PROPIETARIA
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontFamily: "Montserrat, system-ui"
            }}
          >
            Arcanum Core
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6
            }}
          >
            Arcanum es nuestro{" "}
            <strong>cerebro cognitivo con memoria fractal</strong>. Analiza
            historiales, riesgos, patrones de operación y contexto del camionero
            latino, más allá de un simple score de crédito.
          </p>
          <p
            style={{
              margin: 0,
              marginTop: 4,
              fontSize: 12,
              color: "rgba(255,255,255,0.7)"
            }}
          >
            Esta IA nos ayuda a:
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              fontSize: 12,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.5
            }}
          >
            <li>Proyectar escenarios reales de riesgo.</li>
            <li>Evitar decisiones injustas por simples promedios.</li>
            <li>Entender mejor la operación de cada empresa.</li>
          </ul>
        </div>

        {/* Nexus Grid */}
        <div
          style={{
            borderRadius: 24,
            padding: 18,
            background:
              "radial-gradient(circle at top, rgba(232,183,183,0.16), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)",
            display: "flex",
            flexDirection: "column",
            gap: 8
          }}
        >
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "Montserrat, system-ui"
            }}
          >
            SISTEMA NERVIOSO
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontFamily: "Montserrat, system-ui"
            }}
          >
            Nexus Grid
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6
            }}
          >
            Nexus es el{" "}
            <strong>orquestador de todo el ecosistema</strong>. Conecta aseguradoras,
            reguladores, factoring, despachos, apps y clientes en flujos coherentes
            y automatizados.
          </p>
          <p
            style={{
              margin: 0,
              marginTop: 4,
              fontSize: 12,
              color: "rgba(255,255,255,0.7)"
            }}
          >
            Nos permite:
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              fontSize: 12,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.5
            }}
          >
            <li>Reducir fricción entre pólizas, DOT y operaciones.</li>
            <li>Automatizar certificados, recordatorios y documentos clave.</li>
            <li>Conectar TruckBoss, EL-VIA y la agencia en tiempo real.</li>
          </ul>
        </div>

        {/* TruckBoss */}
        <div
          style={{
            borderRadius: 24,
            padding: 18,
            background:
              "radial-gradient(circle at top, rgba(255,215,0,0.1), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)",
            display: "flex",
            flexDirection: "column",
            gap: 8
          }}
        >
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "Montserrat, system-ui"
            }}
          >
            APP DEL CAMIONERO
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontFamily: "Montserrat, system-ui"
            }}
          >
            TruckBoss Integration
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6
            }}
          >
            TruckBoss es la{" "}
            <strong>app nativa para el camionero latino</strong>. Desde ahí se
            conectan cotizaciones, pólizas, documentos, recordatorios y comunidad.
          </p>
          <p
            style={{
              margin: 0,
              marginTop: 4,
              fontSize: 12,
              color: "rgba(255,255,255,0.7)"
            }}
          >
            El objetivo es:
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              fontSize: 12,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.5
            }}
          >
            <li>Que el camionero tenga todo en un solo lugar.</li>
            <li>Hacer simple la gestión de seguros y documentos.</li>
            <li>Crear una experiencia PRO al nivel de grandes flotas.</li>
          </ul>
        </div>

        {/* EL-VIA */}
        <div
          style={{
            borderRadius: 24,
            padding: 18,
            background:
              "radial-gradient(circle at top, rgba(232,183,183,0.18), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)",
            display: "flex",
            flexDirection: "column",
            gap: 8
          }}
        >
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "Montserrat, system-ui"
            }}
          >
            EDUCACIÓN + DOT
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontFamily: "Montserrat, system-ui"
            }}
          >
            EL-VIA DOT Express
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6
            }}
          >
            EL-VIA es la{" "}
            <strong>plataforma educativa para camioneros latinos</strong> que quieren
            entender el idioma, el sistema y el mundo DOT sin depender de terceros.
          </p>
          <p
            style={{
              margin: 0,
              marginTop: 4,
              fontSize: 12,
              color: "rgba(255,255,255,0.7)"
            }}
          >
            Aporta al ecosistema:
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              fontSize: 12,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.5
            }}
          >
            <li>Inglés aplicado a la vida en carretera.</li>
            <li>Traducción del mundo regulatorio a lenguaje claro.</li>
            <li>Formación continua para operadores y equipos.</li>
          </ul>
        </div>
      </section>

      {/* Bloque final de narrativa */}
      <section
        style={{
          margin: "20px auto 0",
          maxWidth: layout.maxWidth,
          padding: "0 " + layout.sidePadding + "px 60px"
        }}
      >
        <div
          style={{
            borderRadius: 24,
            padding: 18,
            background: "rgba(5,5,5,0.96)",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 18px 55px rgba(0,0,0,0.9)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontFamily: "Montserrat, system-ui",
              marginBottom: 8
            }}
          >
            De la tecnología a la realidad del camionero.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              maxWidth: 820
            }}
          >
            Toda esta tecnología no existe para hacer presentaciones bonitas. Existe
            para resolver problemas reales del{" "}
            <strong>camionero latino en Estados Unidos</strong>: tarifas injustas,
            confusión con documentos, barreras de idioma, desorden operativo y
            falta de acompañamiento. Sovereign TruckGuard LLC usa este stack
            soberano para tomar mejores decisiones, emitir pólizas más claras y
            acompañar de forma más humana, precisa y respetuosa a cada cliente.
          </p>
        </div>
      </section>
    </main>
  );
}
