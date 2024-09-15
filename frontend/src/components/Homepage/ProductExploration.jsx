import React, { useState, useEffect } from "react";
import axios from "axios";
import rectangle from "../../images/Rectangle.png";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Cartslice";
import { Link } from "react-router-dom";

function ProductExploration() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/product/getAll"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="best-selling-products">
      <div className="todays">
        <img src={rectangle} alt="Today's" />
        <h2>Our Products</h2>
      </div>
      <div className="sellingProducts">
        <h2 id="bestSellingProducts">Explore Our Products</h2>
      </div>
      <div className="product-list-best">
        {products.map((product) => {
          const price = parseFloat(product.price);
          const discountedPrice = price * (1 - product.discount);

          return (
            <div key={product.id} className="product-card">
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                  },
                }}
                className="productCard"
              >
                <Box sx={{ position: "relative", height: 350, width: 270 }}>
                  <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardMedia
                      component="img"
                      height="194"
                      image={product.imageUrl}
                      alt={product.name}
                      sx={{
                        backgroundColor: "grey",
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        display: "block",
                        marginLeft: 5,
                        marginTop: 5,
                      }}
                    />
                  </Link>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: -65,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "white",
                        borderRadius: "50%",
                        width: 36,
                        height: 36,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 1,
                        boxShadow: 1,
                      }}
                    >
                      <FavoriteBorderIcon sx={{ color: "black" }} />
                    </Box>
                    <Box
                      sx={{
                        bgcolor: "white",
                        borderRadius: "50%",
                        width: 36,
                        height: 36,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: 1,
                      }}
                    >
                      <RemoveRedEyeOutlinedIcon sx={{ color: "black" }} />
                    </Box>
                  </Box>
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      top: 0,
                      bgcolor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                    onClick={() => dispatch(addToCart(product))}
                  >
                    <Typography variant="h6">Add to Cart</Typography>
                  </Box>
                </Box>
                <CardContent>
                  <Typography variant="body2" component="div">
                    <p className="productCardName"> {product.name} </p>
                  </Typography>
                  <div className="product-price">
                    <Typography
                      variant="body2"
                      component="span"
                      className="productCardDiscount"
                    >
                      ${discountedPrice.toFixed(2)}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      className="productCardPrice"
                    >
                      ${price.toFixed(2)}
                    </Typography>
                  </div>
                  <Rating
                    name="read-only"
                    value={5}
                    readOnly
                    className="ratingCard"
                  />
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="flash-button">
        <Button variant="contained" disableElevation id="flash-btn">
          View All Products
        </Button>
      </div>
    </div>
  );
}

export default ProductExploration;
