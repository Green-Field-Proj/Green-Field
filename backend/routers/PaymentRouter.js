const express = require("express");
const paymentRouter = express.Router();
const {
  generatePayment,
  verifyPayment,
} = require("../controllers/payment.controller");

paymentRouter.post("/generate", generatePayment);
paymentRouter.get("/verify/:paymentId", verifyPayment);

module.exports = paymentRouter;
