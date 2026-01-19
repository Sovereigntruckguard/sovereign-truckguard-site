"use client";

import { useMemo } from "react";
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

const STRIPE_ENTRY =
  "https://buy.stripe.com/5kQ3cx4A97MJ28n1Kx9Zm04";
const STRIPE_INTERSTATE =
  "https://buy.stripe.com/7sYeVffeN6IF8wLbl79Zm02";
const STRIPE_INTRASTATE =
  "https://buy.stripe.com/dRm7sNd6Fgjf8wLah39Zm03";

/* =========================
   HELPERS
========================= */

function Section({ children, style }) {
  return (
    <section
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
          <PrimaryButton href={buyLink}>Comprar paquete</PrimaryButton>
          <SecondaryButton href={STRIPE_ENTRY}>
            ¿Dudas? Diagnóstico $49
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
   FOOTER
========================= */

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.12)",
        padding: "40px 0",
        marginTop: 80,
        background: "#050505",
      }}
    >
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 30,
          }}
        >
          <div>
            <strong>Sovereign TruckGuard LLC</strong>
            <p style={{ fontSize: 13, opacity: 0.8 }}>
              30 N Gould St Ste N<br />
              Sheridan, WY 82801 – USA<br />
              Tel: +1 (608) 557-6282<br />
              Email: info@sovereigntruckguard.com
            </p>
            <p style={{ fontSize: 11, opacity: 0.6 }}>
              No ofrecemos servicios legales. Asistencia administrativa y operativa.
            </p>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps?q=30+N+Gould+St+Ste+N+Sheridan+WY+82801&output=embed"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: 12 }}
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </footer>
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
        "Proceso documentado",
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

      {/* HERO */}
      <Section>
        <h1 style={{ fontSize: 38 }}>
          Crea tu <span style={{ color: colors.gold }}>trucking company en USA</span>
        </h1>
        <p style={{ maxWidth: 880, fontSize: 16, opacity: 0.9 }}>
          Antes de pagar $900 o $1500, valida tu caso y evita errores costosos.
        </p>

        <div style={{ marginTop: 20 }}>
          <PrimaryButton href={STRIPE_ENTRY}>
            Iniciar diagnóstico por $49
          </PrimaryButton>
        </div>
      </Section>

      {/* PAQUETES */}
      <Section style={{ paddingTop: 60 }}>
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

      <Footer />
    </main>
  );
}
