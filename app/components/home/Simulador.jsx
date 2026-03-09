"use client";

export default function Simulador() {
  return (
    <section style={{ padding: "100px 0", background: "#0b1326" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 22px" }}>
        <h2 style={{ fontSize: 36 }}>Simulador Ruta Real</h2>

        <p style={{ marginTop: 14, opacity: 0.7 }}>
          Evalúa antes de comprometer capital.
        </p>

        <button
          style={{
            marginTop: 24,
            background: "#FFB000",
            padding: "14px 20px",
            borderRadius: 10,
            border: "none",
            fontWeight: 700,
          }}
        >
          Simular mi Ruta
        </button>
      </div>
    </section>
  );
}