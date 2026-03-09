"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#040816",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "16px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="/logo-sovereign-icon.png"
            style={{ width: 42 }}
          />

          <div>
            <div style={{ fontWeight: 800, fontSize: 14 }}>
              Sovereign TruckGuard LLC
            </div>
            <div style={{ fontSize: 10, opacity: 0.6 }}>
              Powered by Solyon Technologies
            </div>
          </div>
        </Link>

        <nav style={{ display: "flex", gap: 24 }}>
          <Link href="/metodo">Método</Link>
          <Link href="/simulador">Simulador</Link>
          <Link href="/academy">Academy</Link>
          <Link href="/comunidad">Comunidad</Link>
          <Link href="/respaldo">Respaldo</Link>
          <Link href="/aliados">Aliados</Link>
        </nav>

        <a
          href="#diagnostico"
          style={{
            background: "#5B4FFF",
            padding: "10px 16px",
            borderRadius: 10,
            fontWeight: 700,
            color: "white",
            textDecoration: "none",
          }}
        >
          Inicia tu Ruta Soberana
        </a>
      </div>
    </header>
  );
}