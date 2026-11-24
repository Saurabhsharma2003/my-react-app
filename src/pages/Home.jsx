
import { Link } from "react-router-dom";
import { useMovies } from "../context/MoviesContext";
import "./Home.css";

function Home() {
  const { movies } = useMovies();

  const featuredMovie = movies[0];

  const popularMovies = [...movies].sort(
    (a, b) => Number(b.rating || 0) - Number(a.rating || 0)
  );

  const categories = [
    "Action",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Sports",
    "Romance"
  ];

  return (
    <div className="home">

      {/* HERO SECTION */}

      {featuredMovie ? (
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(90deg, #080808 5%, rgba(8,8,8,0.85) 45%, rgba(8,8,8,0.2)), url("${featuredMovie.image}")`
          }}
        >
          <div className="hero-content">

            <span className="hero-badge">
              <span>●</span> WELCOME TO SAURABH PVR
            </span>

            <h1>{featuredMovie.title}</h1>

            <div className="hero-meta">
              <span>⭐ {featuredMovie.rating}/10</span>
              <span>{featuredMovie.year}</span>
              <span>{featuredMovie.category}</span>
            </div>

            <p>
              Discover amazing movies, explore new stories
              and enjoy unlimited entertainment.
            </p>

            <div className="hero-buttons">

              <Link
                to={`/movie/${featuredMovie.id}`}
                className="hero-watch-btn"
              >
                ▶ Watch Now
              </Link>

              <Link
                to="/movies"
                className="hero-explore-btn"
              >
                Explore Movies
              </Link>

            </div>

          </div>

          <div className="hero-bottom">
            YOUR ENTERTAINMENT. YOUR WORLD.
          </div>
        </section>
      ) : (
        <section className="hero hero-empty">
          <div className="hero-content">
            <span className="hero-badge">
              WELCOME TO SAURABH PVR
            </span>
            <h1>Unlimited Movies.<br />Unlimited Entertainment.</h1>
            <p>Movies will appear here when added.</p>
            <Link to="/movies" className="hero-watch-btn">
              Explore Movies
            </Link>
          </div>
        </section>
      )}

      {/* CATEGORY SECTION */}

      <section className="category-section">

        <h2>Explore Categories</h2>

        <div className="category-list">
          {categories.map((category) => (
            <Link
              to="/movies"
              className="category-chip"
              key={category}
            >
              {category}
              <span>→</span>
            </Link>
          ))}
        </div>

      </section>

      {/* TRENDING MOVIES */}

      <section className="home-movie-section">

        <div className="section-heading">
          <div>
            <span className="section-subtitle">WHAT'S HOT</span>
            <h2>🔥 Trending Movies</h2>
          </div>

          <Link to="/movies" className="view-all">
            View All →
          </Link>
        </div>

        <div className="home-movie-grid">

          {movies.slice(0, 6).map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              className="home-movie-card"
              key={movie.id}
            >
              <div className="home-poster-wrapper">

                <img
                  src={movie.image}
                  alt={movie.title}
                />

                <span className="poster-rating">
                  ⭐ {movie.rating}
                </span>

                <div className="poster-overlay">
                  <span>▶ View Details</span>
                </div>

              </div>

              <div className="home-movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.category} • {movie.year}</p>
              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* TOP RATED MOVIES */}

      <section className="home-movie-section top-rated-section">

        <div className="section-heading">
          <div>
            <span className="section-subtitle">BEST OF MOVIEBOX</span>
            <h2>⭐ Top Rated Movies</h2>
          </div>

          <Link to="/movies" className="view-all">
            View All →
          </Link>
        </div>

        <div className="home-movie-grid">

          {popularMovies.slice(0, 4).map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              className="home-movie-card"
              key={movie.id}
            >
              <div className="home-poster-wrapper">

                <img
                  src={movie.image}
                  alt={movie.title}
                />

                <span className="poster-rating">
                  ⭐ {movie.rating}
                </span>

                <div className="poster-overlay">
                  <span>▶ View Details</span>
                </div>

              </div>

              <div className="home-movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.category} • {movie.year}</p>
              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* FOOTER BANNER */}

      <section className="home-banner">

        <div>
          <span>YOUR NEXT FAVOURITE MOVIE IS WAITING</span>
          <h2>Every Movie Has a Story.</h2>
          <p>Find yours on Saurabh PVR.</p>
        </div>

        <Link to="/movies">
          Explore Collection →
        </Link>

      </section>

    </div>
  );
}

export default Home;
