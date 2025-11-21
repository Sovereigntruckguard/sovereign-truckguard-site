"use client";

// Landing Sovereign TruckGuard – versión producción sin Tailwind (inline styles)

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
          {/* Logo pequeño en header */}
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
          {[
            { label: "Coberturas", href: "#servicios" },
            { label: "Proceso", href: "#proceso" },
            { label: "App TruckBoss", href: "#truckboss" },
            { label: "Preguntas", href: "#faq" },
            { label: "Contacto", href: "#contacto" }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cotizar"
            style={{
              textDecoration: "none",
              padding: "7px 16px",
              borderRadius: 999,
              background:
                "linear-gradient(90deg, " + colors.gold + ", " + colors.rose + ")",
              color: "#000",
              fontSize: 12,
              fontWeight: 600,
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

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 80
      }}
    >
      {/* VIDEO FULL BACKGROUND */}
      <video
        src="/hero-truck.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.55) saturate(1.1)"
        }}
      />

      {/* OVERLAY PREMIUM */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.90))"
        }}
      />

      {/* CONTENIDO PRINCIPAL (subido)*/}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          textAlign: "center",
          maxWidth: 960,
          padding: "0 20px",
          color: "white",
          transform: "translateY(-40px)"
        }}
      >
        {/* LOGO SOBERANO GIGANTE */}
        <img
          src="/logo-sovereign.png"
          alt="Sovereign TruckGuard Logo"
          style={{
            width: 240,
            height: "auto",
            margin: "0 auto 25px"
          }}
        />

        {/* SUBTÍTULO */}
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: colors.gold,
            marginBottom: 10,
            fontFamily: "Montserrat, system-ui"
          }}
        >
          La primera agencia de seguros de lujo y tecnología soberana para
          camioneros latinos en EE. UU.
        </p>

        {/* TITULAR */}
        <h1
          style={{
            fontSize: 40,
            lineHeight: 1.25,
            fontWeight: 700,
            margin: 0
          }}
        >
          Convertimos el caos de los seguros de trucking
          <br />
          en un sistema de respaldo inteligente y soberano.
        </h1>

        {/* TEXTO – INNOVACIÓN / TECNOLOGÍA */}
        <p
          style={{
            marginTop: 20,
            maxWidth: 720,
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 16,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.85)"
          }}
        >
          Sovereign TruckGuard LLC redefine la experiencia del camionero latino:
          tecnología soberana, motores de cotización avanzados, análisis real de
          riesgo y un servicio de lujo que dignifica y protege tu empresa como
          nunca antes. El futuro del seguro comercial empieza aquí.
        </p>

        {/* BOTONES */}
        <div
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap"
          }}
        >
          <a
            href="#cotizar"
            style={{
              padding: "12px 30px",
              borderRadius: 999,
              background:
                "linear-gradient(90deg, " + colors.gold + ", " + colors.rose + ")",
              textDecoration: "none",
              color: "#000",
              fontWeight: 700,
              boxShadow: "0 14px 46px rgba(255,215,0,0.35)",
              fontSize: 14
            }}
          >
            Cotizar ahora
          </a>

          <a
            href="#servicios"
            style={{
              padding: "12px 30px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.55)",
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(6px)",
              textDecoration: "none",
              color: "white",
              fontWeight: 600,
              fontSize: 14
            }}
          >
            Ver coberturas
          </a>
        </div>

        {/* SELLO INFERIOR */}
        <p
          style={{
            marginTop: 16,
            fontSize: 11,
            color: "rgba(255,255,255,0.65)"
          }}
        >
          Registered LLC · EIN verificado · Tecnología soberana de SOLYON · App
          TruckBoss conectada en tiempo real.
        </p>
      </div>
    </section>
  );
}

/* --- COBERTURAS --- */

