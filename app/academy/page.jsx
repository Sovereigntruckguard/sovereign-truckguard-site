"use client";

import Header from "../components/Header";
import Footer from "../components/home/Footer";
import ApplicationModal from "../components/ApplicationModal";

export default function AcademyPage() {

  const rutas = [
    {
      titulo: "Ruta Dinero",
      descripcion:
        "Aprende a entender costos reales, flujo de caja y cómo evitar operar en pérdida aunque estés moviendo cargas.",
    },
    {
      titulo: "Ruta Cumplimiento",
      descripcion:
        "Conoce los requisitos reales para operar legalmente en EE. UU. sin errores que te cuesten dinero.",
    },
    {
      titulo: "Ruta Protección",
      descripcion:
        "Evita fraudes, malas decisiones y errores comunes que destruyen operaciones de trucking.",
    },
  ];

  return (

    <main style={{ background: "#F4F7F6" }}>

      <Header />

      {/* HERO */}

      <section
        style={{
          background:
            "linear-gradient(to bottom, rgba(18,58,45,0.92), rgba(18,58,45,0.96))",
          padding: "110px 0",
          color: "white",
          textAlign: "center",
        }}
      >

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 22px" }}>

          <div
            style={{
              fontSize: 12,
              letterSpacing: ".24em",
              textTransform: "uppercase",
              color: "#C9A227",
              fontWeight: 800,
            }}
          >
            Sovereign Academy
          </div>

          <h1
            style={{
              marginTop: 16,
              fontSize: 52,
              fontWeight: 900,
              lineHeight: 1.05,
            }}
          >
            Aprende el negocio del trucking antes de que el negocio te cueste dinero.
          </h1>

          <p
            style={{
              marginTop: 18,
              fontSize: 17,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Contenido real para camioneros latinos que quieren dejar de improvisar
            y construir operaciones con estructura.
          </p>

        </div>

      </section>


      {/* RUTAS */}

      <section style={{ padding: "110px 0" }}>

        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 22px" }}>

          <div
            style={{
              textAlign: "center",
              maxWidth: 700,
              margin: "0 auto",
            }}
          >

            <h2
              style={{
                fontSize: 40,
                fontWeight: 900,
                color: "#1F4D3B",
              }}
            >
              Tres rutas para entender el negocio
            </h2>

          </div>


          <div
            style={{
              marginTop: 50,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 24,
            }}
          >

            {rutas.map((r) => (

              <div
                key={r.titulo}
                style={{
                  background: "white",
                  padding: 28,
                  borderRadius: 14,
                  border: "1px solid #E3E8E6",
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
                  {r.titulo}
                </div>

                <p
                  style={{
                    marginTop: 12,
                    color: "#5A6B63",
                    lineHeight: 1.7,
                  }}
                >
                  {r.descripcion}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* VIDEOS */}

      <section
        style={{
          background: "#1F4D3B",
          padding: "110px 0",
          color: "white",
        }}
      >

        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 22px" }}>

          <h2
            style={{
              fontSize: 36,
              fontWeight: 900,
              textAlign: "center",
            }}
          >
            Tips reales del negocio
          </h2>

          <div
            style={{
              marginTop: 50,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 24,
            }}
          >

            {/* VIDEO 1 */}

            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID"
              frameBorder="0"
              allowFullScreen
            />

            {/* VIDEO 2 */}

            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID"
              frameBorder="0"
              allowFullScreen
            />

            {/* VIDEO 3 */}

            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID"
              frameBorder="0"
              allowFullScreen
            />

          </div>

        </div>

      </section>


      {/* CTA */}

      <section
        style={{
          background: "#0B0F14",
          padding: "120px 0",
          textAlign: "center",
          color: "white",
        }}
      >

        <h2 style={{ fontSize: 40, fontWeight: 900 }}>
          Ya entiendes el negocio.
        </h2>

        <p style={{ marginTop: 14, opacity: 0.8 }}>
          Ahora es momento de evaluar tu caso real.
        </p>

        <ApplicationModal>
          <button
            style={{
              marginTop: 24,
              background: "#C9A227",
              padding: "14px 28px",
              borderRadius: 999,
              border: "none",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            Aplicar al Diagnóstico
          </button>
        </ApplicationModal>

      </section>


      <Footer />

    </main>

  );
}