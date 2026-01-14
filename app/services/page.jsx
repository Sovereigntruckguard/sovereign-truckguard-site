"use client";

import { useMemo, useState } from "react";
import Header from "../components/Header.jsx";

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

// STRIPE LINKS (PRODUCCIÓN)
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

function Pill({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        padding: "6px 12px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.25)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.9)",
        background: "rgba(0,0,0,0.35)",
      }}
    >
      {children}
    </span>
  );
}

/* =========================
   HERO
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
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0.45), rgba(0,0,0,0.15))",
        }}
      />

      <Section style={{ position: "relative", zIndex: 2, paddingTop: 140 }}>
        <div style={{ maxWidth: 760 }}>
          <p
            style={{
              color: colors.gold,
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Servicios regulatorios premium
          </p>

          <h1 style={{ fontSize: 48, lineHeight: 1.1 }}>
            Servicio para crear tu{" "}
            <span style={{ color: colors.gold }}>trucking company en USA</span>
          </h1>

          <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.7 }}>
            DOT · MC · LLC · EIN · UCR — lo hacemos bien desde el inicio, sin errores ni letra pequeña.
          </p>

          <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
            <a
              href="#packages"
              style={{
                padding: "12px 26px",
                borderRadius: 999,
                background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
                color: "#000",
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Ver paquetes
            </a>

            <a
              href="#individual"
              style={{
                padding: "12px 26px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Servicios individuales
            </a>
          </div>
        </div>
      </Section>
    </section>
  );
}

/* =========================
   PACKAGE CARD
========================= */

function PackageCard({ bg, badge, title, price, bullets, stripe }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 26,
        overflow: "hidden",
        minHeight: 480,
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 30px 90px rgba(0,0,0,0.95)",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.9))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: 28,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: 12,
        }}
      >
        <Pill>{badge}</Pill>

        <h3 style={{ fontSize: 28, color: colors.gold }}>{title}</h3>

        <ul>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div style={{ fontSize: 24, fontWeight: 900 }}>{price}</div>

        <div style={{ display: "flex", gap: 10 }}>
          <a
            href={stripe}
            style={{
              padding: "12px 24px",
              borderRadius: 999,
              background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
              color: "#000",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Comprar
          </a>

          <a
            href="#how"
            style={{
              padding: "12px 24px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Ver cómo funciona
          </a>
        </div>
      </div>
    </div>
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

      <Section id="packages" style={{ paddingTop: 80 }}>
        <h2>Tienda de creación de compañía</h2>

        <div
          style={{
            marginTop: 24,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: 24,
          }}
        >
          <PackageCard
            bg="/services/packages/interstate-bg.png"
            badge="Interstate · Completa"
            title="Servicio Interstate"
            price="USD $1,500"
            bullets={[
              "LLC + EIN",
              "USDOT + MC Authority",
              "BOC-3 + UCR",
              "Seguimiento diario",
            ]}
            stripe={STRIPE_INTERSTATE}
          />

          <PackageCard
            bg="/services/packages/intrastate-bg.png"
            badge="Intrastate · Simple"
            title="Servicio Intrastate"
            price="USD $900"
            bullets={[
              "LLC + EIN",
              "USDOT",
              "TXDMV (si aplica)",
              "Seguimiento diario",
            ]}
            stripe={STRIPE_INTRASTATE}
          />
        </div>
      </Section>

      {/* Footer */}
      <footer style={{ marginTop: 100, padding: 40, borderTop: "1px solid #222" }}>
        <div>
          <strong>Sovereign TruckGuard LLC</strong><br />
          Registered in the United States<br />
          30 N Gould St, Ste N<br />
          Sheridan, WY 82801<br />
          Lun–Vie · 9:00 AM – 6:00 PM CST<br />
          info@sovereigntruckguard.com
        </div>

        <iframe
          src="https://www.google.com/maps?q=30%20N%20Gould%20St%20Ste%20N,%20Sheridan,%20WY%2082801&output=embed"
          width="100%"
          height="220"
          style={{ border: 0, marginTop: 20 }}
          loading="lazy"
        />
      </footer>
    </main>
  );
}
