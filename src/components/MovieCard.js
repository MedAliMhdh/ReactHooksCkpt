import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="MovieCard">
      <div className="Poster">{props.children}</div>
      <div className="MovieDescrip">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h3>{props.rate}/10</h3>
      </div>
    </div>
  );
};
export default MovieCard;
