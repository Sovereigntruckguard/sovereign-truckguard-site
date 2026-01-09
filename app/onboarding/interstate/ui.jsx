"use client";

import { useMemo, useState } from "react";

/* =========================
   ESTILO BASE SOVEREIGN (Premium)
========================= */
const colors = {
  bg: "#0b0b0b",
  panel: "rgba(255,255,255,0.03)",
  border: "rgba(255,255,255,0.12)",
  gold: "#FFD700",
  rose: "#E8B7B7",
  white: "#FFFFFF",
  soft: "rgba(255,255,255,0.75)",
  danger: "rgba(255,80,80,0.95)",
  ok: "rgba(50,205,50,0.9)",
};

const layout = {
  maxWidth: 860,
};

const cargoOptions = [
  "General Freight",
  "Dry Van",
  "Reefer",
  "Flatbed",
  "Auto Hauler",
  "Building Materials",
  "Agricultural",
  "Hazmat",
  "Other",
];

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
      businessDescription: "",
      physicalAddress: {
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "US",
      },
      mailingSameAsPhysical: true,
      mailingAddress: {
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "US",
      },
      businessPhone: "",
      businessEmail: "",
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
        ownershipPct: 100,
        residentialAddress: {
          street: "",
          city: "",
          state: "",
          zip: "",
          country: "US",
        },
        phone: "",
        email: "",
        isDriver: false,
      },
    ],
    operation: {
      cargoTypes: [],
      trucks: 1,
      ownerDrives: false,
      operationType: "INTERSTATE",
    },
    interstate: {
      mcRequired: true,
      plannedStartDate: "",
      haulForHire: false,
      notes: "",
    },
    confirmations: {
      feesUnderstanding: false,
      authorized: false,
      truthful: false,
      allowContact: false,
    },
  });

  // ✅ Estados para submit (PASO 2 los mostraremos en UI)
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submittedOk, setSubmittedOk] = useState(false);

  function next() {
    setStep((s) => Math.min(7, s + 1));
  }

  function back() {
    setStep((s) => Math.max(1, s - 1));
  }

  const ownershipTotal = useMemo(() => {
    return (data.owners || []).reduce(
      (acc, o) => acc + Number(o.ownershipPct || 0),
      0
    );
  }, [data.owners]);

  // ✅ Submit real al backend (sin romper UI)
  async function handleSubmitWizard() {
    try {
      setSubmitting(true);
      setSubmitError("");
      setSubmittedOk(false);

      // sessionId es crítico para correlación
      if (!sessionId) {
        throw new Error("Missing checkout session ID (session_id)");
      }

      // Payload listo para backend
      const payload = {
        order_id: sessionId, // (FASE 1: correlación por sessionId)
        company: data.company,
        names: data.names,
        owners: data.owners,
        operation: data.operation,
        interstate: data.interstate,
        confirmations: data.confirmations,
      };

      const res = await fetch(
        "https://azoth-regulatorios-798731178244.us-central1.run.app/onboarding/company",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || "Failed to submit onboarding");
      }

      setSubmittedOk(true);
      alert("✅ Onboarding enviado correctamente.");
    } catch (err) {
      console.error(err);
      const msg = err?.message || "Error enviando onboarding";
      setSubmitError(msg);
      alert(`❌ ${msg}`);
    } finally {
      setSubmitting(false);
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
      <div style={{ maxWidth: layout.maxWidth, margin: "0 auto" }}>
        <Header sessionId={sessionId} step={step} />
        <Stepper step={step} />

        <Card>
          {step === 1 && (
            <StepCompany data={data} setData={setData} onNext={next} />
          )}
          {step === 2 && (
            <StepNames
              data={data}
              setData={setData}
              onNext={next}
              onBack={back}
            />
          )}
          {step === 3 && (
            <StepOwners
              data={data}
              setData={setData}
              onNext={next}
              onBack={back}
              ownershipTotal={ownershipTotal}
            />
          )}
          {step === 4 && (
            <StepOperation
              data={data}
              setData={setData}
              onNext={next}
              onBack={back}
            />
          )}
          {step === 5 && (
            <StepInterstate
              data={data}
              setData={setData}
              onNext={next}
              onBack={back}
            />
          )}
          {step === 6 && (
            <StepConfirm
              data={data}
              setData={setData}
              onNext={next}
              onBack={back}
            />
          )}
          {step === 7 && (
            <StepReview
              data={data}
              onBack={back}
              onSubmit={handleSubmitWizard}
              ownershipTotal={ownershipTotal}
              sessionId={sessionId}
              // ✅ PASO 2: conectamos estos props en el StepReview UI
              // submitting={submitting}
              // submitError={submitError}
              // submittedOk={submittedOk}
            />
          )}
        </Card>

        {/* ✅ PASO 2: aquí podremos mostrar status global si quieres (opcional) */}
        {/* {submitting && <Hint>Enviando onboarding...</Hint>} */}
        {/* {submitError && <Hint><span style={{color: colors.danger}}>{submitError}</span></Hint>} */}
        {/* {submittedOk && <Hint><span style={{color: colors.ok}}>Enviado ✅</span></Hint>} */}
      </div>
    </main>
  );
}


