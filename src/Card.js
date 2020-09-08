import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <div className="card__content">
        <img src={props.imageSrc} alt="" className="card__img" />
        <div className="card__info">
          <span className="card__category">{props.category}</span>
          <h3 className="card__title">{props.title}</h3>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
