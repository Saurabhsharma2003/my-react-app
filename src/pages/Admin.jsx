
import { useState } from "react";
import { useMovies } from "../context/MoviesContext";
import "./Admin.css";

const emptyForm = {
  title: "",
  category: "",
  year: "",
  rating: "",
  image: "",
  trailer: "",
  fullMovie: ""
};

function Admin() {
  const { movies, addMovie, updateMovie, deleteMovie } = useMovies();

  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const movieData = {
      ...form,
      year: Number(form.year),
      rating: String(form.rating)
    };

    if (editingId !== null) {
      updateMovie({
        ...movieData,
        id: editingId
      });

      alert("Movie updated successfully!");
    } else {
      addMovie(movieData);
      alert("Movie added successfully!");
    }

    setForm(emptyForm);
    setEditingId(null);
  }

  function handleEdit(movie) {
    setForm({
      title: movie.title || "",
      category: movie.category || "",
      year: String(movie.year || ""),
      rating: String(movie.rating || ""),
      image: movie.image || "",
      trailer: movie.trailer || "",
      fullMovie: movie.fullMovie || ""
    });

    setEditingId(movie.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this movie?"
    );

    if (confirmDelete) {
      deleteMovie(id);

      if (editingId === id) {
        setForm(emptyForm);
        setEditingId(null);
      }
    }
  }

  function cancelEdit() {
    setForm(emptyForm);
    setEditingId(null);
  }

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h1>Admin Dashboard 🎬</h1>
        <p>Manage your MovieBox collection</p>
      </div>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <h2>{movies.length}</h2>
          <p>Total Movies</p>
        </div>
      </div>

      <div className="admin-form-card">

        <h2>
          {editingId !== null ? "Update Movie" : "Add New Movie"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Movie Title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category (Action, Drama...)"
            value={form.category}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="year"
            placeholder="Release Year"
            value={form.year}
            onChange={handleChange}
            min="1888"
            max="2100"
            required
          />

          <input
            type="number"
            name="rating"
            placeholder="Rating (0 to 10)"
            value={form.rating}
            onChange={handleChange}
            min="0"
            max="10"
            step="0.1"
            required
          />

          <input
            type="url"
            name="image"
            placeholder="Movie Poster Image URL"
            value={form.image}
            onChange={handleChange}
            required
          />

          <h3>Trailer Video</h3>

          <input
            type="url"
            name="trailer"
            placeholder="YouTube Trailer Embed / Video URL"
            value={form.trailer}
            onChange={handleChange}
          />

          <h3>Full Movie Video</h3>

          <input
            type="url"
            name="fullMovie"
            placeholder="Full Movie Embed URL or MP4 URL"
            value={form.fullMovie}
            onChange={handleChange}
          />

          <p className="trailer-help">
            Paste an authorized video hosting Embed URL or direct MP4 URL.
          </p>

          <button type="submit" className="admin-submit-btn">
            {editingId !== null ? "Update Movie" : "Add Movie"}
          </button>

          {editingId !== null && (
            <button
              type="button"
              className="admin-cancel-btn"
              onClick={cancelEdit}
            >
              Cancel Edit
            </button>
          )}

        </form>
      </div>

      <div className="admin-movies-section">

        <h2>Manage Movies</h2>

        <div className="admin-movies-grid">

          {movies.map((movie) => (
            <div className="admin-movie-card" key={movie.id}>

              <img src={movie.image} alt={movie.title} />

              <div className="admin-movie-info">

                <h3>{movie.title}</h3>

                <p>{movie.category} • {movie.year}</p>

                <p>⭐ {movie.rating}/10</p>

                <p>
                  Trailer: {movie.trailer ? "Added" : "Not Added"}
                </p>

                <p>
                  Full Movie: {movie.fullMovie ? "Added" : "Not Added"}
                </p>

                <div className="admin-actions">

                  <button onClick={() => handleEdit(movie)}>
                    Edit
                  </button>

                  <button onClick={() => handleDelete(movie.id)}>
                    Delete
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Admin;


