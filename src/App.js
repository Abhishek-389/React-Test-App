import React, { useState } from "react";
import "./App.css";
function App() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  setTimeout(() => {
    setDate(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="container">
      <h1 style={{ fontWeight: "lighter", padding: "16px", fontSize: "9rem" }}>
        {date}
      </h1>
    </div>
  );
}

export default App;
