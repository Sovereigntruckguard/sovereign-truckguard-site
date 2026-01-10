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
   STRIPE LINKS (LIVE)
========================= */

const STRIPE_LINKS = {
  intrastate: "https://buy.stripe.com/dRm7sNd6Fgjf8wLah39Zm03",
  interstate: "https://buy.stripe.com/7sYeVffeN6IF8wLbl79Zm02",
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
      target="_self"
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
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: colors.gold, fontWeight: 900 }}>{title}</div>
          <button onClick={onClose} style={{ color: "white" }}>
            Cerrar ✕
          </button>
        </div>

        <div style={{ padding: 18 }}>{children}</div>
      </div>
    </div>
  );
}

/* =========================
   HEADER
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
        }}
      >
        <a href="/" style={{ color: colors.white, textDecoration: "none" }}>
          Sovereign TruckGuard LLC
        </a>

        {/* 🔥 CTA PREMIUM */}
        <PrimaryButton href={STRIPE_LINKS.interstate}>
          Crear mi compañía
        </PrimaryButton>
      </div>
    </header>
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
  onOpenModal,
}) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 26,
        padding: 26,
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      <Pill>{badge}</Pill>

      <h3 style={{ color: colors.gold }}>{title}</h3>

      <ul>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div style={{ fontSize: 22, fontWeight: 900 }}>{price}</div>

      <div style={{ display: "flex", gap: 10 }}>
        <a
          href={buyLink}
          target="_self"
          style={{
            padding: "10px 18px",
            borderRadius: 999,
            background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
            color: "#000",
            fontWeight: 900,
            textDecoration: "none",
          }}
        >
          Comprar
        </a>

        <button onClick={onOpenModal}>Ver cómo funciona</button>
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

  const packages = useMemo(
    () => ({
      interstate: {
        bg: "/services/packages/interstate-bg.png",
        badge: "Interstate · Completa",
        title: "Crea tu Compañía Interstate",
        price: "USD $1,500",
        bullets: [
          "LLC + EIN",
          "USDOT + MC Authority",
          "BOC-3 + UCR",
          "Seguimiento diario + evidencia",
        ],
        link: STRIPE_LINKS.interstate,
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
          "Seguimiento diario + evidencia",
        ],
        link: STRIPE_LINKS.intrastate,
      },
    }),
    []
  );

  return (
    <main style={{ background: colors.bg, color: colors.white }}>
      <ServicesHeader />
      <div style={{ height: 84 }} />

      <Section id="packages" style={{ paddingTop: 70 }}>
        <h2>Tienda de creación de compañía</h2>

        <div
          style={{
            display: "grid",
            gap: 22,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          <PackageCard
            {...packages.interstate}
            buyLink={packages.interstate.link}
            onOpenModal={() => {
              setModalTitle(packages.interstate.title);
              setModalOpen(true);
            }}
          />

          <PackageCard
            {...packages.intrastate}
            buyLink={packages.intrastate.link}
            onOpenModal={() => {
              setModalTitle(packages.intrastate.title);
              setModalOpen(true);
            }}
          />
        </div>
      </Section>

      <Modal
        open={modalOpen}
        title={modalTitle}
        onClose={() => setModalOpen(false)}
      >
        Detalles completos se recogen en el formulario post-pago.
      </Modal>
    </main>
  );
}
