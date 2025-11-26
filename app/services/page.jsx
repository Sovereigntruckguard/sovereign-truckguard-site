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
   HEADER ESTÁTICO /services
   ========================= */

function ServicesHeader() {
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
        {/* Logo + tagline con enlace al Home */}
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

        {/* Menú alineado al home */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
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
      </div>
    </header>
  );
}

/* =========================
   PÁGINA DE SERVICIOS
   ========================= */

export default function ServicesPage() {
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
      <ServicesHeader />
      <div style={{ height: 80 }} />

      {/* Encabezado Servicios */}
      <section
        style={{
          margin: "0 auto",
          maxWidth: layout.maxWidth,
          padding: "0 " + layout.sidePadding + "px 30px"
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            marginBottom: 18
          }}
        >
          <img
            src="/logo-sovereign.png"
            alt="Sovereign TruckGuard Logo"
            style={{ width: 56, height: "auto", objectFit: "contain" }}
          />
          <div>
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
              Servicios oficiales – Sovereign TruckGuard LLC
            </p>
            <h1
              style={{
                margin: "6px 0 0",
                fontSize: 26,
                fontFamily: "Montserrat, system-ui"
              }}
            >
              Servicios que procesamos con Stripe
            </h1>
          </div>
        </div>

        <p
          style={{
            margin: 0,
            fontSize: 14,
            lineHeight: 1.7,
            maxWidth: 760,
            color: "rgba(255,255,255,0.78)"
          }}
        >
          Sovereign TruckGuard LLC es una empresa registrada en Estados Unidos que
          ofrece servicios digitales para camioneros latinos y pequeñas compañías
          de transporte. A través de Stripe procesamos pagos de{" "}
          <strong>membresías y servicios digitales</strong>, principalmente la
          membresía de la plataforma educativa <strong>EL-VIA</strong>.
        </p>
      </section>

      {/* EL-VIA */}
      <section
        style={{
          margin: "0 auto",
          maxWidth: layout.maxWidth,
          padding: "0 " + layout.sidePadding + "px 30px"
        }}
      >
        <div
          style={{
            borderRadius: 24,
            padding: 22,
            background:
              "radial-gradient(circle at top, rgba(255,215,0,0.16), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 24px 70px rgba(0,0,0,0.95)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 22,
              marginBottom: 10,
              color: colors.gold,
              fontFamily: "Montserrat, system-ui"
            }}
          >
            Membresía EL-VIA – Acceso mensual
          </h2>

          <p
            style={{
              margin: 0,
              marginBottom: 6,
              fontSize: 13,
              color: "rgba(255,255,255,0.9)"
            }}
          >
            <strong>Tipo de servicio:</strong> servicio digital por suscripción.
          </p>

          <p
            style={{
              margin: "6px 0 10px",
              fontSize: 13,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6
            }}
          >
            EL-VIA es una plataforma educativa en línea para camioneros latinos en
            Estados Unidos. A través de una app y contenidos digitales, los usuarios
            reciben:
          </p>

          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              fontSize: 13,
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.6
            }}
          >
            <li>Clases bilingües orientadas a la vida en carretera.</li>
            <li>Recursos DOT y documentos esenciales.</li>
            <li>Videos y materiales descargables.</li>
            <li>Soporte por correo / chat dentro de la plataforma.</li>
          </ul>

          <div
            style={{
              marginTop: 14,
              fontSize: 13,
              color: "rgba(255,255,255,0.9)"
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>Precio:</strong> USD $29.00 al mes por usuario.
            </p>
            <p style={{ margin: "4px 0 0" }}>
              <strong>Entrega:</strong> acceso digital inmediato tras el pago.
            </p>
            <p style={{ margin: "4px 0 0" }}>
              <strong>Método de pago:</strong> Stripe.
            </p>
          </div>
        </div>
      </section>

      {/* Otros servicios */}
      <section
        style={{
          margin: "0 auto",
          maxWidth: layout.maxWidth,
          padding: "0 " + layout.sidePadding + "px 50px"
        }}
      >
        <h2
          style={{
            margin: "8px 0 6px",
            fontSize: 20,
            fontFamily: "Montserrat, system-ui"
          }}
        >
          Otros servicios digitales
        </h2>

        <p
          style={{
            margin: "0 0 10px",
            fontSize: 13,
            color: "rgba(255,255,255,0.8)",
            maxWidth: 720,
            lineHeight: 1.6
          }}
        >
          Además de la membresía EL-VIA, Sovereign TruckGuard LLC puede ofrecer
          consultorías digitales y acompañamiento en línea, tales como:
        </p>

        <ul
          style={{
            margin: 0,
            paddingLeft: 18,
            fontSize: 13,
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.6
          }}
        >
          <li>Consultorías en línea sobre procesos y tecnología.</li>
          <li>Webinars de productividad para empresas de transporte.</li>
        </ul>

        <p
          style={{
            marginTop: 10,
            fontSize: 12,
            color: "rgba(255,255,255,0.65)"
          }}
        >
          Todos estos servicios se entregan en modalidad digital y se pagan a través
          de Stripe. No vendemos productos físicos.
        </p>
      </section>
    </main>
  );
}
