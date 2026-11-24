
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const ADMIN_EMAIL = "admin@moviebox.com";
const ADMIN_PASSWORD = "Saurabh@123";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("movieboxUser")) || null;
    } catch {
      return null;
    }
  });

  function login(email, password) {
    email = email.trim().toLowerCase();

    // Admin Login
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const admin = {
        email,
        role: "admin"
      };

      localStorage.setItem("movieboxUser", JSON.stringify(admin));
      setUser(admin);

      return { success: true, role: "admin" };
    }

    // Normal User Login
    const users = JSON.parse(localStorage.getItem("movieboxUsers") || "[]");

    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!existingUser) {
      return {
        success: false,
        message: "Invalid email or password. Please Signup first."
      };
    }

    const userData = {
      email: existingUser.email,
      role: "user"
    };

    localStorage.setItem("movieboxUser", JSON.stringify(userData));
    setUser(userData);

    return { success: true, role: "user" };
  }

  function signup(email, password) {
    email = email.trim().toLowerCase();

    if (email === ADMIN_EMAIL) {
      return { success: false, message: "This email is reserved for Admin." };
    }

    const users = JSON.parse(localStorage.getItem("movieboxUsers") || "[]");

    const exists = users.some((u) => u.email === email);

    if (exists) {
      return { success: false, message: "Email already registered. Please Login." };
    }

    users.push({ email, password });

    localStorage.setItem("movieboxUsers", JSON.stringify(users));

    return { success: true };
  }

  function logout() {
    localStorage.removeItem("movieboxUser");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}


