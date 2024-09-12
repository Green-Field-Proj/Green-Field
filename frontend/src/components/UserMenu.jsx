import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

// Styled Menu component
const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: 'black', 
    color: 'white', 
    borderRadius: '4px',
    fontFamily: 'Poppins'
  },
}));

function UserMenu({ anchorEl, open, handleClose }) {
  return (
    <StyledMenu
      id="basic-menu"
      
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      
      
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </StyledMenu>
  );
}

export default UserMenu;
