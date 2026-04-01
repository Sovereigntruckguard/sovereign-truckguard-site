"use client";

export default function Problema() {

  const problemas = [
    {
      titulo: "Compras el camión… pero no sabes si es negocio",
      descripcion:
        "Muchos operadores compran con emoción, no con números. Terminan trabajando meses sin ver utilidad real."
    },
    {
      titulo: "Te pagan tarde… pero tus gastos no esperan",
      descripcion:
        "Entre combustible, seguro y mantenimiento, puedes quedarte sin caja antes de cobrar la primera carga."
    },
    {
      titulo: "Entras solo… y aprendes perdiendo dinero",
      descripcion:
        "Sin estructura ni aliados correctos, cada error te cuesta tiempo, estrés y miles de dólares."
    }
  ];

  return (

    <section
      style={{
        background: "#F4F7F6",
        padding: "130px 0"
      }}
    >

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 22px",
          textAlign: "center"
        }}
      >

        {/* TITULO */}

        <h2
          style={{
            fontSize: 44,
            color: "#1F4D3B",
            fontWeight: 900,
            lineHeight: 1.2
          }}
        >
          El problema no es entrar al negocio.
        </h2>

        <p
          style={{
            marginTop: 14,
            fontSize: 18,
            fontWeight: 600,
            color: "#8C2F39"
          }}
        >
          El problema es entrar y perder dinero sin entender por qué.
        </p>

        {/* CONTEXTO */}

        <p
          style={{
            marginTop: 20,
            color: "#5A6B63",
            fontSize: 16,
            maxWidth: 720,
            marginInline: "auto",
            lineHeight: 1.7
          }}
        >
          La mayoría de camioneros latinos entra al trucking sin una lectura clara de
          flujo de caja, costos reales y riesgos operativos.

          <br /><br />

          No fallan por falta de trabajo.
          Fallan por falta de estructura.
        </p>


        {/* CARDS */}

        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 26
          }}
        >

          {problemas.map((p) => (

            <div
              key={p.titulo}
              style={{
                padding: "26px",
                borderRadius: 14,
                border: "1px solid #E3E8E6",
                background: "white",
                textAlign: "left",
                boxShadow: "0 12px 30px rgba(0,0,0,0.06)"
              }}
            >

              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#1F4D3B",
                  lineHeight: 1.3
                }}
              >
                {p.titulo}
              </div>

              <p
                style={{
                  marginTop: 12,
                  color: "#5A6B63",
                  fontSize: 15,
                  lineHeight: 1.7
                }}
              >
                {p.descripcion}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}