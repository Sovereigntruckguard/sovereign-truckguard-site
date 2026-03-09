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
        background: "#0b1326",
        padding: "120px 0"
      }}
    >

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 22px",
          textAlign: "center"
        }}
      >

        {/* TITULO */}
        <h2
          style={{
            fontSize: 42,
            color: "white",
            fontWeight: 900
          }}
        >
          Arquitectura Guardian
        </h2>

        <p
          style={{
            marginTop: 14,
            color: "rgba(255,255,255,0.7)",
            fontSize: 16,
            maxWidth: 720,
            marginInline: "auto"
          }}
        >
          Siete fases diseñadas para reducir riesgo, ordenar decisiones
          y construir empresas de trucking sólidas.
        </p>


        {/* GRID */}
        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 22
          }}
        >

          {fases.map((item) => (
            <div
              key={item.fase}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: 24,
                textAlign: "left"
              }}
            >

              {/* FASE */}
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#C9A227",
                  marginBottom: 8
                }}
              >
                {item.fase}
              </div>

              {/* TITULO */}
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "white"
                }}
              >
                {item.titulo}
              </div>

              {/* DESCRIPCION */}
              <p
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.7)"
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