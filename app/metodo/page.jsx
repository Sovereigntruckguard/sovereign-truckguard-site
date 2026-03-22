"use client";

import Header from "../components/Header";
import Footer from "../components/home/Footer";
import ApplicationModal from "../components/ApplicationModal";

const fases = [
  {
    fase: "Fase 1",
    titulo: "Análisis Inicial",
    objetivo:
      "Evaluamos capital, experiencia, contexto operativo y viabilidad real antes de mover un dólar.",
    puntos: [
      "Lectura inicial de viabilidad",
      "Identificación de riesgos estructurales",
      "Ruta recomendada: inicio o rescate",
    ],
  },
  {
    fase: "Fase 2",
    titulo: "Dealer + Pre-Inspección",
    objetivo:
      "Definimos qué unidad tiene sentido para tu operación y evitamos decisiones emocionales o costosas.",
    puntos: [
      "Selección inteligente del camión",
      "Validación previa de la unidad",
      "Prevención de compras tóxicas",
    ],
  },
  {
    fase: "Fase 3",
    titulo: "Seguros + Financiamiento",
    objetivo:
      "Ordenamos cobertura y estructura financiera para que la operación arranque con protección y no con improvisación.",
    puntos: [
      "Lectura de opciones financieras",
      "Seguro comercial alineado a riesgo",
      "Preparación para flujo de caja real",
    ],
  },
  {
    fase: "Fase 4",
    titulo: "Control Operativo",
    objetivo:
      "Montamos el orden básico de la operación: procesos, seguimiento, disciplina y visibilidad.",
    puntos: [
      "Control documental",
      "Rutinas operativas",
      "Base para operación estable",
    ],
  },
  {
    fase: "Fase 5",
    titulo: "Escudo Operativo",
    objetivo:
      "Blindamos la compañía frente a errores frecuentes, fraude, desorden de compliance y fugas de dinero.",
    puntos: [
      "Protección frente a riesgos evitables",
      "Criterio para tomar mejores cargas",
      "Reducción de exposición operativa",
    ],
  },
  {
    fase: "Fase 6",
    titulo: "Telemática + Automatización",
    objetivo:
      "Integramos tecnología y sistemas para que el negocio no dependa solo de memoria, intuición o WhatsApp.",
    puntos: [
      "Más trazabilidad",
      "Más control",
      "Más eficiencia operativa",
    ],
  },
  {
    fase: "Fase 7",
    titulo: "Expansión de Flota",
    objetivo:
      "Escalamos solo cuando la base ya resiste crecimiento. Primero orden, después expansión.",
    puntos: [
      "Crecimiento con criterio",
      "Menos caos al escalar",
      "Base para empresa real",
    ],
  },
];

const pilares = [
  {
    titulo: "Orden antes que velocidad",
    texto:
      "No aceleramos una operación desordenada. Primero validamos estructura, luego ejecución.",
  },
  {
    titulo: "Caja antes que apariencia",
    texto:
      "El método prioriza flujo de caja, riesgo y rentabilidad, no promesas vacías ni activaciones apresuradas.",
  },
  {
    titulo: "Sistema antes que improvisación",
    texto:
      "Cada fase existe para quitarle azar al negocio y convertir decisiones sueltas en una arquitectura operable.",
  },
];

const perfil = [
  "Camioneros latinos en EE. UU. con intención real de convertirse en owner-operators.",
  "Owner-operators con 0–2 camiones que necesitan rescatar o reordenar su operación.",
  "Perfiles que buscan estructura, claridad financiera y acompañamiento estratégico.",
];

const noPerfil = [
  "Quien busca un trámite rápido sin entender el negocio.",
  "Quien quiere activar por impulso sin revisar caja, riesgo y estructura.",
  "Quien solo quiere precio y no valora sistema, control y ejecución.",
];

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
      <div
        style={{
          fontSize: 12,
          letterSpacing: ".24em",
          textTransform: "uppercase",
          fontWeight: 800,
          color: light ? "#C9A227" : "#1F4D3B",
        }}
      >
        {eyebrow}
      </div>

      <h2
        style={{
          marginTop: 14,
          fontSize: 42,
          lineHeight: 1.08,
          fontWeight: 900,
          color: light ? "white" : "#1F4D3B",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          marginTop: 14,
          fontSize: 16,
          lineHeight: 1.7,
          color: light ? "rgba(255,255,255,0.80)" : "#5A6B63",
        }}
      >
        {text}
      </p>
    </div>
  );
}

