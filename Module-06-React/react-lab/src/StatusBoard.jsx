import React, { useState } from "react";

export default function StatusBoard() {
  const [status, setStatus] = useState("Online");

  return (
    <div>
      <h2>System Status</h2>
      <p>Current Status: {status}</p>
    </div>
  );
}