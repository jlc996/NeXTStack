import { useState } from "react";

// Step 1: Choices Array
const moves = ["Rock", "Paper", "Scissors"];

function App() {
  // Step 2: State Variables
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [score, setScore] = useState(0);

  // Step 3: Game Logic Function
  const playGame = (playerMove) => {
    const randomIndex = Math.floor(Math.random() * moves.length);
    const computerMove = moves[randomIndex];

    setPlayerChoice(playerMove);
    setComputerChoice(computerMove);

    // Determine winner
    if (
      (playerMove === "Rock" && computerMove === "Scissors") ||
      (playerMove === "Paper" && computerMove === "Rock") ||
      (playerMove === "Scissors" && computerMove === "Paper")
    ) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>React RPS Battle</h1>

      {/* Score Display */}
      <h2>Score: {score}</h2>

      {/* Step 4: Generate Buttons with .map() */}
      <div>
        {moves.map((move) => (
          <button
            key={move}
            onClick={() => playGame(move)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            {move}
          </button>
        ))}
      </div>

      {/* Conditional Rendering */}
      {playerChoice && (
        <div style={{ marginTop: "20px" }}>
          <h3>Your Choice: {playerChoice}</h3>
          <h3>Computer Choice: {computerChoice}</h3>
        </div>
      )}
    </div>
  );
}

export default App;