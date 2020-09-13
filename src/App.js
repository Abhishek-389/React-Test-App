import React, { useState } from "react";
import "./App.css";
function App() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  const timeHandler = () => {
    setDate(new Date().toLocaleTimeString());
  };

  return (
    <div className="container">
      <h1 style={{ fontWeight: "lighter", padding: "16px" }}>{date}</h1>
      <button onClick={timeHandler}>Click</button>
    </div>
  );
}

export default App;
