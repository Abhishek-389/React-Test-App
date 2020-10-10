import React, { createContext } from "react";
import Comp1 from "./Comp1";

const Data = createContext();
const Data2 = createContext();
function App() {
  return (
    <>
      <Data.Provider value="Abhishek is a good boy">
        <Data2.Provider value="Abhishek is a bad boy">
          <Comp1 />
        </Data2.Provider>
      </Data.Provider>
    </>
  );
}

export default App;
export { Data, Data2 };
