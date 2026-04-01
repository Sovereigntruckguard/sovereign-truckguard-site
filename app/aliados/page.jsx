"use client";

import Header from "../components/Header";
import Footer from "../components/home/Footer";
import ApplicationModal from "../components/ApplicationModal";

function buildMailto(subject, body) {
  return `mailto:sergio@solyontechnologies.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Card({ title, problem, impact, solution, ctaText, mailto }) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #E3E8E6",
        borderRadius: 14,
        padding: 28,
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          fontSize: 12,
          letterSpacing: ".08em",
          fontWeight: 800,
          color: "#1F4D3B",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: 10,
          fontSize: 18,
          fontWeight: 800,
        }}
      >
        {problem}
      </div>

      <p
        style={{
          marginTop: 10,
          color: "#8C2F39",
          fontWeight: 700,
        }}
      >
        {impact}
      </p>

      <p
        style={{
          marginTop: 10,
          color: "#5A6B63",
        }}
      >
        {solution}
      </p>

      <a
        href={mailto}
        style={{
          marginTop: 18,
          display: "inline-block",
          background: "#C9A227",
          padding: "12px 18px",
          borderRadius: 8,
          fontWeight: 800,
          color: "#000",
          textDecoration: "none",
        }}
      >
        {ctaText}
      </a>
    </div>
  );
}

export default function AliadosPage() {

  return (
    <main style={{ background: "#F4F7F6" }}>

      <Header />

      {/* HERO */}

      <section
        style={{
          background: "#1F4D3B",
          color: "white",
          padding: "110px 0",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 48, fontWeight: 900 }}>
          Ecosistema de Aliados
        </h1>

        <p style={{ marginTop: 16, opacity: 0.85 }}>
          Conectamos operadores con soluciones reales para operar con estructura.
        </p>
      </section>


      {/* GRID */}

      <section style={{ padding: "100px 0" }}>

        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 22px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 24,
          }}
        >

          {/* FACTORING */}

          <Card
            title="Flujo de Caja"
            problem="¿No te pagan las cargas de inmediato?"
            impact="Esperar 30–90 días puede ahogar tu operación."
            solution="RTS Financial permite cobrar en 24–48h."
            ctaText="Solicitar Factoring"
            mailto={buildMailto(
              "Solicitud Factoring RTS",
              "Hola Sergio,%0A%0AQuiero activar factoring con RTS.%0A%0ANombre:%0ATeléfono:%0AEstado:%0A%0AGracias."
            )}
          />

          {/* FUEL CARD */}

          <Card
            title="Costo de Diésel"
            problem="¿Estás pagando de más por combustible?"
            impact="El diésel mal gestionado destruye el margen."
            solution="RTS Fuel Card permite ahorro y control."
            ctaText="Solicitar Fuel Card"
            mailto={buildMailto(
              "Solicitud Fuel Card RTS",
              "Hola Sergio,%0A%0AQuiero una fuel card.%0A%0ANombre:%0ATeléfono:%0AEstado:%0A%0AGracias."
            )}
          />

          {/* MOTIVE */}

          <Card
            title="Control Operativo"
            problem="¿No tienes visibilidad de tu operación?"
            impact="Sin control pierdes dinero sin darte cuenta."
            solution="Motive permite monitoreo y cumplimiento."
            ctaText="Activar Motive"
            mailto={buildMailto(
              "Activación Motive",
              "Hola Sergio,%0A%0AQuiero activar Motive.%0A%0ANombre:%0ATeléfono:%0A%0AGracias."
            )}
          />

          {/* CAMIONES */}

          <Card
            title="Compra de Camión"
            problem="¿Vas a comprar sin validación?"
            impact="Una mala compra puede destruir tu caja."
            solution="TTT ayuda a seleccionar unidades correctas."
            ctaText="Ver Opciones de Camión"
            mailto={buildMailto(
              "Compra de Camión TTT",
              "Hola Sergio,%0A%0AQuiero opciones de camión.%0A%0ANombre:%0ATeléfono:%0APresupuesto:%0A%0AGracias."
            )}
          />

        </div>

      </section>


      {/* CTA FINAL */}

      <section
        style={{
          background: "#0B0F14",
          padding: "120px 0",
          textAlign: "center",
          color: "white",
        }}
      >

        <h2 style={{ fontSize: 40, fontWeight: 900 }}>
          El aliado correcto en el momento correcto cambia todo.
        </h2>

        <ApplicationModal>
          <button
            style={{
              marginTop: 20,
              background: "#C9A227",
              padding: 14,
              borderRadius: 999,
              fontWeight: 800,
              border: "none",
            }}
          >
            Aplicar al Diagnóstico
          </button>
        </ApplicationModal>

      </section>

      <Footer />

    </main>
  );
}