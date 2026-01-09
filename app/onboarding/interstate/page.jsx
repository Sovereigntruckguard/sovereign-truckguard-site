"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

/* =========================
   ESTILO BASE (SOVEREIGN)
========================= */
const colors = {
  bg: "#0b0b0b",
  gold: "#FFD700",
  white: "#FFFFFF",
  soft: "rgba(255,255,255,0.75)",
};

const BACKEND_BASE_URL =
  "https://azoth-regulatorios-798731178244.us-central1.run.app";

export default function OnboardingInterstatePage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    companyName1: "",
    companyName2: "",
    companyName3: "",
    state: "",
    legalStructure: "",
    email: "",
    phone: "",
    confirm: false,
  });

  function updateField(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (
      !sessionId ||
      !form.companyName1 ||
      !form.state ||
      !form.legalStructure ||
      !form.email ||
      !form.confirm
    ) {
      setError("Completa los campos obligatorios.");
      return;
    }

    try {
      setLoading(true);

      await fetch(`${BACKEND_BASE_URL}/onboarding/company`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id: sessionId, // 🔑 ancla Stripe → onboarding
          company: {
            legal_structure: form.legalStructure,
            state_of_formation: form.state,
            business_email: form.email,
            business_phone: form.phone,
          },
          name_preferences: [
            form.companyName1,
            form.companyName2,
            form.companyName3,
          ].filter(Boolean),
          confirmations: {
            intake_phase_1: true,
          },
          owners: [],
          operation: {},
        }),
      });

      setSubmitted(true);
    } catch (err) {
      setError("Error enviando información. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: colors.bg,
        color: colors.white,
        padding: "48px 20px",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ letterSpacing: "0.2em", fontSize: 12, marginBottom: 12, color: colors.soft }}>
          SOVEREIGN TRUCKGUARD · ONBOARDING
        </div>

        <h1 style={{ fontSize: 36, marginBottom: 14, color: colors.gold }}>
          Pago recibido correctamente ✅
        </h1>

        <p style={{ fontSize: 17, color: colors.soft, marginBottom: 32 }}>
          Iniciaremos la validación legal de tu compañía. Completa esta información
          para asegurar el proceso.
        </p>

        {submitted ? (
          <div style={{
            border: `1px solid ${colors.gold}`,
            borderRadius: 14,
            padding: 22,
            background: "rgba(255,215,0,0.05)",
          }}>
            <h2>Información recibida ✅</h2>
            <p style={{ color: colors.soft }}>
              Un asesor de Sovereign continuará el proceso contigo.
            </p>
            <div style={{ marginTop: 12, fontSize: 13, opacity: 0.7 }}>
              Session ID: {sessionId}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
            <input name="companyName1" placeholder="Nombre compañía (opción 1)*" value={form.companyName1} onChange={updateField} style={inputStyle} />
            <input name="companyName2" placeholder="Nombre compañía (opción 2)" value={form.companyName2} onChange={updateField} style={inputStyle} />
            <input name="companyName3" placeholder="Nombre compañía (opción 3)" value={form.companyName3} onChange={updateField} style={inputStyle} />

            <select name="state" value={form.state} onChange={updateField} style={inputStyle}>
              <option value="">Estado*</option>
              <option value="TX">Texas</option>
              <option value="FL">Florida</option>
              <option value="CA">California</option>
              <option value="WY">Wyoming</option>
            </select>

            <select name="legalStructure" value={form.legalStructure} onChange={updateField} style={inputStyle}>
              <option value="">Estructura legal*</option>
              <option value="LLC">LLC</option>
              <option value="CORP">Corporation</option>
              <option value="SOLE">Sole Proprietor</option>
            </select>

            <input name="email" placeholder="Email*" value={form.email} onChange={updateField} style={inputStyle} />
            <input name="phone" placeholder="Teléfono" value={form.phone} onChange={updateField} style={inputStyle} />

            <label style={{ fontSize: 14, color: colors.soft }}>
              <input type="checkbox" name="confirm" checked={form.confirm} onChange={updateField} /> Confirmo la información
            </label>

            {error && <div style={{ color: "#ff6b6b" }}>{error}</div>}

            <button type="submit" disabled={loading} style={submitStyle}>
              {loading ? "Enviando..." : "Iniciar validación"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.25)",
  background: "rgba(0,0,0,0.35)",
  color: "#fff",
  fontSize: 15,
};

const submitStyle = {
  padding: "14px 20px",
  borderRadius: 999,
  border: "none",
  background: colors.gold,
  color: "#000",
  fontWeight: 900,
  cursor: "pointer",
};
