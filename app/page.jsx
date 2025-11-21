"use client";

// Landing Sovereign TruckGuard – versión producción sin Tailwind (inline styles)

import { useLanguage } from "../lib/language";

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

/* =========================
   TEXTOS ES / EN
   ========================= */

const TEXT_ES = {
  header: {
    tagline: "Agencia de seguros de lujo para camioneros latinos",
    nav: {
      coverages: "Coberturas",
      technology: "Tecnología",
      states: "Estados",
      about: "Nosotros",
      testimonials: "Testimonios",
      contact: "Contacto",
      cta: "Cotización inmediata"
    }
  },
  hero: {
    subtitle:
      "La primera agencia de seguros de lujo y tecnología soberana para camioneros latinos en EE. UU.",
    titleLine1: "Convertimos el caos de los seguros de trucking",
    titleLine2: "en un sistema de respaldo inteligente y soberano.",
    body:
      "Sovereign TruckGuard LLC redefine la experiencia del camionero latino: tecnología soberana, motores de cotización avanzados, análisis real de riesgo y un servicio de lujo que dignifica y protege tu empresa como nunca antes. El futuro del seguro comercial empieza aquí.",
    btnQuote: "Cotizar ahora",
    btnCoverages: "Ver coberturas",
    seal:
      "Registered LLC · EIN verificado · Tecnología soberana de SOLYON · App TruckBoss conectada en tiempo real."
  },
  services: {
    kicker: "Coberturas de precisión",
    title: "Todo tu ecosistema trucker, blindado como una joya.",
    body:
      "No vendemos pólizas genéricas. Diseñamos estructuras completas para dueños de camiones, fleets pequeños y operadores en crecimiento que quieren jugar en liga mayor.",
    legalTitle: "Base legal y respaldo real",
    legalBody:
      "Sovereign TruckGuard LLC está registrada en Sheridan, Wyoming y forma parte del ecosistema tecnológico SOLYON.",
    items: [
      {
        name: "Commercial Auto Liability",
        short: "Responsabilidad primaria para tu operación.",
        desc:
          "Diseñada para cumplir requisitos de FMCSA y brokers exigentes. Ajustamos límites y filings según tu ruta, contratos y tipo de carga."
      },
      {
        name: "Motor Truck Cargo",
        short: "Protege lo que llevas, no solo el camión.",
        desc:
          "Cobertura para la carga en tránsito, ajustada al tipo de mercancía que mueves, valores máximos y requisitos de tus shippers."
      },
      {
        name: "Physical Damage",
        short: "Tu camión es un activo, no un gasto.",
        desc:
          "Cobertura para daños físicos, robo y pérdidas parciales o totales. Claves para vehículos financiados o en lease."
      },
      {
        name: "General Liability",
        short: "Porque tu empresa es más que el vehículo.",
        desc:
          "Cobertura ante reclamaciones por daños a terceros fuera del camión pero dentro de tu operación comercial."
      },
      {
        name: "Trailer Interchange",
        short: "Cuando el trailer no es tuyo, igual responde tu nombre.",
        desc:
          "Diseñada para operaciones donde intercambias o rentas trailers. Evita vacíos de cobertura que luego cuestan fortunas."
      },
      {
        name: "Workers Compensation & Servicios regulatorios",
        short: "Respaldo integral para tu equipo y tu DOT.",
        desc:
          "Workers comp, DOT compliance, filings federales, asesoría para mantener tu autoridad y tus contratos en regla."
      }
    ]
  },
  why: {
    title: "POR QUÉ ELEGIRNOS",
    subtitle:
      "No somos una agencia más. Somos una casa de seguros soberana, diseñada para elevar la industria trucker latina en EE. UU.",
    items: [
      {
        title: "Lujo funcional",
        desc:
          "Tu camión y tu empresa merecen más que una póliza estándar. Ofrecemos una experiencia de agencia premium, documentación impecable y atención tipo concierge para operadores latinos que buscan respeto y excelencia."
      },
      {
        title: "Tecnología soberana",
        desc:
          "Somos la única agencia creada sobre una infraestructura DeepTech: Arcanum Core, Nexus Grid y TruckBoss. Esto nos permite cotizar, validar, emitir y acompañar con velocidad, precisión y transparencia real."
      },
      {
        title: "Especialistas en camioneros latinos",
        desc:
          "8+ años asegurando Owner Operators y fleets latinos desde dentro del mercado. Entendemos tus rutas, tus contratos, tus riesgos y el tipo de asesoría que realmente protege tu negocio."
      },
      {
        title: "Base legal sólida en EE. UU.",
        desc:
          "Sovereign TruckGuard LLC está registrada en Sheridan, Wyoming. Operamos con cumplimiento estricto, alianzas reales y una estructura creada para expandirse por todo el país."
      }
    ]
  },
  process: {
    kicker: "Proceso de cotización",
    title: "De la llamada al respaldo, en cuatro movimientos precisos.",
    intro1:
      "Tu tiempo en carretera es oro. Construimos un proceso estandarizado para reducir fricción y darte claridad desde el primer contacto.",
    intro2:
      "Sin promesas imposibles. Sin cotizaciones infladas para luego \"negociar\". Solo escenarios claros que respetan tu flujo de caja y tu realidad operacional.",
    steps: [
      {
        title: "1. Diagnóstico soberano",
        desc:
          "Revisamos tu DOT, MC, historial de pólizas, operaciones, rutas, contratos y tipo de carga. Nada de formularios vacíos: análisis real."
      },
      {
        title: "2. Arquitectura de póliza",
        desc:
          "Definimos límites, coberturas obligatorias y opcionales, filings, endorsements y estructura financiera (down payment + mensualidades)."
      },
      {
        title: "3. Cotización conectada",
        desc:
          "Nuestro motor de cotización (TruckBoss + SOLYON) proyecta escenarios con diferentes aseguradoras para buscar el mejor balance entre precio y estabilidad."
      },
      {
        title: "4. Emisión y acompañamiento",
        desc:
          "Te acompañamos en la firma de documentos, seteo de pagos, soporte post-emisión y ajustes cuando tu operación crece o cambia."
      }
    ]
  },
  engine: {
    title: "EL MOTOR DE LA SOBERANÍA",
    subtitle:
      "No usamos software genérico. Construimos nuestra propia inteligencia, infraestructura y stack soberano para el camionero latino.",
    cards: [
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
    ]
  },
  bridge: {
    title: "DE LA TECNOLOGÍA A LA REALIDAD DEL CAMIONERO",
    subtitle:
      "Así conectamos nuestro stack soberano con el problema real del mercado latino, transformándolo en una infraestructura de lujo e inteligencia aplicada."
  },
  problem: {
    kicker: "EL PROBLEMA",
    title: "El mercado tradicional ha fallado al camionero latino.",
    body:
      "Tarifas infladas, letras pequeñas, barreras de idioma y promesas que se caen cuando llega un siniestro. Durante décadas, el operador latino ha sido tratado como una transacción, no como el empresario que sostiene la economía de EE. UU.",
    quote:
      "“La tecnología avanzada no debe ser exclusiva de las grandes flotas. La soberanía comienza con el acceso.”",
    author: "— Sergio Murillo, CEO & Founder"
  },
  solution: {
    kicker: "NUESTRA SOLUCIÓN",
    title: "Lujo funcional + Precisión cognitiva.",
    body:
      "Sovereign TruckGuard no es solo una agencia; es una infraestructura. Combinamos 8+ años en seguros de trucking con el motor Arcanum Core y el orquestador Nexus Grid para eliminar ineficiencias, reducir errores y ofrecer pólizas justas, rápidas y transparentes.",
    bullets: [
      "Underwriting asistido por IA para máxima precisión.",
      "Infraestructura legal sólida en EE. UU. (Wyoming LLC).",
      "Atención bilingüe de nivel concierge para el camionero latino.",
      "Integración nativa con TruckBoss para gestionar todo desde la cabina."
    ]
  },
  footer: {
    company: "Sovereign TruckGuard LLC",
    legalLine:
      "Sheridan, Wyoming – Registered U.S. Limited Liability Company",
    einNote: "EIN disponible para verificación bajo solicitud formal.",
    emailLabel: "Correo:",
    whatsappLabel: "WhatsApp:",
    rights:
      "© {year} Sovereign TruckGuard LLC · Powered by SOLYON Technologies."
  }
};

