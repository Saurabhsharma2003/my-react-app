
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./App.css";
import Practice from "./practice";

function App() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

        <NavLink className="navbar-brand fw-bold" to="/">
          Saurabh PVR 🎬
        </NavLink>

        <div className="navbar-nav ms-auto">

          <NavLink className="nav-link" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>

          <NavLink className="nav-link" to="/watchlist">
            ❤️ Watchlist
          </NavLink>

          {user && (
            <NavLink className="nav-link" to="/profile">
              👤 Profile
            </NavLink>
          )}

          {user?.email === "admin@moviebox.com" && (
            <NavLink className="nav-link" to="/admin">
              Admin
            </NavLink>
          )}

          {user ? (
            <button
              className="btn btn-danger ms-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>

              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </>
          )}

        </div>
      </nav>

      <Outlet />
    </>
  );

{/* <Practice/> */}

      }

export default App;
 
