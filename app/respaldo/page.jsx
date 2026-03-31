"use client";

import Header from "../components/Header";
import Footer from "../components/home/Footer";

export default function RespaldoPage() {

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
          Respaldo Institucional
        </h1>

        <p style={{ marginTop: 16 }}>
          Sovereign no es una agencia. Es infraestructura.
        </p>

      </section>


      <section style={{ padding: "100px 0" }}>

        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          <p>
            Sovereign TruckGuard opera como brazo operativo del ecosistema
            Solyon Technologies integrando arquitectura empresarial,
            protección operativa y tecnología.
          </p>

          <p style={{ marginTop: 20 }}>
            Participamos en iniciativas de innovación junto a Ruta N,
            Toyota Mobility Foundation y la Alcaldía de Medellín.
          </p>

        </div>

      </section>

      <Footer />

    </main>
  );
}