/* =========================
   HEADER + STEPPER
========================= */
function Header({ sessionId, step }) {
  return (
    <>
      <div style={{ letterSpacing: "0.2em", fontSize: 12, color: colors.soft }}>
        SOVEREIGN TRUCKGUARD · ONBOARDING
      </div>

      <h1 style={{ fontSize: 34, color: colors.gold, margin: "12px" }}>
        Paso {step} de 7
      </h1>

      <div style={{ color: colors.soft, marginBottom: 18 }}>
        Checkout Session ID:{" "}
        <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
          {sessionId || "N/A"}
        </span>
      </div>
    </>
  );
}

function Stepper({ step }) {
  const items = ["Company", "Names", "Owners", "Operation", "Interstate", "Confirm", "Review"];
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
      {items.map((label, idx) => {
        const n = idx + 1;
        const active = n === step;
        const done = n < step;
        return (
          <div
            key={label}
            style={{
              padding: "8px 12px",
              borderRadius: 999,
              border: `1px solid ${active ? "rgba(255,215,0,0.55)" : "rgba(255,255,255,0.14)"}`,
              background: active
                ? "rgba(255,215,0,0.10)"
                : done
                ? "rgba(50,205,50,0.08)"
                : "rgba(255,255,255,0.03)",
              fontWeight: active ? 900 : 700,
              fontSize: 12,
              letterSpacing: 0.4,
              color: active ? colors.gold : colors.white,
              opacity: done ? 0.9 : 1,
            }}
          >
            {n}. {label}
          </div>
        );
      })}
    </div>
  );
}

/* =========================
   CARD WRAPPER
========================= */
function Card({ children }) {
  return (
    <div
      style={{
        borderRadius: 18,
        border: `1px solid ${colors.border}`,
        background: colors.panel,
        padding: 18,
        boxShadow: "0 24px 80px rgba(0,0,0,0.65)",
      }}
    >
      {children}
    </div>
  );
}

