import React from "react";
import { Divider, Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function HeroCategories() {
  return (
    <div className="hero-categories">
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        height: "100%", 
        padding: 2, 
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2, 
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 12}}>
          
          <Typography>Women's Fashion</Typography>
          <ArrowForwardIosIcon   sx={{fontSize: "18px"}}/>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 15.5  }}>
          
          <Typography>Men's Fashion</Typography>
          <ArrowForwardIosIcon sx={{fontSize: "18px"}} />
        </Box>
        <Typography>Electronics</Typography>
        <Typography>Home & Lifestyle</Typography>
        <Typography>Medicine</Typography>
        <Typography>Sports & Outdoor</Typography>
        <Typography>Baby's Toys</Typography>
        <Typography>Groceries & Pets</Typography>
        <Typography>Health & Beauty</Typography>
      </Box>

      <Divider
        orientation="vertical"
        
        sx={{ position:"absolute", height: "440px", mx: 17, borderColor: "grey", marginTop: "-70px" , marginLeft: "300px" }}
      />
    </Box>
    </div>
    
  );
}

export default HeroCategories;
