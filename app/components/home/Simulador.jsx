"use client";

import { useMemo, useState } from "react";

const preguntas = [
  {
    id: 1,
    pregunta: "¿Sabes cuánto tardarás en recibir el dinero de una carga después de entregarla?",
    opciones: [
      "El mismo día o al día siguiente",
      "Entre 7 y 15 días",
      "Entre 30 y 90 días",
    ],
    correcta: 2,
    explicacion:
      "En muchas operaciones el pago de una carga puede tardar entre 30 y 90 días. Por eso el flujo de caja es uno de los mayores retos del owner-operator y muchos terminan usando factoring para sobrevivir.",
    solucionTitulo: "Qué significa esto para tu negocio",
    solucionTexto:
      "Si no estructuras bien tu caja, puedes quebrarte aunque estés moviendo cargas. El problema no siempre es vender; muchas veces es esperar demasiado para cobrar.",
    ctaTexto: "Consultar sobre factoring",
    ctaHref: "/services#factoring",
  },
  {
    id: 2,
    pregunta: "¿Cuál suele ser uno de los costos operativos más sensibles en trucking?",
    opciones: [
      "El combustible",
      "El uniforme del conductor",
      "El costo del GPS",
    ],
    correcta: 0,
    explicacion:
      "El combustible es una de las variables que más impacta el margen. Un cambio pequeño en diésel puede alterar completamente tu rentabilidad si no conoces tu costo real por milla.",
    solucionTitulo: "Qué significa esto para tu negocio",
    solucionTexto:
      "No basta con conseguir cargas. Debes entender cuánto te cuesta realmente mover el camión para saber si una carga deja dinero o solo trabajo.",
    ctaTexto: "Calcular break-even",
    ctaHref: "/simulador",
  },
  {
    id: 3,
    pregunta: "Si compras camión sin una revisión técnica seria, ¿qué riesgo tomas?",
    opciones: [
      "Solo gastar más en llantas",
      "Quedar con una unidad que drene tu caja desde el primer mes",
      "No pasa nada importante",
    ],
    correcta: 1,
    explicacion:
      "Una mala compra puede destruir la operación desde el inicio. Fallas mecánicas, reparaciones inesperadas y tiempo fuera de servicio son suficientes para comprometer caja, reputación y continuidad.",
    solucionTitulo: "Qué significa esto para tu negocio",
    solucionTexto:
      "En este negocio, comprar mal es empezar perdiendo. La selección del camión debe ser estratégica, no emocional.",
    ctaTexto: "Ver proceso de activación",
    ctaHref: "/metodo",
  },
  {
    id: 4,
    pregunta: "¿Qué puede pasar si trabajas con un broker fraudulento o en un caso de double brokering?",
    opciones: [
      "Nada importante si la carga se entregó",
      "Puedes perder el pago completo de la carga",
      "Solo recibes el dinero más tarde",
    ],
    correcta: 1,
    explicacion:
      "El fraude en freight puede hacer que entregues la carga y aún así no recibas pago. Verificación, control documental y procesos de validación son parte del escudo operativo.",
    solucionTitulo: "Qué significa esto para tu negocio",
    solucionTexto:
      "No todo riesgo viene del camión. También viene del mercado, de la contraparte y de la falta de filtros antes de aceptar una carga.",
    ctaTexto: "Ver protección operativa",
    ctaHref: "/respaldo",
  },
  {
    id: 5,
    pregunta: "¿Qué pasa si aceptas cargas sin conocer tu costo real por milla?",
    opciones: [
      "Puedes trabajar mucho y aun así perder dinero",
      "No afecta si el camión está rodando",
      "Solo afecta a flotas grandes",
    ],
    correcta: 0,
    explicacion:
      "Muchos operadores confunden facturación con utilidad. Si no conoces tu costo real por milla, puedes estar operando en pérdida sin darte cuenta.",
    solucionTitulo: "Qué significa esto para tu negocio",
    solucionTexto:
      "La operación no se mide solo por mover el camión. Se mide por cuánto deja después de combustible, seguro, mantenimiento, compliance y tiempo de cobro.",
    ctaTexto: "Evaluar viabilidad",
    ctaHref: "/simulador",
  },
  {
    id: 6,
    pregunta: "Antes de activar una compañía de trucking, ¿qué deberías tener realmente claro?",
    opciones: [
      "Solo el nombre de la LLC",
      "Capital, estructura, riesgo, tiempos de cobro y plan operativo",
      "Solo los trámites del DOT",
    ],
    correcta: 1,
    explicacion:
      "Activar empresa sin estructura es una de las razones más comunes de fracaso. El negocio exige claridad financiera, orden operativo y ejecución controlada.",
    solucionTitulo: "Qué significa esto para tu negocio",
    solucionTexto:
      "No vendemos trámites. Construimos empresas de trucking sólidas. Primero se diagnostica, luego se decide, después se activa.",
    ctaTexto: "Aplicar al Diagnóstico",
    ctaHref: "#diagnostico",
  },
];

