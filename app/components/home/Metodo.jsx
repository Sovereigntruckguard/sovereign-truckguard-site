"use client";

export default function Metodo() {
  const fases = [
    "Análisis Inicial",
    "Dealer + Pre-Inspección",
    "Seguros + Financiamiento",
    "Control Operativo",
    "Escudo Operativo",
    "Telemática + Automatización",
    "Expansión de Flota",
  ];

  return (
    <section style={{ padding: "100px 0", background: "#050505" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 22px" }}>
        <h2 style={{ fontSize: 36 }}>El Método Sovereign</h2>

        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: 18,
          }}
        >
          {fases.map((f, i) => (
            <div
              key={f}
              style={{
                padding: 22,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <strong>Fase {i + 1}</strong>
              <div style={{ marginTop: 6 }}>{f}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}