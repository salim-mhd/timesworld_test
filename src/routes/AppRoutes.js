import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/authentication/login/Login";
import Home from "../components/home/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Home Page - Protected Route */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
