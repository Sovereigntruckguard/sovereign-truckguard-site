"use client";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh" }}>
      
      {/* VIDEO PLACEHOLDER */}
      <video
        src="/placeholder-hero.mp4"
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
            "linear-gradient(to bottom, rgba(0,0,0,.55), rgba(0,0,0,.95))",
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
          alignItems: "center",
          minHeight: "100vh",
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
            Sovereign TruckGuard filtra, diagnostica y activa operadores latinos bajo un modelo cerrado de control, estructura y ejecución.
          </p>

          <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
            <button className="primary">Inicia tu Ruta Soberana</button>
            <button className="ghost">Ver Arquitectura</button>
          </div>
        </div>

        {/* SIMULATOR CARD */}
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