const express = require("express");
const orderRoutes = express.Router();
const authenticate = require("../middleware");
const {
  addOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
               } = require("../controllers/order.controller");

orderRoutes.post("/add", addOrder);
orderRoutes.get("/getAll", getAllOrders);
orderRoutes.get("/ById/:id", getOrderById);
orderRoutes.put("/:id", updateOrder);
orderRoutes.delete("/:id", deleteOrder);

module.exports = orderRoutes;
