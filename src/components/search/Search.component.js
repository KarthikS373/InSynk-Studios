import React, { useContext, useEffect, useRef, useState } from "react";
import { MdCleaningServices, MdSearch } from "react-icons/md";

import styles from "./Search.module.css";

import fetchSearch from "../../models/getSearch.data";
import { MovieContext } from "../../context/movie.context";

const Search = () => {
  const [search, setSearch] = useState("");
  const [completeFlag, setCompleteFlag] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const inputRef = useRef();

  const { setTitle, setMovies, fetchMovies, title } = useContext(MovieContext);

  const fetchAndUpdate = (callback) => {
    if (search && search.length > 3 && !completeFlag) {
      fetchSearch(search)
        .then((res) => callback(res))
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    setRecommendations([]);
    const interval = setTimeout(() => {
      fetchAndUpdate((res) => {
        console.log(res.results);
        setRecommendations(res.results);
      });
    }, 1000);

    const searchTimeOut = setTimeout(() => {
      fetchAndUpdate((res) => {
        setTitle(`Search : ${search}`);
        setMovies(res.results);
      });
    }, 3000);

    return () => {
      clearTimeout(interval);
      clearTimeout(searchTimeOut);
    };
  }, [completeFlag, search]);

  useEffect(() => {
    if (search === "" && title !== "Most Recent Movies") {
      setTimeout(() => {
        fetchMovies();
      }, 1000);
    }
  }, [search]);

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <MdSearch size={22} className={styles.icon} color={"#898E9A"} />
        <input
          ref={inputRef}
          value={search}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("Searching for " + search);
              fetchSearch(search)
                .then((res) => {
                  setTitle(`Search : ${search}`);
                  setMovies(res.results);
                  setRecommendations([]);
                  setCompleteFlag(true);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className={styles.input}
          placeholder="Search for a movie"
        />
      </div>
      {recommendations && recommendations.length > 0 && (
        <div className={styles.recommendation}>
          {recommendations.map((movie) => {
            return (
              <div
                key={movie.id}
                className={styles.recommendCard}
                onClick={() => {
                  setSearch(movie.title);
                  setCompleteFlag(true);
                  fetchSearch(movie.title)
                    .then((res) => {
                      setTitle(`Search : ${movie.title}`);
                      setMovies(res.results);
                    })
                    .catch((err) => console.log(err));
                  inputRef.current.focus();
                }}
              >
                {movie.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