const services = [
  {
    name: "Commercial Auto Liability",
    short: "Responsabilidad primaria para tu operación.",
    desc: "Diseñada para cumplir requisitos de FMCSA y brokers exigentes. Ajustamos límites y filings según tu ruta, contratos y tipo de carga."
  },
  {
    name: "Motor Truck Cargo",
    short: "Protege lo que llevas, no solo el camión.",
    desc: "Cobertura para la carga en tránsito, ajustada al tipo de mercancía que mueves, valores máximos y requisitos de tus shippers."
  },
  {
    name: "Physical Damage",
    short: "Tu camión es un activo, no un gasto.",
    desc: "Cobertura para daños físicos, robo y pérdidas parciales o totales. Claves para vehículos financiados o en lease."
  },
  {
    name: "General Liability",
    short: "Porque tu empresa es más que el vehículo.",
    desc: "Cobertura ante reclamaciones por daños a terceros fuera del camión pero dentro de tu operación comercial."
  },
  {
    name: "Trailer Interchange",
    short: "Cuando el trailer no es tuyo, igual responde tu nombre.",
    desc: "Diseñada para operaciones donde intercambias o rentas trailers. Evita vacíos de cobertura que luego cuestan fortunas."
  },
  {
    name: "Workers Compensation & Servicios regulatorios",
    short: "Respaldo integral para tu equipo y tu DOT.",
    desc: "Workers comp, DOT compliance, filings federales, asesoría para mantener tu autoridad y tus contratos en regla."
  }
];

function Services() {
  return (
    <section
      id="servicios"
      style={{
        margin: "70px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 18,
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}
      >
        <div style={{ maxWidth: 520 }}>
          <p
            style={{
              margin: 0,
              marginBottom: 6,
              fontFamily: "Montserrat, system-ui",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: colors.gold
            }}
          >
            Coberturas de precisión
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: 24,
              background:
                "linear-gradient(120deg, " + colors.gold + ", " + colors.rose + ")",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            Todo tu ecosistema trucker, blindado como una joya.
          </h2>
          <p
            style={{
              margin: "10px 0 0",
              fontSize: 13,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.78)"
            }}
          >
            No vendemos pólizas genéricas. Diseñamos estructuras completas para
            dueños de camiones, fleets pequeños y operadores en crecimiento que
            quieren jugar en liga mayor.
          </p>
        </div>
        <div
          style={{
            maxWidth: 320,
            borderRadius: 18,
            border: "1px solid rgba(255,215,0,0.5)",
            background: "rgba(0,0,0,0.9)",
            padding: "10px 14px",
            fontSize: 11,
            color: "rgba(255,255,255,0.85)",
            boxShadow: "0 18px 45px rgba(0,0,0,0.8)"
          }}
        >
          <p
            style={{
              margin: 0,
              marginBottom: 4,
              fontWeight: 600,
              color: colors.gold
            }}
          >
            Base legal y respaldo real
          </p>
          <p style={{ margin: 0 }}>
            Sovereign TruckGuard LLC está registrada en Sheridan, Wyoming y
            forma parte del ecosistema tecnológico SOLYON.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: 26,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 18
        }}
      >
        {services.map((service) => (
          <div
            key={service.name}
            style={{
              borderRadius: 20,
              padding: 1,
              background:
                "radial-gradient(circle at top left, rgba(255,215,0,0.45), transparent 55%)," +
                "radial-gradient(circle at bottom right, rgba(232,183,183,0.45), transparent 55%)"
            }}
          >
            <div
              style={{
                borderRadius: 18,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(8,8,8,0.95)",
                padding: "14px 15px",
                minHeight: 150,
                display: "flex",
                flexDirection: "column",
                gap: 8
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "spaceBetween",
                  gap: 10
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "Montserrat, system-ui",
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.9)"
                  }}
                >
                  {service.name}
                </h3>
                <span
                  style={{
                    fontSize: 10,
                    padding: "3px 8px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.06)",
                    color: colors.gold
                  }}
                >
                  Premium
                </span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  color: "rgba(255,215,0,0.9)"
                }}
              >
                {service.short}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 11,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.75)"
                }}
              >
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --- PROCESO --- */

