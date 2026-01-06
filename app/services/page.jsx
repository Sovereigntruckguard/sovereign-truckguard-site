"use client";

import { useState } from "react";

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
   HEADER
========================= */

function ServicesHeader() {
  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      background: "rgba(0,0,0,0.92)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }}>
      <div style={{
        maxWidth: layout.maxWidth,
        margin: "0 auto",
        padding: `10px ${layout.sidePadding}px`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <a href="/" style={{ display: "flex", gap: 12, alignItems: "center", textDecoration: "none", color: "white" }}>
          <img src="/logo-sovereign.png" style={{ width: 36 }} />
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Sovereign TruckGuard LLC
            </div>
            <div style={{ fontSize: 11, opacity: 0.7 }}>
              Regulatory & Business Services
            </div>
          </div>
        </a>

        <a href="#packages" style={{
          padding: "8px 18px",
          borderRadius: 999,
          background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
          color: "#000",
          fontWeight: 700,
          textDecoration: "none"
        }}>
          Crear mi compañía
        </a>
      </div>
    </header>
  );
}

/* =========================
   HERO
========================= */

function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "90vh", overflow: "hidden" }}>
      <video
        src="/services/hero/hero-services.mp4"
        autoPlay muted loop playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0.35))" }} />

      <div style={{ position: "relative", zIndex: 2, minHeight: "90vh", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: layout.maxWidth, margin: "0 auto", padding: `0 ${layout.sidePadding}px` }}>
          <h1 style={{ fontSize: 44, maxWidth: 720 }}>
            Crea tu compañía trucking en USA <span style={{ color: colors.gold }}>sin errores</span>
          </h1>
          <p style={{ marginTop: 14, fontSize: 17, maxWidth: 620, opacity: 0.9 }}>
            EIN · LLC · DOT · MC · UCR · TXDMV  
            Proceso legal, documentado y acompañado en español.
          </p>

          <div style={{ marginTop: 22, display: "flex", gap: 12 }}>
            <a href="#packages" style={{
              padding: "12px 26px",
              borderRadius: 999,
              background: `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
              color: "#000",
              fontWeight: 800,
              textDecoration: "none"
            }}>
              Ver paquetes
            </a>
            <a href="#individual" style={{
              padding: "11px 22px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.4)",
              color: "white",
              textDecoration: "none"
            }}>
              Servicios individuales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   MODAL
========================= */

function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.8)",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }}>
      <div style={{
        maxWidth: 720,
        width: "100%",
        background: "#0b0b0b",
        borderRadius: 20,
        padding: 24,
        border: "1px solid rgba(255,255,255,0.15)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <h3 style={{ color: colors.gold }}>{title}</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "white" }}>✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}

/* =========================
   PACKAGE CARD
========================= */

function PackageCard({ bg, title, price, bullets, modalContent }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{
        position: "relative",
        minHeight: 420,
        borderRadius: 24,
        overflow: "hidden",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid rgba(255,255,255,0.18)"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
        <div style={{ position: "relative", padding: 26, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%" }}>
          <h3 style={{ color: colors.gold, fontSize: 24 }}>{title}</h3>
          <ul style={{ paddingLeft: 18, fontSize: 13 }}>
            {bullets.map(b => <li key={b}>{b}</li>)}
          </ul>
          <div style={{ fontSize: 20, fontWeight: 800 }}>{price}</div>
          <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
            <button disabled style={{ opacity: 0.6, padding: "10px 18px", borderRadius: 999 }}>Comprar (próximamente)</button>
            <button onClick={() => setOpen(true)} style={{ padding: "10px 18px", borderRadius: 999 }}>Ver cómo funciona</button>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        {modalContent}
      </Modal>
    </>
  );
}

/* =========================
   PAGE
========================= */

export default function ServicesPage() {
  return (
    <main style={{ background: colors.bg, color: "white" }}>
      <ServicesHeader />
      <div style={{ height: 84 }} />
      <Hero />

      {/* PACKAGES */}
      <section id="packages" style={{ maxWidth: layout.maxWidth, margin: "0 auto", padding: "80px 20px" }}>
        <h2>Paquetes de creación de compañía</h2>

        <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))" }}>
          <PackageCard
            bg="/services/packages/interstate-bg.png"
            title="Crea tu Compañía Interstate"
            price="USD $1,500"
            bullets={[
              "LLC + EIN",
              "USDOT + MC Authority",
              "BOC-3 + UCR",
              "TXDMV (si aplica)",
              "Seguimiento diario"
            ]}
            modalContent={
              <p>
                Tiempo total estimado: 25–30 días.<br />
                Government fees: MC $300, BOC-3 $20–50, UCR según flota.
              </p>
            }
          />

          <PackageCard
            bg="/services/packages/intrastate-bg.png"
            title="Crea tu Compañía Intrastate"
            price="USD $900"
            bullets={[
              "LLC + EIN",
              "USDOT",
              "TXDMV (si aplica)",
              "Seguimiento diario"
            ]}
            modalContent={
              <p>
                Tiempo estimado: 7–10 días.<br />
                No incluye MC, BOC-3 ni UCR.
              </p>
            }
          />
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={{ maxWidth: layout.maxWidth, margin: "0 auto", padding: "60px 20px" }}>
        <h2>Lo que dicen camioneros como tú</h2>
        <p style={{ opacity: 0.85 }}>
          “Yo ya sabía manejar, pero no sabía papeles. Aquí me llevaron paso a paso y no me metieron en problemas.” — Juan R., TX
        </p>
        <p style={{ opacity: 0.85 }}>
          “Pagas más que con un gestor, pero duermes tranquilo.” — Luis M., CA
        </p>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: layout.maxWidth, margin: "0 auto", padding: "60px 20px" }}>
        <h2>Preguntas frecuentes</h2>
        <ul>
          <li>¿Incluye government fees? — No, se pagan aparte.</li>
          <li>¿Hablan español? — Todo el proceso.</li>
          <li>¿Cuánto tarda? — Depende del paquete.</li>
          <li>¿Necesito CDL? — No para ser dueño.</li>
        </ul>
      </section>

      {/* LEGITIMIDAD */}
      <section style={{ maxWidth: layout.maxWidth, margin: "0 auto", padding: "40px 20px", opacity: 0.8 }}>
        Sovereign TruckGuard LLC · Sheridan, Wyoming · Empresa registrada en USA
      </section>
    </main>
  );
}
