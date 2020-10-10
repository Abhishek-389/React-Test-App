import React, { useState } from "react";
import "./App.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="app">
      <div className="container">
        <span>{value}</span>
        <div className="btn">
          <button onClick={(event) => setValue(value + 1)}>
            <AddIcon />
          </button>
          <button
            onClick={(event) =>
              value !== 0 ? setValue(value - 1) : alert("Reached zero")
            }
          >
            <RemoveIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
