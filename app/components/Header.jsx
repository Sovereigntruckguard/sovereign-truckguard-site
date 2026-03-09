"use client";

import Link from "next/link";

export default function Header() {

  const nav = [
    { name: "Método", href: "/metodo" },
    { name: "Simulador", href: "/simulador" },
    { name: "Academy", href: "/academy" },
    { name: "Comunidad", href: "/comunidad" },
    { name: "Respaldo", href: "/respaldo" },
    { name: "Aliados", href: "/aliados" },
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
          padding: "16px 22px",
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
            gap: 10,
            textDecoration: "none",
          }}
        >
          <img
            src="/logo-sovereign-icon.png"
            style={{ width: 42 }}
          />

          <div>
            <div style={{
              fontWeight: 800,
              fontSize: 14,
              color: "#1F4D3B"
            }}>
              Sovereign TruckGuard LLC
            </div>

            <div style={{
              fontSize: 10,
              color: "#5A6B63"
            }}>
              Powered by Solyon Technologies
            </div>
          </div>
        </Link>


        {/* NAV */}
        <nav
          style={{
            display: "flex",
            gap: 22,
            fontSize: 14,
          }}
        >
          {nav.map(item => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#1A1A1A",
                fontWeight: 500,
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>


        {/* CTA */}
        <a
          href="#diagnostico"
          style={{
            background: "#5B4FFF",
            color: "white",
            padding: "10px 18px",
            borderRadius: 10,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Inicia tu Ruta Soberana
        </a>

      </div>
    </header>
  );
}