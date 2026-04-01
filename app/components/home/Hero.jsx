"use client";

import ApplicationModal from "../ApplicationModal";

export default function Hero() {
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
              fontSize: 54,
              marginTop: 14,
              lineHeight: 1.05,
            }}
          >
            ¿Quieres comprar tu camión…
            <br />
            o evitar perder $20,000 en el intento?
          </h1>

          <p
            style={{
              marginTop: 22,
              opacity: 0.9,
              maxWidth: 620,
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            La mayoría de camioneros latinos entra al negocio sin entender
            flujo de caja, costos reales ni riesgos.

            <br /><br />

            Por eso terminan trabajando… sin ganar.

            <br /><br />

            Nosotros analizamos tu caso antes de que inviertas un dólar.
          </p>

          {/* CTA HERO */}

          <ApplicationModal>
            <button
              style={{
                marginTop: 30,
                background: "#C9A227",
                color: "#000",
                padding: "14px 26px",
                borderRadius: 999,
                fontWeight: 900,
                border: "none",
                cursor: "pointer",
                fontSize: 16
              }}
            >
              Evaluar mi caso ($197)
            </button>
          </ApplicationModal>
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
            Revisión Estratégica de tu Operación
          </h3>

          <p
            style={{
              marginTop: 14,
              color: "#5A6B63",
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            Antes de comprar camión o activar compañía,
            analizamos si tu operación es viable.
          </p>

          <div
            style={{
              marginTop: 14,
              fontSize: 14,
              color: "#1A1A1A",
              lineHeight: 1.6,
            }}
          >
            ✔ Flujo de caja real<br />
            ✔ Costos por milla<br />
            ✔ Riesgos operativos<br />
            ✔ Punto de equilibrio
          </div>

          <div
            style={{
              marginTop: 16,
              fontWeight: 900,
              color: "#1F4D3B",
              fontSize: 16
            }}
          >
            Precio: $197 USD
          </div>

          {/* CTA CARD */}

          <ApplicationModal>
            <button
              style={{
                marginTop: 20,
                background: "#C9A227",
                width: "100%",
                padding: 14,
                borderRadius: 10,
                border: "none",
                fontWeight: 900,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Solicitar mi revisión
            </button>
          </ApplicationModal>

          <p
            style={{
              marginTop: 10,
              fontSize: 12,
              color: "#5A6B63",
              textAlign: "center",
            }}
          >
            15 min · Respuesta en 24h
          </p>
        </div>
      </div>
    </section>
  );
}