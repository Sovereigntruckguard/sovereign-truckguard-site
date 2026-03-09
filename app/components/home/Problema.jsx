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
            color: "#1F4D3B",
            fontWeight: 900
          }}
        >
          El problema no es entrar al negocio.
        </h2>

        <p
          style={{
            marginTop: 14,
            color: "#5A6B63",
            fontSize: 17
          }}
        >
          El problema es entrar sin estructura.
        </p>


        {/* CARDS */}
        <div
          style={{
            marginTop: 50,
            display: "flex",
            justifyContent: "center",
            gap: 22,
            flexWrap: "wrap"
          }}
        >

          {problemas.map((p) => (
            <div
              key={p}
              style={{
                padding: "22px 32px",
                borderRadius: 12,
                border: "1px solid #E3E8E6",
                background: "white",
                color: "#1A1A1A",
                fontWeight: 700,
                fontSize: 16,
                minWidth: 280,
                boxShadow: "0 10px 26px rgba(0,0,0,0.06)"
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