function BulletList({ items, light = false }) {
  return (
    <ul
      style={{
        marginTop: 16,
        paddingLeft: 18,
        color: light ? "rgba(255,255,255,0.82)" : "#4E5F59",
        lineHeight: 1.7,
      }}
    >
      {items.map((item) => (
        <li key={item} style={{ marginTop: 6 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function MetodoPage() {
  return (
    <main style={{ background: "#F4F7F6", color: "#1A1A1A" }}>
      <Header />

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, rgba(18,58,45,0.90), rgba(18,58,45,0.96))",
          padding: "110px 0 120px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 22px",
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 50,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                color: "#C9A227",
                fontWeight: 800,
              }}
            >
              El Método Sovereign
            </div>

            <h1
              style={{
                marginTop: 16,
                fontSize: 58,
                lineHeight: 1.02,
                fontWeight: 900,
                color: "white",
              }}
            >
              Siete fases para construir una operación con estructura, no con improvisación.
            </h1>

            <p
              style={{
                marginTop: 22,
                maxWidth: 680,
                fontSize: 17,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Sovereign TruckGuard no vende trámites. Ordena decisiones
              críticas para que un camionero latino pueda iniciar o rescatar
              su empresa de trucking con criterio, control y protección.
            </p>

            <div
              style={{
                marginTop: 30,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <ApplicationModal>
                <button
                  style={{
                    background: "#C9A227",
                    color: "#000",
                    padding: "14px 24px",
                    borderRadius: 999,
                    border: "none",
                    fontWeight: 900,
                    cursor: "pointer",
                  }}
                >
                  Aplicar Gratis
                </button>
              </ApplicationModal>

              <a
                href="#fases"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.16)",
                  background: "rgba(255,255,255,0.06)",
                  color: "white",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                Ver las 7 fases
              </a>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: 30,
              color: "white",
            }}
          >
            <div
              style={{
                fontSize: 13,
                letterSpacing: ".10em",
                textTransform: "uppercase",
                color: "#C9A227",
                fontWeight: 800,
              }}
            >
              Lo que hace este método
            </div>

            <div
              style={{
                marginTop: 18,
                fontSize: 24,
                fontWeight: 800,
                lineHeight: 1.25,
              }}
            >
              Convierte decisiones sueltas en una ruta operable.
            </div>

            <BulletList
              light
              items={[
                "Reduce riesgo antes de activar",
                "Protege caja antes de crecer",
                "Ordena operación antes de escalar",
                "Te conecta con el ecosistema correcto",
              ]}
            />

            <div
              style={{
                marginTop: 20,
                padding: 16,
                borderRadius: 12,
                background: "rgba(0,0,0,0.18)",
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Aplicar al intake inicial es gratis. Primero validamos si tu caso
              tiene sentido para entrar al sistema.
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section style={{ background: "#F4F7F6", padding: "110px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 22px" }}>
          <SectionTitle
            eyebrow="Principios del método"
            title="La diferencia no está en activar rápido. Está en activar bien."
            text="Este método existe para reemplazar improvisación por estructura. Cada fase está diseñada para proteger caja, reducir errores costosos y elevar el estándar operativo."
          />

          <div
            style={{
              marginTop: 54,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 22,
            }}
          >
            {pilares.map((item) => (
              <div
                key={item.titulo}
                style={{
                  background: "white",
                  border: "1px solid #E3E8E6",
                  borderRadius: 14,
                  padding: 26,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#1F4D3B",
                  }}
                >
                  {item.titulo}
                </div>

                <p
                  style={{
                    marginTop: 12,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#5A6B63",
                  }}
                >
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FASES */}
      <section
        id="fases"
        style={{
          background: "#1F4D3B",
          padding: "120px 0",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 22px" }}>
          <SectionTitle
            eyebrow="Arquitectura 1–7"
            title="Cada fase resuelve una parte crítica del negocio."
            text="No todas las operaciones fallan por lo mismo. Por eso el método está dividido en siete capas: para identificar qué necesitas, cuándo lo necesitas y en qué orden ejecutarlo."
            light
          />

          <div
            style={{
              marginTop: 60,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 24,
            }}
          >
            {fases.map((item) => (
              <div
                key={item.fase}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 14,
                  padding: 28,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#C9A227",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  {item.fase}
                </div>

                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 1.25,
                  }}
                >
                  {item.titulo}
                </div>

                <p
                  style={{
                    marginTop: 12,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.82)",
                  }}
                >
                  {item.objetivo}
                </p>

                <BulletList light items={item.puntos} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIEN ES */}
      <section style={{ background: "#F4F7F6", padding: "110px 0" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 22px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
          }}
        >
          <div
            style={{
              background: "white",
              border: "1px solid #E3E8E6",
              borderRadius: 14,
              padding: 28,
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                fontWeight: 800,
                color: "#1F4D3B",
              }}
            >
              Este método es para
            </div>

            <BulletList items={perfil} />
          </div>

          <div
            style={{
              background: "white",
              border: "1px solid #E3E8E6",
              borderRadius: 14,
              padding: 28,
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                fontWeight: 800,
                color: "#8C2F39",
              }}
            >
              Este método no es para
            </div>

            <BulletList items={noPerfil} />
          </div>
        </div>
      </section>

      {/* FAQ / OBJECIONES */}
      <section style={{ background: "#FFFFFF", padding: "110px 0" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 22px" }}>
          <SectionTitle
            eyebrow="Preguntas clave"
            title="Lo que un buen operador debería resolver antes de activar."
            text="Estas no son preguntas decorativas. Son los puntos que suelen definir si una operación arranca con orden o termina costando dinero."
          />

          <div
            style={{
              marginTop: 50,
              display: "grid",
              gap: 18,
            }}
          >
            {[
              {
                q: "¿Ya sabes cuánto capital realmente necesitas para operar sin ahogarte en el primer mes?",
                a: "Capital no es solo entrada. Es margen de supervivencia mientras cobras, mantienes la unidad y absorbes variaciones del negocio.",
              },
              {
                q: "¿Tienes claro cómo te van a pagar las cargas y cuánto tiempo tardarás en cobrar?",
                a: "El problema muchas veces no es vender, sino cobrar tarde. Sin una lectura correcta de caja, el negocio se tranca aunque facture.",
              },
              {
                q: "¿Sabes qué riesgo estás tomando al comprar una unidad sin validación seria?",
                a: "Una mala compra puede drenar caja desde el primer mes. El método reduce ese riesgo antes de comprometer capital.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  border: "1px solid #E3E8E6",
                  background: "#F8FAF9",
                  borderRadius: 14,
                  padding: 24,
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#1F4D3B",
                    lineHeight: 1.35,
                  }}
                >
                  {item.q}
                </div>

                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#5A6B63",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="diagnostico"
        style={{
          background: "#0B0F14",
          padding: "130px 0",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 22px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: ".24em",
              textTransform: "uppercase",
              fontWeight: 800,
              color: "#C9A227",
            }}
          >
            Aplicación inicial
          </div>

          <h2
            style={{
              marginTop: 16,
              fontSize: 44,
              fontWeight: 900,
              color: "white",
              lineHeight: 1.08,
            }}
          >
            Si tu intención es real, el siguiente paso no es adivinar. Es aplicar.
          </h2>

          <p
            style={{
              marginTop: 18,
              fontSize: 17,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            Revisamos tu caso inicial, entendemos si estás en etapa de inicio o
            rescate y definimos si tiene sentido que entres al sistema.
          </p>

          <div
            style={{
              marginTop: 22,
              color: "#C9A227",
              fontSize: 15,
              fontWeight: 800,
            }}
          >
            Aplicar es completamente gratis.
          </div>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <ApplicationModal>
              <button
                style={{
                  background: "#C9A227",
                  color: "#000",
                  padding: "16px 30px",
                  borderRadius: 999,
                  border: "none",
                  fontWeight: 900,
                  fontSize: 16,
                  cursor: "pointer",
                }}
              >
                Aplicar al Intake
              </button>
            </ApplicationModal>

            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 24px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Volver al Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}