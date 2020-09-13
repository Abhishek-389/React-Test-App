import React, { useState } from "react";
import "./App.css";
function App() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  return (
    <form>
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
        <input
          value={userPassword}
          onChange={(event) => setUserPassword(event.target.value)}
          placeholder="Enter your password..."
          type="password"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            document.getElementById(
              "user"
            ).innerHTML = `${userName} ${userPassword}`;
            setUserName("");
            setUserPassword("");
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
