
import { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });

  function addToWatchlist(movie) {
    setWatchlist((previous) => {
      if (previous.some((item) => item.id === movie.id)) {
        return previous;
      }

      const updated = [...previous, movie];
      localStorage.setItem("watchlist", JSON.stringify(updated));
      return updated;
    });
  }

  function removeFromWatchlist(id) {
    setWatchlist((previous) => {
      const updated = previous.filter((movie) => movie.id !== id);
      localStorage.setItem("watchlist", JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  return useContext(WatchlistContext);
}
