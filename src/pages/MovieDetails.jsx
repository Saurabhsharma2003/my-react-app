
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useWatchlist } from "../context/WatchlistContext";
import { useMovies } from "../context/MoviesContext";
import { useAuth } from "../context/AuthContext";
import { useReviews } from "../context/ReviewsContext";

import "./MovieDetails.css";

// YouTube URL conversion
function getYouTubeEmbedUrl(url) {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^www\./, "");
    let videoId = "";

    if (host === "youtu.be") {
      videoId = parsedUrl.pathname.slice(1);
    } else if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "youtube-nocookie.com"
    ) {
      if (parsedUrl.pathname === "/watch") {
        videoId = parsedUrl.searchParams.get("v");
      } else if (
        parsedUrl.pathname.startsWith("/embed/") ||
        parsedUrl.pathname.startsWith("/shorts/")
      ) {
        videoId = parsedUrl.pathname.split("/")[2];
      }
    }

    if (!videoId) return url;

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return url;
  }
}

// Video type detection
function getVideoType(url) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.pathname.toLowerCase().endsWith(".mp4")) {
      return "mp4";
    }

    return "embed";
  } catch {
    return "embed";
  }
}

// Reusable video player
function VideoPlayer({ url, title }) {
  if (!url) return null;

  const videoType = getVideoType(url);

  if (videoType === "mp4") {
    return (
      <video
        controls
        playsInline
        preload="metadata"
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          background: "#000",
          borderRadius: "12px"
        }}
      >
        <source src={url} type="video/mp4" />
        Your browser does not support video playback.
      </video>
    );
  }

  return (
    <iframe
      src={getYouTubeEmbedUrl(url)}
      title={title}
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      style={{
        width: "100%",
        aspectRatio: "16 / 9",
        border: "none",
        borderRadius: "12px"
      }}
    />
  );
}

function MovieDetails() {
  const { id } = useParams();

  const { movies } = useMovies();
  const { user } = useAuth();
  const { reviews, addReview } = useReviews();

  const { watchlist, addToWatchlist, removeFromWatchlist } =
    useWatchlist();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    return <h1>Movie Not Found</h1>;
  }

  const isSaved = watchlist.some(
    (item) => item.id === movie.id
  );

  const movieReviews = reviews.filter(
    (review) => review.movieId === movie.id
  );

  const relatedMovies = movies.filter(
    (item) =>
      item.id !== movie.id &&
      item.category === movie.category
  );

  function handleReview(e) {
    e.preventDefault();

    if (!comment.trim()) {
      alert("Please write your review!");
      return;
    }

    addReview(movie.id, {
      email: user.email,
      rating,
      comment: comment.trim()
    });

    setRating(5);
    setComment("");

    alert("Review submitted successfully!");
  }

  return (
    <div className="details-page">

      <div className="details-container">

        <img
          className="details-poster"
          src={movie.image}
          alt={movie.title}
        />

        <div className="details-info">

          <h1>{movie.title}</h1>

          <p>Category: {movie.category}</p>
          <p>Release Year: {movie.year}</p>

          <h3>⭐ {movie.rating}/10</h3>

          <p>
            Enjoy this amazing movie on Saurabh PVR.
            Discover your favourite movies.
          </p>

          <button
            className="back-btn"
            onClick={() =>
              isSaved
                ? removeFromWatchlist(movie.id)
                : addToWatchlist(movie)
            }
          >
            {isSaved
              ? "❤️ Remove from Watchlist"
              : "🤍 Add to Watchlist"}
          </button>

          <Link to="/movies" className="back-btn">
            ← Back to Movies
          </Link>

        </div>
      </div>

      {/* Full Movie Player */}

      {movie.fullMovie && (
        <div className="trailer-section">
          <h2>▶ Watch Full Movie</h2>

          <VideoPlayer
            url={movie.fullMovie}
            title={`${movie.title} Full Movie`}
          />
        </div>
      )}

      {/* Trailer Player */}

      {movie.trailer && (
        <div className="trailer-section">
          <h2>🎬 Official Trailer</h2>

          <VideoPlayer
            url={movie.trailer}
            title={`${movie.title} Trailer`}
          />
        </div>
      )}

      {/* Related Movies */}

      <div className="related-movies-section">

        <h2>🎬 You May Also Like</h2>

        {relatedMovies.length === 0 ? (
          <p>No related movies available.</p>
        ) : (
          <div className="related-movies-grid">

            {relatedMovies.map((item) => (
              <Link
                to={`/movie/${item.id}`}
                className="related-movie-card"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <h3>{item.title}</h3>

                <p>⭐ {item.rating}/10</p>

              </Link>
            ))}

          </div>
        )}

      </div>

      {/* Reviews */}

      <div className="reviews-section">

        <h2>⭐ Movie Reviews & Ratings</h2>

        {user ? (
          <form onSubmit={handleReview}>

            <h3>Give Your Rating</h3>

            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={star <= rating ? "active-star" : ""}
                >
                  ★
                </button>
              ))}
            </div>

            <textarea
              placeholder="Write your review..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />

            <button type="submit" className="back-btn">
              Submit Review
            </button>

          </form>
        ) : (
          <p>
            Please <Link to="/login">Login</Link> to write a review.
          </p>
        )}

        <h3>All Reviews ({movieReviews.length})</h3>

        {movieReviews.length === 0 ? (
          <p>No reviews yet. Be the first to review!</p>
        ) : (
          movieReviews.map((review) => (
            <div className="review-card" key={review.id}>

              <h4>{review.email}</h4>

              <p className="review-rating">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </p>

              <p>{review.comment}</p>

              <small>{review.date}</small>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default MovieDetails;
