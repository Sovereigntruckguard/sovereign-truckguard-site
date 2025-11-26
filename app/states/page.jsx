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
   HEADER ESTÁTICO /states
   ========================= */

function StatesHeader() {
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

        {/* Menú alineado */}
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
   ESTADOS /states
   ========================= */

export default function StatesPage() {
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
      <StatesHeader />
      <div style={{ height: 80 }} />

      {/* Encabezado Estados */}
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
          Expansión y presencia en Estados Unidos
        </p>
        <h1
          style={{
            margin: "8px 0 12px",
            fontSize: 28,
            fontFamily: "Montserrat, system-ui"
          }}
        >
          Estados donde operamos y expandiremos la agencia.
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: 15,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 780
          }}
        >
          Sovereign TruckGuard LLC nace en Wyoming como base legal y se expandirá de
          forma progresiva a los estados más estratégicos para el camionero latino.
          Esta estructura permite alianzas, appointments con aseguradoras y un
          proceso legal totalmente claro y auditable.
        </p>
      </section>

      {/* Grid de estados */}
      <section
        style={{
          margin: "20px auto 0",
          maxWidth: layout.maxWidth,
          padding: "0 " + layout.sidePadding + "px 50px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 22
        }}
      >
        {/* Wyoming */}
        <div
          style={{
            borderRadius: 24,
            padding: 18,
            background:
              "radial-gradient(circle at top, rgba(255,215,0,0.16), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 20,
              fontFamily: "Montserrat, system-ui",
              color: colors.gold
            }}
          >
            Wyoming
          </h2>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: 13,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6
            }}
          >
            Sede legal de Sovereign TruckGuard LLC. Base de operaciones, registro
            federal y verificación de EIN. Punto de partida para appointments y
            multi-state licensing.
          </p>
        </div>

        {/* Texas */}
        <div
          style={{
            borderRadius: 24,
            padding: 18,
            background:
              "radial-gradient(circle at top, rgba(232,183,183,0.14), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 20,
              fontFamily: "Montserrat, system-ui",
              color: colors.rose
            }}
          >
            Texas
          </h2>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: 13,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6
            }}
          >
            Estado estratégico con mayor densidad de camioneros latinos. Una vez
            activemos el DRLP, Texas será una de las primeras expansiones.
          </p>
        </div>

        {/* Indiana */}
        <div
          style={{
            borderRadius: 24,
            padding: 18,
            background:
              "radial-gradient(circle at top, rgba(255,215,0,0.12), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 20,
              fontFamily: "Montserrat, system-ui",
              color: colors.gold
            }}
          >
            Indiana
          </h2>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: 13,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6
            }}
          >
            Uno de los hubs más importantes de transporte en el Midwest. Perfecto
            para la operación inicial y relaciones con aseguradoras más flexibles.
          </p>
        </div>

        {/* Florida */}
        <div
          style={{
            borderRadius: 24,
            padding: 18,
            background:
              "radial-gradient(circle at top, rgba(232,183,183,0.14), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 20,
              fontFamily: "Montserrat, system-ui",
              color: colors.rose
            }}
          >
            Florida
          </h2>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: 13,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6
            }}
          >
            Estado de alto impacto para transportistas LATAM. Complejo pero clave
            para construir presencia nacional.
          </p>
        </div>

        {/* Illinois */}
        <div
          style={{
            borderRadius: 24,
            padding: 18,
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
              color: colors.gold
            }}
          >
            Illinois
          </h2>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: 13,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6
            }}
          >
            Chicago es uno de los mercados operativos más grandes de la industria.
            Un estado esencial para cualquier agencia seria de trucking.
          </p>
        </div>

        {/* Georgia */}
        <div
          style={{
            borderRadius: 24,
            padding: 18,
            background:
              "radial-gradient(circle at top, rgba(232,183,183,0.14), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 20,
              fontFamily: "Montserrat, system-ui",
              color: colors.rose
            }}
          >
            Georgia
          </h2>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: 13,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6
            }}
          >
            Atlanta es un punto operativo clave para carriers latinos y acceso a
            rutas del Sur, Este y Midwest.
          </p>
        </div>
      </section>

      {/* Bloque final */}
      <section
        style={{
          margin: "30px auto 60px",
          maxWidth: layout.maxWidth,
          padding: "0 " + layout.sidePadding + "px"
        }}
      >
        <div
          style={{
            borderRadius: 24,
            padding: 22,
            background: "rgba(5,5,5,0.96)",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 18px 55px rgba(0,0,0,0.9)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 20,
              fontFamily: "Montserrat, system-ui"
            }}
          >
            ¿Por qué estos estados?
          </h2>
          <p
            style={{
              margin: "10px 0 0",
              fontSize: 14,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7
            }}
          >
            Estos estados representan{" "}
            <strong>más del 60% de la actividad trucking latina en Estados Unidos</strong>.
            La estrategia de expansión de Sovereign TruckGuard está diseñada para
            garantizar presencia real donde el operador hispano más la necesita,
            manteniendo estándares legales, precisión operativa y tecnología soberana
            en cada paso.
          </p>
        </div>
      </section>
    </main>
  );
}
