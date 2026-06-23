import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import StudentCard from "./StudentCard";
import StatusBoard from "./StatusBoard";
import Counter from "./Counter";
import IntegrationChallenge from "./IntegrationChallenge";

export default function App() {
  return (
    <div>
      <WelcomeBanner />

      <h1>NeXTStack Directory</h1>
      <StudentCard
        name="Windie"
        cohort="2026"
      />

      <StatusBoard />

      <Counter />

      <IntegrationChallenge />
    </div>
  );
}