import React from "react";
import { Data, Data2 } from "./App";
function Comp3() {
  return (
    <div>
      <Data.Consumer>
        {(data) => {
          return (
            <>
              <h1>{data}</h1>
              <Data2.Consumer>
                {(data2) => {
                  return <h2>{data2}</h2>;
                }}
              </Data2.Consumer>
              ;
            </>
          );
        }}
      </Data.Consumer>
    </div>
  );
}

export default Comp3;
