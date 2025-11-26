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
   HEADER ESTÁTICO /contact
   ========================= */

function ContactHeader() {
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
   CONTACT PAGE
   ========================= */

export default function ContactPage() {
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
      <ContactHeader />
      <div style={{ height: 80 }} />

      {/* Encabezado */}
      <section
        style={{
          margin: "0 auto",
          maxWidth: layout.maxWidth,
          padding: "30px " + layout.sidePadding + "px 10px"
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
          Contacto directo – Sovereign TruckGuard LLC
        </p>
        <h1
          style={{
            margin: "8px 0 6px",
            fontSize: 26,
            fontFamily: "Montserrat, system-ui"
          }}
        >
          Hablemos de tu operación y tu seguro comercial.
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: 14,
            lineHeight: 1.7,
            maxWidth: 720,
            color: "rgba(255,255,255,0.78)"
          }}
        >
          Este canal es para{" "}
          <strong>dueños de camiones, fleets pequeños y empresas de transporte</strong>{" "}
          que quieren una evaluación seria de su seguro, su riesgo y sus próximos
          pasos. No ofrecemos soluciones genéricas; cada caso se analiza de forma
          personalizada.
        </p>
      </section>

      {/* Layout contacto + formulario */}
      <section
        style={{
          margin: "20px auto 0",
          maxWidth: layout.maxWidth,
          padding: "0 " + layout.sidePadding + "px 50px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
          gap: 26
        }}
      >
        {/* Datos de contacto */}
        <div
          style={{
            borderRadius: 24,
            padding: 20,
            background: "rgba(5,5,5,0.95)",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontFamily: "Montserrat, system-ui",
              marginBottom: 10
            }}
          >
            Información de contacto
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.6
            }}
          >
            <strong>Sovereign TruckGuard LLC</strong>
            <br />
            Sheridan, Wyoming – Registered U.S. LLC
            <br />
            EIN disponible para verificación bajo solicitud formal.
          </p>

          <div style={{ marginTop: 14, fontSize: 13 }}>
            <p style={{ margin: "0 0 4px" }}>
              <strong>Correo:</strong>{" "}
              <a
                href="mailto:info@sovereigntruckguard.com"
                style={{ color: colors.gold, textDecoration: "none" }}
              >
                info@sovereigntruckguard.com
              </a>
            </p>
            <p style={{ margin: "0 0 4px" }}>
              <strong>WhatsApp (operativo pronto):</strong>{" "}
              <span style={{ color: colors.gold }}>+1 (por definir oficialmente)</span>
            </p>
            <p style={{ margin: "0 0 4px", color: "rgba(255,255,255,0.75)" }}>
              <strong>Horario de atención (referencia):</strong> Lun–Vie · 9:00 a.m. –
              5:00 p.m. (hora del Este de EE. UU.)
            </p>
          </div>

          <div
            style={{
              marginTop: 16,
              padding: 12,
              borderRadius: 16,
              background: "rgba(0,0,0,0.85)",
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 12,
              color: "rgba(255,255,255,0.7)"
            }}
          >
            <strong>Importante:</strong> Esta página existe también como{" "}
            <strong>referencia oficial para Stripe, aliados y aseguradoras</strong>,
            mostrando claramente nuestro modelo de negocio y nuestros canales de
            contacto.
          </div>
        </div>

        {/* Formulario de contacto simple */}
        <div
          style={{
            borderRadius: 24,
            padding: 20,
            background:
              "radial-gradient(circle at top, rgba(255,215,0,0.16), rgba(5,5,5,1))",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontFamily: "Montserrat, system-ui",
              marginBottom: 10
            }}
          >
            Envíanos los detalles de tu caso
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "rgba(255,255,255,0.8)",
              marginBottom: 14
            }}
          >
            Completa este formulario y un miembro del equipo revisará tu caso. Por
            ahora este formulario es informativo; la respuesta llegará vía correo.
          </p>

          <form
            style={{ display: "grid", gap: 10, fontSize: 13 }}
            // Si más adelante quieres manejarlo con JS, aquí se agregarían handlers
          >
            <div style={{ display: "grid", gap: 6 }}>
              <label>Nombre completo</label>
              <input
                type="text"
                placeholder="Tu nombre"
                style={{
                  padding: "8px 10px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(0,0,0,0.85)",
                  color: colors.white
                }}
              />
            </div>

            <div style={{ display: "grid", gap: 6 }}>
              <label>Correo electrónico</label>
              <input
                type="email"
                placeholder="tuemail@ejemplo.com"
                style={{
                  padding: "8px 10px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(0,0,0,0.85)",
                  color: colors.white
                }}
              />
            </div>

            <div style={{ display: "grid", gap: 6 }}>
              <label>Nombre de la empresa / DOT (opcional)</label>
              <input
                type="text"
                placeholder="Nombre de tu empresa o USDOT"
                style={{
                  padding: "8px 10px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(0,0,0,0.85)",
                  color: colors.white
                }}
              />
            </div>

            <div style={{ display: "grid", gap: 6 }}>
              <label>¿Qué necesitas?</label>
              <textarea
                rows={4}
                placeholder="Cuéntanos brevemente tu situación: seguro actual, rutas, tipo de camión, problema principal…"
                style={{
                  padding: "8px 10px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(0,0,0,0.85)",
                  color: colors.white,
                  resize: "vertical"
                }}
              />
            </div>

            <button
              type="button"
              style={{
                marginTop: 6,
                padding: "10px 18px",
                borderRadius: 999,
                border: "none",
                background:
                  "linear-gradient(90deg, " + colors.gold + ", " + colors.rose + ")",
                color: "#000",
                fontWeight: 600,
                cursor: "default"
              }}
            >
              Enviar (próximamente activo)
            </button>

            <p
              style={{
                margin: "6px 0 0",
                fontSize: 11,
                color: "rgba(255,255,255,0.6)"
              }}
            >
              Por ahora este formulario es de demostración para aliados y revisores.
              Puedes escribirnos directamente a{" "}
              <a
                href="mailto:info@sovereigntruckguard.com"
                style={{ color: colors.gold, textDecoration: "none" }}
              >
                info@sovereigntruckguard.com
              </a>
              .
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
