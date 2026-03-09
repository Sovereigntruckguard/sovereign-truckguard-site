"use client";

export default function Respaldo() {

  return (

    <section
      style={{
        background: "#F4F7F6",
        padding: "120px 0"
      }}
    >

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 22px",
          display: "grid",
          gridTemplateColumns: "1fr 380px",
          gap: 60,
          alignItems: "center"
        }}
      >

        {/* TEXTO */}

        <div>

          <h2
            style={{
              fontSize: 40,
              fontWeight: 900,
              color: "#1F4D3B"
            }}
          >
            Respaldo Institucional
          </h2>

          <p
            style={{
              marginTop: 16,
              fontSize: 17,
              color: "#5A6B63",
              lineHeight: 1.7
            }}
          >
            Sovereign TruckGuard opera como brazo operativo del ecosistema
            Solyon Technologies integrando arquitectura empresarial,
            protección operativa y tecnología aplicada al sector del
            transporte.
          </p>


          <p
            style={{
              marginTop: 16,
              fontSize: 16,
              color: "#5A6B63",
              lineHeight: 1.7
            }}
          >
            Solyon participa en iniciativas de innovación para movilidad
            accesible desarrolladas junto a Ruta N, Toyota Mobility Foundation
            y la Secretaría de Desarrollo Económico de la Alcaldía de Medellín,
            explorando soluciones tecnológicas para transporte y logística.
          </p>


          <a
            href="https://www.solyontechnologies.com/"
            target="_blank"
            style={{
              marginTop: 26,
              display: "inline-block",
              background: "#1F4D3B",
              color: "white",
              padding: "12px 20px",
              borderRadius: 8,
              fontWeight: 700,
              textDecoration: "none"
            }}
          >
            Conocer Solyon Technologies
          </a>

        </div>


        {/* LOGO SOLYON */}

        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >

          <img
            src="/solyon-logo.png"
            alt="Solyon Technologies"
            style={{
              width: 260,
              maxWidth: "80%"
            }}
          />

        </div>

      </div>

    </section>

  );

}