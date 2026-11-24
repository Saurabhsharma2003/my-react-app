
import { useState } from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies";
import "./Movies.css";

function Movies() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(movies.map((movie) => movie.category))
  ];

  const filteredMovies = movies.filter((movie) => {
    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || movie.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="movies-page">

      <h1>Explore All Movies 🎬</h1>
      <p>Discover your favourite movies</p>

      <div className="movie-controls">

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

      </div>

      <div className="movies-grid">

        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              className="movie-card"
              key={movie.id}
            >

              <img
                src={movie.image}
                alt={movie.title}
              />

              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.category}</p>
                <span>⭐ {movie.rating}</span>
              </div>

            </Link>
          ))
        ) : (
          <h2 className="no-movies">
            No Movies Found!
          </h2>
        )}

      </div>

    </div>
  );
}

export default Movies;
