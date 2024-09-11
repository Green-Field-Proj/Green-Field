import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Exclusive</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Us</Link>
        <Link to="/admin">Admin Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
