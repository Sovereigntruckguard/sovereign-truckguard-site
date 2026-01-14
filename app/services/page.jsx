"use client";

import { useMemo } from "react";
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

// STRIPE LINKS (PAQUETES)
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

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      style={{
        padding: "12px 28px",
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

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      style={{
        padding: "11px 22px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.35)",
        background: "rgba(0,0,0,0.35)",
        color: colors.white,
        fontSize: 12,
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

/* =========================
   HERO (VIDEO OK)
========================= */

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        marginTop: 80,
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

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0.45))",
        }}
      />

      <Section
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: 120,
          paddingBottom: 80,
        }}
      >
        <h1 style={{ fontSize: 46, lineHeight: 1.1 }}>
          Servicio para crear tu{" "}
          <span style={{ color: colors.gold }}>
            trucking company en USA
          </span>
          <br />
          DOT · MC · LLC · EIN · UCR
        </h1>

        <p
          style={{
            maxWidth: 720,
            fontSize: 16,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Servicio profesional en español para camioneros latinos que
          necesitan crear su compañía legalmente, sin errores ni
          retrasos con FMCSA.
        </p>

        <div style={{ marginTop: 26, display: "flex", gap: 12 }}>
          <PrimaryButton href="#packages">
            Ver paquetes
          </PrimaryButton>
          <SecondaryButton href="#individual">
            Servicios individuales
          </SecondaryButton>
        </div>
      </Section>
    </section>
  );
}

/* =========================
   PACKAGE CARD
========================= */

function PackageCard({ bg, title, price, bullets, buyLink }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 24,
        overflow: "hidden",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: 420,
        border: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: 24,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: 10,
        }}
      >
        <h3 style={{ color: colors.gold }}>{title}</h3>

        <ul style={{ fontSize: 13, lineHeight: 1.6 }}>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <strong style={{ fontSize: 22 }}>{price}</strong>

        <PrimaryButton href={buyLink}>Comprar</PrimaryButton>
      </div>
    </div>
  );
}

/* =========================
   PACKAGES
========================= */

function Packages() {
  return (
    <Section id="packages" style={{ paddingTop: 80 }}>
      <h2>Tienda de creación de compañía</h2>

      <div
        style={{
          marginTop: 30,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 24,
        }}
      >
        <PackageCard
          bg="/services/packages/interstate-bg.png"
          title="Interstate · Completa"
          price="USD $1,500"
          bullets={[
            "LLC + EIN",
            "USDOT + MC Authority",
            "BOC-3 + UCR",
            "Seguimiento diario",
          ]}
          buyLink={STRIPE_INTERSTATE}
        />

        <PackageCard
          bg="/services/packages/intrastate-bg.png"
          title="Intrastate · Simple"
          price="USD $900"
          bullets={[
            "LLC + EIN",
            "USDOT",
            "TXDMV (si aplica)",
            "Seguimiento diario",
          ]}
          buyLink={STRIPE_INTRASTATE}
        />
      </div>
    </Section>
  );
}

/* =========================
   INDIVIDUAL SERVICES
========================= */

function IndividualServices() {
  const services = useMemo(
    () => [
      {
        title: "EIN Filing",
        price: "USD $99",
        bg: "/services/individuals/ein-bg.png",
      },
      {
        title: "DOT / MCS-150",
        price: "USD $149",
        bg: "/services/individuals/dot-bg.png",
      },
      {
        title: "MC Authority",
        price: "USD $249",
        bg: "/services/individuals/mc-bg.png",
      },
      {
        title: "UCR Filing",
        price: "USD $89",
        bg: "/services/individuals/ucr-bg.png",
      },
    ],
    []
  );

  return (
    <Section id="individual" style={{ paddingTop: 90 }}>
      <h2>Servicios individuales</h2>

      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 18,
        }}
      >
        {services.map((s) => (
          <div
            key={s.title}
            style={{
              borderRadius: 20,
              backgroundImage: `url(${s.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: 260,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.65)",
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: 18,
              }}
            >
              <strong style={{ color: colors.gold }}>
                {s.title}
              </strong>
              <div>{s.price}</div>
              <div style={{ marginTop: 10, fontSize: 13 }}>
                Ver especificaciones →
              </div>
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
    <footer
      style={{
        marginTop: 90,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Section
        style={{
          padding: "40px 0",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        <div>
          <strong>Sovereign TruckGuard LLC</strong>
          <br />
          30 N Gould St, Ste N
          <br />
          Sheridan, WY 82801
          <br />
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
