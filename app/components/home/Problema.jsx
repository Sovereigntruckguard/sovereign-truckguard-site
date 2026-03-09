"use client";

export default function Problema() {

  const problemas = [
    "Comprar camión sin estructura financiera",
    "Operar con presión regulatoria y riesgo evitable",
    "Entrar al mercado sin aliados ni control operativo"
  ];

  return (

    <section
      style={{
        background: "#F4F7F6",
        padding: "110px 0"
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
            fontSize: 40,
            color: "#1F4D3B",
            fontWeight: 800
          }}
        >
          El problema no es entrar al negocio.
        </h2>

        <p
          style={{
            marginTop: 12,
            color: "#5A6B63",
            fontSize: 16
          }}
        >
          El problema es entrar sin estructura.
        </p>


        {/* CARDS */}
        <div
          style={{
            marginTop: 42,
            display: "flex",
            justifyContent: "center",
            gap: 18,
            flexWrap: "wrap"
          }}
        >

          {problemas.map((p) => (
            <div
              key={p}
              style={{
                padding: "14px 22px",
                borderRadius: 10,
                border: "1px solid #E3E8E6",
                background: "white",
                color: "#1A1A1A",
                fontWeight: 600,
                fontSize: 14,
                boxShadow: "0 8px 24px rgba(0,0,0,0.05)"
              }}
            >
              {p}
            </div>
          ))}

        </div>

      </div>

    </section>

  );
}