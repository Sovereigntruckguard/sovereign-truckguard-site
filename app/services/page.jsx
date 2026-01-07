"use client";

import { useMemo, useState } from "react";

/* =========================
   CONFIG
========================= */

const colors = {
  bg: "#050505",
  gold: "#FFD700",
  rose: "#E8B7B7",
  white: "#FFFFFF",
};

const layout = {
  maxWidth: 1200,
  sidePadding: 20,
};

/* =========================
   HELPERS UI
========================= */

function Section({ children, id, style }) {
  return (
    <section
      id={id}
      style={{
        maxWidth: layout.maxWidth,
        margin: "0 auto",
        padding: `0 ${layout.sidePadding}px`,
        ...style,
      }}
    >
      {children}
    </section>
  );
}

function Pill({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 12px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.18)",
        background: "rgba(0,0,0,0.30)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.85)",
      }}
    >
      {children}
    </span>
  );
}

function PrimaryButton({ children, href }) {
  return (
    <a
      href={href}
      style={{
        padding: "12px 26px",
        borderRadius: 999,
        background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
        color: "#000",
        fontWeight: 900,
        fontSize: 13,
        textDecoration: "none",
        boxShadow: "0 18px 60px rgba(0,0,0,0.9)",
      }}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children, href }) {
  return (
    <a
      href={href}
      style={{
        padding: "11px 22px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.40)",
        color: colors.white,
        fontSize: 12,
        textDecoration: "none",
        background: "rgba(0,0,0,0.25)",
      }}
    >
      {children}
    </a>
  );
}

function DisabledCTA({ label }) {
  return (
    <button
      disabled
      title="Pagos en línea se habilitan en breve (Stripe)"
      style={{
        padding: "10px 18px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.18)",
        background: "linear-gradient(90deg, rgba(255,215,0,0.16), rgba(232,183,183,0.16))",
        color: "rgba(255,255,255,0.65)",
        fontWeight: 900,
        cursor: "not-allowed",
        opacity: 0.85,
      }}
    >
      {label}
    </button>
  );
}

/* =========================
   MODAL
========================= */

function Modal({ open, title, onClose, children }) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "rgba(0,0,0,0.84)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 18,
      }}
    >
      <div
        style={{
          width: "min(900px, 100%)",
          maxHeight: "88vh",
          overflow: "auto",
          background: "#0b0b0b",
          borderRadius: 22,
          border: "1px solid rgba(255,255,255,0.16)",
          boxShadow: "0 30px 120px rgba(0,0,0,0.95)",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            background: "rgba(11,11,11,0.92)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.10)",
            padding: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ color: colors.gold, fontWeight: 900 }}>{title}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>
              Especificaciones, tiempos y fees oficiales (transparencia total)
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              borderRadius: 999,
              padding: "8px 12px",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.06)",
              color: "white",
              cursor: "pointer",
            }}
          >
            Cerrar ✕
          </button>
        </div>

        <div style={{ padding: 18 }}>{children}</div>
      </div>
    </div>
  );
}

/* =========================
   HEADER FIJO
========================= */

function ServicesHeader() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          padding: `10px ${layout.sidePadding}px`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            textDecoration: "none",
            color: colors.white,
          }}
        >
          <img
            src="/logo-sovereign.png"
            alt="Sovereign TruckGuard"
            style={{ width: 36, height: "auto" }}
          />
          <div>
            <div
              style={{
                fontFamily: "Montserrat, system-ui",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Sovereign TruckGuard LLC
            </div>
            <div style={{ fontSize: 11, opacity: 0.7 }}>
              Luxury compliance & business
            </div>
          </div>
        </a>

        {/* CTA correcto para regulatorios (no seguros) */}
        <a
          href="#packages"
          style={{
            padding: "8px 18px",
            borderRadius: 999,
            background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
            color: "#000",
            fontWeight: 900,
            textDecoration: "none",
            boxShadow: "0 14px 35px rgba(0,0,0,0.6)",
          }}
        >
          Crear mi compañía
        </a>
      </div>
    </header>
  );
}

