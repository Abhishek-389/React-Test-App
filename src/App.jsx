import React from "react";
import { sum, diff, mul, quot } from "./calculator";
function App() {
  return (
    <>
      <h2>The sum is {sum(3, 5)}</h2>
      <h2>The difference is {diff(3, 5)}</h2>
      <h2>The product is {mul(3, 5)}</h2>
      <h2>The quotient is {quot(10, 3).toFixed(2)}</h2>
    </>
  );
}

export default App;
