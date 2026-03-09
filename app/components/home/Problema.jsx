"use client";

export default function Problema() {

  const items = [
    "Comprar camión sin estructura financiera",
    "Operar con presión regulatoria",
    "Entrar al mercado sin aliados",
  ];

  return (
    <section style={{ padding: "100px 0", textAlign: "center" }}>
      <h2>El problema no es entrar al negocio.</h2>
      <p style={{ opacity: .7 }}>El problema es entrar sin estructura.</p>

      <div style={{
        display:"flex",
        justifyContent:"center",
        gap:20,
        marginTop:40
      }}>
        {items.map((i)=>(
          <div key={i} style={{
            padding:20,
            border:"1px solid rgba(255,255,255,0.1)",
            borderRadius:12
          }}>
            {i}
          </div>
        ))}
      </div>
    </section>
  );
}