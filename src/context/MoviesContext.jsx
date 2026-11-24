
import { createContext, useContext, useState } from "react";
import defaultMovies from "../data/movies";

const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState(() => {
    try {
      const savedMovies = localStorage.getItem("movieboxMovies");
      return savedMovies ? JSON.parse(savedMovies) : defaultMovies;
    } catch {
      return defaultMovies;
    }
  });

  function saveMovies(updatedMovies) {
    setMovies(updatedMovies);
    localStorage.setItem("movieboxMovies", JSON.stringify(updatedMovies));
  }

  function addMovie(movie) {
    const newMovie = {
      ...movie,
      id: Date.now()
    };

    saveMovies([...movies, newMovie]);
  }

  function updateMovie(updatedMovie) {
    const updatedMovies = movies.map((movie) =>
      movie.id === updatedMovie.id ? updatedMovie : movie
    );

    saveMovies(updatedMovies);
  }

  function deleteMovie(id) {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    saveMovies(updatedMovies);
  }

  return (
    <MoviesContext.Provider
      value={{ movies, addMovie, updateMovie, deleteMovie }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  return useContext(MoviesContext);
}
