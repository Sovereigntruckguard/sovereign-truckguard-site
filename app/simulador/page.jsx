"use client";

import { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/home/Footer";
import ApplicationModal from "../components/ApplicationModal";

const preguntas = [
  {
    id: 1,
    pregunta: "¿Sabes cuánto tardarás en recibir el dinero de una carga?",
    opciones: ["El mismo día", "7–15 días", "30–90 días"],
    correcta: 2,
    explicacion:
      "En la mayoría de operaciones el pago tarda entre 30 y 90 días. Sin estructura de caja, puedes quebrarte aunque estés trabajando.",
  },
  {
    id: 2,
    pregunta: "¿Cuál es uno de los mayores costos operativos en trucking?",
    opciones: ["Combustible", "Peajes", "GPS"],
    correcta: 0,
    explicacion:
      "El combustible impacta directamente la rentabilidad. Sin control de costos por milla, puedes operar en pérdida.",
  },
  {
    id: 3,
    pregunta: "¿Qué pasa si compras un camión sin revisión técnica?",
    opciones: [
      "Nada relevante",
      "Puedes destruir tu caja en semanas",
      "Solo afecta a flotas grandes",
    ],
    correcta: 1,
    explicacion:
      "Una mala compra genera costos ocultos, downtime y pérdida de liquidez desde el inicio.",
  },
  {
    id: 4,
    pregunta: "¿Qué riesgo existe con brokers fraudulentos?",
    opciones: [
      "Retrasos menores",
      "Perder el pago completo",
      "Nada si entregas la carga",
    ],
    correcta: 1,
    explicacion:
      "El double brokering puede dejarte sin pago incluso si la carga se entregó correctamente.",
  },
];

function getPerfil(score, total) {
  const r = score / total;

  if (r >= 0.75)
    return {
      titulo: "Buen criterio inicial",
      texto:
        "Tienes una base más sólida que la mayoría, pero aún necesitas validar tu operación real.",
    };

  if (r >= 0.5)
    return {
      titulo: "Base parcial",
      texto:
        "Ya entiendes algunas variables, pero hay riesgos importantes si avanzas sin estructura.",
    };

  return {
    titulo: "Riesgo alto",
    texto:
      "Tu nivel actual indica alto riesgo de entrar mal al negocio. Necesitas estructura antes de activar.",
  };
}

export default function SimuladorPage() {
  const total = preguntas.length;

  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [resultado, setResultado] = useState(false);
  const [score, setScore] = useState(0);

  const actual = preguntas[indice];
  const progreso = ((indice + 1) / total) * 100;

  const perfil = useMemo(() => getPerfil(score, total), [score]);

  function responder() {
    if (seleccion === null) return;

    if (seleccion === actual.correcta) {
      setScore((s) => s + 1);
    }

    setResultado(true);
  }

  function siguiente() {
    setSeleccion(null);
    setResultado(false);

    if (indice < total - 1) {
      setIndice(indice + 1);
    } else {
      setIndice(total);
    }
  }

  function reiniciar() {
    setIndice(0);
    setScore(0);
    setSeleccion(null);
    setResultado(false);
  }

  if (indice >= total) {
    return (
      <main>
        <Header />

        <section
          style={{
            padding: "120px 0",
            textAlign: "center",
            background: "#F4F7F6",
          }}
        >
          <h2 style={{ fontSize: 40, fontWeight: 900 }}>
            Resultado de tu evaluación
          </h2>

          <p style={{ marginTop: 12 }}>
            Respondiste correctamente {score} de {total}
          </p>

          <div
            style={{
              marginTop: 30,
              background: "white",
              padding: 30,
              maxWidth: 600,
              marginInline: "auto",
              borderRadius: 14,
            }}
          >
            <h3>{perfil.titulo}</h3>
            <p style={{ marginTop: 10 }}>{perfil.texto}</p>

            <ApplicationModal>
              <button
                style={{
                  marginTop: 20,
                  background: "#C9A227",
                  padding: 14,
                  borderRadius: 10,
                  border: "none",
                  fontWeight: 800,
                }}
              >
                Aplicar al Diagnóstico
              </button>
            </ApplicationModal>

            <button
              onClick={reiniciar}
              style={{ marginTop: 14, display: "block" }}
            >
              Volver a intentar
            </button>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />

      <section
        style={{
          background: "#1F4D3B",
          padding: "120px 0",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: 40, fontWeight: 900 }}>
          Simulador de Decisiones Reales
        </h2>

        {/* progreso */}
        <div
          style={{
            maxWidth: 600,
            margin: "20px auto",
            background: "rgba(255,255,255,.2)",
            height: 8,
            borderRadius: 10,
          }}
        >
          <div
            style={{
              width: `${progreso}%`,
              background: "#C9A227",
              height: "100%",
              borderRadius: 10,
            }}
          />
        </div>

        {/* pregunta */}
        <div
          style={{
            background: "rgba(0,0,0,.3)",
            padding: 30,
            borderRadius: 12,
            maxWidth: 700,
            margin: "20px auto",
          }}
        >
          {actual.pregunta}
        </div>

        {/* opciones */}
        <div
          style={{
            display: "grid",
            gap: 14,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          {actual.opciones.map((o, i) => {
            const activa = seleccion === i;

            return (
              <div
                key={i}
                onClick={() => !resultado && setSeleccion(i)}
                style={{
                  padding: 16,
                  background: activa ? "#C9A227" : "rgba(255,255,255,.1)",
                  color: activa ? "#000" : "white",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                {o}
              </div>
            );
          })}
        </div>

        {!resultado && (
          <button
            onClick={responder}
            style={{
              marginTop: 20,
              padding: 12,
              background: "#123A2D",
              color: "white",
              border: "none",
              borderRadius: 10,
              fontWeight: 800,
            }}
          >
            Responder
          </button>
        )}

        {resultado && (
          <div
            style={{
              marginTop: 20,
              background: "white",
              color: "#000",
              padding: 20,
              borderRadius: 10,
              maxWidth: 600,
              marginInline: "auto",
            }}
          >
            <p>{actual.explicacion}</p>

            <button
              onClick={siguiente}
              style={{
                marginTop: 10,
                background: "#C9A227",
                padding: 10,
                border: "none",
                borderRadius: 8,
                fontWeight: 700,
              }}
            >
              {indice === total - 1 ? "Ver resultado" : "Siguiente"}
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}