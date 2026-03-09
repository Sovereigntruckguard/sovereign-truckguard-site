"use client";

export default function Academy() {
  const tracks = ["Ruta Dinero", "Ruta Cumplimiento", "Ruta Protección"];

  return (
    <section style={{ padding: "100px 0", background: "#050505" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 22px" }}>
        <h2 style={{ fontSize: 36 }}>Sovereign Academy</h2>

        <div style={{ marginTop: 30, display: "flex", gap: 20 }}>
          {tracks.map((t) => (
            <div
              key={t}
              style={{
                padding: 22,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}