/* =========================
   HERO VIDEO FULL BLEED
========================= */

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <video
        src="/services/hero/hero-services.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.60)" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.88), rgba(0,0,0,0.40), rgba(0,0,0,0.16))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Section style={{ paddingTop: 96, paddingBottom: 56 }}>
          <div style={{ maxWidth: 720 }}>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: colors.gold,
                fontFamily: "Montserrat, system-ui",
              }}
            >
              Servicios regulatorios premium
            </p>

            <h1
              style={{
                margin: "10px 0 10px",
                fontSize: 46,
                lineHeight: 1.08,
                fontFamily: "Montserrat, system-ui",
              }}
            >
              Crea tu compañía trucking en USA{" "}
              <span style={{ color: colors.gold }}>sin errores</span>, sin estrés
            </h1>

            <p
              style={{
                margin: "0 0 16px",
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.90)",
              }}
            >
              EIN · LLC · DOT · MC · UCR · TXDMV · BOI
              <br />
              Proceso legal, documentado y acompañado en español.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <PrimaryButton href="#packages">Ver paquetes</PrimaryButton>
              <SecondaryButton href="#individual">Servicios individuales</SecondaryButton>
            </div>

            <div style={{ marginTop: 14, fontSize: 12, color: "rgba(255,255,255,0.65)" }}>
              * Government fees se pagan por separado en portales oficiales.
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}

/* =========================
   TRUST BLOCKS (4)
========================= */

function TrustBlocks() {
  const items = [
    {
      title: "Transparencia real",
      text:
        "Separa tu service fee de los government fees. Nada de cobros ocultos ni retención de pagos oficiales.",
    },
    {
      title: "Seguimiento diario",
      text:
        "Te informamos el estado del proceso, tiempos y próximos pasos. No desaparecemos.",
    },
    {
      title: "Hecho para latinos",
      text:
        "Te explicamos todo en español, con estructura y sin inglés técnico confuso.",
    },
    {
      title: "Cero malas prácticas",
      text:
        "No firmamos por ti, no inventamos datos, no te exponemos a bloqueos ni auditorías por errores.",
    },
  ];

  return (
    <Section style={{ paddingTop: 46 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {items.map((it) => (
          <div
            key={it.title}
            style={{
              borderRadius: 18,
              padding: 18,
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.03)",
              boxShadow: "0 18px 60px rgba(0,0,0,0.85)",
            }}
          >
            <div style={{ color: colors.gold, fontWeight: 900, marginBottom: 8 }}>
              {it.title}
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.85)" }}>
              {it.text}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================
   PACKAGE CARDS (Tienda)
========================= */

function PackageCard({ bg, badge, title, price, bullets, onOpenModal }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 26,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 26px 90px rgba(0,0,0,0.95)",
        minHeight: 460,
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.58)" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.92))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          padding: 26,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: 10,
        }}
      >
        <Pill>{badge}</Pill>

        <h3 style={{ margin: 0, fontSize: 26, fontFamily: "Montserrat, system-ui", color: colors.gold }}>
          {title}
        </h3>

        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "rgba(255,255,255,0.92)", lineHeight: 1.6 }}>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div style={{ fontSize: 22, fontWeight: 950 }}>{price}</div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
          <DisabledCTA label="Comprar" />
          <button
            onClick={onOpenModal}
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(0,0,0,0.25)",
              color: "rgba(255,255,255,0.90)",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            Ver cómo funciona
          </button>
        </div>

        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.70)", marginTop: 4 }}>
          Service fee Sovereign. Government fees se pagan aparte.
        </div>
      </div>
    </div>
  );
}

/* =========================
   HOW IT WORKS
========================= */

