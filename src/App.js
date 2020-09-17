import React, { useState } from "react";
import "./App.css";
function App() {
  const [userDetail, setUserDetail] = useState({
    userName: "",
    userPassword: "",
    userPhone: "",
    userEmail: "",
  });
  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserDetail((previousData) => {
      return {
        ...previousData,
        [name]: value,
      };
    });
  };
  return (
    <form>
      <div className="container">
        <h1>
          Hello <span id="user"></span>
        </h1>
        <h3 id="userEmail"></h3>
        <h3 id="userPhone"></h3>
        <input
          value={userDetail.userName}
          onChange={handleInput}
          placeholder="Enter your username..."
          type="text"
          name="userName"
        />
        <input
          value={userDetail.userEmail}
          onChange={handleInput}
          placeholder="Enter your email..."
          type="email"
          name="userEmail"
        />
        <input
          value={userDetail.userPassword}
          onChange={handleInput}
          placeholder="Enter your password..."
          type="password"
          name="userPassword"
        />
        <input
          value={userDetail.userPhone}
          onChange={handleInput}
          placeholder="Enter your phone number..."
          type="number"
          name="userPhone"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            document.getElementById("user").innerHTML = userDetail.userName;
            document.getElementById("userEmail").innerHTML =
              userDetail.userEmail;
            document.getElementById("userPhone").innerHTML =
              userDetail.userPhone;
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
