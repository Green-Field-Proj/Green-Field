const express = require("express");
const orderRoutes = express.Router();
const authenticate = require("../middleware");
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

orderRoutes.post("/create", createOrder);
orderRoutes.get("/getOrder", getAllOrders);
orderRoutes.get("/getById/:id", getOrderById);
orderRoutes.put("/updateOrder/:id", updateOrder);
orderRoutes.delete("delete/:id", deleteOrder);

module.exports = orderRoutes;
