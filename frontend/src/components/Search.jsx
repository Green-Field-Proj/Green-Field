import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import axios from "axios";
import SearchDropdown from "./SearchDropdown";

// Custom styling for the search field
const SearchField = styled(TextField)(({ theme }) => ({
  flex: 1, // Make the search field take up remaining space
  "& .MuiInputBase-root": {
    padding: "4px 8px", // Reduce padding to make the field shorter in height
  },
  "& .MuiInputLabel-root": {
    top: "-6px", // Adjust label position
    left: "0px",
    fontSize: "0.75rem", // Adjust font size for a thinner appearance
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    height: "36px", // Explicitly set height to reduce the overall height of the search bar
  },
  "& .MuiOutlinedInput-input": {
    padding: "4px", // Adjust padding for input text to match the reduced height
  },
}));

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim()) {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/product/search?q=${searchQuery}`
          );
          setSearchResults(response.data);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      } else {
        setSearchResults([]);
      }
    };

    const debounce = setTimeout(() => {
      fetchSearchResults();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchQuery]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 400,
        padding: 1,
        marginLeft: "50px",
        position: "relative",
      }}
      noValidate
      autoComplete="off"
    >
      <SearchField
        id="search-basic"
        label="Search"
        variant="outlined"
        size="small"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {searchResults.length > 0 && (
        <SearchDropdown
          results={searchResults}
          onProductClick={handleProductClick}
        />
      )}
    </Box>
  );
}
