
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Trending from "./pages/Trending.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Admin from "./pages/Admin.jsx";
import Profile from "./pages/Profile.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";
import { WatchlistProvider } from "./context/WatchlistContext.jsx";
import { MoviesProvider } from "./context/MoviesContext.jsx";
import { ReviewsProvider } from "./context/ReviewsContext.jsx";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "trending", element: <Trending /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "movie/:id", element: <MovieDetails /> },

      {
        path: "watchlist",
        element: (
          <ProtectedRoute>
            <Watchlist />
          </ProtectedRoute>
        )
      },

      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )
      },

      {
        path: "admin",
        element: (
          <AdminRoute>
            <Admin />
          </AdminRoute>
        )
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReviewsProvider>
      <AuthProvider>
        <MoviesProvider>
          <WatchlistProvider>
            <RouterProvider router={router} />
          </WatchlistProvider>
        </MoviesProvider>
      </AuthProvider>
    </ReviewsProvider>
  </StrictMode>
);
