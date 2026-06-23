import { useState } from "react";

function App() {

  // Step 3: Create a state variable called count that starts at 0
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Step 4: Add a function called handleClick
  const handleIncrement = () => {
    setCount(count+1);
    setMessage('Count went up!');
  };

  const handleDecrement = () => {
    setCount(count-1);
    setMessage('Count went down!');
  };

  const handleReset = () => {
    setCount(0);
    setMessage('Reset!');
  };

  return (
    <>
    <div>
      {/* Step 5: Add a paragraph that displays the current count */}
      <h2>Count: {count}</h2>

      <p>{message}</p>

      {/* Step 6: Add an increment button */}
      <button onClick={handleIncrement}>Increment</button>

      {/* Step 8: Add a second button for decrement using an inline arrow function */}
      <button onClick={handleDecrement}>Decrement</button>

      <button onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}

export default App;