import React, { useContext } from "react";
import Comp3 from "./Comp3";
import { Data, Data2 } from "./App";

function Comp2() {
  const [data1, setData1] = useContext(Data);
  const data2 = useContext(Data2);
  return (
    <div>
      <h1>{data1}</h1>
      <h1>{data2}</h1>
      <button onClick={() => setData1("Abhishek is a very bad boy")}>
        {" "}
        Click me
      </button>
      <h1>------------</h1>
      <Comp3 />
    </div>
  );
}

export default Comp2;
