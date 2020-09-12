import React from "react";
import "./App.css";
import Slot from "./SlotMachine";
function App() {
  return (
    <div className="container">
      <h1>
        🎰 Welcome to <span>Slot machine 🎰</span>
      </h1>
      <div className="container__slot">
        <Slot x="😄" y="😄" z="😄" />
        <Slot x="😸" y="😄" z="😄" />
        <Slot x="😄" y="😄" z="😄" />
      </div>
    </div>
  );
}

export default App;
