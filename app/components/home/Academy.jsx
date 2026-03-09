"use client";

export default function Academy() {

  const bloques = [
    {
      titulo: "Ruta Dinero",
      descripcion:
        "Aprende cómo calcular el verdadero margen de una operación de trucking y evitar cargas que solo generan trabajo pero no utilidad.",
      tipo: "texto"
    },

    {
      titulo: "Ruta Cumplimiento",
      descripcion:
        "Conoce los requisitos reales para operar legalmente: MC, DOT, ELD, IFTA, seguros y control documental.",
      tipo: "texto"
    },

    {
      titulo: "Tips reales del negocio",
      descripcion:
        "Consejos directos de experiencia operativa para camioneros latinos que quieren construir una empresa sólida.",
      tipo: "video"
    }
  ];


  return (

    <section
      style={{
        background: "#F4F7F6",
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
              color: "#1F4D3B"
            }}
          >
            Sovereign Academy
          </h2>

          <p
            style={{
              marginTop: 14,
              fontSize: 16,
              color: "#5A6B63",
              maxWidth: 700,
              marginInline: "auto",
              lineHeight: 1.6
            }}
          >
            Educación real para camioneros que quieren dejar de improvisar
            y empezar a construir empresas de trucking sólidas.
          </p>

        </div>



        {/* BLOQUES */}

        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 26
          }}
        >

          {bloques.map((bloque, i) => (

            <div
              key={i}
              style={{
                background: "white",
                borderRadius: 14,
                padding: 26,
                border: "1px solid #E3E8E6",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
              }}
            >

              {/* TITULO */}

              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#1F4D3B"
                }}
              >
                {bloque.titulo}
              </div>


              {/* DESCRIPCION */}

              <p
                style={{
                  marginTop: 12,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#5A6B63"
                }}
              >
                {bloque.descripcion}
              </p>


              {/* VIDEO PLACEHOLDER */}

              {bloque.tipo === "video" && (

                <div
                  style={{
                    marginTop: 18,
                    borderRadius: 10,
                    overflow: "hidden",
                    background: "#000"
                  }}
                >

                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="Sovereign TruckGuard Tips"
                    frameBorder="0"
                    allowFullScreen
                  />

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}