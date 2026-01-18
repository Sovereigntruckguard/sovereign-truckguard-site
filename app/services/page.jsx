"use client";

import { useMemo, useState } from "react";
import Header from "app/components/Header.jsx";

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

const STRIPE_INTERSTATE = "https://buy.stripe.com/7sYeVffeN6IF8wLbl79Zm02";
const STRIPE_INTRASTATE = "https://buy.stripe.com/dRm7sNd6Fgjf8wLah39Zm03";

/* =========================
   HELPERS
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

function PrimaryButton({ children, href }) {
  return (
    <a
      href={href}
      style={{
        padding: "14px 28px",
        borderRadius: 999,
        background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
        color: "#000",
        fontWeight: 950,
        fontSize: 14,
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
        padding: "13px 24px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.35)",
        color: colors.white,
        fontSize: 13,
        textDecoration: "none",
        background: "rgba(0,0,0,0.35)",
      }}
    >
      {children}
    </a>
  );
}

/* =========================
   PACKAGE CARD
========================= */

function PackageCard({ bg, title, price, bullets, buyLink }) {
  return (
    <div
      style={{
        borderRadius: 26,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.18)",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: 420,
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.70)" }} />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: 26,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: 12,
        }}
      >
        <h3 style={{ margin: 0, fontSize: 26, color: colors.gold }}>
          {title}
        </h3>

        <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.6 }}>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div style={{ fontSize: 24, fontWeight: 950 }}>{price}</div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <PrimaryButton href={buyLink}>Comprar ahora</PrimaryButton>
          <SecondaryButton href="mailto:info@sovereigntruckguard.com">
            Consultar por email
          </SecondaryButton>
          <SecondaryButton href="tel:+16085576282">
            Llamar ahora
          </SecondaryButton>
        </div>

        <div style={{ fontSize: 12, opacity: 0.75 }}>
          Service fee Sovereign · Government fees se pagan aparte
        </div>
      </div>
    </div>
  );
}

/* =========================
   PAGE
========================= */

export default function ServicesPage() {
  const packages = useMemo(() => ({
    interstate: {
      bg: "/services/packages/interstate-bg.png",
      title: "Paquete Interstate Completo",
      price: "USD $1,500",
      bullets: [
        "LLC + EIN",
        "USDOT + MC Authority",
        "BOC-3 + UCR",
        "Seguimiento diario",
        "Proceso 100% documentado",
      ],
      link: STRIPE_INTERSTATE,
    },
    intrastate: {
      bg: "/services/packages/intrastate-bg.png",
      title: "Paquete Intrastate",
      price: "USD $900",
      bullets: [
        "LLC + EIN",
        "USDOT",
        "TXDMV (si aplica)",
        "Sin MC / BOC-3 / UCR",
        "Seguimiento diario",
      ],
      link: STRIPE_INTRASTATE,
    },
  }), []);

  return (
    <main style={{ background: colors.bg, color: colors.white }}>
      <Header />
      <div style={{ height: 90 }} />

      {/* HERO TRANSACCIONAL */}
      <Section style={{ paddingTop: 40 }}>
        <h1 style={{ fontSize: 38, marginBottom: 12 }}>
          Crea tu <span style={{ color: colors.gold }}>trucking company en USA</span><br />
          sin errores ni bloqueos
        </h1>

        <p style={{ maxWidth: 880, fontSize: 16, lineHeight: 1.6, opacity: 0.9 }}>
          Un error en DOT o MC puede detener tu operación y costarte miles.
          Aquí nos encargamos del proceso completo, con evidencia y responsable real.
        </p>
      </Section>

      {/* PAQUETES */}
      <Section style={{ paddingTop: 40 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 22,
          }}
        >
          <PackageCard {...packages.interstate} buyLink={packages.interstate.link} />
          <PackageCard {...packages.intrastate} buyLink={packages.intrastate.link} />
        </div>
      </Section>

      {/* PRUEBA SOCIAL */}
      <Section style={{ paddingTop: 70 }}>
        <h2>Camioneros reales, procesos reales</h2>
        <p style={{ maxWidth: 800, opacity: 0.85 }}>
          “Llegué con miedo de equivocarme. Hoy tengo mi compañía activa y todo documentado.”
          <br />— Juan R., Texas
        </p>
      </Section>

      {/* CTA FINAL */}
      <Section style={{ paddingTop: 60, paddingBottom: 80 }}>
        <div
          style={{
            borderRadius: 24,
            padding: 26,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          <h3 style={{ color: colors.gold }}>
            ¿Listo para hacerlo bien desde el inicio?
          </h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
            <PrimaryButton href={STRIPE_INTERSTATE}>Comprar paquete</PrimaryButton>
            <SecondaryButton href="mailto:info@sovereigntruckguard.com">
              Escribir por email
            </SecondaryButton>
            <SecondaryButton href="tel:+16085576282">
              Llamar ahora
            </SecondaryButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
