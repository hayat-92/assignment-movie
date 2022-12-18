import React, { useEffect } from "react";
import "./Modal.css";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
const Modal = (props) => {
  console.log(props.movie);
  const title = props.movie.title;
  const overview = props.movie.overview;
  const vote_average = props.movie.vote_average;
  const poster_path = props.movie.poster_path;
  const release_date = props.movie.release_date;
  const vote_count = props.movie.vote_count;
  useEffect(() => {
    if (props.movie == undefined) {
      console.log("Faisal Hassan");
      props.closeModal(false);
    }
  }, []);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal-nav">
          <div className="modal-title">{title}</div>
          <div className="titleCloseBtn">
            <button onClick={() => props.closeModal({})}>X</button>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-img">
            <img src={API_IMG + poster_path} />
          </div>
          <div className="modal-details">
            <div className="release-date">
              <b>Release Date: </b>
              {release_date}
            </div>
            <div className="overview">{overview}</div>
            <div className="sub-detail">
              <b>{vote_average}</b>
              {` / 10 (${vote_count} total votes)`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
