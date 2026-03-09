"use client";

export default function Guardian() {
  const pilares = [
    "Diagnóstico financiero real",
    "Plan operativo de 90 días",
    "Activación regulatoria",
    "Protección operativa",
    "Infraestructura financiera",
    "Expansión de flota",
  ];

  return (
    <section style={{ padding: "100px 0", background: "#0b1326" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 22px" }}>
        <h2 style={{ fontSize: 36 }}>Arquitectura Guardian</h2>

        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 18,
          }}
        >
          {pilares.map((p) => (
            <div
              key={p}
              style={{
                padding: 22,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
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