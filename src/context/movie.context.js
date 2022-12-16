import { createContext, useState } from "react";

import fetchRecentMovies from "../models/getRecentMovies.data";

export const MovieContext = createContext({
  movies: [],
  setMovies: () => null,
  title: "",
  fetchMovies: () => null,
});

export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  const fetchMovies = () => {
    fetchRecentMovies
      .then((res) => {
        setTitle("Most Recent Movies");
        setMovies(res.results);
      })
      .catch((err) => {
        console.warn("An error occured while fetching movies \n" + err.message);
      });
  };

  const value = {
    movies: movies,
    setMovies: setMovies,
    title: title,
    setTitle: setTitle,
    fetchMovies: fetchMovies,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
