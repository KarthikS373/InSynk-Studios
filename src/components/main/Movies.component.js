import React, { useState } from "react";

import styles from "./Movies.module.css";

import useModal from "../../hooks/useModal.hook";
import Movie from "./Movie.component";
import MovieModal from "../modals/MovieModal.component";

const Movies = ({ movies, title = "Most Recent Movies" }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { setModalState, isOpen } = useModal("Test", "app", "movie");

  return (
    <>
      <div className={styles.title}>
        {title.length === 0 ? "Most Recent Movies" : title}
      </div>
      <div className={styles.container}>
        {movies &&
          movies.map((movie) => (
            <Movie
              onClick={() => {
                setModalState(true);
                setSelectedMovie(movie);
              }}
              key={movie.id}
              movie={movie}
            />
          ))}
      </div>
      {isOpen && selectedMovie && (
        <MovieModal
          onClose={() => setModalState(false)}
          movie={selectedMovie}
        />
      )}
    </>
  );
};

export default Movies;
