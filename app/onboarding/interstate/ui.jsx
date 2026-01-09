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

  function next() {
    setStep((s) => Math.min(7, s + 1));
  }

  function back() {
    setStep((s) => Math.max(1, s - 1));
  }

  const ownershipTotal = useMemo(() => {
    return (data.owners || []).reduce((acc, o) => acc + Number(o.ownershipPct || 0), 0);
  }, [data.owners]);

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
            <StepNames data={data} setData={setData} onNext={next} onBack={back} />
          )}
          {step === 3 && (
            <StepOwners data={data} setData={setData} onNext={next} onBack={back} ownershipTotal={ownershipTotal} />
          )}
          {step === 4 && (
            <StepOperation data={data} setData={setData} onNext={next} onBack={back} />
          )}
          {step === 5 && (
            <StepInterstate data={data} setData={setData} onNext={next} onBack={back} />
          )}
          {step === 6 && (
            <StepConfirm data={data} setData={setData} onNext={next} onBack={back} />
          )}
          {step === 7 && (
            <StepReview data={data} onBack={back} ownershipTotal={ownershipTotal} />
          )}
        </Card>
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

      <h1 style={{ fontSize: 34, color: colors.gold, margin: "12px 0 6px" }}>
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
  const items = [
    "Company",
    "Names",
    "Owners",
    "Operation",
    "Interstate",
    "Confirm",
    "Review",
  ];
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
              border: `1px solid ${
                active ? "rgba(255,215,0,0.55)" : "rgba(255,255,255,0.14)"
              }`,
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

      <Input
        label="Street *"
        value={c.physicalAddress.street}
        onChange={(v) => updatePhysical("street", v)}
        placeholder="123 Main St"
      />

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

          <Input
            label="Street *"
            value={c.mailingAddress.street}
            onChange={(v) => updateMailing("street", v)}
            placeholder="PO Box / Street"
          />

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

      {!canContinue() && (
        <Hint>Completa los campos marcados con * para continuar.</Hint>
      )}
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
      names: {
        ...prev.names,
        [field]: value,
      },
    }));
  }

  function canContinue() {
    return Boolean(n.name1 && n.name1.trim().length > 0);
  }

  return (
    <>
      <Title>Nombres de la compañía</Title>
      <SubTitle>
        Ingresa hasta 3 opciones. Validaremos disponibilidad antes de registrar.
      </SubTitle>

      <Input
        label="Nombre opción 1 *"
        value={n.name1}
        onChange={(v) => updateName("name1", v)}
        placeholder="Ej: Sovereign Logistics LLC"
      />

      <Input
        label="Nombre opción 2"
        value={n.name2}
        onChange={(v) => updateName("name2", v)}
        placeholder="Ej: Sovereign Transport LLC"
      />

      <Input
        label="Nombre opción 3"
        value={n.name3}
        onChange={(v) => updateName("name3", v)}
        placeholder="Ej: Sovereign Trucking LLC"
      />

      <Hint>
        Recomendación: usa nombres distintos entre sí para evitar rechazos.
      </Hint>

      <NavBar>
        <GhostButton onClick={onBack}>Volver</GhostButton>
        <PrimaryButton disabled={!canContinue()} onClick={onNext}>
          Continuar
        </PrimaryButton>
      </NavBar>

      {!canContinue() && (
        <Hint>Debes ingresar al menos un nombre para continuar.</Hint>
      )}
    </>
  );
}

