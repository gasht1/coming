import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./Moviecard";

import SearchIcon from "@mui/icons-material/Search";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
const App = () => {
  const [movies, setmovie] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`);
    const data = await response.json();
    setmovie(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>movies land</h1>
      <div className="search">
        <input
          placeholder="searcgh for movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <SearchIcon
          sx={{ fontSize: 30, color: "white" }}
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>no movie found</h1>
        </div>
      )}
    </div>
  );
};

export default App;
