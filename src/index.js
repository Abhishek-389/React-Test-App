import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const currentHour = new Date().getHours();
let greeting = "";
let cssStyle = {};

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

ReactDom.render(
  <>
    <h1 className="heading">
      Welcome Sir
      <span style={cssStyle}>{" " + greeting}</span>
    </h1>
  </>,

  document.getElementById("root")
);
