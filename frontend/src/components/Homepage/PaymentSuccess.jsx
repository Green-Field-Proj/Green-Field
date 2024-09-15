import React, { useEffect } from "react";
import { Typography, Box , Button} from "@mui/material";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/Cartslice";
import { useNavigate } from "react-router-dom";


const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <Box
      sx={{ maxWidth: 600, margin: "auto", padding: 2, textAlign: "center" }}
    >
      <Typography variant="h4" gutterBottom>
        Payment Successful!
      </Typography>
      <Typography variant="body1">
        Thank you for your purchase. Your order has been placed successfully.
        <Button variant="contained" color="primary" onClick={()=>{navigate("/")}}>
          Return to Homepage
        </Button>
      </Typography>
    </Box>
  );
};

export default PaymentSuccess;