function HowItWorks() {
  const steps = [
    { n: "01", t: "Eliges paquete o servicio", d: "Ves qué incluye y qué NO incluye (sin letra pequeña)." },
    { n: "02", t: "Formulario post-pago", d: "Entregas la info necesaria (incluye 3 nombres)." },
    { n: "03", t: "Validación real", d: "Confirmamos nombre disponible y coherencia de operación." },
    { n: "04", t: "Ejecución", d: "Procesamos EIN / DOT / MC / etc. con evidencia." },
    { n: "05", t: "Seguimiento diario", d: "Te informamos estado y tiempos. Sin silencio." },
    { n: "06", t: "Entrega final", d: "Te entregamos documentos y dejamos el camino listo para seguro." },
  ];

  return (
    <Section id="how" style={{ paddingTop: 70 }}>
      <h2 style={{ margin: 0, fontSize: 28, fontFamily: "Montserrat, system-ui" }}>Cómo funciona</h2>
      <p style={{ marginTop: 10, maxWidth: 860, color: "rgba(255,255,255,0.80)", lineHeight: 1.7 }}>
        Este flujo existe para eliminar errores, estafas y retrasos. Todo es visible, documentado y con responsable.
      </p>

      <div
        style={{
          marginTop: 18,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {steps.map((s) => (
          <div
            key={s.n}
            style={{
              borderRadius: 18,
              padding: 18,
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div style={{ fontSize: 12, letterSpacing: "0.2em", color: colors.gold }}>{s.n}</div>
            <div style={{ marginTop: 6, fontSize: 15, fontWeight: 950 }}>{s.t}</div>
            <div style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>{s.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================
   TRANSPARENCY BLOCK
========================= */

function TransparencyBlock() {
  return (
    <Section style={{ paddingTop: 70 }}>
      <div
        style={{
          borderRadius: 24,
          padding: 22,
          background: "radial-gradient(circle at top, rgba(255,215,0,0.10), rgba(5,5,5,1))",
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow: "0 24px 70px rgba(0,0,0,0.95)",
        }}
      >
        <h2 style={{ margin: 0, fontSize: 22, color: colors.gold, fontFamily: "Montserrat, system-ui" }}>
          Service fee vs Government fees (sin letra pequeña)
        </h2>
        <p style={{ marginTop: 10, fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
          En Sovereign pagas solo por nuestro acompañamiento profesional (service fee). Los fees oficiales
          (FMCSA, TXDMV, UCR, SoS, process agent, etc.) los pagas tú directamente en portales oficiales.
        </p>
        <p style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.75)" }}>
          Nota legal: Sovereign TruckGuard LLC no vende servicios legales. Ofrecemos asistencia administrativa y acompañamiento en procesos de cumplimiento.
        </p>
      </div>
    </Section>
  );
}

/* =========================
   INDIVIDUAL SERVICE CARD
========================= */

function IndividualCard({ bg, title, price, subtitle, onOpenModal }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 22,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.12)",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: 260,
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.88))" }} />

      <div style={{ position: "relative", zIndex: 2, padding: 8, paddingBottom: 44, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "flex end", gap: 10, alignItems: "baseline" }}>
          <div style={{ fontWeight: 950, color: colors.gold, fontSize: 15 }}>{title}</div>
          <div style={{ fontWeight: 950 }}>{price}</div>
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.82)", lineHeight: 1.5 }}>{subtitle}</div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
          <DisabledCTA label="Comprar" />
          <button
            onClick={onOpenModal}
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.20)",
              background: "rgba(0,0,0,0.22)",
              color: "rgba(255,255,255,0.90)",
              fontWeight: 900,
              cursor: "pointer",
              fontSize: 12,
            }}
          >
            Ver especificaciones
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================
   TESTIMONIALS
========================= */

function Testimonials() {
  const items = [
    {
      name: "Juan R. · Texas",
      text:
        "Yo ya sabía manejar, pero no sabía papeles. Aquí me llevaron paso a paso y me dejaron todo documentado. No me sentí solo.",
    },
    {
      name: "Luis M. · California",
      text:
        "Pagas más que con un gestor, pero duermes tranquilo. Lo mejor es el seguimiento diario y que te dicen la verdad.",
    },
    {
      name: "Carlos P. · Florida",
      text:
        "Tenía miedo de equivocarme con MC y DOT. Me corrigieron la ruta y me explicaron en español sin enredos.",
    },
  ];

  return (
    <Section id="testimonios" style={{ paddingTop: 70 }}>
      <h2 style={{ margin: 0, fontSize: 28, fontFamily: "Montserrat, system-ui" }}>Testimonios</h2>
      <p style={{ marginTop: 10, maxWidth: 860, color: "rgba(255,255,255,0.80)", lineHeight: 1.7 }}>
        Camioneros latinos que llegaron con miedo de equivocarse y salieron con orden y evidencia.
      </p>

      <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {items.map((t) => (
          <div key={t.name} style={{ borderRadius: 18, padding: 18, border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.03)" }}>
            <div style={{ color: colors.gold, fontWeight: 950 }}>{t.name}</div>
            <div style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>{t.text}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================
   FAQ
========================= */

function FAQ() {
  const items = [
    {
      q: "¿Incluye los government fees?",
      a: "No. El service fee es nuestro acompañamiento. Los fees oficiales (FMCSA, TXDMV, UCR, SoS, process agent) los pagas tú directamente en portales oficiales.",
    },
    {
      q: "¿Cuánto tarda todo el proceso?",
      a: "Depende del paquete. Intrastate suele ser 7–10 días. Interstate puede tardar 25–30 días por la activación del MC Authority.",
    },
    {
      q: "¿Qué pasa si ninguno de los 3 nombres está disponible?",
      a: "Te contactamos, definimos 3 opciones nuevas y validamos antes de someter registros. La idea es evitar rechazos y retrasos.",
    },
    {
      q: "¿Necesito CDL para crear la compañía?",
      a: "No necesariamente. Puedes ser dueño sin conducir. Si tú vas a conducir, sí necesitas CDL según la operación.",
    },
    {
      q: "¿Hablan español todo el proceso?",
      a: "Sí. Este servicio existe para que no dependas de inglés técnico ni de tramitadores.",
    },
    {
      q: "¿Después me ayudan con seguro?",
      a: "Sí. La idea es que nazcas bien con regulatorios y luego tengas seguro, tecnología y crecimiento con nosotros.",
    },
  ];

  return (
    <Section id="faq" style={{ paddingTop: 70 }}>
      <h2 style={{ margin: 0, fontSize: 28, fontFamily: "Montserrat, system-ui" }}>Preguntas frecuentes</h2>

      <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
        {items.map((it) => (
          <div key={it.q} style={{ borderRadius: 18, padding: 18, border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.03)" }}>
            <div style={{ fontWeight: 950, color: colors.gold }}>{it.q}</div>
            <div style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>{it.a}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================
   FOOTER (credibilidad)
========================= */

function Footer() {
  // Placeholder listo para conectar Google Maps luego:
  // reemplazar src por tu embed real.
  const googleMapsEmbed =
    "https://www.google.com/maps?q=Sheridan,%20Wyoming&output=embed";

  return (
    <footer style={{ marginTop: 80, borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.92)" }}>
      <Section style={{ paddingTop: 34, paddingBottom: 34 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/logo-sovereign.png" style={{ width: 36 }} />
              <div style={{ fontWeight: 950 }}>Sovereign TruckGuard LLC 🇺🇸</div>
            </div>
            <div style={{ marginTop: 10, fontSize: 13, color: "rgba(255,255,255,0.80)", lineHeight: 1.6 }}>
              Registered in the United States
              <br />
              Sheridan, Wyoming
              <br />
              Servicio premium en español para camioneros latinos.
            </div>

            <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
              Nota legal: Sovereign TruckGuard LLC no vende servicios legales. Ofrecemos asistencia administrativa y acompañamiento en procesos de cumplimiento.
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 950, color: colors.gold, marginBottom: 10 }}>Ubicación</div>
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.10)" }}>
              <iframe
                src={googleMapsEmbed}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.70)" }}>
              * Mapa placeholder. Se conectará al Google Business Profile.
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 950, color: colors.gold, marginBottom: 10 }}>Contacto</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>
              Email: <span style={{ opacity: 0.9 }}>info@sovereigntruckguard.com</span>
              <br />
              Horario: Lun–Vie
              <br />
              Atención en español
            </div>
            <div style={{ marginTop: 14 }}>
              <DisabledCTA label="Comprar (próximamente)" />
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}

/* =========================
   MODAL CONTENTS
========================= */

function SpecsBlock({ title, rows }) {
  return (
    <div style={{ marginTop: 14 }}>
      <div style={{ fontWeight: 950, color: colors.gold, marginBottom: 10 }}>{title}</div>
      <div style={{ display: "grid", gap: 10 }}>
        {rows.map((r, idx) => (
          <div
            key={idx}
            style={{
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.03)",
              padding: 12,
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <div>
              <div style={{ fontWeight: 900 }}>{r.name}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.78)", marginTop: 4, lineHeight: 1.5 }}>
                {r.desc}
              </div>
            </div>
            <div style={{ textAlign: "right", minWidth: 180 }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.70)" }}>Tiempo</div>
              <div style={{ fontWeight: 950 }}>{r.time}</div>
              <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.70)" }}>Gov fee</div>
              <div style={{ fontWeight: 950 }}>{r.govFee}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================
   PAGE
========================= */

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState(null);

  const packages = useMemo(() => {
    return {
      interstate: {
        bg: "/services/packages/interstate-bg.png",
        badge: "Interstate · Completa",
        title: "Crea tu Compañía Interstate",
        price: "USD $1,500",
        bullets: [
          "LLC + EIN",
          "USDOT + MC Authority",
          "BOC-3 + UCR",
          "TXDMV (si aplica)",
          "Seguimiento diario + evidencia",
        ],
        specs: [
          { name: "Validación 3 nombres (SoS + FMCSA)", time: "24h", govFee: "$0", desc: "Validamos disponibilidad para evitar rechazos y retrasos." },
          { name: "LLC Filing (State)", time: "2–5 días", govFee: "Varía por estado", desc: "Registro legal de la compañía en el estado seleccionado." },
          { name: "EIN (IRS)", time: "24h", govFee: "$0", desc: "IRS no cobra EIN. Nosotros guiamos y documentamos el proceso." },
          { name: "USDOT (FMCSA)", time: "24–48h", govFee: "$0", desc: "Registro USDOT correctamente alineado a tu operación." },
          { name: "MC Authority (FMCSA)", time: "21–25 días", govFee: "$300", desc: "Fee oficial FMCSA se paga directo en portal." },
          { name: "BOC-3 (Process Agent)", time: "24h", govFee: "$20–$50", desc: "Fee del process agent se paga directo al proveedor." },
          { name: "UCR", time: "Mismo día", govFee: "Según flota", desc: "Pago oficial depende de número de vehículos." },
          { name: "TXDMV (si aplica)", time: "2–7 días", govFee: "Según TXDMV", desc: "Aplica si operas intrastate en Texas o requisito específico." },
        ],
        totalTime: "25–30 días (por MC Authority)",
        afterPay: [
          "Pago confirmado",
          "Formulario post-pago obligatorio (incluye 3 nombres)",
          "Validación real + coherencia de operación",
          "Ejecución + evidencia",
          "Seguimiento diario",
          "Entrega final documentada + preparación para seguro",
        ],
      },
      intrastate: {
        bg: "/services/packages/intrastate-bg.png",
        badge: "Intrastate · Simple",
        title: "Crea tu Compañía Intrastate",
        price: "USD $900",
        bullets: [
          "LLC + EIN",
          "USDOT",
          "TXDMV (si aplica)",
          "Sin MC / BOC-3 / UCR",
          "Seguimiento diario + evidencia",
        ],
        specs: [
          { name: "Validación 3 nombres (SoS + FMCSA)", time: "24h", govFee: "$0", desc: "Validamos disponibilidad para evitar rechazos." },
          { name: "LLC Filing (State)", time: "2–5 días", govFee: "Varía por estado", desc: "Registro legal estatal." },
          { name: "EIN (IRS)", time: "24h", govFee: "$0", desc: "IRS no cobra. Nosotros guiamos y documentamos." },
          { name: "USDOT (FMCSA)", time: "24–48h", govFee: "$0", desc: "Registro USDOT correctamente alineado." },
          { name: "TXDMV (si aplica)", time: "2–7 días", govFee: "Según TXDMV", desc: "Si operas intrastate en Texas." },
        ],
        totalTime: "7–10 días (promedio)",
        afterPay: [
          "Pago confirmado",
          "Formulario post-pago obligatorio",
          "Validación real",
          "Ejecución + evidencia",
          "Seguimiento diario",
          "Entrega final documentada",
        ],
      },
    };
  }, []);

  const individualServices = useMemo(() => {
    return [
      {
        key: "ein",
        bg: "/services/individuals/ein-bg.png",
        title: "EIN Filing",
        price: "USD $99",
        subtitle: "IRS · En 24h · Sin fee gubernamental",
        specs: [
          { name: "EIN (IRS)", time: "24h", govFee: "$0", desc: "IRS no cobra. Se genera y se documenta correctamente." },
        ],
      },
      {
        key: "boi",
        bg: "/services/individuals/boi-bg.png",
        title: "BOI Filing (FinCEN)",
        price: "USD $59",
        subtitle: "Reporte de beneficiarios · 24h",
        specs: [
          { name: "BOI Filing", time: "24h", govFee: "$0", desc: "Presentación de BOI con estructura correcta y evidencia." },
        ],
      },
      {
        key: "dot",
        bg: "/services/individuals/dot-bg.png",
        title: "DOT / MCS-150",
        price: "USD $149",
        subtitle: "Registro o actualización · 24–48h",
        specs: [
          { name: "USDOT / MCS-150", time: "24–48h", govFee: "$0", desc: "Registro o update alineado a operación real." },
        ],
      },
      {
        key: "mc",
        bg: "/services/individuals/mc-bg.png",
        title: "MC Authority Assistance",
        price: "USD $249",
        subtitle: "FMCSA · preparación + guía",
        specs: [
          { name: "MC Authority (FMCSA)", time: "21–25 días", govFee: "$300", desc: "Fee oficial pagado por cliente en portal FMCSA." },
        ],
      },
      {
        key: "boc3",
        bg: "/services/individuals/boc3-bg.png",
        title: "BOC-3 Assistance",
        price: "USD $69",
        subtitle: "Process Agent · 24h",
        specs: [
          { name: "BOC-3", time: "24h", govFee: "$20–$50", desc: "Fee del process agent se paga directo al proveedor." },
        ],
      },
      {
        key: "ucr",
        bg: "/services/individuals/ucr-bg.png",
        title: "UCR Filing",
        price: "USD $89",
        subtitle: "Mismo día · según flota",
        specs: [
          { name: "UCR", time: "Mismo día", govFee: "Según flota", desc: "Pago oficial depende de cantidad de vehículos." },
        ],
      },
      {
        key: "txdmv",
        bg: "/services/individuals/txdmv-bg.png",
        title: "TXDMV Intrastate",
        price: "USD $179",
        subtitle: "Texas · 2–7 días",
        specs: [
          { name: "TXDMV", time: "2–7 días", govFee: "Según TXDMV", desc: "Requisito intrastate en Texas (si aplica)." },
        ],
      },
      {
        key: "compliance",
        bg: "/services/individuals/compliance-bg.png",
        title: "Compliance Check (diagnóstico)",
        price: "USD $75",
        subtitle: "Revisión de riesgo · 24h",
        specs: [
          { name: "Diagnóstico compliance", time: "24h", govFee: "$0", desc: "Checklist de riesgos y correcciones recomendadas." },
        ],
      },
      {
        key: "reactivation",
        bg: "/services/individuals/reactivation-bg.png",
        title: "Reactivación USDOT / MC",
        price: "USD $250",
        subtitle: "Retorno a operación · depende del caso",
        specs: [
          { name: "Reactivación", time: "48–72h", govFee: "Depende", desc: "Depende del estado de tu cuenta en FMCSA." },
        ],
      },
      {
        key: "namechange",
        bg: "/services/individuals/namechange-bg.png",
        title: "Cambio de nombre compañía",
        price: "USD $200",
        subtitle: "Actualización estatal + coherencia",
        specs: [
          { name: "Cambio de nombre", time: "2–7 días", govFee: "Varía por estado", desc: "Actualización legal según estado + coherencia con registros." },
        ],
      },
    ];
  }, []);

  function openPackageModal(pkgKey) {
    const pkg = packages[pkgKey];
    setModalTitle(pkg.title);

    setModalBody(
      <div>
        <SpecsBlock title="Tiempos + Government fees por proceso" rows={pkg.specs} />

        <div style={{ marginTop: 18, borderRadius: 16, border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.03)", padding: 14 }}>
          <div style={{ color: colors.gold, fontWeight: 950 }}>Tiempo total estimado</div>
          <div style={{ marginTop: 8, color: "rgba(255,255,255,0.85)" }}>{pkg.totalTime}</div>
        </div>

        <div style={{ marginTop: 18, borderRadius: 16, border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.03)", padding: 14 }}>
          <div style={{ color: colors.gold, fontWeight: 950 }}>Qué pasa después de pagar</div>
          <ol style={{ marginTop: 10, paddingLeft: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.85)" }}>
            {pkg.afterPay.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.70)" }}>
            Pagos en línea se habilitan en breve (Stripe). Por ahora, el botón de compra está deshabilitado.
          </div>
        </div>
      </div>
    );

    setModalOpen(true);
  }

  function openIndividualModal(service) {
    setModalTitle(`${service.title} — ${service.price}`);
    setModalBody(<SpecsBlock title="Especificaciones" rows={service.specs} />);
    setModalOpen(true);
  }

  return (
    <main style={{ background: colors.bg, color: colors.white, minHeight: "100vh" }}>
      <ServicesHeader />
      <div style={{ height: 84 }} />

      <Hero />
      <TrustBlocks />

      {/* TIENDA PRIMERO (protagonista) */}
      <Section id="packages" style={{ paddingTop: 70 }}>
        <h2 style={{ margin: 0, fontSize: 30, fontFamily: "Montserrat, system-ui" }}>
          Tienda de creación de compañía
        </h2>
        <p style={{ marginTop: 10, maxWidth: 900, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
          Este es el camino rápido y correcto para iniciar legalmente. Tú manejas. Nosotros nos encargamos del papeleo, la validación y la evidencia.
        </p>

        <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 22 }}>
          <PackageCard
            bg={packages.interstate.bg}
            badge={packages.interstate.badge}
            title={packages.interstate.title}
            price={packages.interstate.price}
            bullets={packages.interstate.bullets}
            onOpenModal={() => openPackageModal("interstate")}
          />

          <PackageCard
            bg={packages.intrastate.bg}
            badge={packages.intrastate.badge}
            title={packages.intrastate.title}
            price={packages.intrastate.price}
            bullets={packages.intrastate.bullets}
            onOpenModal={() => openPackageModal("intrastate")}
          />
        </div>

        <div style={{ marginTop: 16, fontSize: 12, color: "rgba(255,255,255,0.70)" }}>
          * Service fee Sovereign. Government fees se pagan por separado en portales oficiales.
        </div>
      </Section>

      <HowItWorks />
      <TransparencyBlock />

      {/* INDIVIDUALES */}
      <Section id="individual" style={{ paddingTop: 70 }}>
        <h2 style={{ margin: 0, fontSize: 28, fontFamily: "Montserrat, system-ui" }}>
          Servicios individuales
        </h2>
        <p style={{ marginTop: 10, maxWidth: 900, color: "rgba(255,255,255,0.80)", lineHeight: 1.7 }}>
          Si no necesitas el paquete completo, inicia por un servicio puntual. Pagos en línea se habilitan en breve (Stripe).
        </p>

        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 16 }}>
          {individualServices.map((s) => (
            <IndividualCard
              key={s.key}
              bg={s.bg}
              title={s.title}
              price={s.price}
              subtitle={s.subtitle}
              onOpenModal={() => openIndividualModal(s)}
            />
          ))}
        </div>
      </Section>

      <Testimonials />
      <FAQ />
      <Footer />

      <Modal open={modalOpen} title={modalTitle} onClose={() => setModalOpen(false)}>
        {modalBody}
      </Modal>
    </main>
  );
}
