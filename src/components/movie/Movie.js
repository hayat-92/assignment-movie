import React from "react";
import "./movie.css";
import imgx from "../../images/logo.png";
import Modal from "../modal/Modal";
import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

const Movie = () => {
  const [openModal, setOpenModal] = useState(false);
  const [movies, setMovies] = useState([]);
  const [curr_movie, setcurr_Movie] = useState({});
  let debounceTimeout;

  const searchMovie = async (val) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${val}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const searchAll = async (val) => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const debounceSearch = (event) => {
    let val = event.target.value;
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(() => {
      {
        if (val.length == 0) {
          searchAll();
        } else {
          searchMovie(val);
        }
      }
    }, 300);
  };

  useEffect(() => {
    searchAll();
  }, []);

  useEffect(() => {
    if (Object.keys(curr_movie).length == 0) {
      console.log(curr_movie);
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  }, [curr_movie]);

  return (
    <div className="parent">
      {openModal && <Modal closeModal={setcurr_Movie} movie={curr_movie} />}
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={imgx} />{" "}
          </div>
          <div className="input">
            <form class="nosubmit">
              <input
                class="nosubmit"
                type="search"
                placeholder="Search for a movie"
                onChange={(e) => {
                  debounceSearch(e);
                }}
              />
            </form>
          </div>
        </div>
        <div className="movie-grid">
          <div className="grid-title">Most Recent Movies</div>
          <div className="grid">
            {!!movies
              ? movies.map((movie) => (
                  <div
                    className="col"
                    onClick={() => {
                      setcurr_Movie(movie);
                    }}
                  >
                    <MovieCard movie={movie} />
                  </div>
                ))
              : ""}
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
