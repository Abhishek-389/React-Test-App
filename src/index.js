import React from "react";
import ReactDom from "react-dom";

const fName = "Abhishek";
const lName = "Yadav";
//js expresion
// ReactDom.render(
//   <h1>
//     My first name is {fName} and my last name is {lName} .
//   </h1>,
//   document.getElementById("root")
// );

//js template literals
ReactDom.render(
  <h1>{`My first name is ${fName} and my last name is ${lName} !got it. !!!!! and my favourite number is ${Math.random()} and my favourite sum is ${
    4 + 4
  }`}</h1>,
  document.getElementById("root")
);
