"use client";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <video
        src="/hero-truck.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.92))",
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
        <div>
          <p style={{ letterSpacing: "0.3em", fontSize: 12 }}>
            ENTRADA AL ECOSISTEMA
          </p>

          <h1 style={{ fontSize: 58, marginTop: 12 }}>
            Infraestructura estratégica para construir o rescatar tu operación de trucking.
          </h1>

          <p style={{ marginTop: 20, opacity: 0.7 }}>
            Sovereign TruckGuard existe para filtrar, diagnosticar,
            convertir y activar operadores latinos bajo un modelo
            cerrado de control, estructura y ejecución.
          </p>
        </div>

        <div
          style={{
            background: "#0D1A33",
            padding: 30,
            borderRadius: 18,
          }}
        >
          <h3>Evaluación inicial de viabilidad</h3>

          <button
            style={{
              marginTop: 20,
              background: "#FFB000",
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