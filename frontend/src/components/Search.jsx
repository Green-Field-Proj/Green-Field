import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

// Custom styling for the search field
const SearchField = styled(TextField)(({ theme }) => ({
  flex: 1, // Make the search field take up remaining space
  '& .MuiInputBase-root': {
    padding: '4px 8px', // Reduce padding to make the field shorter in height
  },
  '& .MuiInputLabel-root': {
    top: '-6px', // Adjust label position
    left: '0px',
    fontSize: '0.75rem', // Adjust font size for a thinner appearance
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    height: '36px', // Explicitly set height to reduce the overall height of the search bar
  },
  '& .MuiOutlinedInput-input': {
    padding: '4px', // Adjust padding for input text to match the reduced height
  },
}));

export default function SearchBar() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        maxWidth: 400, // Reduce maximum width of the search bar container
        padding: 1,
        marginLeft: '50px', // Adjust margin to the left for spacing
      }}
      noValidate
      autoComplete="off"
    >
      <SearchField
        id="search-basic"
        label="Search"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