/* =========================
   STEP 3 — OWNERS / SOCIOS
========================= */
function StepOwners({ data, setData, onNext, onBack }) {
  const owners = data.owners;

  function updateOwner(index, field, value) {
    const copy = [...owners];
    copy[index] = { ...copy[index], [field]: value };
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
          ownershipPct: "",
          address: "",
          phone: "",
          email: "",
          isDriver: false,
        },
      ],
    }));
  }

  function totalOwnership() {
    return owners.reduce(
      (sum, o) => sum + Number(o.ownershipPct || 0),
      0
    );
  }

  function canContinue() {
    if (owners.length < 1) return false;
    if (totalOwnership() !== 100) return false;

    return owners.every(
      (o) =>
        o.fullName &&
        o.dob &&
        o.ssnItin &&
        o.ownershipPct &&
        o.address
    );
  }

  return (
    <>
      <Title>Owners / Socios</Title>
      <SubTitle>
        La propiedad total debe sumar <b>100%</b>. Mínimo 1 owner.
      </SubTitle>

      {owners.map((owner, i) => (
        <Card key={i}>
          <SectionTitle>Owner #{i + 1}</SectionTitle>

          <Input
            label="Nombre completo *"
            value={owner.fullName}
            onChange={(v) => updateOwner(i, "fullName", v)}
          />

          <Grid2>
            <Input
              label="DOB (YYYY-MM-DD) *"
              value={owner.dob}
              onChange={(v) => updateOwner(i, "dob", v)}
              placeholder="1994-12-19"
            />
            <Input
              label="Ownership % *"
              value={owner.ownershipPct}
              onChange={(v) => updateOwner(i, "ownershipPct", v)}
              placeholder="100"
            />
          </Grid2>

          <Input
            label="SSN / ITIN *"
            value={owner.ssnItin}
            onChange={(v) => updateOwner(i, "ssnItin", v)}
            placeholder="***-**-1234"
          />

          <Input
            label="Dirección residencial *"
            value={owner.address}
            onChange={(v) => updateOwner(i, "address", v)}
          />

          <Grid2>
            <Input
              label="Teléfono"
              value={owner.phone}
              onChange={(v) => updateOwner(i, "phone", v)}
            />
            <Input
              label="Email"
              value={owner.email}
              onChange={(v) => updateOwner(i, "email", v)}
            />
          </Grid2>

          <CheckRow
            checked={owner.isDriver}
            onChange={(v) => updateOwner(i, "isDriver", v)}
            label="Este owner conduce"
          />
        </Card>
      ))}

      <GhostButton onClick={addOwner}>+ Agregar owner</GhostButton>

      <Divider />

      <Hint>
        Ownership total: <b>{totalOwnership()}%</b>
      </Hint>

      {totalOwnership() !== 100 && (
        <Hint error>
          La suma de ownership debe ser exactamente 100%.
        </Hint>
      )}

      <NavBar>
        <GhostButton onClick={onBack}>Volver</GhostButton>
        <PrimaryButton disabled={!canContinue()} onClick={onNext}>
          Continuar
        </PrimaryButton>
      </NavBar>
    </>
  );
}


/* =========================
   STEP 4 — OPERATION
========================= */
function StepOperation({ data, setData, onNext, onBack }) {
  const o = data.operation;

  function updateOperation(field, value) {
    setData((prev) => ({
      ...prev,
      operation: { ...prev.operation, [field]: value },
    }));
  }

  function canContinue() {
    if (!o.operationType) return false;
    if (!o.cargoTypes) return false;
    if (!o.numberOfTrucks || Number(o.numberOfTrucks) < 1) return false;
    if (!o.milesPerYear) return false;
    if (!o.operationRadius) return false;
    return true;
  }

  return (
    <>
      <Title>Operación</Title>
      <SubTitle>
        Esta información define tu perfil ante FMCSA y aseguradoras.
      </SubTitle>

      <Select
        label="Tipo de operación *"
        value={o.operationType}
        onChange={(v) => updateOperation("operationType", v)}
        options={[
          { label: "Selecciona", value: "" },
          { label: "Interstate", value: "INTERSTATE" },
          { label: "Intrastate", value: "INTRASTATE" },
        ]}
      />

      <Select
        label="Tipo de carga principal *"
        value={o.cargoTypes}
        onChange={(v) => updateOperation("cargoTypes", v)}
        options={[
          { label: "Selecciona", value: "" },
          { label: "General Freight", value: "GENERAL_FREIGHT" },
          { label: "Dry Van", value: "DRY_VAN" },
          { label: "Reefer", value: "REEFER" },
          { label: "Flatbed", value: "FLATBED" },
          { label: "Auto Hauler", value: "AUTO_HAULER" },
          { label: "Hazmat", value: "HAZMAT" },
          { label: "Otros", value: "OTHER" },
        ]}
      />

      <Grid2>
        <Input
          label="Número de camiones *"
          value={o.numberOfTrucks}
          onChange={(v) => updateOperation("numberOfTrucks", v)}
          placeholder="1"
        />

        <Select
          label="Millas por año *"
          value={o.milesPerYear}
          onChange={(v) => updateOperation("milesPerYear", v)}
          options={[
            { label: "Selecciona", value: "" },
            { label: "0 – 50,000", value: "0_50K" },
            { label: "50,001 – 100,000", value: "50K_100K" },
            { label: "100,001 – 150,000", value: "100K_150K" },
            { label: "150,000+", value: "150K_PLUS" },
          ]}
        />
      </Grid2>

      <Select
        label="Radio de operación *"
        value={o.operationRadius}
        onChange={(v) => updateOperation("operationRadius", v)}
        options={[
          { label: "Selecciona", value: "" },
          { label: "Local (0–100 miles)", value: "LOCAL" },
          { label: "Regional (100–500 miles)", value: "REGIONAL" },
          { label: "Nacional (500+ miles)", value: "NATIONAL" },
        ]}
      />

      <CheckRow
        checked={o.ownerDrives}
        onChange={(val) => updateOperation("ownerDrives", val)}
        label="El owner principal conduce"
      />

      <NavBar>
        <GhostButton onClick={onBack}>Volver</GhostButton>
        <PrimaryButton disabled={!canContinue()} onClick={onNext}>
          Continuar
        </PrimaryButton>
      </NavBar>

      {!canContinue() && (
        <Hint>Completa todos los campos obligatorios para continuar.</Hint>
      )}
    </>
  );
}

