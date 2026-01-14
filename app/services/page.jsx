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

// STRIPE LINKS (PAQUETES)
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
        padding: "12px 26px",
        borderRadius: 999,
        background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
        color: "#000",
        fontWeight: 900,
        fontSize: 13,
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

function OutlineButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "11px 22px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.35)",
        background: "rgba(0,0,0,0.35)",
        color: colors.white,
        fontSize: 12,
        fontWeight: 800,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

/* =========================
   HEADER
========================= */

function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(0,0,0,0.92)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Section style={{ padding: "10px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 900 }}>
          Sovereign TruckGuard LLC
        </a>

        <PrimaryButton href={STRIPE_INTERSTATE}>
          Crear mi compañía
        </PrimaryButton>
      </Section>
    </header>
  );
}

/* =========================
   HERO
========================= */

function Hero() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 80 }}>
      <Section>
        <h1 style={{ fontSize: 42, lineHeight: 1.1 }}>
          Crear tu <span style={{ color: colors.gold }}>trucking company en USA</span><br />
          DOT · MC · LLC · EIN · UCR
        </h1>

        <p style={{ maxWidth: 760, fontSize: 16, lineHeight: 1.7, marginTop: 16 }}>
          Servicio profesional en español para camioneros latinos que necesitan
          crear su compañía legalmente sin errores, retrasos ni riesgos con FMCSA.
        </p>

        <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
          <PrimaryButton href="#packages">Ver paquetes</PrimaryButton>
          <a href="#individual" style={{ color: "#fff", fontSize: 13 }}>
            Servicios individuales
          </a>
        </div>
      </Section>
    </section>
  );
}

/* =========================
   PACKAGES
========================= */

function Packages() {
  return (
    <Section id="packages" style={{ paddingTop: 60 }}>
      <h2>Tienda de creación de compañía</h2>
      <p style={{ maxWidth: 820 }}>
        El camino correcto para iniciar legalmente. Tú manejas. Nosotros nos encargamos del papeleo,
        la validación y la evidencia.
      </p>

      <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
        <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: 24 }}>
          <h3 style={{ color: colors.gold }}>Interstate · Completa</h3>
          <ul>
            <li>LLC + EIN</li>
            <li>USDOT + MC Authority</li>
            <li>BOC-3 + UCR</li>
            <li>Seguimiento diario</li>
          </ul>
          <strong>USD $1,500</strong>
          <div style={{ marginTop: 16 }}>
            <PrimaryButton href={STRIPE_INTERSTATE}>Comprar</PrimaryButton>
          </div>
        </div>

        <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: 24 }}>
          <h3 style={{ color: colors.gold }}>Intrastate · Simple</h3>
          <ul>
            <li>LLC + EIN</li>
            <li>USDOT</li>
            <li>TXDMV (si aplica)</li>
            <li>Seguimiento diario</li>
          </ul>
          <strong>USD $900</strong>
          <div style={{ marginTop: 16 }}>
            <PrimaryButton href={STRIPE_INTRASTATE}>Comprar</PrimaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* =========================
   INDIVIDUAL SERVICES (LEADS)
========================= */

function IndividualServices() {
  const services = [
    { title: "EIN Filing", price: "USD $99" },
    { title: "DOT / MCS-150", price: "USD $149" },
    { title: "MC Authority", price: "USD $249" },
    { title: "BOC-3", price: "USD $69" },
    { title: "UCR Filing", price: "USD $89" },
  ];

  return (
    <Section id="individual" style={{ paddingTop: 80 }}>
      <h2>Servicios individuales</h2>
      <p style={{ maxWidth: 820 }}>
        ¿Solo necesitas un trámite puntual? Solicítalo y te guiamos paso a paso.
      </p>

      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {services.map((s) => (
          <div key={s.title} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 18, padding: 18 }}>
            <strong style={{ color: colors.gold }}>{s.title}</strong>
            <div>{s.price}</div>

            <div style={{ marginTop: 12 }}>
              <a
                href="/contact"
                style={{ color: colors.gold, fontSize: 13 }}
              >
                Solicitar este servicio →
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================
   FOOTER
========================= */

function Footer() {
  return (
    <footer style={{ marginTop: 80, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <Section style={{ padding: "40px 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
        <div>
          <strong>Sovereign TruckGuard LLC</strong><br />
          30 N Gould St, Ste N<br />
          Sheridan, WY 82801<br />
          Servicio premium en español
        </div>

        <div>
          <strong>Contacto</strong><br />
          info@sovereigntruckguard.com<br />
          Lun–Vie · 9:00 AM – 6:00 PM CST
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps?q=30%20N%20Gould%20St%20Ste%20N,%20Sheridan,%20WY%2082801&output=embed"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: 14 }}
            loading="lazy"
          />
        </div>
      </Section>
    </footer>
  );
}

/* =========================
   PAGE
========================= */

export default function ServicesPage() {
  return (
    <main style={{ background: colors.bg, color: colors.white }}>
      <Header />
      <Hero />
      <Packages />
      <IndividualServices />
      <Footer />
    </main>
  );
}
