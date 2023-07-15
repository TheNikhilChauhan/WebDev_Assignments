import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <div className="counterBody">
        <div className="counterFace">{counter}</div>
        <div>
          <button className="btn" onClick={increment}>
            Increment
          </button>
          <button className="btn" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
