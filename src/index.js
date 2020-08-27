import React from "react";
import ReactDom from "react-dom";

let dateobj = String(new Date());
let dateobj2 = new Date();
ReactDom.render(
  <>
    <h1>Hello Abhi</h1>
    <p>Toady's date is {`${dateobj.slice(0, 15)}`}</p>
    <p>Current Time is {`${dateobj.slice(16, 24)}`}</p>

    <h1>As expected</h1>
    <p>Toady's date is {`${dateobj2.toLocaleDateString()}`}</p>
    <p>Toady's date is {`${dateobj2.toLocaleTimeString()}`}</p>
  </>,
  document.getElementById("root")
);
