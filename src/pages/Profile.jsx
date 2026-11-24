
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { useReviews } from "../context/ReviewsContext";
import { useMovies } from "../context/MoviesContext";

import "./Profile.css";

function Profile() {
  const { user, logout } = useAuth();

  const {
    reviews,
    updateReview,
    deleteReview
  } = useReviews();

  const { movies } = useMovies();

  const navigate = useNavigate();

  const [name, setName] = useState(() => {
    return (
      localStorage.getItem(`movieboxName_${user?.email}`) ||
      "Movie Lover"
    );
  });

  const [editMode, setEditMode] = useState(false);

  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editComment, setEditComment] = useState("");
  const [editRating, setEditRating] = useState(5);

  const myReviews = reviews.filter(
    (review) => review.email === user?.email
  );

  function saveName() {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    localStorage.setItem(
      `movieboxName_${user.email}`,
      name.trim()
    );

    setName(name.trim());
    setEditMode(false);

    alert("Profile updated successfully!");
  }

  function handleLogout() {
    logout();
    navigate("/");
  }

  // Start Editing Review
  function handleEdit(review) {
    setEditingReviewId(review.id);
    setEditComment(review.comment);
    setEditRating(review.rating);
  }

  // Save Updated Review
  function handleUpdateReview(reviewId) {
    if (!editComment.trim()) {
      alert("Please enter your review");
      return;
    }

    updateReview(reviewId, {
      comment: editComment.trim(),
      rating: editRating
    });

    setEditingReviewId(null);

    alert("Review updated successfully!");
  }

  // Delete Review
  function handleDeleteReview(reviewId) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (confirmDelete) {
      deleteReview(reviewId);
      alert("Review deleted successfully!");
    }
  }

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-avatar">
          {name.charAt(0).toUpperCase()}
        </div>

        <h1>My Profile</h1>

        {editMode ? (
          <div className="profile-edit">

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />

            <button onClick={saveName}>Save</button>

            <button onClick={() => setEditMode(false)}>
              Cancel
            </button>

          </div>
        ) : (
          <>
            <h2>{name}</h2>

            <button
              className="profile-edit-btn"
              onClick={() => setEditMode(true)}
            >
              ✏️ Edit Name
            </button>
          </>
        )}

        <p className="profile-email">{user?.email}</p>

        <div className="profile-stats">
          <div>
            <h2>{myReviews.length}</h2>
            <p>Total Reviews</p>
          </div>
        </div>

        <button
          className="profile-logout"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      <div className="my-reviews">

        <h2>My Reviews ⭐</h2>

        {myReviews.length === 0 ? (
          <p>You haven't written any reviews yet.</p>
        ) : (
          myReviews.map((review) => {

            const movie = movies.find(
              (item) => item.id === review.movieId
            );

            const isEditing =
              editingReviewId === review.id;

            return (
              <div
                className="my-review-card"
                key={review.id}
              >

                {movie ? (
                  <Link
                    to={`/movie/${movie.id}`}
                    className="profile-movie-link"
                  >
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="profile-movie-poster"
                    />

                    <h3>{movie.title}</h3>
                  </Link>
                ) : (
                  <h3>Movie no longer available</h3>
                )}

                {isEditing ? (

                  <div className="review-edit-form">

                    <h4>Update Rating</h4>

                    <div className="review-rating-input">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setEditRating(star)}
                          className={
                            star <= editRating
                              ? "selected-star"
                              : ""
                          }
                        >
                          ★
                        </button>
                      ))}
                    </div>

                    <textarea
                      value={editComment}
                      onChange={(e) =>
                        setEditComment(e.target.value)
                      }
                      placeholder="Update your review..."
                    />

                    <button
                      className="review-save-btn"
                      onClick={() =>
                        handleUpdateReview(review.id)
                      }
                    >
                      Save Changes
                    </button>

                    <button
                      className="review-cancel-btn"
                      onClick={() =>
                        setEditingReviewId(null)
                      }
                    >
                      Cancel
                    </button>

                  </div>

                ) : (

                  <>
                    <p className="my-review-stars">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </p>

                    <p>{review.comment}</p>

                    <small>
                      Review Date: {review.date}
                    </small>

                    <div className="review-actions">

                      <button
                        onClick={() => handleEdit(review)}
                      >
                        ✏️ Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteReview(review.id)
                        }
                      >
                        🗑️ Delete
                      </button>

                    </div>
                  </>

                )}

              </div>
            );
          })
        )}

      </div>

    </div>
  );
}

export default Profile;