const steps = [
  {
    title: "1. Diagnóstico soberano",
    desc: "Revisamos tu DOT, MC, historial de pólizas, operaciones, rutas, contratos y tipo de carga. Nada de formularios vacíos: análisis real."
  },
  {
    title: "2. Arquitectura de póliza",
    desc: "Definimos límites, coberturas obligatorias y opcionales, filings, endorsements y estructura financiera (down payment + mensualidades)."
  },
  {
    title: "3. Cotización conectada",
    desc: "Nuestro motor de cotización (TruckBoss + SOLYON) proyecta escenarios con diferentes aseguradoras para buscar el mejor balance entre precio y estabilidad."
  },
  {
    title: "4. Emisión y acompañamiento",
    desc: "Te acompañamos en la firma de documentos, seteo de pagos, soporte post-emisión y ajustes cuando tu operación crece o cambia."
  }
];

function Process() {
  return (
    <section
      id="proceso"
      style={{
        margin: "80px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px"
      }}
    >
      <div
        style={{
          borderRadius: 22,
          border: "1px solid rgba(255,255,255,0.16)",
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.96), rgba(45,45,45,0.9), rgba(0,0,0,0.96))",
          padding: "22px 22px 26px"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.05fr) minmax(0,1.3fr)",
            gap: 24
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                marginBottom: 6,
                fontFamily: "Montserrat, system-ui",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: colors.gold
              }}
            >
              Proceso de cotización
            </p>
            <h2
              style={{
                margin: 0,
                fontSize: 24,
                background:
                  "linear-gradient(120deg, " + colors.gold + ", " + colors.rose + ")",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              De la llamada al respaldo, en cuatro movimientos precisos.
            </h2>
            <p
              style={{
                margin: "10px 0 6px",
                fontSize: 13,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.5
              }}
            >
              Tu tiempo en carretera es oro. Construimos un proceso estandarizado
              para reducir fricción y darte claridad desde el primer contacto.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.5
              }}
            >
              Sin promesas imposibles. Sin cotizaciones infladas para luego
              "negociar". Solo escenarios claros que respetan tu flujo de caja y
              tu realidad operacional.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gap: 10
            }}
          >
            {steps.map((step) => (
              <div
                key={step.title}
                style={{
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(0,0,0,0.9)",
                  padding: "10px 12px"
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 12,
                    color: colors.gold
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.5
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- EL MOTOR DE LA SOBERANÍA --- */

const engineCards = [
  {
    key: "arcanum",
    logo: "/arcanum.svg",
    tag: "IA PROPIETARIA",
    title: "Arcanum Core",
    label: "CEREBRO COGNITIVO",
    desc:
      "Nuestro motor de IA propietario. Utiliza memoria fractal y modelos de riesgo avanzados para leer tu historial, tu operación y tu contexto—not solo tu score. Permite decisiones de underwriting más justas, inteligentes y alineadas con la realidad del camionero."
  },
  {
    key: "nexus",
    logo: "/nexus.svg",
    tag: "ORQUESTADOR",
    title: "Nexus Grid",
    label: "SISTEMA NERVIOSO",
    desc:
      "Conecta aseguradoras, reguladores (FMCSA), factoring, despachos y clientes en un solo flujo. Automatiza certificados, filings y cumplimiento normativo en tiempo real, reduciendo fricción, tiempos muertos y errores humanos."
  },
  {
    key: "truckboss",
    logo: "/truckboss.svg",
    tag: "FRONT DEL CAMIONERO",
    title: "TruckBoss Integration",
    label: "APP PARA CAMIONEROS",
    desc:
      "Nacemos conectados. STG es la agencia nativa de la app TruckBoss, permitiendo cotizar, gestionar pólizas, subir documentos y reclamar siniestros directamente desde la cabina del camión, con experiencia PRO y comunidad latina."
  },
  {
    key: "elvia",
    logo: "/elvia-dot-express.svg",
    tag: "EDUCACIÓN + DOT",
    title: "EL-VIA DOT Express",
    label: "EDUCACIÓN Y CUMPLIMIENTO",
    desc:
      "Inglés + cumplimiento DOT para camioneros latinos. Plataforma educativa que traduce el mundo regulatorio y el idioma del sistema a un lenguaje claro, práctico y accionable para el operador hispano y sus equipos."
  }
];

function SovereigntyEngineSection() {
  return (
    <section
      style={{
        margin: "90px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px 40px"
      }}
    >
      {/* CSS para hover y tags */}
      <style>{`
        .sovereign-engine-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }
        .sovereign-engine-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 80px rgba(0,0,0,0.95);
          border-color: rgba(255,215,0,0.75);
          background: radial-gradient(circle at top, rgba(255,215,0,0.20), rgba(0,0,0,0.98));
        }
      `}</style>

      {/* TÍTULO SECCIÓN */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <h2
          style={{
            margin: 0,
            fontSize: 26,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: colors.rose,
            fontFamily: "Montserrat, system-ui"
          }}
        >
          EL MOTOR DE LA SOBERANÍA
        </h2>
        <p
          style={{
            marginTop: 10,
            fontSize: 13,
            color: "rgba(255,255,255,0.76)"
          }}
        >
          No usamos software genérico. Construimos nuestra propia inteligencia,
          infraestructura y stack soberano para el camionero latino.
        </p>
      </div>

      {/* GRID DE CARDS PREMIUM */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          gap: 20
        }}
      >
        {engineCards.map((card) => (
          <div
            key={card.key}
            className="sovereign-engine-card"
            style={{
              borderRadius: 24,
              padding: 18,
              background:
                "radial-gradient(circle at top, rgba(255,215,0,0.12), transparent 55%), rgba(0,0,0,0.96)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 20px 55px rgba(0,0,0,0.9)",
              display: "flex",
              flexDirection: "column",
              gap: 12
            }}
          >
            {/* TAG SUPERIOR */}
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
                fontFamily: "Montserrat, system-ui"
              }}
            >
              {card.tag}
            </div>

            {/* ICONO + TITULAR */}
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 999,
                  background: "rgba(0,0,0,0.85)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={card.logo}
                  alt={card.title + " logo"}
                  style={{ width: 24, height: 24, objectFit: "contain" }}
                />
              </div>
              <div>
                <div
                  style={{
                    margin: 0,
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "Montserrat, system-ui"
                  }}
                >
                  {card.label}
                </div>
                <h3
                  style={{
                    margin: "2px 0 0",
                    fontSize: 16,
                    color: "#fff",
                    fontFamily: "Montserrat, system-ui"
                  }}
                >
                  {card.title}
                </h3>
              </div>
            </div>

            {/* DESCRIPCIÓN */}
            <p
              style={{
                margin: 0,
                fontSize: 13,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.80)"
              }}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


/* --- EL PROBLEMA / NUESTRA SOLUCIÓN --- */

function ProblemSolutionSection() {
  return (
    <section
      style={{
        margin: "80px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px 60px"
      }}
    >
      {/* BLOQUE PUENTE (REESTRUCTURADO CON EL MISMO ESTILO QUE EL TÍTULO DE ARRIBA) */}
<div style={{ textAlign: "center", marginBottom: 36 }}>
  <h2
    style={{
      margin: 0,
      fontSize: 22,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: colors.rose,
      fontFamily: "Montserrat, system-ui"
    }}
  >
    DE LA TECNOLOGÍA A LA REALIDAD DEL CAMIONERO
  </h2>
  <p
    style={{
      marginTop: 10,
      fontSize: 14,
      color: "rgba(255,255,255,0.78)"
    }}
  >
    Así conectamos nuestro stack soberano con el problema real del mercado latino, 
    transformándolo en una infraestructura de lujo e inteligencia aplicada.
  </p>
</div>

      {/* CARD PROBLEMA / SOLUCIÓN */}
      <div
        style={{
          borderRadius: 28,
          padding: 26,
          background:
            "radial-gradient(circle at top, rgba(255,215,0,0.10), rgba(0,0,0,0.98))",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 24px 70px rgba(0,0,0,0.95)"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.05fr) minmax(0,1.05fr)",
            gap: 32
          }}
        >
          {/* EL PROBLEMA */}
          <div>
            <p
              style={{
                margin: 0,
                marginBottom: 6,
                fontFamily: "Montserrat, system-ui",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: colors.rose
              }}
            >
              EL PROBLEMA
            </p>
            <h2
              style={{
                margin: 0,
                fontSize: 24,
                color: "#fff"
              }}
            >
              El mercado tradicional ha fallado al camionero latino.
            </h2>
            <p
              style={{
                marginTop: 10,
                fontSize: 13,
                color: "rgba(255,255,255,0.80)",
                lineHeight: 1.6
              }}
            >
              Tarifas infladas, letras pequeñas, barreras de idioma y promesas
              que se caen cuando llega un siniestro. Durante décadas, el operador
              latino ha sido tratado como una transacción, no como el empresario
              que sostiene la economía de EE. UU.
            </p>
            <p
              style={{
                marginTop: 18,
                fontSize: 12,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.85)",
                borderLeft: "2px solid rgba(232,183,183,0.85)",
                paddingLeft: 10
              }}
            >
              “La tecnología avanzada no debe ser exclusiva de las grandes flotas.
              La soberanía comienza con el acceso.”<br />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)"
                }}
              >
                — Sergio Murillo, CEO &amp; Founder
              </span>
            </p>
          </div>

          {/* NUESTRA SOLUCIÓN */}
          <div>
            <p
              style={{
                margin: 0,
                marginBottom: 6,
                fontFamily: "Montserrat, system-ui",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: colors.gold
              }}
            >
              NUESTRA SOLUCIÓN
            </p>
            <h2
              style={{
                margin: 0,
                fontSize: 24,
                color: "#fff"
              }}
            >
              Lujo funcional + Precisión cognitiva.
            </h2>
            <p
              style={{
                marginTop: 10,
                fontSize: 13,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6
              }}
            >
              <strong>Sovereign TruckGuard</strong> no es solo una agencia; es
              una infraestructura. Combinamos 8+ años en seguros de trucking
              con el motor <strong>Arcanum Core</strong> y el orquestador{" "}
              <strong>Nexus Grid</strong> para eliminar ineficiencias, reducir
              errores y ofrecer pólizas justas, rápidas y transparentes.
            </p>
            <ul
              style={{
                marginTop: 14,
                paddingLeft: 18,
                fontSize: 13,
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.5
              }}
            >
              <li>Underwriting asistido por IA para máxima precisión.</li>
              <li>Infraestructura legal sólida en EE. UU. (Wyoming LLC).</li>
              <li>
                Atención bilingüe de nivel concierge para el camionero latino.
              </li>
              <li>
                Integración nativa con TruckBoss para gestionar todo desde la
                cabina.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


/* EJEMPLO SIMPLE DE FOOTER (si ya lo tienes, deja el tuyo) */
function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.16)",
        background: "rgba(0,0,0,0.95)",
        marginTop: 40
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

export default function Page() {
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
      <Hero />
      <Services />
      <Process />
      <SovereigntyEngineSection />
      <ProblemSolutionSection />
      {/* Aquí puedes volver a insertar TruckBossSection, FAQ, Contact si ya las tienes */}
      <Footer />
    </main>
  );
}
