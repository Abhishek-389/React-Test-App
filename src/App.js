import React, { useState } from "react";
import "./App.css";
function App() {
  const [userDetail, setUserDetail] = useState({
    userName: "",
    userPassword: "",
    userEmail: "",
  });
  return (
    <form>
      <div className="container">
        <h1>
          Hello <span id="user"></span>
        </h1>
        <h3 id="userEmail"></h3>
        <input
          value={userDetail.userName}
          onChange={(event) =>
            setUserDetail({
              userName: event.target.value,
              userPassword: userDetail.userPassword,
              userEmail: userDetail.userEmail,
            })
          }
          placeholder="Enter your username..."
          type="text"
          name="userName"
        />
        <input
          value={userDetail.userEmail}
          onChange={(event) =>
            setUserDetail({
              userName: userDetail.userName,
              userPassword: userDetail.userPassword,
              userEmail: event.target.value,
            })
          }
          placeholder="Enter your email..."
          type="email"
          name="userPassword"
        />
        <input
          value={userDetail.userPassword}
          onChange={(event) =>
            setUserDetail({
              userName: userDetail.userName,
              userPassword: event.target.value,
              userEmail: userDetail.userEmail,
            })
          }
          placeholder="Enter your password..."
          type="password"
          name="userPassword"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            document.getElementById("user").innerHTML = userDetail.userName;
            document.getElementById("userEmail").innerHTML =
              userDetail.userEmail;
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
