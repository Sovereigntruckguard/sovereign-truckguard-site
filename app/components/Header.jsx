"use client";

import Link from "next/link";
import ApplicationModal from "./ApplicationModal";

export default function Header() {

  const nav = [
    { name: "Método", href: "/metodo" },
    { name: "Simulador", href: "/simulador" },
    { name: "Academy", href: "/academy" },
    { name: "Comunidad", href: "/comunidad" },
    { name: "Respaldo", href: "#respaldo" },
    { name: "Aliados", href: "#aliados" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#F4F7F6",
        borderBottom: "1px solid #E3E8E6",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "18px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        {/* LOGO */}

        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <img
            src="/logo-sovereign-icon.png"
            alt="Sovereign TruckGuard"
            style={{ width: 52 }}
          />

          <div style={{ lineHeight: 1.1 }}>
            <div
              style={{
                fontWeight: 900,
                fontSize: 16,
                color: "#1F4D3B",
                letterSpacing: ".02em",
              }}
            >
              Sovereign TruckGuard LLC
            </div>

            <div
              style={{
                fontSize: 11,
                color: "#5A6B63",
              }}
            >
              Powered by Solyon Technologies
            </div>
          </div>
        </Link>


        {/* NAV */}

        <nav
          style={{
            display: "flex",
            gap: 26,
            fontSize: 14,
          }}
        >
          {nav.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#1A1A1A",
                fontWeight: 600,
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>


        {/* CTA */}

        <ApplicationModal>
          <button
            style={{
              background: "#1F4D3B",
              color: "white",
              padding: "12px 20px",
              borderRadius: 10,
              fontWeight: 800,
              border: "none",
              cursor: "pointer"
            }}
          >
            Inicia tu Ruta Soberana
          </button>
        </ApplicationModal>

      </div>
    </header>
  );
}