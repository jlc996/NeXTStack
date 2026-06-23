// Import the useState Hook from React
// useState allows us to store and update data in our component
import { useState } from "react";

// ==============================
// AVAILABLE GAME MOVES
// ==============================
// This array contains the possible choices
// for both the player and computer.
const moves = ["Rock", "Paper", "Scissors"];

function App() {
  // ==============================
  // STATE VARIABLES
  // ==============================

  // Stores the player's selected move
  const [playerChoice, setPlayerChoice] = useState("");

  // Stores the computer's randomly selected move
  const [computerChoice, setComputerChoice] = useState("");

  // Keeps track of the player's score
  const [score, setScore] = useState(0);

  // ==============================
  // GAME LOGIC
  // ==============================
  // This function runs whenever a player
  // clicks one of the game buttons.
  const playGame = (playerMove) => {

    // Generate a random number between 0 and 2
    const randomIndex = Math.floor(Math.random() * moves.length);

    // Use the random number to select
    // a move from the moves array
    const computerMove = moves[randomIndex];

    // Save the player's choice in state
    setPlayerChoice(playerMove);

    // Save the computer's choice in state
    setComputerChoice(computerMove);

    // ==============================
    // DETERMINE THE WINNER
    // ==============================
    // If the player wins, increase score by 1
    if (
      (playerMove === "Rock" && computerMove === "Scissors") ||
      (playerMove === "Paper" && computerMove === "Rock") ||
      (playerMove === "Scissors" && computerMove === "Paper")
    ) {
      // Use the previous score value and add 1
      setScore((prevScore) => prevScore + 1);
    }
  };

  // ==============================
  // COMPONENT UI
  // ==============================
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>

      {/* Application Title */}
      <h1>React RPS Battle</h1>

      {/* Display the current score */}
      <h2>Score: {score}</h2>

      {/* ==========================
          GAME BUTTONS
          ==========================

          Use .map() to loop through
          the moves array and create
          one button for each move.
      */}
      <div>
        {moves.map((move) => (
          <button
            key={move}

            // When clicked, call playGame()
            // and pass in the selected move
            onClick={() => playGame(move)}

            // Inline styling for spacing
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

      {/* ==========================
          CONDITIONAL RENDERING
          ==========================

          Only display the choices
          after the player has selected
          a move.
      */}
      {playerChoice && (
        <div style={{ marginTop: "20px" }}>

          {/* Show the player's choice */}
          <h3>Your Choice: {playerChoice}</h3>

          {/* Show the computer's choice */}
          <h3>Computer Choice: {computerChoice}</h3>

        </div>
      )}
    </div>
  );
}

// Export the component so it can be used
// by main.jsx and rendered in the browser
export default App;