import React, { useState } from "react";
import "./App.css";
function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="app">
      <div className="container">
        <span>{value}</span>
        <div className="btn">
          <button onClick={(event) => setValue(value + 1)}>Incr</button>
          <button
            onClick={(event) =>
              value !== 0 ? setValue(value - 1) : alert("Reached zero")
            }
          >
            Desc
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
