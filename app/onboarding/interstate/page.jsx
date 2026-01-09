import { Suspense } from "react";
import OnboardingWizard from "./ui";

export const metadata = {
  title: "Onboarding Interstate | Sovereign TruckGuard",
};

export default function Page({ searchParams }) {
  const sessionId =
    typeof searchParams?.session_id === "string"
      ? searchParams.session_id
      : null;

  return (
    <Suspense fallback={<div style={{ color: "#fff", padding: 40 }}>Cargando onboarding…</div>}>
      <OnboardingWizard sessionId={sessionId} />
    </Suspense>
  );
}
