"use client";

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

/* HEADER (igual al de la home) */
function Header() {
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
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src="/logo-sovereign.png"
            alt="Logo Sovereign TruckGuard"
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
              Luxury Insurance for Latino Truckers
            </p>
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 12,
            color: "rgba(255,255,255,0.75)"
          }}
        >
          <a href="/coverages" style={{ textDecoration: "none", color: "inherit" }}>
            Coberturas
          </a>
          <a href="/technology" style={{ textDecoration: "none", color: "inherit" }}>
            Tecnología
          </a>
          <a href="/states" style={{ textDecoration: "none", color: "inherit" }}>
            Estado​s
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
              padding: "7px 16px",
              borderRadius: 999,
              background:
                "linear-gradient(90deg, " + colors.gold + ", " + colors.rose + ")",
              color: "#000",
              fontSize: 12,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 14px 35px rgba(0,0,0,0.7)"
            }}
          >
            Cotización inmediata
          </a>
        </nav>
      </div>
    </header>
  );
}

/* HERO DE LA PÁGINA DE COBERTURAS */
function CoveragesHero() {
  return (
    <section
      style={{
        margin: "0 auto",
        maxWidth: layout.maxWidth,
        padding: `110px ${layout.sidePadding}px 50px`,
        display: "grid",
        gridTemplateColumns: "minmax(0,1.2fr) minmax(0,0.8fr)",
        gap: 24,
        alignItems: "center"
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
            marginBottom: 8,
            fontFamily: "Montserrat, system-ui",
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: colors.gold
          }}
        >
          COBERTURAS SOVEREIGN
        </p>
        <h1
          style={{
            margin: 0,
            fontSize: 30,
            lineHeight: 1.3,
            color: colors.white
          }}
        >
          Estructuras de seguro de lujo para cada tipo de operación.
        </h1>
        <p
          style={{
            marginTop: 12,
            fontSize: 14,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.8)"
          }}
        >
          Diseñamos programas de Auto Liability, Cargo, Physical Damage,
          General Liability, Trailer Interchange y Workers Comp pensados para
          owner operators y fleets latinos que quieren jugar en liga mayor.
          Sin sorpresas, sin letras pequeñas.
        </p>
        <div style={{ marginTop: 16, fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
          <p style={{ margin: 0 }}>
            • Programas para nuevos negocios, operaciones con historial y fleets.
          </p>
          <p style={{ margin: 0 }}>
            • Límites de hasta 1M CSL, 100K+ Cargo y Physical Damage a valor
            de reposición.
          </p>
        </div>
      </div>

      {/* Panel lateral simple con datos rápidos */}
      <div
        style={{
          borderRadius: 24,
          padding: 18,
          background:
            "radial-gradient(circle at top, rgba(255,215,0,0.10), rgba(5,5,5,1))",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 20px 55px rgba(0,0,0,0.9)",
          fontSize: 13,
          color: "rgba(255,255,255,0.9)"
        }}
      >
        <p
          style={{
            margin: 0,
            marginBottom: 8,
            fontFamily: "Montserrat, system-ui",
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: colors.gold
          }}
        >
          Programas clave
        </p>
        <ul
          style={{
            margin: 0,
            paddingLeft: 18,
            lineHeight: 1.6
          }}
        >
          <li>Transporte local, regional e interestatal.</li>
          <li>Hotshot, auto hauler, reefer, dry van, flatbed, oil & gas.</li>
          <li>Opciones de deducible flexibles y planes de pago mensuales.</li>
          <li>Filings federales (MCS-90, BMC-91X, BOC-3) incluidos.</li>
        </ul>
      </div>
    </section>
  );
}

/* COBERTURAS DETALLADAS */

const coverages = [
  {
    title: "Commercial Auto Liability",
    tag: "RESPONSABILIDAD PRIMARIA",
    bullets: [
      "Cumplimiento con FMCSA (MCS-90, BMC-91X) y requisitos de brokers.",
      "Límites desde 750,000 hasta 1,000,000 CSL y superiores según contratos.",
      "Opciones para operaciones locales, regionales e interstate.",
      "Análisis de historial de manejo, rutas y tipo de carga para ajustar tarifa."
    ]
  },
  {
    title: "Motor Truck Cargo",
    tag: "PROTECCIÓN DE LA CARGA",
    bullets: [
      "Cobertura para mercancía en tránsito: general freight, reefer, autos, equipo pesado.",
      "Límites desde 100K hasta 500K+, con deducibles personalizados.",
      "Endosos especiales: reefer breakdown, theft-only, unattended truck.",
      "Diseñado para cumplir con los contratos de tus shippers y brokers."
    ]
  },
  {
    title: "Physical Damage",
    tag: "TU CAMIÓN ES UN ACTIVO",
    bullets: [
      "Cobertura por colisión, volcadura, robo e incendio.",
      "Opción de valor real o valor acordado para unidades nuevas o personalizadas.",
      "Incluye glass coverage, gap, accesorios especiales y equipos montados.",
      "Estrategias para balancear prima vs deducible según tu flujo de caja."
    ]
  },
  {
    title: "General Liability",
    tag: "RESPALDO COMERCIAL",
    bullets: [
      "Protección frente a daños corporales o materiales a terceros fuera del camión.",
      "Requerida por muchos contratos de yardas, almacenes y brokers.",
      "Opciones de límites 1M/2M y superiores según el tamaño de tu operación.",
      "Cobertura clave para empresas que crecen y firman contratos directos."
    ]
  },
  {
    title: "Trailer Interchange",
    tag: "TRÁILERES INTERCAMBIADOS",
    bullets: [
      "Cubre los tráilers que no son tuyos cuando estás bajo contrato de intercambio.",
      "Evita que respondas con tu propio bolsillo ante daños a equipo ajeno.",
      "Compatible con operaciones portuarias, rail yards y grandes cadenas.",
      "Límites ajustables según el valor del equipo que manejas."
    ]
  },
  {
    title: "Workers Comp / Occupational Accident",
    tag: "RESPALDO PARA TI Y TU EQUIPO",
    bullets: [
      "Programas de Workers Compensation para empleados W-2.",
      "Opciones de Occupational Accident para owner operators 1099.",
      "Cobertura de gastos médicos, incapacidad y muerte accidental.",
      "Asesoría para estructurar tu nómina y evitar sorpresas con el DOT."
    ]
  }
];

function DetailedCoverages() {
  return (
    <section
      style={{
        margin: "20px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px 60px"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: 26
        }}
      >
        {coverages.map((cvg) => (
          <div
            key={cvg.title}
            style={{
              borderRadius: 24,
              padding: 24,
              background:
                "radial-gradient(circle at top, rgba(255,215,0,0.10), rgba(5,5,5,1))",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 20px 55px rgba(0,0,0,0.9)",
              color: "#fff"
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.20em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
                marginBottom: 8
              }}
            >
              {cvg.tag}
            </div>
            <h3
              style={{
                margin: 0,
                fontSize: 18,
                color: "#fff",
                fontFamily: "Montserrat, system-ui"
              }}
            >
              {cvg.title}
            </h3>
            <ul
              style={{
                marginTop: 14,
                paddingLeft: 18,
                fontSize: 13,
                lineHeight: 1.55,
                color: "rgba(255,255,255,0.82)"
              }}
            >
              {cvg.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* FOOTER (simple) */
function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.16)",
        background: "rgba(0,0,0,0.95)",
        marginTop: 60
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: layout.maxWidth,
          padding: "18px " + layout.sidePadding + "px 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "space-between",
          fontSize: 11,
          color: "rgba(255,255,255,0.78)"
        }}
      >
        <div style={{ maxWidth: 420 }}>
          <p
            style={{
              margin: 0,
              marginBottom: 4,
              fontFamily: "Montserrat, system-ui",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.9)"
            }}
          >
            Sovereign TruckGuard LLC
          </p>
          <p style={{ margin: 0 }}>
            Sheridan, Wyoming –
            <span style={{ color: "rgba(255,255,255,0.98)" }}>
              {" "}
              Registered U.S. Limited Liability Company
            </span>
          </p>
          <p style={{ margin: "4px 0 0" }}>
            EIN disponible para verificación bajo solicitud formal.
          </p>
        </div>
        <div style={{ textAlign: "right", maxWidth: 320 }}>
          <p style={{ margin: 0 }}>
            Correo:{" "}
            <a
              href="mailto:info@sovereigntruckguard.com"
              style={{ color: colors.gold, textDecoration: "none" }}
            >
              info@sovereigntruckguard.com
            </a>
          </p>
          <p style={{ margin: "4px 0" }}>
            WhatsApp:{" "}
            <span style={{ color: colors.gold }}>
              +1 (por definir oficialmente)
            </span>
          </p>
          <p
            style={{
              margin: 0,
              marginTop: 6,
              fontSize: 10,
              color: "rgba(255,255,255,0.55)"
            }}
          >
            © {new Date().getFullYear()} Sovereign TruckGuard LLC · Powered by
            SOLYON Technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function CoveragesPage() {
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
      <Header />
      <CoveragesHero />
      <DetailedCoverages />
      <Footer />
    </main>
  );
}