/* =========================
   STEP 1 — COMPANY (Physical + Mailing)
========================= */
function StepCompany({ data, setData, onNext }) {
  const c = data.company;

  function updateCompany(field, value) {
    setData((prev) => ({ ...prev, company: { ...prev.company, [field]: value } }));
  }

  function updatePhysical(field, value) {
    setData((prev) => ({
      ...prev,
      company: {
        ...prev.company,
        physicalAddress: { ...prev.company.physicalAddress, [field]: value },
      },
    }));
  }

  function updateMailing(field, value) {
    setData((prev) => ({
      ...prev,
      company: {
        ...prev.company,
        mailingAddress: { ...prev.company.mailingAddress, [field]: value },
      },
    }));
  }

  const canContinue = () => {
    if (!c.legalStructure) return false;
    if (!c.state) return false;
    if (!c.startDate) return false;
    if (!c.businessEmail) return false;

    const p = c.physicalAddress;
    if (!p.street || !p.city || !p.state || !p.zip) return false;

    if (!c.mailingSameAsPhysical) {
      const m = c.mailingAddress;
      if (!m.street || !m.city || !m.state || !m.zip) return false;
    }
    return true;
  };

  return (
    <>
      <Title>Información de la compañía</Title>
      <SubTitle>Datos legales básicos para iniciar el proceso</SubTitle>

      <Grid2>
        <Select
          label="Estructura legal *"
          value={c.legalStructure}
          onChange={(v) => updateCompany("legalStructure", v)}
          options={[
            { label: "Selecciona", value: "" },
            { label: "LLC", value: "LLC" },
            { label: "Corporation", value: "CORP" },
            { label: "Sole Proprietor", value: "SOLE" },
          ]}
        />
        <Input
          label="Estado de formación *"
          value={c.state}
          onChange={(v) => updateCompany("state", v)}
          placeholder="TX"
        />
      </Grid2>

      <Grid2>
        <Input
          label="Start date *"
          value={c.startDate}
          onChange={(v) => updateCompany("startDate", v)}
          placeholder="YYYY-MM-DD"
        />
        <Input
          label="Business phone"
          value={c.businessPhone}
          onChange={(v) => updateCompany("businessPhone", v)}
          placeholder="+1 713 555 1234"
        />
      </Grid2>

      <Input
        label="Business email *"
        value={c.businessEmail}
        onChange={(v) => updateCompany("businessEmail", v)}
        placeholder="company@email.com"
      />

      <TextArea
        label="Business description"
        value={c.businessDescription}
        onChange={(v) => updateCompany("businessDescription", v)}
        placeholder="Describe tu operación en una frase clara."
      />

      <Divider />

      <SectionTitle>Dirección física (obligatoria)</SectionTitle>

      <Full>
        <Input
          label="Street *"
          value={c.physicalAddress.street}
          onChange={(v) => updatePhysical("street", v)}
          placeholder="123 Main St"
        />
      </Full>

      <Grid2>
        <Input
          label="City *"
          value={c.physicalAddress.city}
          onChange={(v) => updatePhysical("city", v)}
          placeholder="Houston"
        />
        <Input
          label="State *"
          value={c.physicalAddress.state}
          onChange={(v) => updatePhysical("state", v)}
          placeholder="TX"
        />
      </Grid2>

      <Grid2>
        <Input
          label="ZIP *"
          value={c.physicalAddress.zip}
          onChange={(v) => updatePhysical("zip", v)}
          placeholder="77001"
        />
        <Select
          label="Country"
          value={c.physicalAddress.country}
          onChange={(v) => updatePhysical("country", v)}
          options={[
            { label: "United States", value: "US" },
            { label: "Mexico", value: "MX" },
            { label: "Colombia", value: "CO" },
          ]}
        />
      </Grid2>

      <Divider />

      <CheckRow
        checked={c.mailingSameAsPhysical}
        onChange={(val) => updateCompany("mailingSameAsPhysical", val)}
        label="Mailing address igual a physical address"
      />

      {!c.mailingSameAsPhysical && (
        <>
          <SectionTitle>Mailing address</SectionTitle>

          <Full>
            <Input
              label="Street *"
              value={c.mailingAddress.street}
              onChange={(v) => updateMailing("street", v)}
              placeholder="PO Box / Street"
            />
          </Full>

          <Grid2>
            <Input
              label="City *"
              value={c.mailingAddress.city}
              onChange={(v) => updateMailing("city", v)}
              placeholder="Houston"
            />
            <Input
              label="State *"
              value={c.mailingAddress.state}
              onChange={(v) => updateMailing("state", v)}
              placeholder="TX"
            />
          </Grid2>

          <Grid2>
            <Input
              label="ZIP *"
              value={c.mailingAddress.zip}
              onChange={(v) => updateMailing("zip", v)}
              placeholder="77002"
            />
            <Select
              label="Country"
              value={c.mailingAddress.country}
              onChange={(v) => updateMailing("country", v)}
              options={[
                { label: "United States", value: "US" },
                { label: "Mexico", value: "MX" },
                { label: "Colombia", value: "CO" },
              ]}
            />
          </Grid2>
        </>
      )}

      <NavBar>
        <GhostButton disabled>Volver</GhostButton>
        <PrimaryButton disabled={!canContinue()} onClick={onNext}>
          Continuar
        </PrimaryButton>
      </NavBar>

      {!canContinue() && <Hint>Completa los campos marcados con * para continuar.</Hint>}
    </>
  );
}

