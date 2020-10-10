import React, { useState } from "react";
import "./App.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="app">
      <div className="container">
        <span>{value}</span>
        <div>
          <Tooltip title="Add">
            <Button className="btn" onClick={(event) => setValue(value + 1)}>
              <AddIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Sub">
            <Button
              className="btn"
              onClick={(event) =>
                value !== 0 ? setValue(value - 1) : alert("Reached zero")
              }
            >
              <RemoveIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default App;
