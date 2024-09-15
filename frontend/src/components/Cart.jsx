import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/Cartslice";
import {
  Typography,
  Box,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: "20px" }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 600, fontFamily: "Inter", marginBottom: "20px" }}
      >
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cartItems.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Card sx={{ display: "flex", alignItems: "center" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 150, height: 150, objectFit: "cover" }}
                    image={item.imageUrl}
                    alt={item.name}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 600, fontFamily: "Poppins" }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontFamily: "Poppins" }}
                    >
                      ${item.price.toFixed(2)}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                      <IconButton
                        onClick={() =>
                          handleQuantityChange(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ mx: 2, fontFamily: "Poppins" }}>
                        {item.quantity}
                      </Typography>
                      <IconButton
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleRemove(item.id)}
                        sx={{ ml: 2 }}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                  <Typography
                    variant="h6"
                    sx={{ p: 2, fontWeight: 600, fontFamily: "Poppins" }}
                  >
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 4, textAlign: "right" }}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 600, fontFamily: "Inter" }}
            >
              Total: ${calculateTotal()}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#DB4444",
                color: "white",
                fontFamily: "Poppins",
                fontWeight: 500,
                "&:hover": { backgroundColor: "#c13e3e" },
              }}
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
