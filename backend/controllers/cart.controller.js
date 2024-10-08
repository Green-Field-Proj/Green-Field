// controllers/cartController.js
const Cart = require("../models/cart.model");
const User = require("../models/user.model");
const Product = require("../models/product.model");
const { Op } = require("sequelize");
require("dotenv").config();
module.exports = {
  addToCart: async (req, res) => {
    try {
      const { userId, productId, quantity } = req.body;
      const [cartItem, created] = await Cart.create({
        userId,
        productId,
        quantity,
      });
      if (created) {
        res.status(201).json(cartItem);
      } else {
        res.status(200).json(cartItem);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getCartItems: async (req, res) => {
    try {
      const userId = req.params.userId;
      const cartItems = await Cart.findAll({ where: { userId } });
      res.status(200).json(cartItems);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateCartItem: async (req, res) => {
    try {
      const cartId = req.params.id;
      const { quantity } = req.body;
      const cartItem = await Cart.findByPk(cartId);
      if (!cartItem) {
        return res.status(404).json({ message: "Cart item not found" });
      }
      await cartItem.update({ quantity });
      res.status(200).json(cartItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  removeFromCart: async (req, res) => {
    try {
      const cartId = req.params.id;
      const cartItem = await Cart.findByPk(cartId);
      if (!cartItem) {
        return res.status(404).json({ message: "Cart item not found" });
      }
      await cartItem.destroy();
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  syncCart: async (req, res) => {
    try {
      const { userId } = req.user;
      const { items } = req.body;

      await Cart.destroy({ where: { userId } });

      const cartItems = items.map((item) => ({
        userId,
        productId: item.id,
        quantity: item.quantity,
      }));

      await Cart.bulkCreate(cartItems);

      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
