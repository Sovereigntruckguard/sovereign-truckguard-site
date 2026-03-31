"use client";

import Header from "../components/Header";
import Footer from "../components/home/Footer";
import ApplicationModal from "../components/ApplicationModal";

export default function AliadosPage() {

  return (

    <main style={{ background: "#F4F7F6" }}>

      <Header />

      <section style={{
        background: "#1F4D3B",
        color: "white",
        padding: "110px 0",
        textAlign: "center"
      }}>

        <h1 style={{ fontSize: 48, fontWeight: 900 }}>
          Ecosistema de Aliados
        </h1>

        <p style={{ marginTop: 16 }}>
          Conectamos operadores con los actores correctos.
        </p>

      </section>


      <section style={{ padding: "100px 0" }}>

        <div style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 24
        }}>

          <div style={{ background: "white", padding: 30 }}>
            Dealers de camiones
          </div>

          <div style={{ background: "white", padding: 30 }}>
            Brokers de seguros
          </div>

          <div style={{ background: "white", padding: 30 }}>
            Factoring
          </div>

        </div>

      </section>


      <section style={{
        background: "#0B0F14",
        padding: "120px 0",
        textAlign: "center",
        color: "white"
      }}>

        <h2>¿Quieres ser aliado del sistema?</h2>

        <ApplicationModal>
          <button style={{
            marginTop: 20,
            background: "#C9A227",
            padding: 14,
            borderRadius: 999,
            fontWeight: 800
          }}>
            Aplicar como aliado
          </button>
        </ApplicationModal>

      </section>

      <Footer />

    </main>
  );
}