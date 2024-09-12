import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import UserMenu from "./UserMenu";
import Search from "./Search";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/AuthSlice";
function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <Search />{" "}
      </div>

      {/* <div className="searchbar-container">
        <SearchBar/>
        </div> */}

      <div className="wishlist-icon-container">
        <FavoriteBorderIcon className="wishlist-icon" />
      </div>
      <div className="cart-icon-container">
        <ShoppingCartOutlinedIcon className="cart-icon" />
      </div>

      <div className="avatar-container">
        <Avatar
          className="avatar"
          sx={{ bgcolor: "#DB4444" }}
          onClick={handleClick}
        ></Avatar>
      </div>

      <UserMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </nav>
  );
}

export default Navbar;
