import React from "react";
import Card from "./Card";
import "./App.css";
import data from "./data";
function App() {
  return (
    <>
      <div className="cards">
        <Card
          imageSrc={data[0].imageSrc}
          category={data[0].category}
          title={data[0].title}
          link={data[0].link}
        />
        <Card
          imageSrc={data[1].imageSrc}
          category={data[1].category}
          title={data[1].title}
          link={data[1].link}
        />
        <Card
          imageSrc={data[2].imageSrc}
          category={data[2].category}
          title={data[2].title}
          link={data[2].link}
        />
      </div>
      <div className="cards">
        <Card
          imageSrc={data[3].imageSrc}
          category={data[3].category}
          title={data[3].title}
          link={data[3].link}
        />
        <Card
          imageSrc={data[4].imageSrc}
          category={data[4].category}
          title={data[4].title}
          link={data[4].link}
        />
      </div>
    </>
  );
}

export default App;