/* =========================
   STEP 2 — COMPANY NAMES
========================= */
function StepNames({ data, setData, onNext, onBack }) {
  const n = data.names;

  function updateName(field, value) {
    setData((prev) => ({
      ...prev,
      names: { ...prev.names, [field]: value },
    }));
  }

  const canContinue = () => Boolean(n.name1 && n.name1.trim().length > 0);

  return (
    <>
      <Title>Nombres de la compañía</Title>
      <SubTitle>Ingresa hasta 3 opciones. Validaremos disponibilidad antes de registrar.</SubTitle>

      <Input label="Nombre opción 1 *" value={n.name1} onChange={(v) => updateName("name1", v)} />
      <Input label="Nombre opción 2" value={n.name2} onChange={(v) => updateName("name2", v)} />
      <Input label="Nombre opción 3" value={n.name3} onChange={(v) => updateName("name3", v)} />

      <Hint>Recomendación: usa nombres distintos entre sí para evitar rechazos.</Hint>

      <NavBar>
        <GhostButton onClick={onBack}>Volver</GhostButton>
        <PrimaryButton disabled={!canContinue()} onClick={onNext}>
          Continuar
        </PrimaryButton>
      </NavBar>

      {!canContinue() && <Hint>Debes ingresar al menos un nombre para continuar.</Hint>}
    </>
  );
}

