"use client";

export default function Problema() {
  const items = [
    "Comprar camión sin estructura financiera clara",
    "Operar con presión regulatoria y riesgo evitable",
    "Entrar al mercado sin aliados ni control operativo",
  ];

  return (
    <section style={{ padding: "100px 0", background: "#050505" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 22px" }}>
        <h2 style={{ fontSize: 36 }}>
          El problema no es entrar al negocio.
        </h2>

        <p style={{ marginTop: 14, opacity: 0.7 }}>
          El problema es entrar sin estructura.
        </p>

        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 20,
          }}
        >
          {items.map((i) => (
            <div
              key={i}
              style={{
                padding: 22,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}