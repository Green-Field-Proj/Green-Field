import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/AuthSlice";
function Navbar() {
  const { role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

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
        {role && <Link to="/profile">Profile</Link>}
        {role && <button onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
}

export default Navbar;
