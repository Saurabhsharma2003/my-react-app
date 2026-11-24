
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function AdminRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.email !== "admin@moviebox.com") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
