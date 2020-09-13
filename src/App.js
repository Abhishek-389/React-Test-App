import React, { useState } from "react";
import "./App.css";
function App() {
  const [userName, setUserName] = useState("");
  return (
    <div className="container">
      <h1>
        Hello <span id="user"></span>
      </h1>
      <input
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        placeholder="Enter your username..."
        type="text"
      />
      <button
        onClick={() => {
          document.getElementById("user").innerHTML = userName;
          setUserName("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
