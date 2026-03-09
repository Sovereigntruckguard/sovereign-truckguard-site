"use client";

export default function Comunidad() {

  const bloques = [
    {
      titulo: "Kilómetros Soberanos",
      descripcion:
        "Cada acción dentro del ecosistema genera progreso: completar simulador, aprender en Academy y aplicar al diagnóstico."
    },

    {
      titulo: "Acceso Prioritario",
      descripcion:
        "Los operadores más comprometidos reciben prioridad para entrar al sistema Guardian y acceder a recursos exclusivos."
    },

    {
      titulo: "Comunidad Privada",
      descripcion:
        "Un espacio para camioneros latinos que buscan crecer con estructura, compartir experiencia y evitar errores costosos."
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
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 22px"
        }}
      >

        {/* HEADER */}

        <div style={{ textAlign: "center" }}>

          <h2
            style={{
              fontSize: 40,
              fontWeight: 900,
              color: "white"
            }}
          >
            Comunidad Guardian
          </h2>

          <p
            style={{
              marginTop: 12,
              color: "rgba(255,255,255,0.82)",
              fontSize: 16,
              maxWidth: 700,
              marginInline: "auto",
              lineHeight: 1.6
            }}
          >
            Un espacio para operadores comprometidos con crecimiento estructurado
            y acceso al ecosistema Sovereign.
          </p>

        </div>


        {/* BLOQUES */}

        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 24
          }}
        >

          {bloques.map((b, i) => (

            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14,
                padding: 28,
                textAlign: "left"
              }}
            >

              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "white"
                }}
              >
                {b.titulo}
              </div>

              <p
                style={{
                  marginTop: 12,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.85)"
                }}
              >
                {b.descripcion}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}