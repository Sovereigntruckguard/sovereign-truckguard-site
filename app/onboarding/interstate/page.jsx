// app/onboarding/interstate/page.jsx
export const metadata = {
  title: "Onboarding Interstate | Sovereign TruckGuard",
};

export default async function OnboardingInterstatePage({ searchParams }) {
  // Next.js App Router: searchParams llega como objeto
  const sessionId = typeof searchParams?.session_id === "string" ? searchParams.session_id : "";

  return (
    <main style={{ minHeight: "100vh", padding: "48px 20px", background: "#0b0b0b", color: "#fff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 16, opacity: 0.9, letterSpacing: 1 }}>
          SOVEREIGN TRUCKGUARD • REGULATORIOS
        </div>

        <h1 style={{ fontSize: 42, margin: "0 0 14px 0", lineHeight: 1.1 }}>
          Pago recibido correctamente ✅
        </h1>

        <p style={{ fontSize: 18, margin: "0 0 22px 0", color: "rgba(255,255,255,0.8)" }}>
          Aquí inicia el onboarding del paquete <b>Interstate</b>. Esta página es temporal y existe solo para validar
          la redirección post-pago.
        </p>

        <div
          style={{
            border: "1px solid rgba(255,215,0,0.35)",
            borderRadius: 14,
            padding: 18,
            background: "rgba(255,215,0,0.06)",
            marginBottom: 18,
          }}
        >
          <div style={{ fontSize: 14, opacity: 0.85, marginBottom: 6 }}>Checkout Session ID</div>
          <div style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
            {sessionId || "No session_id en la URL (Stripe no lo envió o estás entrando manualmente)."}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="/services"
            style={{
              display: "inline-block",
              padding: "12px 16px",
              borderRadius: 12,
              background: "#FFD700",
              color: "#0b0b0b",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Volver a Services
          </a>

          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Ir al Home
          </a>
        </div>

        <div style={{ marginTop: 28, fontSize: 13, opacity: 0.6 }}>
          Nota: Hoy NO estamos capturando datos. Solo estamos validando navegación Stripe → onboarding.
        </div>
      </div>
    </main>
  );
}