const TEXT_EN = {
  header: {
    tagline: "Luxury insurance agency for Latino truckers",
    nav: {
      coverages: "Coverages",
      technology: "Technology",
      states: "States",
      about: "About",
      testimonials: "Testimonials",
      contact: "Contact",
      cta: "Get a quote"
    }
  },
  hero: {
    subtitle:
      "The first luxury insurance and sovereign technology agency for Latino truckers in the U.S.",
    titleLine1: "We turn trucking insurance chaos",
    titleLine2: "into a sovereign and intelligent protection system.",
    body:
      "Sovereign TruckGuard LLC redefines the Latino trucker’s insurance experience: sovereign technology, advanced quoting engines, real risk analysis and a luxury service that truly protects your business.",
    btnQuote: "Get a quote",
    btnCoverages: "View coverages",
    seal:
      "Registered LLC · EIN verified · SOLYON sovereign technology · TruckBoss app connected in real time."
  },
  services: {
    kicker: "Precision coverages",
    title: "Your entire trucker ecosystem, armored like a jewel.",
    body:
      "We don’t sell generic policies. We design complete structures for owner-operators, small fleets and growing operations that want to play in the big leagues.",
    legalTitle: "Real legal base and backing",
    legalBody:
      "Sovereign TruckGuard LLC is registered in Sheridan, Wyoming and is part of the SOLYON technology ecosystem.",
    items: [
      {
        name: "Commercial Auto Liability",
        short: "Primary liability for your operation.",
        desc:
          "Designed to meet FMCSA and demanding broker requirements. We adjust limits and filings based on your routes, contracts and cargo type."
      },
      {
        name: "Motor Truck Cargo",
        short: "Protects what you carry, not just the truck.",
        desc:
          "Coverage for cargo in transit, tailored to the commodities you haul, maximum values and shipper requirements."
      },
      {
        name: "Physical Damage",
        short: "Your truck is an asset, not a cost.",
        desc:
          "Coverage for physical damage, theft and partial or total losses. Key for financed or leased units."
      },
      {
        name: "General Liability",
        short: "Because your business is more than the vehicle.",
        desc:
          "Covers claims for bodily injury or property damage to third parties outside the truck but within your commercial operation."
      },
      {
        name: "Trailer Interchange",
        short: "When the trailer isn’t yours, your name still stands.",
        desc:
          "Designed for operations where you exchange or rent trailers. Avoid costly coverage gaps."
      },
      {
        name: "Workers Compensation & Regulatory services",
        short: "Integral support for your team and DOT.",
        desc:
          "Workers comp, DOT compliance, federal filings and advisory to keep your authority and contracts in good standing."
      }
    ]
  },
  why: {
    title: "WHY CHOOSE US",
    subtitle:
      "We are not just another agency. We are a sovereign insurance house, built to elevate the Latino trucking industry in the U.S.",
    items: [
      {
        title: "Functional luxury",
        desc:
          "Your truck and your company deserve more than a standard policy. We deliver a premium agency experience, impeccable documentation and concierge-level service for Latino operators."
      },
      {
        title: "Sovereign technology",
        desc:
          "We are the only agency built on a DeepTech infrastructure: Arcanum Core, Nexus Grid and TruckBoss. This enables fast, accurate and truly transparent underwriting and servicing."
      },
      {
        title: "Specialists in Latino truckers",
        desc:
          "8+ years insuring owner-operators and Latino fleets from inside the market. We understand your routes, contracts, risks and the type of advice that truly protects your business."
      },
      {
        title: "Solid U.S. legal base",
        desc:
          "Sovereign TruckGuard LLC is registered in Sheridan, Wyoming. We operate with strict compliance, real alliances and a structure built to scale nationwide."
      }
    ]
  },
  process: {
    kicker: "Quoting process",
    title: "From the first call to coverage, in four precise moves.",
    intro1:
      "Your time on the road is gold. We built a standardized process to reduce friction and give you clarity from the first contact.",
    intro2:
      "No impossible promises. No inflated quotes just to \"negotiate\" later. Only clear scenarios that respect your cash flow and operational reality.",
    steps: [
      {
        title: "1. Sovereign diagnosis",
        desc:
          "We review your DOT, MC, policy history, operations, routes, contracts and cargo type. No empty forms—real analysis."
      },
      {
        title: "2. Policy architecture",
        desc:
          "We define limits, mandatory and optional coverages, filings, endorsements and financial structure (down payment + installments)."
      },
      {
        title: "3. Connected quoting",
        desc:
          "Our quoting engine (TruckBoss + SOLYON) projects scenarios with different carriers to find the best balance between price and stability."
      },
      {
        title: "4. Issuance and support",
        desc:
          "We guide you through signature, payments, post-issuance support and adjustments as your operation grows or changes."
      }
    ]
  },
  engine: {
    title: "THE SOVEREIGN ENGINE",
    subtitle:
      "We don’t use generic software. We built our own intelligence, infrastructure and sovereign stack for Latino truckers.",
    cards: [
      {
        key: "arcanum",
        logo: "/arcanum.svg",
        tag: "PROPRIETARY AI",
        title: "Arcanum Core",
        label: "COGNITIVE BRAIN",
        desc:
          "Our proprietary AI engine. Uses fractal memory and advanced risk models to read your history, operation and context—not just your score. Enables fairer and smarter underwriting decisions."
      },
      {
        key: "nexus",
        logo: "/nexus.svg",
        tag: "ORCHESTRATOR",
        title: "Nexus Grid",
        label: "NERVOUS SYSTEM",
        desc:
          "Connects carriers, regulators (FMCSA), factoring, dispatch and clients in a single flow. Automates certificates, filings and compliance in real time, reducing friction and human error."
      },
      {
        key: "truckboss",
        logo: "/truckboss.svg",
        tag: "TRUCKER FRONT",
        title: "TruckBoss Integration",
        label: "APP FOR TRUCKERS",
        desc:
          "Born integrated. STG is the native agency of the TruckBoss app, enabling quoting, policy management, document upload and claims directly from the truck cab, with PRO experience and Latino community."
      },
      {
        key: "elvia",
        logo: "/elvia-dot-express.svg",
        tag: "EDUCATION + DOT",
        title: "EL-VIA DOT Express",
        label: "EDUCATION & COMPLIANCE",
        desc:
          "English + DOT compliance for Latino truckers. Educational platform that translates the regulatory world and system language into clear, practical and actionable content."
      }
    ]
  },
  bridge: {
    title: "FROM TECHNOLOGY TO THE TRUCKER’S REALITY",
    subtitle:
      "This is how our sovereign stack connects with the real problems of the Latino market—turning them into a luxury and intelligence infrastructure."
  },
  problem: {
    kicker: "THE PROBLEM",
    title: "The traditional market has failed Latino truckers.",
    body:
      "Inflated rates, fine print, language barriers and promises that collapse when a claim hits. For decades, Latino operators have been treated as a transaction—not as the business owners who hold up the U.S. economy.",
    quote:
      "“Advanced technology should not be exclusive to big fleets. Sovereignty begins with access.”",
    author: "— Sergio Murillo, CEO & Founder"
  },
  solution: {
    kicker: "OUR SOLUTION",
    title: "Functional luxury + Cognitive precision.",
    body:
      "Sovereign TruckGuard is not just an agency; it is an infrastructure. We combine 8+ years in trucking insurance with the Arcanum Core engine and the Nexus Grid orchestrator to eliminate inefficiencies, reduce errors and deliver fair, fast and transparent policies.",
    bullets: [
      "AI-assisted underwriting for maximum precision.",
      "Solid U.S. legal structure (Wyoming LLC).",
      "Bilingual concierge-level service for Latino truckers.",
      "Native integration with TruckBoss to manage everything from the cab."
    ]
  },
  footer: {
    company: "Sovereign TruckGuard LLC",
    legalLine:
      "Sheridan, Wyoming – Registered U.S. Limited Liability Company",
    einNote: "EIN available for verification upon formal request.",
    emailLabel: "Email:",
    whatsappLabel: "WhatsApp:",
    rights:
      "© {year} Sovereign TruckGuard LLC · Powered by SOLYON Technologies."
  }
};