function getPerfil(score, total) {
  const ratio = score / total;

  if (ratio >= 0.8) {
    return {
      titulo: "Buen criterio inicial",
      subtitulo:
        "Tienes una lectura más madura del negocio que la mayoría de operadores que entran improvisando.",
      detalle:
        "Eso no significa que ya estés listo para activar. Significa que entiendes mejor dónde están los riesgos. El siguiente paso es validar tu caso real con diagnóstico estratégico.",
      color: "#1F4D3B",
      bg: "#EAF3EF",
    };
  }

  if (ratio >= 0.5) {
    return {
      titulo: "Base parcial, pero con puntos ciegos",
      subtitulo:
        "Ya identificas algunas variables críticas, pero todavía hay riesgos estructurales que pueden costarte dinero si activas sin orden.",
      detalle:
        "Aquí es donde la mayoría se confía. Lo peligroso no es no saber nada; lo peligroso es saber un poco y tomar decisiones grandes con información incompleta.",
      color: "#8A6B00",
      bg: "#FFF7DB",
    };
  }

  return {
    titulo: "Riesgo alto de entrar mal al negocio",
    subtitulo:
      "Tus respuestas muestran vacíos importantes sobre flujo de caja, costos, fraude y estructura operativa.",
    detalle:
      "Eso no es una condena; es una alerta. Precisamente para eso existe Sovereign TruckGuard: para evitar que entres al negocio de forma desordenada y cara.",
    color: "#8C2F39",
    bg: "#FCEBED",
  };
}

