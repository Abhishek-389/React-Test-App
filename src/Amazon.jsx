import React from "react";
import Card from "./Card";
import data from "./data";
function Amazon() {
  return (
    <Card
      key={data[0].id}
      imageSrc={data[0].imageSrc}
      category={data[0].category}
      title={data[0].title}
      link={data[0].link}
    />
  );
}

export default Amazon;
