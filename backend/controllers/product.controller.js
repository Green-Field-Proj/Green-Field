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
      const parsedProducts = product.map((product) => ({
        ...product.toJSON(),
        price: parseFloat(product.price),
      }));
      res.status(200).send(parsedProducts);
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
          {
            model: Review,
            as: "reviews",
            include: [
              { model: User, as: "user", attributes: ["id", "username"] },
            ],
          },
        ],
      });
      if (product) {
        const parsedProduct = {
          ...product.toJSON(),
          price: parseFloat(product.price),
        };
        res.status(200).send(parsedProduct);
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
  getFlashSaleProducts: async (req, res) => {
    try {
      const flashSaleProducts = await Product.findAll({
        where: {
          discount: {
            [Op.gt]: 0,
          },
        },
        order: [["discount", "DESC"]],
      });
      const parsedProducts = flashSaleProducts.map((product) => ({
        ...product.toJSON(),
        price: parseFloat(product.price),
      }));
      res.status(200).send(parsedProducts);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
  searchProducts: async (req, res) => {
    try {
      const { q } = req.query;
      const products = await Product.findAll({
        where: {
          name: {
            [Op.like]: `%${q}%`,
          },
        },
        limit: 5,
      });
      const parsedProducts = products.map((product) => ({
        ...product.toJSON(),
        price: parseFloat(product.price),
      }));
      res.status(200).json(parsedProducts);
    } catch (error) {
      console.error("Error searching products:", error);
      res.status(500).send("Internal server error");
    }
  },
};
