// import React from "react";
// import ReactDom from "react-dom";

//React code which get translated using babel
// ReactDom.render(<h1>Hello World Abhi.</h1>, document.getElementById("root"));

//pure code translated by babel
// ReactDom.render(
//   /*#__PURE__*/ React.createElement("h1", null, "Hello World Abhi."),
//   document.getElementById("root")
// );

//custom code
let h1 = document.createElement("h1");
h1.innerHTML = "Hello Abhi";
document.getElementById("root").appendChild(h1);
