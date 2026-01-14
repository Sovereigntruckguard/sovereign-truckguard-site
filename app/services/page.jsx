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

// =========================
// STRIPE LINKS (SOLO PAQUETES)
// =========================
const STRIPE_INTERSTATE =
  "https://buy.stripe.com/7sYeVffeN6IF8wLbl79Zm02";
const STRIPE_INTRASTATE =
  "https://buy.stripe.com/dRm7sNd6Fgjf8wLah39Zm03";

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
        border: "1px solid rgba(255,255,255,0.2)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.85)",
        background: "rgba(0,0,0,0.35)",
      }}
    >
      {children}
    </span>
  );
}

/* =========================
   HERO (FULL VIDEO)
========================= */

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
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

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0.45), rgba(0,0,0,0.25))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Section>
          <div style={{ maxWidth: 760 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: colors.gold,
                margin: 0,
              }}
            >
              Servicios regulatorios premium
            </p>

            <h1
              style={{
                margin: "14px 0",
                fontSize: 48,
                lineHeight: 1.1,
              }}
            >
              Servicio para crear tu{" "}
              <span style={{ color: colors.gold }}>
                trucking company en USA
              </span>
            </h1>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                maxWidth: 640,
              }}
            >
              DOT · MC · LLC · EIN · UCR — lo hacemos bien desde el inicio,
              en español, sin errores ni letra pequeña.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <a
                href="#packages"
                style={{
                  padding: "14px 34px",
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
                  padding: "14px 34px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.4)",
                  color: colors.white,
                  textDecoration: "none",
                }}
              >
                Servicios individuales
              </a>
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}

/* =========================
   PACKAGE CARD
========================= */

function PackageCard({ bg, badge, title, bullets, price, buyLink, onInfo }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 28,
        overflow: "hidden",
        minHeight: 460,
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 30px 90px rgba(0,0,0,0.95)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.92))",
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
          gap: 10,
        }}
      >
        <Pill>{badge}</Pill>

        <h3 style={{ color: colors.gold, fontSize: 26, margin: 0 }}>
          {title}
        </h3>

        <ul style={{ paddingLeft: 18, fontSize: 13 }}>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div style={{ fontSize: 22, fontWeight: 900 }}>{price}</div>

        <div style={{ display: "flex", gap: 10 }}>
          <a
            href={buyLink}
            style={{
              padding: "12px 26px",
              borderRadius: 999,
              background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
              color: "#000",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Comprar
          </a>

          <button
            onClick={onInfo}
            style={{
              padding: "12px 26px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.4)",
              background: "rgba(0,0,0,0.35)",
              color: colors.white,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Ver cómo funciona
          </button>
        </div>

        <div style={{ fontSize: 12, opacity: 0.7 }}>
          Service fee Sovereign · Government fees se pagan aparte
        </div>
      </div>
    </div>
  );
}

/* =========================
   SERVICES PAGE
========================= */

export default function ServicesPage() {
  const packages = useMemo(
    () => [
      {
        badge: "Interstate · Completa",
        title: "Servicio Interstate",
        price: "USD $1,500",
        bullets: [
          "LLC + EIN",
          "USDOT + MC Authority",
          "BOC-3 + UCR",
          "Seguimiento diario",
        ],
        bg: "/services/packages/interstate-bg.png",
        buy: STRIPE_INTERSTATE,
      },
      {
        badge: "Intrastate · Simple",
        title: "Servicio Intrastate",
        price: "USD $900",
        bullets: [
          "LLC + EIN",
          "USDOT",
          "TXDMV (si aplica)",
          "Seguimiento diario",
        ],
        bg: "/services/packages/intrastate-bg.png",
        buy: STRIPE_INTRASTATE,
      },
    ],
    []
  );

  return (
    <main style={{ background: colors.bg, color: colors.white }}>
      <Header />
      <Hero />

      <Section id="packages" style={{ paddingTop: 80 }}>
        <h2 style={{ fontSize: 32 }}>Tienda de creación de compañía</h2>

        <div
          style={{
            marginTop: 30,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))",
            gap: 24,
          }}
        >
          {packages.map((p) => (
            <PackageCard
              key={p.title}
              {...p}
              buyLink={p.buy}
              onInfo={() => window.alert("Modal informativo aquí")}
            />
          ))}
        </div>
      </Section>

      {/* CATÁLOGO INDIVIDUAL */}
      <Section id="individual" style={{ paddingTop: 90 }}>
        <h2 style={{ fontSize: 30 }}>Servicios individuales</h2>
        <p style={{ maxWidth: 760, opacity: 0.85 }}>
          Catálogo informativo. Pagos se habilitan más adelante. Aquí ves
          qué existe, tiempos y costos reales.
        </p>
      </Section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: 100,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "40px 20px",
        }}
      >
        <Section>
          <div style={{ display: "grid", gap: 20 }}>
            <div>
              <strong>Sovereign TruckGuard LLC</strong>
              <br />
              Registered in the United States
              <br />
              30 N Gould St, Ste N
              <br />
              Sheridan, WY 82801
              <br />
              Lun–Vie · 9:00 AM – 6:00 PM CST
              <br />
              info@sovereigntruckguard.com
            </div>
          </div>
        </Section>
      </footer>
    </main>
  );
}
