import React, { createContext, useState } from "react";
import Comp1 from "./Comp1";

const Data = createContext();
const Data2 = createContext();
function App() {
  const [Data1, setData1] = useState("Abhishek is a good boy");
  return (
    <>
      <Data.Provider value={[Data1, setData1]}>
        <Data2.Provider value="Abhishek is a bad boy">
          <Comp1 />
        </Data2.Provider>
      </Data.Provider>
    </>
  );
}

export default App;
export { Data, Data2 };
