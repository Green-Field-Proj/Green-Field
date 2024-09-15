import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PaymentFailure = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ maxWidth: 600, margin: "auto", padding: 2, textAlign: "center" }}
    >
      <Typography variant="h4" gutterBottom>
        Payment Failed
      </Typography>
      <Typography variant="body1" gutterBottom>
        We're sorry, but your payment could not be processed. Please try again.
      </Typography>
      <Button
        component={Link}
        to="/checkout"
        variant="contained"
        color="primary"
        onClick={()=>{navigate("/checkout")}}
      >
        Return to Checkout
      </Button>
    </Box>
  );
};

export default PaymentFailure;
