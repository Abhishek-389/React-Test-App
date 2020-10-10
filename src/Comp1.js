import React, { useEffect, useState } from "react";
import Comp2 from "./Comp2";

function Comp1() {
  const [data1, setData1] = useState("I am the data from comp1 ");
  useEffect(() => {
    console.log("I am the useEffec of first coomp");
  });
  return (
    <div>
      <button
        onClick={() => {
          setData1(data1 + "a");
        }}
      >
        Click me from comp 1
      </button>
      <Comp2 />
    </div>
  );
}

export default Comp1;
