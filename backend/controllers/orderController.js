// Import your Models Here
const Order = require("../models/order.model");
const { Op } = require("sequelize");
require("dotenv").config();
module.exports = {
  // Create a new order
  createOrder: async (req, res) => {
    try {
      const { userId, status, totalAmount } = req.body;
      const newOrder = await Order.create({
        userId,
        status,
        totalAmount,
      });
      return res.status(201).json(newOrder);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all orders
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.findAll();
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a single order by ID
  getOrderById: async (req, res) => {
    try {
      const { id } = req.params;

      const order = await Order.findByPk(id);

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update an order by ID
  updateOrder: async (req, res) => {
    try {
      const { id } = req.params;
      const { status, totalAmount } = req.body;
      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      order.status = status || order.status;
      order.totalAmount = totalAmount || order.totalAmount;
      await order.save();
      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an order by ID
  deleteOrder: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      await order.destroy();
      return res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
