import React from "react";
import Card from "./Card";
import data from "./data";

function Netflix() {
  return (
    <Card
      key={data[1].id}
      imageSrc={data[1].imageSrc}
      category={data[1].category}
      title={data[1].title}
      link={data[1].link}
    />
  );
}

export default Netflix;
