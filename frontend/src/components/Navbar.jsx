import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import UserMenu from "./UserMenu";
import Search from "./Search";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/AuthSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { role, profilePicture } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    handleClose();
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/profile");
    handleClose();
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Exclusive</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Us</Link>
        {role === "admin" && <Link to="/admin">Admin Dashboard</Link>}
        {role === "seller" && <Link to="/seller">My Dashboard</Link>}
        <Search />
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
          sx={{ bgcolor: "#DB4444", cursor: "pointer" }}
          onClick={handleClick}
          src={profilePicture}
        />
      </div>

      <UserMenu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        handleLogout={handleLogout}
        handleProfileClick={handleProfileClick}
        isLoggedIn={!!role}
        profilePicture={profilePicture}
      />
    </nav>
  );
}

export default Navbar;
