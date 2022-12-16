import React, { useContext, useEffect } from "react";
import Footer from "./components/footer/Footer.component";

import Movies from "./components/main/Movies.component";
import Navbar from "./components/navbar/Navbar.component";
import { MovieContext } from "./context/movie.context";

const App = () => {
  const { fetchMovies, movies, title } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Movies movies={movies} title={title} />
      <Footer />
    </div>
  );
};

export default App;