/* =========================
   STEP 3 — OWNERS (multi + 100%)
========================= */
function StepOwners({ data, setData, onNext, onBack, ownershipTotal }) {
  const owners = data.owners;

  function updateOwner(idx, field, value) {
    const copy = structuredClone(owners);
    copy[idx][field] = value;
    setData((prev) => ({ ...prev, owners: copy }));
  }

  function updateOwnerAddress(idx, field, value) {
    const copy = structuredClone(owners);
    copy[idx].residentialAddress[field] = value;
    setData((prev) => ({ ...prev, owners: copy }));
  }

  function addOwner() {
    setData((prev) => ({
      ...prev,
      owners: [
        ...prev.owners,
        {
          fullName: "",
          dob: "",
          ssnItin: "",
          ownershipPct: 0,
          residentialAddress: { street: "", city: "", state: "", zip: "", country: "US" },
          phone: "",
          email: "",
          isDriver: false,
        },
      ],
    }));
  }

  function removeOwner(idx) {
    if (owners.length <= 1) return;
    setData((prev) => ({
      ...prev,
      owners: prev.owners.filter((_, i) => i !== idx),
    }));
  }

  const canContinue = () => {
    if (!owners.length) return false;
    if (ownershipTotal !== 100) return false;

    const okEvery = owners.every((o) => {
      const a = o.residentialAddress || {};
      return (
        o.fullName &&
        o.dob &&
        o.ssnItin &&
        Number(o.ownershipPct) >= 0 &&
        a.street &&
        a.city &&
        a.state &&
        a.zip
      );
    });

    return okEvery;
  };

  return (
    <>
      <Title>Owners / Socios</Title>
      <SubTitle>
        Ownership total:{" "}
        <span style={{ color: ownershipTotal === 100 ? colors.gold : colors.danger, fontWeight: 900 }}>
          {ownershipTotal}%
        </span>{" "}
        · Debe sumar 100%
      </SubTitle>

      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center", marginBottom: 10 }}>
        <div style={{ fontSize: 12, color: colors.soft }}>Mínimo 1 owner. Puedes añadir más si aplica.</div>
        <SmallButton onClick={addOwner}>+ Add owner</SmallButton>
      </div>

      {owners.map((o, idx) => (
        <SectionCard key={idx}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <SectionTitle>Owner #{idx + 1}</SectionTitle>
            {owners.length > 1 && <SmallDangerButton onClick={() => removeOwner(idx)}>Remove</SmallDangerButton>}
          </div>

          <Grid2>
            <Input label="Full name *" value={o.fullName} onChange={(v) => updateOwner(idx, "fullName", v)} />
            <Input label="DOB (YYYY-MM-DD) *" value={o.dob} onChange={(v) => updateOwner(idx, "dob", v)} placeholder="1994-12-19" />
          </Grid2>

          <Grid2>
            <Input label="SSN / ITIN *" value={o.ssnItin} onChange={(v) => updateOwner(idx, "ssnItin", v)} />
            <Input
              label="Ownership % *"
              value={String(o.ownershipPct ?? "")}
              onChange={(v) => updateOwner(idx, "ownershipPct", Number(v))}
              placeholder="100"
            />
          </Grid2>

          <Grid2>
            <Input label="Phone" value={o.phone} onChange={(v) => updateOwner(idx, "phone", v)} />
            <Input label="Email" value={o.email} onChange={(v) => updateOwner(idx, "email", v)} />
          </Grid2>

          <CheckRow checked={o.isDriver} onChange={(val) => updateOwner(idx, "isDriver", val)} label="Owner drives" />

          <Divider />

          <SectionTitle>Residential address *</SectionTitle>

          <Full>
            <Input label="Street *" value={o.residentialAddress.street} onChange={(v) => updateOwnerAddress(idx, "street", v)} />
          </Full>

          <Grid2>
            <Input label="City *" value={o.residentialAddress.city} onChange={(v) => updateOwnerAddress(idx, "city", v)} />
            <Input label="State *" value={o.residentialAddress.state} onChange={(v) => updateOwnerAddress(idx, "state", v)} />
          </Grid2>

          <Grid2>
            <Input label="ZIP *" value={o.residentialAddress.zip} onChange={(v) => updateOwnerAddress(idx, "zip", v)} />
            <Select
              label="Country"
              value={o.residentialAddress.country}
              onChange={(v) => updateOwnerAddress(idx, "country", v)}
              options={[
                { label: "United States", value: "US" },
                { label: "Mexico", value: "MX" },
                { label: "Colombia", value: "CO" },
              ]}
            />
          </Grid2>
        </SectionCard>
      ))}

      <NavBar>
        <GhostButton onClick={onBack}>Volver</GhostButton>
        <PrimaryButton disabled={!canContinue()} onClick={onNext}>
          Continuar
        </PrimaryButton>
      </NavBar>

      {!canContinue() && (
        <Hint>Requisitos: todos los owners completos + ownership total exactamente 100%.</Hint>
      )}
    </>
  );
}

/* =========================
   STEP 4 — OPERATION (cargo multiselect)
========================= */
function StepOperation({ data, setData, onNext, onBack }) {
  const op = data.operation;

  function updateOp(field, value) {
    setData((prev) => ({
      ...prev,
      operation: { ...prev.operation, [field]: value },
    }));
  }

  const canContinue = () => op.trucks >= 1 && op.cargoTypes.length >= 1 && !!op.operationType;

  return (
    <>
      <Title>Operación</Title>
      <SubTitle>Define la operación para alinear DOT / MC / seguro</SubTitle>

      <Grid2>
        <Select
          label="Operation type *"
          value={op.operationType}
          onChange={(v) => updateOp("operationType", v)}
          options={[
            { label: "INTERSTATE", value: "INTERSTATE" },
            { label: "INTRASTATE", value: "INTRASTATE" },
          ]}
        />
        <Input
          label="# Trucks *"
          value={String(op.trucks)}
          onChange={(v) => updateOp("trucks", Math.max(1, Number(v || 1)))}
          placeholder="1"
        />
      </Grid2>

      <CheckRow checked={op.ownerDrives} onChange={(val) => updateOp("ownerDrives", val)} label="Owner drives" />

      <Divider />

      <SectionTitle>Cargo types *</SectionTitle>

      <div style={cargoGrid}>
        {cargoOptions.map((c) => {
          const checked = op.cargoTypes.includes(c);
          return (
            <CheckRow
              key={c}
              checked={checked}
              onChange={(val) => {
                const nextSet = new Set(op.cargoTypes);
                if (val) nextSet.add(c);
                else nextSet.delete(c);
                updateOp("cargoTypes", Array.from(nextSet));
              }}
              label={c}
            />
          );
        })}
      </div>

      <NavBar>
        <GhostButton onClick={onBack}>Volver</GhostButton>
        <PrimaryButton disabled={!canContinue()} onClick={onNext}>
          Continuar
        </PrimaryButton>
      </NavBar>

      {!canContinue() && <Hint>Selecciona al menos 1 tipo de carga y mínimo 1 camión.</Hint>}
    </>
  );
}

