// app/services/page.jsx
"use client";

// Página de servicios – alineada al branding principal (sin Tailwind)

const colors = {
  bg: "#050505",
  panel: "#0b0b0b",
  gold: "#FFD700",
  rose: "#E8B7B7",
  white: "#FFFFFF"
};

const layout = {
  maxWidth: 1120,
  sidePadding: 20
};

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
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        paddingTop: 80,
        paddingBottom: 60
      }}
    >
      {/* Encabezado simple con logo y título */}
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

      {/* Bloque principal: Membresía EL-VIA */}
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
            Estados Unidos. A través de una app y contenidos digitales, los
            usuarios reciben:
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
            <li>
              Clases y material bilingüe (español–inglés) orientado a la vida en
              carretera.
            </li>
            <li>
              Recursos para comprender mejor procesos DOT y documentos básicos.
            </li>
            <li>Videos, guías descargables y recursos digitales bajo demanda.</li>
            <li>Soporte digital por correo y chat dentro de la plataforma.</li>
          </ul>

          <div
            style={{
              marginTop: 14,
              fontSize: 13,
              color: "rgba(255,255,255,0.9)"
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>Precio de referencia:</strong> USD $29.00 al mes por usuario.
            </p>
            <p style={{ margin: "4px 0 0" }}>
              <strong>Entrega del servicio:</strong> el acceso se otorga de manera
              digital inmediatamente después de confirmar el pago. No se envían
              productos físicos.
            </p>
            <p style={{ margin: "4px 0 0" }}>
              <strong>Método de pago:</strong> todos los pagos de la membresía
              EL-VIA se procesan de forma segura a través de Stripe.
            </p>
          </div>
        </div>
      </section>

      {/* Otros servicios digitales */}
      <section
        style={{
          margin: "0 auto",
          maxWidth: layout.maxWidth,
          padding: "0 " + layout.sidePadding + "px"
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
          servicios de consultoría y acompañamiento digital para empresas de
          transporte, tales como:
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
          <li>
            Consultorías en línea sobre organización de documentos, uso de
            tecnología y procesos básicos para pequeñas empresas de transporte.
          </li>
          <li>
            Talleres virtuales grupales (webinars) para capacitación de equipos
            de transporte en temas operativos y de productividad.
          </li>
        </ul>

        <p
          style={{
            marginTop: 10,
            fontSize: 12,
            color: "rgba(255,255,255,0.65)"
          }}
        >
          Todos estos servicios se prestan en modalidad digital/remota y se pagan
          a través de Stripe. No vendemos productos físicos.
        </p>
      </section>
    </main>
  );
}
