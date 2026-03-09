"use client";

import { useState } from "react";

export default function Simulador() {

  const pregunta = "¿Sabes cuánto tardarás en recibir el dinero de la carga?";

  const opciones = [
    "El mismo día",
    "Entre 7 y 15 días",
    "Entre 30 y 90 días"
  ];

  const [seleccion, setSeleccion] = useState(null);
  const [respuesta, setRespuesta] = useState(null);

  function evaluar() {

    if (seleccion === 2) {
      setRespuesta({
        correcta: true,
        texto:
          "Correcto. En la mayoría de los casos las cargas se pagan entre 30 y 90 días después de entregadas."
      });
    } else {
      setRespuesta({
        correcta: false,
        texto:
          "No exactamente. En la mayoría de los casos las cargas se pagan entre 30 y 90 días. Por eso muchos operadores utilizan factoring para mantener flujo de caja."
      });
    }

  }

  return (

    <section
      style={{
        background: "#1F4D3B",
        padding: "120px 0"
      }}
    >

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 22px",
          textAlign: "center"
        }}
      >

        {/* TITULO */}

        <h2
          style={{
            fontSize: 40,
            fontWeight: 900,
            color: "white"
          }}
        >
          Simulador de Decisiones Reales
        </h2>

        <p
          style={{
            marginTop: 12,
            color: "rgba(255,255,255,0.8)",
            fontSize: 16
          }}
        >
          Aprende cómo funciona realmente el negocio del trucking antes de tomar decisiones costosas.
        </p>


        {/* PREGUNTA */}

        <div
          style={{
            marginTop: 50,
            background: "rgba(0,0,0,0.25)",
            padding: 30,
            borderRadius: 12,
            color: "white",
            fontSize: 20,
            fontWeight: 700
          }}
        >
          {pregunta}
        </div>



        {/* OPCIONES */}

        <div
          style={{
            marginTop: 30,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 18
          }}
        >

          {opciones.map((opcion, i) => (

            <div
              key={i}
              onClick={() => setSeleccion(i)}
              style={{
                padding: 20,
                borderRadius: 10,
                cursor: "pointer",
                background:
                  seleccion === i
                    ? "#C9A227"
                    : "rgba(255,255,255,0.08)",
                color:
                  seleccion === i
                    ? "#000"
                    : "white",
                fontWeight: 600
              }}
            >
              {opcion}
            </div>

          ))}

        </div>



        {/* BOTON */}

        <button
          onClick={evaluar}
          style={{
            marginTop: 30,
            background: "#123A2D",
            color: "white",
            padding: "14px 28px",
            borderRadius: 10,
            border: "none",
            fontWeight: 800,
            fontSize: 15
          }}
        >
          Responder
        </button>



        {/* RESULTADO */}

        {respuesta && (

          <div
            style={{
              marginTop: 30,
              background: "white",
              padding: 24,
              borderRadius: 12,
              maxWidth: 700,
              marginInline: "auto",
              color: "#1A1A1A"
            }}
          >

            <strong>
              {respuesta.correcta ? "Correcto." : "Respuesta incorrecta."}
            </strong>

            <p style={{ marginTop: 10 }}>
              {respuesta.texto}
            </p>

            <a
              href="/services#factoring"
              style={{
                marginTop: 16,
                display: "inline-block",
                background: "#C9A227",
                padding: "10px 18px",
                borderRadius: 8,
                color: "#000",
                fontWeight: 700,
                textDecoration: "none"
              }}
            >
              Ver cómo funciona el factoring
            </a>

          </div>

        )}

      </div>

    </section>

  );

}