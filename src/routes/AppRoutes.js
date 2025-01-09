import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../components/authentication/login/Login";
import Home from "../components/home/Home";

const AppRoutes = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Home Page - Protected Route */}
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
