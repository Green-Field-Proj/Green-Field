// Import your Models Here
const Order = require("../models/order.model");
const User = require("../models/user.model");
const Product = require("../models/product.model");
const { Op } = require("sequelize");
require("dotenv").config();
module.exports = {
  addOrder: async (req, res) => {
    try {
      const { userId, paymentStatus, totalPrice } = req.body;
      const newOrder = await Order.create({
        userId,
        paymentStatus,
        totalPrice,
      });
      return res.status(201).json(newOrder);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.findAll({
        include: [
          { model: User, as: "client" },
          { model: Product, as: "products" },
        ],
      });
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const order = await Order.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          { model: User, as: "user" },
          { model: Product, as: "product" },
        ],
      });

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  updateOrder: async (req, res) => {
    try {
      const { id } = req.params;
      const { paymentStatus, totalPrice } = req.body;
      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      order.paymentStatus = paymentStatus || order.paymentStatus;
      order.totalPrice = totalPrice || order.totalPrice;
      await order.save();
      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

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
