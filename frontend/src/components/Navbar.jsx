import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const role = useSelector((state) => state.auth.role);
  return (
    <nav className="navbar">
      <h2 className="logo">Exclusive</h2>
      <div className="links">
        <Link to="/">Home</Link>
        {!role && <Link to="/login">Login</Link>}
        {!role && <Link to="/signup">Signup</Link>}
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Us</Link>
        {role === "admin" && <Link to="/admin">Admin Dashboard</Link>}
      </div>
    </nav>
  );
}

export default Navbar;
