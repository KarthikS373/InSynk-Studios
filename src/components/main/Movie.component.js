import React from "react";

import styles from "./Movie.module.css";

const Movie = ({ movie, onClick }) => {
  const { backdrop_path, original_title, vote_average, poster_path } = movie;

  return (
    <span className={styles.container} onClick={onClick}>
      <span
        className={styles.backdrop}
        style={{
          backgroundImage: backdrop_path
            ? `url(https://image.tmdb.org/t/p/w500/${backdrop_path})`
            : poster_path && `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
        }}
      />
      <div className={styles.title}>{original_title}</div>
      <span className={styles.rating}>
        {Number.parseFloat(vote_average).toPrecision(2).toString()}
      </span>
    </span>
  );
};

export default Movie;
