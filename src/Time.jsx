import React from "react";

let currentHour = new Date().getHours();
let cssStyle = {};
let greeting = "";
if (currentHour >= 1 && currentHour < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (currentHour >= 12 && currentHour < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

function Time() {
  return (
    <h1 className="heading">
      Welcome <span style={cssStyle}>{greeting}</span>
    </h1>
  );
}

export default Time;
