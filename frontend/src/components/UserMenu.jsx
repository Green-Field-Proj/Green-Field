import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "black",
    color: "white",
    borderRadius: "4px",
    fontFamily: "Poppins",
  },
}));

function UserMenu({
  anchorEl,
  open,
  handleClose,
  handleLogout,
  handleProfileClick,
  isLoggedIn,
}) {
  const navigate = useNavigate();
  const menuItems = isLoggedIn
    ? [
        <MenuItem key="profile" onClick={handleProfileClick}>
          Profile
        </MenuItem>,
        <MenuItem key="logout" onClick={handleLogout}>
          Logout
        </MenuItem>,
      ]
    : [
        <MenuItem
          key="login"
          onClick={() => {
            handleClose();
            navigate("/login");
          }}
        >
          Login
        </MenuItem>,
        <MenuItem
          key="signup"
          onClick={() => {
            handleClose();
            navigate("/signup");
          }}
        >
          Signup
        </MenuItem>,
      ];

  return (
    <StyledMenu
      id="user-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "user-menu-button",
      }}
    >
      {menuItems}
    </StyledMenu>
  );
}

export default UserMenu;