/* =========================
   HEADER
   ========================= */

function Header() {
  const { lang, setLang } = useLanguage();
  const t = lang === "es" ? TEXT_ES.header : TEXT_EN.header;

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
              {t.tagline}
            </p>
          </div>
        </div>

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
              {t.nav.coverages}
            </a>
            <a href="/technology" style={{ textDecoration: "none", color: "inherit" }}>
              {t.nav.technology}
            </a>
            <a href="/states" style={{ textDecoration: "none", color: "inherit" }}>
              {t.nav.states}
            </a>
            <a href="/about" style={{ textDecoration: "none", color: "inherit" }}>
              {t.nav.about}
            </a>
            <a href="/testimonials" style={{ textDecoration: "none", color: "inherit" }}>
              {t.nav.testimonials}
            </a>
            <a href="/contact" style={{ textDecoration: "none", color: "inherit" }}>
              {t.nav.contact}
            </a>

            {/* BOTÓN PREMIUM */}
            <a
              href="#cotizar"
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
              {t.nav.cta}
            </a>
          </nav>

          {/* SELECTOR IDIOMA */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button
              onClick={() => setLang("es")}
              style={{
                border: "none",
                padding: 0,
                background: "transparent",
                opacity: lang === "es" ? 1 : 0.35,
                cursor: "pointer"
              }}
            >
              <img src="/flag-es.svg" alt="ES" style={{ width: 20, height: 20 }} />
            </button>
            <button
              onClick={() => setLang("en")}
              style={{
                border: "none",
                padding: 0,
                background: "transparent",
                opacity: lang === "en" ? 1 : 0.35,
                cursor: "pointer"
              }}
            >
              <img src="/flag-us.svg" alt="EN" style={{ width: 20, height: 20 }} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* =========================
   HERO
   ========================= */

function Hero() {
  const { lang } = useLanguage();
  const t = lang === "es" ? TEXT_ES.hero : TEXT_EN.hero;

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
          {t.subtitle}
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
          {t.titleLine1}
          <br />
          {t.titleLine2}
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
          {t.body}
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
            {t.btnQuote}
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
            {t.btnCoverages}
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
          {t.seal}
        </p>
      </div>
    </section>
  );
}

/* =========================
   SERVICES (COBERTURAS)
   ========================= */

function Services() {
  const { lang } = useLanguage();
  const s = lang === "es" ? TEXT_ES.services : TEXT_EN.services;

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
            {s.kicker}
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
            {s.title}
          </h2>
          <p
            style={{
              margin: "10px 0 0",
              fontSize: 13,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.78)"
            }}
          >
            {s.body}
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
            {s.legalTitle}
          </p>
          <p style={{ margin: 0 }}>{s.legalBody}</p>
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
        {s.items.map((service) => (
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

/* =========================
   WHY CHOOSE US
   ========================= */

function WhyChooseUs() {
  const { lang } = useLanguage();
  const w = lang === "es" ? TEXT_ES.why : TEXT_EN.why;

  return (
    <section
      id="por-que-elegirnos"
      style={{
        margin: "110px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px 40px"
      }}
    >
      <style>{`
        .why-card {
          transition: all 0.3s ease;
        }
        .why-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,215,0,0.8);
          box-shadow: 0 26px 80px rgba(0,0,0,0.95);
          background:
            radial-gradient(circle at top, rgba(255,215,0,0.20), rgba(8,8,8,1));
        }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: 38 }}>
        <h2
          style={{
            margin: 0,
            fontSize: 26,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: colors.gold,
            fontFamily: "Montserrat, system-ui"
          }}
        >
          {w.title}
        </h2>
        <p
          style={{
            marginTop: 10,
            fontSize: 14,
            color: "rgba(255,255,255,0.78)"
          }}
        >
          {w.subtitle}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 22
        }}
      >
        {w.items.map((reason) => (
          <div
            key={reason.title}
            className="why-card"
            style={{
              borderRadius: 24,
              padding: 22,
              background:
                "radial-gradient(circle at top, rgba(255,215,0,0.10), rgba(5,5,5,1))",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 18px 55px rgba(0,0,0,0.85)",
              color: "#fff"
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: 18,
                color: "#fff",
                fontFamily: "Montserrat, system-ui"
              }}
            >
              {reason.title}
            </h3>
            <p
              style={{
                margin: "10px 0 0",
                fontSize: 13,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.82)"
              }}
            >
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================
   PROCESS
   ========================= */

function Process() {
  const { lang } = useLanguage();
  const p = lang === "es" ? TEXT_ES.process : TEXT_EN.process;

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
              {p.kicker}
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
              {p.title}
            </h2>
            <p
              style={{
                margin: "10px 0 6px",
                fontSize: 13,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.5
              }}
            >
              {p.intro1}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.5
              }}
            >
              {p.intro2}
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gap: 10
            }}
          >
            {p.steps.map((step) => (
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

/* =========================
   ENGINE (MOTOR DE LA SOBERANÍA)
   ========================= */

function SovereigntyEngineSection() {
  const { lang } = useLanguage();
  const e = lang === "es" ? TEXT_ES.engine : TEXT_EN.engine;

  return (
    <section
      style={{
        margin: "90px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px 40px"
      }}
    >
      <style>{`
        .sovereign-engine-card {
          transition: all 0.3s ease;
        }
        .sovereign-engine-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 80px rgba(0,0,0,0.95);
          border-color: rgba(255,215,0,0.8);
          background:
            radial-gradient(circle at top, rgba(255,215,0,0.20), rgba(5,5,5,1));
        }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <h2
          style={{
            margin: 0,
            fontSize: 26,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: colors.gold,
            fontFamily: "Montserrat, system-ui"
          }}
        >
          {e.title}
        </h2>
        <p
          style={{
            marginTop: 10,
            fontSize: 13,
            color: "rgba(255,255,255,0.76)"
          }}
        >
          {e.subtitle}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          gap: 20
        }}
      >
        {e.cards.map((card) => (
          <div
            key={card.key}
            className="sovereign-engine-card"
            style={{
              borderRadius: 24,
              padding: 18,
              background:
                "radial-gradient(circle at top, rgba(255,215,0,0.10), rgba(5,5,5,1))",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 20px 55px rgba(0,0,0,0.9)",
              display: "flex",
              flexDirection: "column",
              gap: 12
            }}
          >
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.68)",
                fontFamily: "Montserrat, system-ui"
              }}
            >
              {card.tag}
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 999,
                  background: "rgba(0,0,0,0.9)",
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

/* =========================
   PROBLEM / SOLUTION
   ========================= */

function ProblemSolutionSection() {
  const { lang } = useLanguage();
  const bridge = lang === "es" ? TEXT_ES.bridge : TEXT_EN.bridge;
  const prob = lang === "es" ? TEXT_ES.problem : TEXT_EN.problem;
  const sol = lang === "es" ? TEXT_ES.solution : TEXT_EN.solution;

  return (
    <section
      style={{
        margin: "80px auto 0",
        maxWidth: layout.maxWidth,
        padding: "0 " + layout.sidePadding + "px 60px"
      }}
    >
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
          {bridge.title}
        </h2>
        <p
          style={{
            marginTop: 10,
            fontSize: 14,
            color: "rgba(255,255,255,0.78)"
          }}
        >
          {bridge.subtitle}
        </p>
      </div>

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
          {/* PROBLEMA */}
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
              {prob.kicker}
            </p>
            <h2
              style={{
                margin: 0,
                fontSize: 24,
                color: "#fff"
              }}
            >
              {prob.title}
            </h2>
            <p
              style={{
                marginTop: 10,
                fontSize: 13,
                color: "rgba(255,255,255,0.80)",
                lineHeight: 1.6
              }}
            >
              {prob.body}
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
              {prob.quote}
              <br />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)"
                }}
              >
                {prob.author}
              </span>
            </p>
          </div>

          {/* SOLUCIÓN */}
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
              {sol.kicker}
            </p>
            <h2
              style={{
                margin: 0,
                fontSize: 24,
                color: "#fff"
              }}
            >
              {sol.title}
            </h2>
            <p
              style={{
                marginTop: 10,
                fontSize: 13,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6
              }}
            >
              {sol.body}
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
              {sol.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   FOOTER
   ========================= */

function Footer() {
  const { lang } = useLanguage();
  const f = lang === "es" ? TEXT_ES.footer : TEXT_EN.footer;

  const year = new Date().getFullYear();
  const rights = f.rights.replace("{year}", String(year));

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
            {f.company}
          </p>
          <p style={{ margin: 0 }}>{f.legalLine}</p>
          <p style={{ margin: "4px 0 0" }}>{f.einNote}</p>
        </div>
        <div style={{ textAlign: "right", maxWidth: 320 }}>
          <p style={{ margin: 0 }}>
            {f.emailLabel}{" "}
            <a
              href="mailto:info@sovereigntruckguard.com"
              style={{ color: colors.gold, textDecoration: "none" }}
            >
              info@sovereigntruckguard.com
            </a>
          </p>
          <p style={{ margin: "4px 0" }}>
            {f.whatsappLabel}{" "}
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
            {rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================
   PAGE
   ========================= */

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
      <WhyChooseUs />
      <SovereigntyEngineSection />
      <ProblemSolutionSection />
      {/* Aquí luego podremos insertar TestimonialsSection, Contact, etc. */}
      <Footer />
    </main>
  );
}
