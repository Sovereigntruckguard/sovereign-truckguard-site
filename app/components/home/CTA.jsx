"use client";

export default function CTA() {

  return (

    <section
      id="diagnostico"
      style={{
        background: "#0B0F14",
        padding: "140px 0"
      }}
    >

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 22px",
          textAlign: "center"
        }}
      >

        {/* TITULO */}

        <h2
          style={{
            fontSize: 42,
            fontWeight: 900,
            color: "white"
          }}
        >
          Empieza con orden.
        </h2>

        <p
          style={{
            marginTop: 16,
            fontSize: 17,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7
          }}
        >
          Antes de comprar un camión o aceptar cargas, evaluamos tu situación
          para determinar si tu operación es viable y qué estructura necesitas
          para construir una empresa de trucking sólida.
        </p>


        {/* AVISO GRATIS */}

        <div
          style={{
            marginTop: 26,
            fontSize: 14,
            color: "#C9A227",
            fontWeight: 700
          }}
        >
          Aplicar es completamente gratis.
        </div>


        {/* BOTON */}

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeOVegHUq_GpBrjg8BZVB0cbpgAU5OlDaovYpIPCPJMVrr-hw/viewform?usp=header"
          target="_blank"
          style={{
            marginTop: 30,
            display: "inline-block",
            background: "#C9A227",
            color: "#000",
            padding: "16px 32px",
            borderRadius: 999,
            fontWeight: 900,
            fontSize: 16,
            textDecoration: "none",
            boxShadow: "0 12px 40px rgba(0,0,0,0.4)"
          }}
        >
          Aplicar al Diagnóstico Soberano
        </a>


        {/* SUBTEXTO */}

        <p
          style={{
            marginTop: 18,
            fontSize: 13,
            color: "rgba(255,255,255,0.55)"
          }}
        >
          Cupos limitados para operadores comprometidos con construir empresa.
        </p>

      </div>

    </section>

  );

}