"use client";

import Header from "../components/Header";
import Footer from "../components/home/Footer";
import ApplicationModal from "../components/ApplicationModal";

export default function ComunidadPage() {

  return (

    <main style={{ background: "#F4F7F6" }}>

      <Header />

      {/* HERO */}

      <section
        style={{
          background: "linear-gradient(to bottom, #1F4D3B, #123A2D)",
          padding: "110px 0",
          color: "white",
          textAlign: "center"
        }}
      >

        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          <h1 style={{ fontSize: 48, fontWeight: 900 }}>
            Comunidad Guardian
          </h1>

          <p style={{ marginTop: 16, opacity: 0.85 }}>
            Un espacio para operadores que quieren crecer con estructura,
            no improvisando.
          </p>

        </div>

      </section>



      {/* BLOQUES */}

      <section style={{ padding: "110px 0" }}>

        <div style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 24
        }}>

          <div style={{ background: "white", padding: 30, borderRadius: 12 }}>
            <h3>Kilómetros Soberanos</h3>
            <p style={{ marginTop: 10 }}>
              Cada acción dentro del sistema suma progreso real.
            </p>
          </div>

          <div style={{ background: "white", padding: 30, borderRadius: 12 }}>
            <h3>Acceso Prioritario</h3>
            <p style={{ marginTop: 10 }}>
              Los operadores comprometidos acceden primero al sistema.
            </p>
          </div>

          <div style={{ background: "white", padding: 30, borderRadius: 12 }}>
            <h3>Red de Operadores</h3>
            <p style={{ marginTop: 10 }}>
              Conecta con otros camioneros que operan con estructura.
            </p>
          </div>

        </div>

      </section>



      {/* CTA */}

      <section style={{
        background: "#0B0F14",
        padding: "120px 0",
        textAlign: "center",
        color: "white"
      }}>

        <h2>Si quieres crecer, no lo hagas solo.</h2>

        <ApplicationModal>
          <button style={{
            marginTop: 20,
            background: "#C9A227",
            padding: 14,
            borderRadius: 999,
            fontWeight: 800
          }}>
            Aplicar al Diagnóstico
          </button>
        </ApplicationModal>

      </section>

      <Footer />

    </main>
  );
}