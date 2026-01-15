"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const colors = {
  bg: "#050505",
  gold: "#FFD700",
  white: "#FFFFFF",
};

export default function AboutPage() {
  return (
    <main style={{ background: colors.bg, color: colors.white, minHeight: "100vh" }}>
      <Header />

      {/* HERO */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 80,
          maxWidth: 1200,
          margin: "0 auto",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <p
          style={{
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: colors.gold,
            marginBottom: 14,
          }}
        >
          Nosotros · Base legal y confianza
        </p>

        <h1
          style={{
            fontSize: 44,
            lineHeight: 1.1,
            fontFamily: "Montserrat, system-ui",
            marginBottom: 18,
          }}
        >
          Agencia de seguros comerciales en Estados Unidos <br />
          <span style={{ color: colors.gold }}>para camioneros latinos</span>
        </h1>

        <p
          style={{
            maxWidth: 780,
            fontSize: 17,
            lineHeight: 1.6,
            opacity: 0.9,
          }}
        >
          Sovereign TruckGuard LLC es una agencia registrada en EE. UU. que opera
          con estructura legal, procesos claros y acompañamiento profesional en
          español para el operador latino.
        </p>

        <p style={{ marginTop: 10, fontSize: 14, opacity: 0.8 }}>
          Sin pólizas confusas · Sin letra pequeña · Sin barreras de idioma
        </p>

        <div style={{ marginTop: 26 }}>
          <a
            href="/services"
            style={{
              padding: "12px 26px",
              borderRadius: 999,
              background: `linear-gradient(90deg, ${colors.gold}, #E8B7B7)`,
              color: "#000",
              fontWeight: 900,
              textDecoration: "none",
              boxShadow: "0 18px 50px rgba(0,0,0,0.9)",
            }}
          >
            Ver servicios y paquetes
          </a>
        </div>
      </section>

      {/* BLOQUES DE CONFIANZA */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        {/* HISTORIA */}
        <div
          style={{
            borderRadius: 22,
            padding: 26,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h3 style={{ marginTop: 0, color: colors.gold }}>
            Nuestra base
          </h3>

          <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.9 }}>
            Sovereign TruckGuard LLC fue fundada por Sergio Andrés Murillo Estrada,
            tras más de 8 años dentro del ecosistema del transporte, seguros
            comerciales y mercado trucker latino en Estados Unidos.
          </p>

          <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.9 }}>
            La agencia nace como respuesta a prácticas abusivas, desinformación,
            barreras de idioma y procesos que históricamente han perjudicado al
            operador latino.
          </p>
        </div>

        {/* MISIÓN */}
        <div
          style={{
            borderRadius: 22,
            padding: 26,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h3 style={{ marginTop: 0, color: colors.gold }}>
            Propósito y misión
          </h3>

          <ul style={{ paddingLeft: 18, lineHeight: 1.8, fontSize: 15, opacity: 0.9 }}>
            <li>Protección real con pólizas claras y verificables.</li>
            <li>Cotizaciones basadas en datos reales, no promesas.</li>
            <li>Acompañamiento humano y personalizado.</li>
            <li>Atención completa en español.</li>
            <li>Procesos alineados a normativas estatales y federales.</li>
          </ul>
        </div>
      </section>

      {/* BASE LEGAL */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 100px",
        }}
      >
        <div
          style={{
            borderRadius: 26,
            padding: 30,
            border: "1px solid rgba(255,255,255,0.14)",
            background:
              "radial-gradient(circle at top, rgba(255,215,0,0.10), rgba(5,5,5,1))",
          }}
        >
          <h3 style={{ marginTop: 0, color: colors.gold }}>
            Base legal en Estados Unidos
          </h3>

          <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.9 }}>
            Sovereign TruckGuard LLC está registrada en Sheridan, Wyoming.
            Nuestra estructura corporativa y operación cumplen con los
            lineamientos estatales y federales del sector asegurador.
          </p>

          <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.8 }}>
            Operamos con procesos internos estrictos, trazabilidad documental
            y alineación regulatoria. No improvisamos. No ocultamos información.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
