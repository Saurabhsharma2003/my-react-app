
import { createContext, useContext, useState } from "react";

const ReviewsContext = createContext();

export function ReviewsProvider({ children }) {
  const [reviews, setReviews] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("movieboxReviews")
      ) || [];
    } catch {
      return [];
    }
  });

  // Add Review
  function addReview(movieId, review) {
    const newReview = {
      id: Date.now(),
      movieId,
      ...review,
      rating: Number(review.rating),
      date: new Date().toLocaleDateString()
    };

    setReviews((prev) => {
      const updated = [...prev, newReview];

      localStorage.setItem(
        "movieboxReviews",
        JSON.stringify(updated)
      );

      return updated;
    });
  }

  // Edit Review
  function updateReview(reviewId, updatedData) {
    setReviews((prev) => {
      const updated = prev.map((review) => {
        if (review.id === reviewId) {
          return {
            ...review,
            comment: updatedData.comment,
            rating: Number(updatedData.rating),
            date: new Date().toLocaleDateString()
          };
        }

        return review;
      });

      localStorage.setItem(
        "movieboxReviews",
        JSON.stringify(updated)
      );

      return updated;
    });
  }

  // Delete Review
  function deleteReview(reviewId) {
    setReviews((prev) => {
      const updated = prev.filter(
        (review) => review.id !== reviewId
      );

      localStorage.setItem(
        "movieboxReviews",
        JSON.stringify(updated)
      );

      return updated;
    });
  }

  return (
    <ReviewsContext.Provider
      value={{
        reviews,
        addReview,
        updateReview,
        deleteReview
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
}

export function useReviews() {
  return useContext(ReviewsContext);
}

