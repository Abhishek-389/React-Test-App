import React from "react";
import ReactDom from "react-dom";

const fImage = "https://source.unsplash.com/300x300/?nature,water";
const sImage = "https://source.unsplash.com/300x300/?water,nature";
const tImage = "https://source.unsplash.com/300x300/?nature,beauty";

ReactDom.render(
  <>
    <h1>Welcome to Abhi Gallery </h1>
    <img src={fImage} alt="" />
    <img src={sImage} alt="" />
    <img src={tImage} alt="" />
  </>,
  document.getElementById("root")
);
