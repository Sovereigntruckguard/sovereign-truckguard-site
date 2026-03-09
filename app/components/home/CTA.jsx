"use client";

export default function CTA() {
  return (
    <section style={{ padding: "120px 0", background: "#000" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Empieza con orden.</h2>

        <a
          href="#diagnostico"
          style={{
            marginTop: 24,
            display: "inline-block",
            background: "#C9A227",
            color: "#000",
            padding: "14px 24px",
            borderRadius: 999,
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Aplicar al Diagnóstico
        </a>
      </div>
    </section>
  );
}