export default function Simulador() {
  const total = preguntas.length;
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [resultadoVisible, setResultadoVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [respuestas, setRespuestas] = useState([]);

  const actual = preguntas[indice];
  const esUltima = indice === total - 1;
  const progreso = ((indice + 1) / total) * 100;

  const aciertoActual = seleccion === actual.correcta;

  const perfil = useMemo(() => getPerfil(score, total), [score, total]);

  function responder() {
    if (seleccion === null) return;
    setResultadoVisible(true);
  }

  function siguiente() {
    if (seleccion === null) return;

    const yaRespondida = respuestas.some((r) => r.id === actual.id);

    if (!yaRespondida) {
      const acertada = seleccion === actual.correcta;
      setRespuestas((prev) => [
        ...prev,
        {
          id: actual.id,
          seleccion,
          correcta: actual.correcta,
          acertada,
        },
      ]);

      if (acertada) {
        setScore((prev) => prev + 1);
      }
    }

    setResultadoVisible(false);
    setSeleccion(null);

    if (!esUltima) {
      setIndice((prev) => prev + 1);
    } else {
      setIndice(total);
    }
  }

  function reiniciar() {
    setIndice(0);
    setSeleccion(null);
    setResultadoVisible(false);
    setScore(0);
    setRespuestas([]);
  }

  if (indice >= total) {
    return (
      <section
        style={{
          background: "#1F4D3B",
          padding: "120px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 22px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: 42,
              fontWeight: 900,
              color: "white",
            }}
          >
            Resultado de tu evaluación
          </h2>

          <p
            style={{
              marginTop: 12,
              color: "rgba(255,255,255,0.82)",
              fontSize: 16,
            }}
          >
            Respondiste correctamente {score} de {total} preguntas.
          </p>

          <div
            style={{
              marginTop: 36,
              background: perfil.bg,
              borderRadius: 16,
              padding: 32,
              maxWidth: 820,
              marginInline: "auto",
              textAlign: "left",
              boxShadow: "0 20px 60px rgba(0,0,0,0.16)",
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: perfil.color,
                textTransform: "uppercase",
                letterSpacing: ".06em",
              }}
            >
              Lectura inicial
            </div>

            <h3
              style={{
                marginTop: 10,
                fontSize: 30,
                fontWeight: 900,
                color: "#1A1A1A",
                lineHeight: 1.2,
              }}
            >
              {perfil.titulo}
            </h3>

            <p
              style={{
                marginTop: 14,
                fontSize: 17,
                lineHeight: 1.7,
                color: "#31443D",
                fontWeight: 600,
              }}
            >
              {perfil.subtitulo}
            </p>

            <p
              style={{
                marginTop: 16,
                fontSize: 15,
                lineHeight: 1.75,
                color: "#4E5F59",
              }}
            >
              {perfil.detalle}
            </p>

            <div
              style={{
                marginTop: 28,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <a
                href="#diagnostico"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#C9A227",
                  color: "#000",
                  padding: "14px 22px",
                  borderRadius: 10,
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                Aplicar al Diagnóstico
              </a>

              <button
                onClick={reiniciar}
                style={{
                  background: "#123A2D",
                  color: "white",
                  padding: "14px 22px",
                  borderRadius: 10,
                  border: "none",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                Volver a intentarlo
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        background: "#1F4D3B",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 22px",
          textAlign: "center",
        }}
      >
        {/* TITULO */}
        <h2
          style={{
            fontSize: 40,
            fontWeight: 900,
            color: "white",
          }}
        >
          Simulador de Decisiones Reales
        </h2>

        <p
          style={{
            marginTop: 12,
            color: "rgba(255,255,255,0.82)",
            fontSize: 16,
            maxWidth: 760,
            marginInline: "auto",
            lineHeight: 1.7,
          }}
        >
          Aprende cómo funciona realmente el negocio del trucking antes de
          comprometer capital, aceptar cargas o activar tu compañía.
        </p>

        {/* PROGRESO */}
        <div
          style={{
            marginTop: 30,
            maxWidth: 780,
            marginInline: "auto",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
              color: "rgba(255,255,255,0.78)",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            <span>
              Pregunta {indice + 1} de {total}
            </span>
            <span>{Math.round(progreso)}%</span>
          </div>

          <div
            style={{
              height: 10,
              borderRadius: 999,
              background: "rgba(255,255,255,0.12)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progreso}%`,
                height: "100%",
                background: "#C9A227",
                borderRadius: 999,
              }}
            />
          </div>
        </div>

        {/* PREGUNTA */}
        <div
          style={{
            marginTop: 38,
            background: "rgba(0,0,0,0.22)",
            padding: 30,
            borderRadius: 14,
            color: "white",
            fontSize: 22,
            fontWeight: 800,
            lineHeight: 1.4,
            maxWidth: 900,
            marginInline: "auto",
          }}
        >
          {actual.pregunta}
        </div>

        {/* OPCIONES */}
        <div
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 18,
            maxWidth: 900,
            marginInline: "auto",
          }}
        >
          {actual.opciones.map((opcion, i) => {
            const activa = seleccion === i;

            return (
              <div
                key={i}
                onClick={() => {
                  if (!resultadoVisible) setSeleccion(i);
                }}
                style={{
                  padding: "18px 20px",
                  borderRadius: 10,
                  cursor: resultadoVisible ? "default" : "pointer",
                  background: activa ? "#C9A227" : "rgba(255,255,255,0.10)",
                  color: activa ? "#000" : "white",
                  fontWeight: 700,
                  fontSize: 15,
                  transition: "all .2s ease",
                  border: ativa ? "1px solid #C9A227" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {opcion}
              </div>
            );
          })}
        </div>

        {/* BOTON */}
        {!resultadoVisible && (
          <button
            onClick={responder}
            style={{
              marginTop: 28,
              background: "#123A2D",
              color: "white",
              padding: "14px 28px",
              borderRadius: 10,
              border: "none",
              fontWeight: 800,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Responder
          </button>
        )}

        {/* RESULTADO */}
        {resultadoVisible && (
          <div
            style={{
              marginTop: 30,
              background: "white",
              padding: 26,
              borderRadius: 14,
              maxWidth: 900,
              marginInline: "auto",
              color: "#1A1A1A",
              textAlign: "left",
              boxShadow: "0 18px 48px rgba(0,0,0,0.14)",
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: aciertoActual ? "#1F4D3B" : "#8C2F39",
                textTransform: "uppercase",
                letterSpacing: ".05em",
              }}
            >
              {aciertoActual ? "Respuesta correcta" : "No exactamente"}
            </div>

            <p
              style={{
                marginTop: 10,
                fontSize: 16,
                lineHeight: 1.7,
                color: "#1A1A1A",
                fontWeight: 600,
              }}
            >
              {actual.explicacion}
            </p>

            <div
              style={{
                marginTop: 16,
                background: "#F4F7F6",
                borderRadius: 12,
                padding: 18,
                border: "1px solid #E3E8E6",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  color: "#1F4D3B",
                  marginBottom: 8,
                }}
              >
                {actual.solucionTitulo}
              </div>

              <p
                style={{
                  color: "#4F5E58",
                  lineHeight: 1.7,
                  fontSize: 15,
                  margin: 0,
                }}
              >
                {actual.solucionTexto}
              </p>
            </div>

            <div
              style={{
                marginTop: 18,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href={actual.ctaHref}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#C9A227",
                  color: "#000",
                  padding: "12px 18px",
                  borderRadius: 8,
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                {actual.ctaTexto}
              </a>

              <button
                onClick={siguiente}
                style={{
                  background: "#123A2D",
                  color: "white",
                  padding: "12px 18px",
                  borderRadius: 8,
                  border: "none",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                {esUltima ? "Ver resultado final" : "Siguiente pregunta"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}