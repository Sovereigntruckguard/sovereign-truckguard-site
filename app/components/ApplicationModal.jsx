"use client";

import { useState } from "react";

export default function ApplicationModal({ children }) {

  const [open, setOpen] = useState(false);

  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSeOVegHUq_GpBrjg8BZVB0cbpgAU5OlDaovYpIPCPJMVrr-hw/viewform?usp=header";

  return (
    <>
      <div onClick={() => setOpen(true)}>
        {children}
      </div>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
          }}
        >

          <div
            style={{
              background: "white",
              padding: 40,
              borderRadius: 14,
              maxWidth: 480,
              textAlign: "center"
            }}
          >

            <h3
              style={{
                fontSize: 24,
                fontWeight: 900,
                color: "#1F4D3B"
              }}
            >
              Aplicación al Diagnóstico
            </h3>

            <p
              style={{
                marginTop: 14,
                color: "#5A6B63",
                lineHeight: 1.6
              }}
            >
              Antes de avanzar evaluamos tu situación actual para
              entender si tu operación es viable y qué estructura
              necesitas para construir una empresa de trucking sólida.
            </p>

            <p
              style={{
                marginTop: 12,
                fontWeight: 700,
                color: "#C9A227"
              }}
            >
              Aplicar es completamente gratis.
            </p>

            <a
              href={formLink}
              target="_blank"
              style={{
                marginTop: 22,
                display: "inline-block",
                background: "#C9A227",
                padding: "14px 26px",
                borderRadius: 999,
                fontWeight: 900,
                textDecoration: "none",
                color: "#000"
              }}
            >
              Continuar al formulario
            </a>

            <div
              onClick={() => setOpen(false)}
              style={{
                marginTop: 16,
                fontSize: 13,
                cursor: "pointer",
                color: "#888"
              }}
            >
              Cancelar
            </div>

          </div>

        </div>
      )}
    </>
  );
}