/* =========================
   STEP 5 — INTERSTATE / MC AUTHORITY
========================= */
function StepInterstate({ data, setData, onNext, onBack }) {
  const i = data.interstate;

  function updateInterstate(field, value) {
    setData((prev) => ({
      ...prev,
      interstate: { ...prev.interstate, [field]: value },
    }));
  }

  function canContinue() {
    if (i.mcRequired && !i.plannedStartDate) return false;
    return true;
  }

  return (
    <>
      <Title>MC Authority (Interstate)</Title>
      <SubTitle>
        Esta sección solo aplica si operarás a nivel federal (Interstate).
      </SubTitle>

      <CheckRow
        checked={i.mcRequired}
        onChange={(val) => updateInterstate("mcRequired", val)}
        label="Requiero MC Authority (operación Interstate)"
      />

      {i.mcRequired && (
        <>
          <Input
            label="Fecha estimada de inicio de operaciones *"
            value={i.plannedStartDate}
            onChange={(v) => updateInterstate("plannedStartDate", v)}
            placeholder="YYYY-MM-DD"
          />

          <CheckRow
            checked={i.haulForHire}
            onChange={(val) => updateInterstate("haulForHire", val)}
            label="Transportaré carga de terceros (For-Hire)"
          />
        </>
      )}

      <TextArea
        label="Comentarios adicionales (opcional)"
        value={i.notes}
        onChange={(v) => updateInterstate("notes", v)}
        placeholder="Ej: Planeo iniciar con un contrato específico, o cambiar de intrastate a interstate."
      />

      <NavBar>
        <GhostButton onClick={onBack}>Volver</GhostButton>
        <PrimaryButton disabled={!canContinue()} onClick={onNext}>
          Continuar
        </PrimaryButton>
      </NavBar>

      {!canContinue() && (
        <Hint>
          Si requieres MC Authority, debes indicar la fecha estimada de inicio.
        </Hint>
      )}
    </>
  );
}


/* =========================
   STEP 6 — CONFIRMACIONES LEGALES
========================= */
function StepConfirm({ data, setData, onNext, onBack }) {
  const c = data.confirmations;

  function updateConfirm(field, value) {
    setData((prev) => ({
      ...prev,
      confirmations: { ...prev.confirmations, [field]: value },
    }));
  }

  function canContinue() {
    return c.feesUnderstanding && c.authorized && c.truthful;
  }

  return (
    <>
      <Title>Confirmaciones finales</Title>
      <SubTitle>
        Antes de continuar, necesitamos tu confirmación sobre estos puntos.
      </SubTitle>

      <CheckRow
        checked={c.feesUnderstanding}
        onChange={(val) => updateConfirm("feesUnderstanding", val)}
        label="Entiendo que los government fees (FMCSA, State, UCR, etc.) se pagan aparte y directamente en portales oficiales."
      />

      <CheckRow
        checked={c.authorized}
        onChange={(val) => updateConfirm("authorized", val)}
        label="Autorizo a Sovereign TruckGuard a gestionar y presentar registros administrativos en mi nombre."
      />

      <CheckRow
        checked={c.truthful}
        onChange={(val) => updateConfirm("truthful", val)}
        label="Confirmo que la información proporcionada es veraz y completa."
      />

      <Divider />

      <CheckRow
        checked={c.allowContact}
        onChange={(val) => updateConfirm("allowContact", val)}
        label="Acepto ser contactado por WhatsApp o email para seguimiento del proceso (opcional)."
      />

      <NavBar>
        <GhostButton onClick={onBack}>Volver</GhostButton>
        <PrimaryButton disabled={!canContinue()} onClick={onNext}>
          Continuar
        </PrimaryButton>
      </NavBar>

      {!canContinue() && (
        <Hint>
          Debes aceptar las confirmaciones obligatorias para continuar.
        </Hint>
      )}
    </>
  );
}

