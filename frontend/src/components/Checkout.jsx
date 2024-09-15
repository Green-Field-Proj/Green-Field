import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Button, Typography, Box } from "@mui/material";
import { clearCart } from "../features/Cartslice";

const Checkout = () => {
  const [paymentUrl, setPaymentUrl] = useState(null);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/payment/generate",
        {
          amount: Math.round(calculateTotal()),
          developerTrackingId: `order_${Math.random()}`,
        }
      );

      if (response.data.result && response.data.result.link) {
        setPaymentUrl(response.data.result.link);
        window.open(response.data.result.link, "_blank");
      }
    } catch (error) {
      console.error("Error generating payment:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Typography variant="h6" gutterBottom>
        Total: ${calculateTotal()}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handlePayment}
        disabled={cart.length === 0}
      >
        Proceed to Payment
      </Button>
      {paymentUrl && (
        <Box mt={2}>
          <Typography variant="body1">
            If the payment window didn't open, please{" "}
            <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
              click here
            </a>
            .
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Checkout;
