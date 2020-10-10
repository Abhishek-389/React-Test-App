import React, { useEffect, useState } from "react";

function Comp3() {
  const [data3, setData3] = useState("I am the data3 from comp3");
  useEffect(() => {
    console.log("I am the useEffec of third coomp");
  });
  return (
    <div>
      <button
        onClick={() => {
          setData3(data3 + "a");
        }}
      >
        Click me from comp 3
      </button>
    </div>
  );
}

export default Comp3;
