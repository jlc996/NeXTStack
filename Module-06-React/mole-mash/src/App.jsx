// App.jsx

import { useState } from "react";
import Hole from "./Hole";
import "./App.css";

export default function App() {
  // Track which hole currently contains the mole
  const [activeHole, setActiveHole] = useState(null);

  // Track the player's score
  const [score, setScore] = useState(0);

  // Spawn a mole in a random hole
  const spawnMole = () => {
    const randomIndex = Math.floor(Math.random() * 9);

    setActiveHole(randomIndex);

    // Hide the mole after 1 second
    setTimeout(() => {
      setActiveHole(null);
    }, 1000);
  };

  // Handle player clicking a hole
  const handleMoleClick = (index) => {
    if (index === activeHole) {
      setScore((prevScore) => prevScore + 1);
      setActiveHole(null);
    }
  };

  return (
    <div className="container text-center py-5">
      {/* Game Title */}
      <h1 className="mb-3">Mole Hole</h1>

      {/* Score Display */}
      <h2 className="mb-4">Score: {score}</h2>

      {/* Spawn Mole Button */}
      <button
        className="btn btn-primary mb-4"
        onClick={spawnMole}
      >
        Spawn Mole
      </button>

      {/* Game Board */}
      <div className="card shadow p-4 mx-auto">
        <div className="row g-3 justify-content-center">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="col-auto"
            >
              <Hole
                isActive={index === activeHole}
                onClick={() => handleMoleClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}