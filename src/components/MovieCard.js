import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="MovieCard">
      <div>{props.children}</div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h3>{props.rate}</h3>
    </div>
  );
};
export default MovieCard;