/* =========================
   STEP 5 — INTERSTATE
========================= */
function StepInterstate({ data, setData, onNext, onBack }) {
  const it = data.interstate;

  function updateIt(field, value) {
    setData((prev) => ({
      ...prev,
      interstate: { ...prev.interstate, [field]: value },
    }));
  }

  const canContinue = () => {
    if (it.mcRequired && !it.plannedStartDate) return false;
    return true;
  };

  return (
    <>
      <Title>Interstate / MC Authority</Title>
      <SubTitle>Datos necesarios para iniciar MC Authority</SubTitle>

      <CheckRow checked={it.mcRequired} onChange={(val) => updateIt("mcRequired", val)} label="Requiere MC Authority" />

      {it.mcRequired && (
        <Input
          label="Planned start date *"
          value={it.plannedStartDate}
          onChange={(v) => updateIt("plannedStartDate", v)}
          placeholder="YYYY-MM-DD"
        />
      )}

      {it.mcRequired && (
        <CheckRow checked={it.haulForHire} onChange={(val) => updateIt("haulForHire", val)} label="For-Hire (carga de terceros)" />
      )}

      <TextArea
        label="Notas (opcional)"
        value={it.notes}
        onChange={(v) => updateIt("notes", v)}
        placeholder="Ej: contrato, fecha objetivo, observaciones."
      />

      <NavBar>
        <GhostButton onClick={onBack}>Volver</GhostButton>
        <PrimaryButton disabled={!canContinue()} onClick={onNext}>
          Continuar
        </PrimaryButton>
      </NavBar>

      {!canContinue() && <Hint>Si MC es requerida, debes indicar fecha estimada.</Hint>}
    </>
  );
}

/* =========================
   STEP 6 — CONFIRMACIONES
========================= */
function StepConfirm({ data, setData, onNext, onBack }) {
  const cf = data.confirmations;

  function updateCf(field, value) {
    setData((prev) => ({
      ...prev,
      confirmations: { ...prev.confirmations, [field]: value },
    }));
  }

  const canContinue = () => cf.feesUnderstanding && cf.authorized && cf.truthful;

  return (
    <>
      <Title>Confirmaciones finales</Title>
      <SubTitle>Blindaje legal y autorización operativa</SubTitle>

      <div style={{ display: "grid", gap: 10 }}>
        <CheckRow checked={cf.truthful} onChange={(val) => updateCf("truthful", val)} label="Confirmo que la información es verídica" />
        <CheckRow checked={cf.authorized} onChange={(val) => updateCf("authorized", val)} label="Autorizo a Sovereign a gestionar registros administrativos" />
        <CheckRow checked={cf.feesUnderstanding} onChange={(val) => updateCf("feesUnderstanding", val)} label="Entiendo que los government fees se pagan aparte" />
      </div>

      <Divider />

      <CheckRow checked={cf.allowContact} onChange={(val) => updateCf("allowContact", val)} label="Acepto ser contactado por WhatsApp / email (opcional)" />

      <NavBar>
        <GhostButton onClick={onBack}>Volver</GhostButton>
        <PrimaryButton disabled={!canContinue()} onClick={onNext}>
          Continuar
        </PrimaryButton>
      </NavBar>

      {!canContinue() && <Hint>Debes aceptar las 3 confirmaciones obligatorias.</Hint>}
    </>
  );
}

