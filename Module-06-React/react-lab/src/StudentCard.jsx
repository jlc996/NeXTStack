import React from "react";

export default function StudentCard({ name, cohort }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Cohort: {cohort}</p>
    </div>
  );
}