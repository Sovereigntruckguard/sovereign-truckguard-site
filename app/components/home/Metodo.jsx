"use client";

export default function Metodo() {

  const fases=[
    "Análisis Inicial",
    "Dealer + Inspección",
    "Seguros + Financiamiento",
    "Control Operativo",
    "Escudo Operativo",
    "Telemática + Automatización",
    "Expansión de Flota"
  ];

  return(
    <section style={{padding:"100px 0"}}>

      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 22px"}}>

        <h2>El Método Sovereign</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:20,
          marginTop:40
        }}>
          {fases.map((f,i)=>(
            <div key={f} style={{
              border:"1px solid rgba(255,255,255,.08)",
              padding:20,
              borderRadius:12
            }}>
              <strong>Fase {i+1}</strong>
              <div>{f}</div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}