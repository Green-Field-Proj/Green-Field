import React, { useState, useEffect } from "react";
import axios from "axios";
import rectangle from "../../images/Rectangle.png";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import { Button } from "@mui/material";

function BestSellingProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/product/getAll");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="best-selling-products">
      <div className="todays">
        <img src={rectangle} alt="Today's" />
        <h2>This Month</h2>
      </div>
      <div className="sellingProducts">
        <h2 id="bestSellingProducts">Best Selling Products</h2>
        <Button variant="contained" disableElevation id="viewAllSellingProducts">View All</Button>
      </div>
      <div className="product-list-best">
        {products.map((product) => {
          const price = parseFloat(product.price); // Ensure price is a number
          const discountedPrice = price * (1 - product.discount);

          return (
            <div key={product.id} className="product-card">
              <Card sx={{ maxWidth: 345 }} className="productCard">
                <Box sx={{ position: 'relative', height: 350, width: 270 }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={product.imageUrl}
                    alt={product.name}
                    sx={{
                      backgroundColor: 'grey',
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      display: 'block',
                      marginLeft: 5,
                      marginTop: 5
                    }}
                  />
                   <Box
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: -65,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: 'white',
                      borderRadius: '50%',
                      width: 36,
                      height: 36,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1,
                      boxShadow: 1
                    }}
                  >
                    <FavoriteBorderIcon sx={{ color: 'black' }} />
                  </Box>
                  <Box
                    sx={{
                      bgcolor: 'white',
                      borderRadius: '50%',
                      width: 36,
                      height: 36,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 1
                    }}
                  >
                    <RemoveRedEyeOutlinedIcon sx={{ color: 'black' }} />
                  </Box>
                </Box>
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    '&:hover': {
                      opacity: 1,
                    }
                  }}
                >
                  <Typography variant="h6">Add to Cart</Typography>
                </Box>
              </Box>
                <CardContent>
                  <Typography variant="body2">
                    <p className="productCardName"> {product.name} </p>
                  </Typography>
                  <div className="product-price">
                    <p className="productCardDiscount">
                      ${discountedPrice.toFixed(2)}
                    </p>
                    <p className="productCardPrice">${price.toFixed(2)}</p>
                  </div>
                  <Rating name="read-only" value={5} readOnly className="ratingCard" />
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default BestSellingProducts;
