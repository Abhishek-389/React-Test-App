import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const fImage = "https://source.unsplash.com/300x300/?nature,water";
const sImage = "https://source.unsplash.com/300x300/?water,nature";
const tImage = "https://source.unsplash.com/300x300/?nature,beauty";

ReactDom.render(
  <>
    <h1 className="heading">Welcome to Abhi Gallery </h1>
    <div className="imageContainer">
      <img src={fImage} alt="" />
      <img src={sImage} alt="" />
      <img src={tImage} alt="" />
    </div>
  </>,

  document.getElementById("root")
);
