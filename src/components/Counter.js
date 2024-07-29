import React, { useState } from 'react';
import './Counter.css'; // Importing the CSS file for styling

const Counter = () => {
  const [counter, setCounter] = useState(0); // Stating for counter value
  const [customValue, setCustomValue] = useState(1); // Stating for custom increment/decrement value

  // Increment counter by customValue
  const increment = () => setCounter(counter + customValue);
  // Decrement counter by customValue
  const decrement = () => setCounter(counter - customValue);
  // Reset counter to zero
  const reset = () => setCounter(0);

  // Handling change in customValue input
  const handleCustomValueChange = (event) => {
    setCustomValue(Number(event.target.value));
  };

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="counter-value">{counter}</div>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="custom-value">
        <label htmlFor="custom-value">Custom Increment/Decrement Value:</label>
        <input
          id="custom-value"
          type="number"
          value={customValue}
          onChange={handleCustomValueChange}
        />
      </div>
    </div>
  );
};

export default Counter;