/* =========================
   STEP 7 — REVIEW HUMANO (sin JSON)
========================= */
function StepReview({ data, onBack, onSubmit, ownershipTotal, sessionId }) {
  const { company, names, owners, operation, interstate, confirmations } = data;
  const owner0 = owners?.[0] || null;

  const nameList = [names.name1, names.name2, names.name3].filter(Boolean);

  return (
    <>
      <Title>Revisión final</Title>
      <SubTitle>Revisa antes de enviar. Si algo está mal, vuelve y edítalo.</SubTitle>

      <SectionCard>
        <SectionTitle>Compañía</SectionTitle>
        <Row label="Estructura legal" value={company.legalStructure || "—"} />
        <Row label="Estado" value={company.state || "—"} />
        <Row label="Start date" value={company.startDate || "—"} />
        <Row label="Business email" value={company.businessEmail || "—"} />
        <Row label="Business phone" value={company.businessPhone || "—"} />
        <Row label="Physical address" value={fmtAddress(company.physicalAddress)} />
        <Row label="Mailing address" value={company.mailingSameAsPhysical ? "Same as physical" : fmtAddress(company.mailingAddress)} />
      </SectionCard>

      <SectionCard>
        <SectionTitle>Nombres propuestos</SectionTitle>
        {nameList.length ? (
          <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,0.85)" }}>
            {nameList.map((n, idx) => (
              <li key={idx} style={{ marginBottom: 6 }}>{n}</li>
            ))}
          </ul>
        ) : (
          <Hint>No hay nombres. Vuelve al paso 2.</Hint>
        )}
      </SectionCard>

      <SectionCard>
        <SectionTitle>Owners</SectionTitle>
        <Row label="Owners count" value={String(owners.length)} />
        <Row label="Ownership total" value={`${ownershipTotal}%`} />
        {owner0 && (
          <>
            <Divider />
            <Row label="Owner #1" value={owner0.fullName || "—"} />
            <Row label="DOB" value={owner0.dob || "—"} />
            <Row label="Owner drives" value={owner0.isDriver ? "Sí" : "No"} />
            <Row label="Residential address" value={fmtAddress(owner0.residentialAddress)} />
          </>
        )}
      </SectionCard>

      <SectionCard>
        <SectionTitle>Operación</SectionTitle>
        <Row label="Operation type" value={operation.operationType || "—"} />
        <Row label="Trucks" value={String(operation.trucks)} />
        <Row label="Owner drives" value={operation.ownerDrives ? "Sí" : "No"} />
        <Row label="Cargo types" value={operation.cargoTypes?.length ? operation.cargoTypes.join(", ") : "—"} />
      </SectionCard>

      <SectionCard>
        <SectionTitle>Interstate / MC</SectionTitle>
        <Row label="MC Required" value={interstate.mcRequired ? "Sí" : "No"} />
        <Row label="Planned start date" value={interstate.plannedStartDate || "—"} />
        <Row label="For-Hire" value={interstate.haulForHire ? "Sí" : "No"} />
        {interstate.notes ? <Row label="Notes" value={interstate.notes} /> : null}
      </SectionCard>

      <SectionCard>
        <SectionTitle>Confirmaciones</SectionTitle>
        <Row label="Info verídica" value={confirmations.truthful ? "✔" : "—"} />
        <Row label="Autorización" value={confirmations.authorized ? "✔" : "—"} />
        <Row label="Gov fees aparte" value={confirmations.feesUnderstanding ? "✔" : "—"} />
        <Row label="Contacto" value={confirmations.allowContact ? "✔" : "—"} />
      </SectionCard>

      <Hint>
        Session:{" "}
        <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
          {sessionId || "N/A"}
        </span>
      </Hint>

      <NavBar>
        <GhostButton onClick={onBack}>Volver</GhostButton>
        <PrimaryButton onClick={onSubmit}>Enviar onboarding</PrimaryButton>
      </NavBar>
    </>
  );
}

/* =========================
   UI HELPERS (Premium)
========================= */

function Title({ children }) {
  return <h2 style={{ margin: "4px 0 8px", fontSize: 22, color: colors.white }}>{children}</h2>;
}

