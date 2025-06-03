import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">      {/* This wraps the full page */}
  <div className="home-box">          {/* This is the centered white box */}
    <h1>Welcome to My Web Site</h1>
    <div className="home-links">      {/* This holds the buttons/links */}
      <Link to="/register" className="home-btn">📝 Register</Link>
      <Link to="/login" className="home-btn">🔐 Login</Link>
      <Link to="/calculator" className="home-btn">🧮 Calculator</Link>
    </div>
  </div>
</div>
  );
}
