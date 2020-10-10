import React, { useEffect, useState } from "react";
import Comp3 from "./Comp3";

function Comp2() {
  const [data2, setData2] = useState("I am the data from comp2");
  useEffect(() => {
    console.log("I am the useEffec of second coomp");
  });
  return (
    <div>
      <button
        onClick={() => {
          setData2(data2 + "a");
        }}
      >
        Click me from comp 2
      </button>
      <Comp3 />
    </div>
  );
}

export default Comp2;
