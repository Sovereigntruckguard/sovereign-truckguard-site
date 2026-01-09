export const dynamic = "force-dynamic";

import { Suspense } from "react";
import OnboardingInterstateClient from "./ui";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <OnboardingInterstateClient />
    </Suspense>
  );
}

function Loading() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b0b0b", color: "#fff", padding: 40 }}>
      <h1>Cargando onboarding…</h1>
    </main>
  );
}
