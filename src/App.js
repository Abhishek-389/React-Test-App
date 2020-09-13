import React, { useState } from "react";
import "./App.css";
function App() {
  const [bg, setBg] = useState("grey");
  const [text, setText] = useState("Wow 🚁");
  return (
    <div className="container" style={{ background: bg }}>
      <h1>{text}</h1>
      <button
        onClick={() => {
          setBg("red");
          setText("Amazing 🏺");
        }}
        onDoubleClick={() => {
          setBg("blue");
          setText("Shock 🏺");
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
