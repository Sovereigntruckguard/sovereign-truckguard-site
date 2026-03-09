"use client";

export default function Tecnologia() {

  return (

    <section
      style={{
        background: "#F4F7F6",
        padding: "120px 0"
      }}
    >

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 22px",
          display: "grid",
          gridTemplateColumns: "1fr 420px",
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
            Powered by Solyon Technologies
          </h2>

          <p
            style={{
              marginTop: 16,
              color: "#5A6B63",
              fontSize: 17,
              lineHeight: 1.6
            }}
          >
            Sovereign TruckGuard opera como brazo operativo del ecosistema
            Solyon integrando inteligencia artificial, infraestructura
            tecnológica y sistemas de control empresarial.
          </p>

          <p
            style={{
              marginTop: 16,
              color: "#5A6B63",
              fontSize: 16,
              lineHeight: 1.6
            }}
          >
            No es solo acompañamiento. Es una arquitectura que conecta
            tecnología, operación y ejecución para construir compañías
            de trucking sólidas.
          </p>

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
              maxWidth: "80%",
              opacity: 0.9
            }}
          />

        </div>

      </div>

    </section>

  );

}