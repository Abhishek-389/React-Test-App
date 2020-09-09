import React from "react";
import Card from "./Card";
import "./App.css";
import data from "./data";
function App() {
  return (
    <>
      <div className="cards">
        {data.map((obj) => (
          <Card
            imageSrc={obj.imageSrc}
            category={obj.category}
            title={obj.title}
            link={obj.link}
          />
        ))}
      </div>
    </>
  );
}

export default App;
