"use client";

export default function Hero() {

  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSeOVegHUq_GpBrjg8BZVB0cbpgAU5OlDaovYpIPCPJMVrr-hw/viewform?usp=header";

  return (

    <section
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        background: "#F4F7F6",
      }}
    >

      {/* VIDEO */}

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
          alignItems: "center",
        }}
      >

        {/* TEXTO HERO */}

        <div style={{ color: "white" }}>

          <p
            style={{
              letterSpacing: "0.25em",
              fontSize: 12,
            }}
          >
            ENTRADA AL ECOSISTEMA
          </p>

          <h1
            style={{
              fontSize: 56,
              marginTop: 14,
              lineHeight: 1.05,
            }}
          >
            Infraestructura estratégica
            para construir o rescatar tu
            operación de trucking.
          </h1>

          <p
            style={{
              marginTop: 22,
              opacity: 0.85,
              maxWidth: 600,
              fontSize: 16,
            }}
          >
            Sovereign TruckGuard filtra, diagnostica y activa operadores
            latinos bajo un modelo cerrado de control, estructura
            y ejecución.
          </p>

          <a
            href={formLink}
            target="_blank"
            style={{
              marginTop: 30,
              display: "inline-block",
              background: "#C9A227",
              color: "#000",
              padding: "14px 24px",
              borderRadius: 999,
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Inicia tu Ruta Soberana
          </a>

        </div>


        {/* CARD CONVERSIÓN */}

        <div
          style={{
            background: "white",
            padding: 34,
            borderRadius: 16,
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            maxWidth: 420,
          }}
        >

          <h3
            style={{
              color: "#1F4D3B",
              fontSize: 20,
              fontWeight: 800,
              lineHeight: 1.3,
            }}
          >
            ¿Estás listo para ser dueño de tu camión
            sin quebrarte en el intento?
          </h3>

          <p
            style={{
              marginTop: 14,
              color: "#5A6B63",
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            La mayoría de camioneros latinos pierde dinero
            por falta de estructura.

            Evalúa tu situación antes de comprometer tu capital.
          </p>

          <a
            href={formLink}
            target="_blank"
            style={{
              marginTop: 24,
              display: "block",
              background: "#C9A227",
              width: "100%",
              padding: 14,
              borderRadius: 10,
              border: "none",
              fontWeight: 800,
              fontSize: 15,
              textAlign: "center",
              textDecoration: "none",
              color: "#000"
            }}
          >
            Evaluar mi Operación
          </a>

          <p
            style={{
              marginTop: 10,
              fontSize: 12,
              color: "#5A6B63",
              textAlign: "center",
            }}
          >
            Aplicación gratuita · Resultado inmediato
          </p>

        </div>

      </div>

    </section>
  );
}