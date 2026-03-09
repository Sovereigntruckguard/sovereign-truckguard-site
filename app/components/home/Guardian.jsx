"use client";

export default function Guardian() {

  const pilares = [
    "Diagnóstico financiero real",
    "Plan operativo 90 días",
    "Activación regulatoria",
    "Protección operativa",
    "Infraestructura financiera",
    "Expansión de flota"
  ];

  return (
    <section style={{ padding:"100px 0", background:"#0b1326" }}>

      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 22px"}}>

        <h2>Arquitectura Guardian</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
          gap:20,
          marginTop:40
        }}>
          {pilares.map(p=>(
            <div key={p} style={{
              padding:20,
              border:"1px solid rgba(255,255,255,.1)",
              borderRadius:12
            }}>
              {p}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}