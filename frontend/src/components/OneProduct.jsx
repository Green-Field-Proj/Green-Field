import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Button,
  Typography,
  Rating,
  Box,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cartslice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/product/byId/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const discountedPrice = product.price * (1 - product.discount);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(Math.max(1, newQuantity));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 1200, margin: "0 auto" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  src={product.imageUrl}
                  alt={`${product.name} thumbnail`}
                  style={{
                    width: "20%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 4,
                    cursor: "pointer",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            {product.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Rating name="read-only" value={5} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
              (150 Reviews) | In Stock
            </Typography>
          </Box>
          <Typography variant="h5" color="primary" gutterBottom>
            ${discountedPrice.toFixed(2)}
            {product.discount > 0 && (
              <Typography
                variant="body1"
                component="span"
                sx={{
                  textDecoration: "line-through",
                  ml: 2,
                  color: "text.secondary",
                }}
              >
                ${product.price.toFixed(2)}
              </Typography>
            )}
          </Typography>
          <Typography variant="body1" paragraph sx={{ my: 2 }}>
            {product.description}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Colours:
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  bgcolor: "grey.300",
                  cursor: "pointer",
                }}
              />
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  bgcolor: "error.main",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Size:
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <Button key={size} variant="outlined" sx={{ minWidth: 40 }}>
                  {size}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
                mr: 2,
              }}
            >
              <IconButton onClick={() => handleQuantityChange(quantity - 1)}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ mx: 2 }}>{quantity}</Typography>
              <IconButton onClick={() => handleQuantityChange(quantity + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
              sx={{ flexGrow: 1, height: 48 }}
            >
              Add to Cart
            </Button>
            <IconButton sx={{ ml: 2, border: 1, borderColor: "divider" }}>
              <FavoriteBorderIcon />
            </IconButton>
          </Box>
          <Box sx={{ bgcolor: "background.paper", p: 2, borderRadius: 1 }}>
            <Typography
              variant="subtitle2"
              sx={{ display: "flex", alignItems: "center", mb: 1 }}
            >
              <LocalShippingOutlinedIcon sx={{ mr: 1 }} /> Free Delivery
            </Typography>
            <Typography variant="body2" sx={{ ml: 4, mb: 1 }}>
              Enter your postal code for Delivery Availability
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <AssignmentReturnOutlinedIcon sx={{ mr: 1 }} /> Return Delivery
            </Typography>
            <Typography variant="body2" sx={{ ml: 4 }}>
              Free 30 Days Delivery Returns. Details
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetails;
