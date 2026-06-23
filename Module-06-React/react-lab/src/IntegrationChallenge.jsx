import React, { useState } from "react";

// Child Component
function ControlPanel({ count, setCount }) {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h3>Dashboard Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment from Child
      </button>
    </div>
  );
}

// Parent Component
export default function IntegrationChallenge() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Integration Challenge</h2>

      <ControlPanel
        count={count}
        setCount={setCount}
      />
    </div>
  );
}