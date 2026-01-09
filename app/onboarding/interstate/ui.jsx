"use client";

import { useState } from "react";

/* =========================
   ESTILO BASE SOVEREIGN
========================= */

const colors = {
  bg: "#0b0b0b",
  gold: "#FFD700",
  white: "#FFFFFF",
  soft: "rgba(255,255,255,0.75)",
};

/* =========================
   COMPONENTE PRINCIPAL
========================= */

export default function OnboardingWizard({ sessionId }) {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    company: {
      legalStructure: "",
      state: "",
      startDate: "",
      businessAddress: "",
      mailingAddress: "",
    },
    names: {
      name1: "",
      name2: "",
      name3: "",
    },
    owners: [
      {
        fullName: "",
        dob: "",
        ssnItin: "",
        ownershipPct: "",
        address: "",
        phone: "",
        email: "",
        isDriver: false,
      },
    ],
    operation: {
      cargoTypes: "",
      trucks: "",
      ownerDrives: false,
    },
    interstate: {
      mcRequired: false,
      plannedStartDate: "",
    },
    confirmations: {
      feesPaid: false,
      authorized: false,
    },
  });

  function update(section, field, value) {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  }

  function next() {
    setStep((s) => s + 1);
  }

  function back() {
    setStep((s) => s - 1);
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
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Header sessionId={sessionId} step={step} />

        {step === 1 && (
          <StepCompany data={data.company} update={update} onNext={next} />
        )}
        {step === 2 && (
          <StepNames data={data.names} update={update} onNext={next} onBack={back} />
        )}
        {step === 3 && (
          <StepOwners data={data.owners} setData={setData} onNext={next} onBack={back} />
        )}
        {step === 4 && (
          <StepOperation data={data.operation} update={update} onNext={next} onBack={back} />
        )}
        {step === 5 && (
          <StepInterstate data={data.interstate} update={update} onNext={next} onBack={back} />
        )}
        {step === 6 && (
          <StepConfirm data={data.confirmations} update={update} onNext={next} onBack={back} />
        )}
        {step === 7 && <StepReview data={data} onBack={back} />}
      </div>
    </main>
  );
}

/* =========================
   HEADER
========================= */

function Header({ sessionId, step }) {
  return (
    <>
      <div style={{ letterSpacing: "0.2em", fontSize: 12, color: colors.soft }}>
        SOVEREIGN TRUCKGUARD · ONBOARDING
      </div>

      <h1 style={{ fontSize: 34, color: colors.gold, margin: "12px 0" }}>
        Paso {step} de 7
      </h1>

      <p style={{ color: colors.soft, marginBottom: 30 }}>
        Checkout Session ID: {sessionId || "N/A"}
      </p>
    </>
  );
}

/* =========================
   STEP 1 — COMPANY
========================= */

function StepCompany({ data, update, onNext }) {
  return (
    <>
      <h2>Información de la compañía</h2>

      <Input
        label="Estructura legal"
        value={data.legalStructure}
        onChange={(v) => update("company", "legalStructure", v)}
      />

      <Input
        label="Estado de formación"
        value={data.state}
        onChange={(v) => update("company", "state", v)}
      />

      <Input
        label="Dirección del negocio"
        value={data.businessAddress}
        onChange={(v) => update("company", "businessAddress", v)}
      />

      <Button onClick={onNext}>Continuar</Button>
    </>
  );
}

/* =========================
   STEP 2 — NAMES
========================= */

function StepNames({ data, update, onNext, onBack }) {
  return (
    <>
      <h2>Nombres de la compañía</h2>

      <Input
        label="Nombre opción 1"
        value={data.name1}
        onChange={(v) => update("names", "name1", v)}
      />
      <Input
        label="Nombre opción 2"
        value={data.name2}
        onChange={(v) => update("names", "name2", v)}
      />
      <Input
        label="Nombre opción 3"
        value={data.name3}
        onChange={(v) => update("names", "name3", v)}
      />

      <NavButtons onBack={onBack} onNext={onNext} />
    </>
  );
}

/* =========================
   STEP 3 — OWNERS
========================= */

function StepOwners({ data, setData, onNext, onBack }) {
  const owner = data[0];

  function updateOwner(field, value) {
    const copy = [...data];
    copy[0] = { ...copy[0], [field]: value };
    setData((prev) => ({ ...prev, owners: copy }));
  }

  return (
    <>
      <h2>Owner principal</h2>

      <Input label="Nombre completo" value={owner.fullName} onChange={(v) => updateOwner("fullName", v)} />
      <Input label="DOB" value={owner.dob} onChange={(v) => updateOwner("dob", v)} />
      <Input label="SSN / ITIN" value={owner.ssnItin} onChange={(v) => updateOwner("ssnItin", v)} />
      <Input label="Ownership %" value={owner.ownershipPct} onChange={(v) => updateOwner("ownershipPct", v)} />

      <NavButtons onBack={onBack} onNext={onNext} />
    </>
  );
}

/* =========================
   STEP 4 — OPERATION
========================= */

function StepOperation({ data, update, onNext, onBack }) {
  return (
    <>
      <h2>Operación</h2>

      <Input label="Tipo de carga" value={data.cargoTypes} onChange={(v) => update("operation", "cargoTypes", v)} />
      <Input label="Número de camiones" value={data.trucks} onChange={(v) => update("operation", "trucks", v)} />

      <NavButtons onBack={onBack} onNext={onNext} />
    </>
  );
}

/* =========================
   STEP 5 — INTERSTATE
========================= */

function StepInterstate({ data, update, onNext, onBack }) {
  return (
    <>
      <h2>MC Authority</h2>

      <label>
        <input
          type="checkbox"
          checked={data.mcRequired}
          onChange={(e) => update("interstate", "mcRequired", e.target.checked)}
        />{" "}
        Requiere MC Authority
      </label>

      <NavButtons onBack={onBack} onNext={onNext} />
    </>
  );
}

/* =========================
   STEP 6 — CONFIRM
========================= */

function StepConfirm({ data, update, onNext, onBack }) {
  return (
    <>
      <h2>Confirmaciones</h2>

      <label>
        <input
          type="checkbox"
          checked={data.feesPaid}
          onChange={(e) => update("confirmations", "feesPaid", e.target.checked)}
        />{" "}
        Fees pagados por el cliente
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={data.authorized}
          onChange={(e) => update("confirmations", "authorized", e.target.checked)}
        />{" "}
        Autorizo la validación
      </label>

      <NavButtons onBack={onBack} onNext={onNext} />
    </>
  );
}

/* =========================
   STEP 7 — REVIEW
========================= */

function StepReview({ data, onBack }) {
  return (
    <>
      <h2>Resumen final</h2>
      <pre style={{ fontSize: 12, background: "#111", padding: 12 }}>
        {JSON.stringify(data, null, 2)}
      </pre>

      <Button onClick={onBack}>Volver</Button>
    </>
  );
}

/* =========================
   UI HELPERS
========================= */

function Input({ label, value, onChange }) {
  return (
    <input
      placeholder={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={inputStyle}
    />
  );
}

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: 20,
        padding: "14px 20px",
        borderRadius: 999,
        background: colors.gold,
        border: "none",
        fontWeight: 900,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function NavButtons({ onBack, onNext }) {
  return (
    <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
      <Button onClick={onBack}>Atrás</Button>
      <Button onClick={onNext}>Continuar</Button>
    </div>
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
  marginBottom: 12,
};
