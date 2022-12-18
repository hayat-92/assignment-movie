import React from "react";
import "./MovieCard.css";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieCard = (props) => {
  const title = props.movie.title;
  const path = props.movie.poster_path;
  const rate = props.movie.vote_average;
  return (
    <div className="cards_item">
      <div className="card">
        <div className="card_image">
          <div className="property-tag">{rate}</div>
          <img alt="Palace" src={API_IMG + path} />
        </div>
        <div className="card_content">
          <div className="movie-title">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