/* =========================
   STEP 7 — REVIEW FINAL (HUMANO)
========================= */
function StepReview({ data, onBack, onSubmit }) {
  const { company, names, owners, operation, interstate } = data;
  const owner = owners[0] || {};

  return (
    <>
      <Title>Revisión final</Title>
      <SubTitle>
        Revisa cuidadosamente la información antes de enviarla.  
        Si algo no está correcto, puedes volver y editarlo.
      </SubTitle>

      <SectionCard>
        <SectionTitle>Compañía</SectionTitle>
        <Row><b>Estructura legal:</b> {company.legalStructure}</Row>
        <Row><b>Estado:</b> {company.state}</Row>
        <Row><b>Email:</b> {company.businessEmail}</Row>
        <Row><b>Teléfono:</b> {company.businessPhone || "—"}</Row>
        <Row><b>Fecha de inicio:</b> {company.startDate}</Row>
      </SectionCard>

      <SectionCard>
        <SectionTitle>Nombres propuestos</SectionTitle>
        <Row>1. {names.name1}</Row>
        {names.name2 && <Row>2. {names.name2}</Row>}
        {names.name3 && <Row>3. {names.name3}</Row>}
      </SectionCard>

      <SectionCard>
        <SectionTitle>Owner principal</SectionTitle>
        <Row><b>Nombre:</b> {owner.fullName}</Row>
        <Row><b>Fecha de nacimiento:</b> {owner.dob}</Row>
        <Row><b>Participación:</b> {owner.ownershipPct}%</Row>
        <Row><b>Email:</b> {owner.email}</Row>
        <Row><b>Teléfono:</b> {owner.phone}</Row>
      </SectionCard>

      <SectionCard>
        <SectionTitle>Operación</SectionTitle>
        <Row><b>Tipo de carga:</b> {operation.cargoTypes}</Row>
        <Row><b>Camiones:</b> {operation.trucks}</Row>
        <Row>
          <b>Owner conduce:</b> {operation.ownerDrives ? "Sí" : "No"}
        </Row>
        <Row>
          <b>MC Authority:</b> {interstate.mcRequired ? "Requerida" : "No requerida"}
        </Row>
      </SectionCard>

      <Divider />

      <NavBar>
        <GhostButton onClick={onBack}>
          Editar información
        </GhostButton>
        <PrimaryButton onClick={onSubmit}>
          Enviar onboarding
        </PrimaryButton>
      </NavBar>

      <Hint>
        Al enviar esta información, un asesor de Sovereign TruckGuard
        validará los datos y continuará el proceso legal.
      </Hint>
    </>
  );
}

/* =========================
   UI HELPERS (PREMIUM)
========================= */

function Title({ children }) {
  return (
    <h2 style={{ margin: "6px 0 8px", fontSize: 22, color: colors.white }}>
      {children}
    </h2>
  );
}

function SubTitle({ children }) {
  return (
    <div style={{ marginBottom: 16, fontSize: 13, color: colors.soft, lineHeight: 1.6 }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div
      style={{
        marginBottom: 10,
        fontWeight: 900,
        color: colors.gold,
      }}
    >
      {children}
    </div>
  );
}

function SectionCard({ children }) {
  return (
    <div
      style={{
        border: `1px solid ${colors.border}`,
        borderRadius: 14,
        padding: 18,
        marginBottom: 18,
        background: "rgba(255,255,255,0.03)",
      }}
    >
      {children}
    </div>
  );
}

function Row({ children }) {
  return (
    <div
      style={{
        fontSize: 14,
        marginBottom: 6,
        color: "rgba(255,255,255,0.85)",
      }}
    >
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        height: 1,
        background: "rgba(255,255,255,0.08)",
        margin: "18px 0",
      }}
    />
  );
}

function NavBar({ children }) {
  return (
    <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
      {children}
    </div>
  );
}

function PrimaryButton({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "12px 18px",
        borderRadius: 999,
        border: "none",
        background: disabled
          ? "rgba(255,255,255,0.12)"
          : `linear-gradient(90deg, ${colors.gold}, ${colors.rose})`,
        color: disabled ? "rgba(255,255,255,0.6)" : "#000",
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
        padding: "12px 18px",
        borderRadius: 999,
        border: `1px solid ${colors.border}`,
        background: "rgba(0,0,0,0.25)",
        color: colors.white,
        fontWeight: 900,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {children}
    </button>
  );
}

function Hint({ children }) {
  return (
    <div style={{ marginTop: 14, fontSize: 12, color: colors.soft }}>
      {children}
    </div>
  );
}

/* =========================
   ESTILOS BASE
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