function SubTitle({ children }) {
  return <div style={{ marginBottom: 16, fontSize: 13, color: colors.soft, lineHeight: 1.6 }}>{children}</div>;
}

function SectionTitle({ children, style }) {
  return (
    <div
      style={{
        marginTop: 6,
        marginBottom: 10,
        fontWeight: 950,
        color: colors.gold,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "14px 0" }} />;
}

/**
 * Grid responsive que NO se sale del container:
 * auto-fit + minmax
 */
function Grid2({ children }) {
  return (
    <div style={grid2Style}>
      {children}
    </div>
  );
}

function Full({ children }) {
  return <div style={{ gridColumn: "1 / -1" }}>{children}</div>;
}

function Input({ label, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <Label>{label}</Label>}
      <input
        placeholder={placeholder || label}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
}

function TextArea({ label, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <Label>{label}</Label>}
      <textarea
        placeholder={placeholder || label}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        style={{ ...inputStyle, borderRadius: 14, resize: "vertical" }}
      />
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <Label>{label}</Label>}
      <select value={value ?? ""} onChange={(e) => onChange(e.target.value)} style={inputStyle}>
        {options.map((o) => (
          <option key={o.value} value={o.value} style={{ color: "#000" }}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Label({ children }) {
  return <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 6, letterSpacing: 0.2 }}>{children}</div>;
}

function CheckRow({ checked, onChange, label }) {
  return (
    <label style={checkboxRowStyle}>
      <input type="checkbox" checked={!!checked} onChange={(e) => onChange(e.target.checked)} />
      <span style={{ opacity: 0.9 }}>{label}</span>
    </label>
  );
}

function NavBar({ children }) {
  return <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>{children}</div>;
}

function PrimaryButton({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "12px 16px",
        borderRadius: 999,
        border: "none",
        background: disabled ? "rgba(255,255,255,0.10)" : `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
        color: disabled ? "rgba(255,255,255,0.55)" : "#000",
        fontWeight: 950,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "12px 16px",
        borderRadius: 999,
        border: `1px solid ${colors.border}`,
        background: "rgba(0,0,0,0.25)",
        color: colors.white,
        fontWeight: 900,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {children}
    </button>
  );
}

function SmallButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 12px",
        borderRadius: 12,
        border: `1px solid ${colors.border}`,
        background: "rgba(0,0,0,0.25)",
        color: colors.white,
        fontWeight: 900,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function SmallDangerButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 12px",
        borderRadius: 12,
        border: "1px solid rgba(255,80,80,0.35)",
        background: "rgba(255,80,80,0.08)",
        color: colors.white,
        fontWeight: 900,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function Hint({ children }) {
  return <div style={{ marginTop: 12, fontSize: 12, color: colors.soft }}>{children}</div>;
}

function SectionCard({ children }) {
  return (
    <div
      style={{
        marginTop: 12,
        padding: 14,
        borderRadius: 16,
        border: `1px solid ${colors.border}`,
        background: "rgba(0,0,0,0.22)",
      }}
    >
      {children}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div style={{ display: "flex", gap: 10, justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
      <div style={{ fontSize: 13, color: colors.soft }}>{label}</div>
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.88)", fontWeight: 800, textAlign: "right" }}>
        {value}
      </div>
    </div>
  );
}

function fmtAddress(a) {
  if (!a) return "—";
  const parts = [a.street, a.city, a.state, a.zip].filter(Boolean);
  return parts.length ? parts.join(", ") : "—";
}

/* =========================
   STYLES
========================= */
const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 14,
  border: `1px solid ${colors.border}`,
  background: "rgba(0,0,0,0.35)",
  color: "#fff",
  fontSize: 15,
  outline: "none",
};

const checkboxRowStyle = {
  display: "flex",
  gap: 10,
  alignItems: "center",
  cursor: "pointer",
  marginBottom: 8,
};

const cargoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 10,
};

const grid2Style = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
  width: "100%",
  maxWidth: "100%",
};

if (typeof window !== "undefined" && window.innerWidth < 768) {
  grid2Style.gridTemplateColumns = "1fr";
}
