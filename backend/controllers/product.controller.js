// import your Models Here
const Product = require("../models/product.model");
const User = require("../models/user.model");
const Review = require("../models/review.model");
const Order = require("../models/order.model");
const Category = require("../models/category.model");
const Cart = require("../models/cart.model");
const { Op } = require("sequelize");
require("dotenv").config();
module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const product = await Product.findAll({
        include: [
          { model: Category, as: "category" },
          { model: User, as: "user" },
          { model: Review, as: "reviews" },
          { model: Order, as: "orders" },
          { model: Cart, as: "carts" },
        ],
      });
      res.status(200).send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
  AddProduct: async (req, res) => {
    try {
      const newProduct = req.body;
      const product = await Product.create(newProduct);
      res.status(200).send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
  getProductById: async (req, res) => {
    try {
      const product = await Product.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          { model: Category, as: "category" },
          { model: User, as: "user" },
          { model: Review, as: "reviews" },
          { model: Order, as: "orders" },
          { model: Cart, as: "carts" },
        ],
      });
      if (product) {
        res.status(200).send(product);
      } else {
        res.status(404).send("product not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
  getProductByName: async (req, res) => {
    try {
      const product = await Product.findOne({
        where: {
          name: req.params.name,
        },
        include: [
          { model: Category, as: "category" },
          { model: User, as: "user" },
          { model: Review, as: "reviews" },
          { model: Order, as: "orders" },
          { model: Cart, as: "carts" },
        ],
      });
      if (product) {
        res.status(200).send(product);
      } else {
        res.status(404).send("product not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await Product.update(req.body, { where: { id } });
      if (updated) {
        const uptodate = await Product.findByPk(id);
        res.status(200).send(uptodate);
      } else {
        res.status(404).send("not found");
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Product.destroy({ where: { id: id } });
      if (deleted) {
        res.status(200).send(" deleted successfully");
      } else {
        res.status(404).send("not found");
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  },
};
