import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const fImage = "https://source.unsplash.com/300x300/?nature,water";
const sImage = "https://source.unsplash.com/300x300/?water,nature";
const tImage = "https://source.unsplash.com/300x300/?nature,beauty";
//interal css
const heading = {
  width: "30%",
  color: "#192a56",
  margin: "50px auto",
  fontWeight: "800",
  padding: "10px",
  fontFamily: '"Noto Sans TC", sans-serif',
  boxShadow: "2px 2px 3px rgb(107, 100, 100), -2px -2px 3px rgb(107, 100, 100)",
};

ReactDom.render(
  <>
    <h1
    //inline  css
      style={{
        width: "30%",
        color: "#192a56",
        margin: "50px auto",
        fontWeight: "800",
        padding: "10px",
        fontFamily: '"Noto Sans TC", sans-serif',
        boxShadow:
          "2px 2px 3px rgb(107, 100, 100), -2px -2px 3px rgb(107, 100, 100)",
      }}
    >
      Welcome to Abhi Gallery{" "}
    </h1>
    <div className="imageContainer">
      <img src={fImage} alt="" />
      <img src={sImage} alt="" />
      <img src={tImage} alt="" />
    </div>
  </>,

  document.getElementById("root")
);
