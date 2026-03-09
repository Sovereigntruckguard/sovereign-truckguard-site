"use client";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        background: "#F4F7F6",
      }}
    >
      {/* VIDEO */}
      <video
        src="/hero-truck.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(18,58,45,0.55), rgba(18,58,45,0.92))",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 22px",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: 60,
        }}
      >
        <div style={{ color: "white" }}>
          <p style={{ letterSpacing: "0.25em", fontSize: 12 }}>
            ENTRADA AL ECOSISTEMA
          </p>

          <h1 style={{ fontSize: 58, marginTop: 12 }}>
            Infraestructura estratégica para construir o rescatar tu operación de trucking.
          </h1>

          <p style={{ marginTop: 20, opacity: 0.85 }}>
            Sovereign TruckGuard filtra, diagnostica y activa operadores
            latinos bajo un modelo cerrado de control, estructura y ejecución.
          </p>

          <button
            style={{
              marginTop: 30,
              background: "#C9A227",
              color: "#000",
              padding: "14px 22px",
              borderRadius: 999,
              border: "none",
              fontWeight: 900,
            }}
          >
            Inicia tu Ruta Soberana
          </button>
        </div>

        {/* CARD */}
        <div
          style={{
            background: "white",
            padding: 30,
            borderRadius: 16,
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          }}
        >
          <h3 style={{ color: "#1F4D3B" }}>
            Evaluación inicial de viabilidad
          </h3>

          <button
            style={{
              marginTop: 20,
              background: "#C9A227",
              width: "100%",
              padding: 12,
              borderRadius: 10,
              border: "none",
              fontWeight: 800,
            }}
          >
            Simular mi Ruta
          </button>
        </div>
      </div>
    </section>
  );
}