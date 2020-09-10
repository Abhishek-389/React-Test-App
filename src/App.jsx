import React from "react";
import Card from "./Card";
import "./App.css";
import data from "./data";
import Amazon from "./Amazon";
import Netflix from "./Netflix";

function App() {
  const userChoice = "netflix";
  return (
    <>
      <div className="cards">
        {userChoice === "amazon" ? <Amazon /> : <Netflix />}
        {/* {data.map((obj) => (
          <Card
            key={obj.id}
            imageSrc={obj.imageSrc}
            category={obj.category}
            title={obj.title}
            link={obj.link}
          />
        ))} */}
      </div>
    </>
  );
}

export default App;
