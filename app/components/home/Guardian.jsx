"use client";

export default function Guardian() {

  const fases = [
    {
      fase: "Fase 1",
      titulo: "Análisis Inicial",
      descripcion:
        "Diagnóstico estratégico de capital, experiencia y viabilidad antes de tomar decisiones críticas."
    },
    {
      fase: "Fase 2",
      titulo: "Dealer + Pre-Inspección",
      descripcion:
        "Selección inteligente del camión y verificación técnica para evitar errores costosos."
    },
    {
      fase: "Fase 3",
      titulo: "Seguros + Financiamiento",
      descripcion:
        "Estructuración financiera y protección adecuada para operar con seguridad."
    },
    {
      fase: "Fase 4",
      titulo: "Control Operativo",
      descripcion:
        "Instalación de procesos y herramientas para operar con orden desde el primer día."
    },
    {
      fase: "Fase 5",
      titulo: "Escudo Operativo",
      descripcion:
        "Protección legal, financiera y operativa para reducir riesgos estructurales."
    },
    {
      fase: "Fase 6",
      titulo: "Telemática + Automatización",
      descripcion:
        "Integración tecnológica para monitoreo, control y eficiencia operativa."
    },
    {
      fase: "Fase 7",
      titulo: "Expansión de Flota",
      descripcion:
        "Escalamiento estructurado para convertir una operación en una empresa real."
    }
  ];


  return (

    <section
      style={{
        background: "#1F4D3B",
        padding: "120px 0"
      }}
    >

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 22px"
        }}
      >

        {/* HEADER SECCIÓN */}

        <div style={{ textAlign: "center" }}>

          <h2
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: "white"
            }}
          >
            Arquitectura Guardian
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(255,255,255,0.75)",
              fontSize: 17,
              maxWidth: 760,
              marginInline: "auto",
              lineHeight: 1.6
            }}
          >
            Siete fases diseñadas para reducir riesgo, ordenar decisiones
            y construir empresas de trucking sólidas.
          </p>

        </div>



        {/* GRID DE FASES */}

        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 24
          }}
        >

          {fases.map((item) => (

            <div
              key={item.fase}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14,
                padding: 28,
                transition: "all .25s ease"
              }}
            >


              {/* BADGE FASE */}

              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: ".08em",
                  color: "#C9A227",
                  marginBottom: 10,
                  textTransform: "uppercase"
                }}
              >
                {item.fase}
              </div>



              {/* TITULO */}

              <div
                style={{
                  fontSize: 19,
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.3
                }}
              >
                {item.titulo}
              </div>



              {/* DESCRIPCIÓN */}

              <p
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.80)"
                }}
              >
                {item.descripcion}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}