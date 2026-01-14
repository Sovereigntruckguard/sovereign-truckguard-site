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
// STRIPE LINKS (PAQUETES)
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
        border: "1px solid rgba(255,255,255,0.18)",
        background: "rgba(0,0,0,0.35)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.9)",
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
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "11px 22px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.35)",
        background: "rgba(0,0,0,0.35)",
        color: "#fff",
        fontSize: 12,
        fontWeight: 800,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {children}
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
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "min(900px,100%)",
          maxHeight: "85vh",
          overflow: "auto",
          background: "#0b0b0b",
          borderRadius: 22,
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div
          style={{
            padding: 16,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <strong style={{ color: colors.gold }}>{title}</strong>
          <button onClick={onClose} style={{ color: "#fff" }}>
            ✕
          </button>
        </div>
        <div style={{ padding: 18 }}>{children}</div>
      </div>
    </div>
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
        overflow: "hidden",
      }}
    >
      <video
        src="/services/hero/hero-services.mp4"
        autoPlay
        muted
        loop
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
            "linear-gradient(90deg, rgba(0,0,0,0.9), rgba(0,0,0,0.45))",
        }}
      />
      <Section style={{ paddingTop: 120, position: "relative" }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.1 }}>
          Servicio para crear tu{" "}
          <span style={{ color: colors.gold }}>
            trucking company en USA
          </span>
        </h1>
        <p style={{ maxWidth: 700, fontSize: 16 }}>
          DOT · MC · LLC · EIN · UCR — lo hacemos bien desde el inicio,
          sin errores ni letra pequeña.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <PrimaryButton href="#packages">Ver paquetes</PrimaryButton>
          <PrimaryButton href="#individual">
            Servicios individuales
          </PrimaryButton>
        </div>
      </Section>
    </section>
  );
}

/* =========================
   PACKAGE CARD
========================= */

function PackageCard({
  bg,
  badge,
  title,
  price,
  bullets,
  buyLink,
  onExplain,
}) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 26,
        overflow: "hidden",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: 460,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.9))",
        }}
      />
      <div style={{ position: "relative", padding: 26 }}>
        <Pill>{badge}</Pill>
        <h3 style={{ color: colors.gold, marginTop: 10 }}>{title}</h3>
        <ul>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <strong style={{ fontSize: 22 }}>{price}</strong>
        <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
          <PrimaryButton href={buyLink}>Comprar</PrimaryButton>
          <SecondaryButton onClick={onExplain}>
            Ver cómo funciona
          </SecondaryButton>
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
        marginTop: 80,
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Section style={{ padding: "40px 0" }}>
        <div style={{ display: "grid", gap: 20 }}>
          <div>
            <strong>Sovereign TruckGuard LLC</strong>
            <p>
              Registered in the United States
              <br />
              30 N Gould St, Ste N
              <br />
              Sheridan, WY 82801
              <br />
              Lun–Vie · 9:00 AM – 6:00 PM CST
              <br />
              info@sovereigntruckguard.com
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps?q=30%20N%20Gould%20St%20Ste%20N,%20Sheridan,%20WY%2082801&output=embed"
            width="100%"
            height="220"
            style={{ borderRadius: 14 }}
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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalBody, setModalBody] = useState(null);

  return (
    <main style={{ background: colors.bg, color: "#fff" }}>
      <Header />
      <Hero />

      <Section id="packages" style={{ paddingTop: 70 }}>
        <h2>Tienda de creación de compañía</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 22,
          }}
        >
          <PackageCard
            bg="/services/packages/interstate-bg.png"
            badge="Interstate · Completa"
            title="Servicio Interstate"
            price="USD $1,500"
            bullets={[
              "LLC + EIN",
              "USDOT + MC",
              "BOC-3 + UCR",
              "Seguimiento diario",
            ]}
            buyLink={STRIPE_INTERSTATE}
            onExplain={() => {
              setModalBody(
                <p>
                  Interstate tarda aprox. 25–30 días por activación
                  de MC Authority. Fees oficiales se pagan directo.
                </p>
              );
              setModalOpen(true);
            }}
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
            buyLink={STRIPE_INTRASTATE}
            onExplain={() => {
              setModalBody(
                <p>
                  Intrastate tarda aprox. 7–10 días. No incluye MC,
                  BOC-3 ni UCR.
                </p>
              );
              setModalOpen(true);
            }}
          />
        </div>
      </Section>

      <Footer />

      <Modal
        open={modalOpen}
        title="Cómo funciona"
        onClose={() => setModalOpen(false)}
      >
        {modalBody}
      </Modal>
    </main>
  );
}
