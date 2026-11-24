
import { Link } from "react-router-dom";
import { useWatchlist } from "../context/WatchlistContext";
import "./Watchlist.css";

function Watchlist() {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  return (
    <div className="watchlist-page">

      <h1>My Watchlist ❤️</h1>
      <p>Your favourite movies in one place</p>

      {watchlist.length === 0 ? (
        <div className="empty-watchlist">
          <h2>Your Watchlist is Empty!</h2>
          <p>Add your favourite movies to watch them later.</p>
          <Link to="/movies">Explore Movies</Link>
        </div>
      ) : (

        <div className="movies-grid">

          {watchlist.map((movie) => (
            <div className="movie-card" key={movie.id}>

              <Link to={`/movie/${movie.id}`}>
                <img src={movie.image} alt={movie.title} />
              </Link>

              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.category}</p>
                <span>⭐ {movie.rating}</span>

                <button
                  className="remove-btn"
                  onClick={() => removeFromWatchlist(movie.id)}
                >
                  Remove ❤️
                </button>
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Watchlist;
