// import your Models Here
const User = require("../models/user.model");
const Product = require("../models/product.model");
const Review = require("../models/review.model");
const Order = require("../models/order.model");
const Category = require("../models/category.model");
const Cart = require("../models/cart.model");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
require("dotenv").config();
const uploadStream = require("../utils/cloudinary");
module.exports = {
  userSignup: async (req, res) => {
    console.log(req.file.buffer, "el fileeeeeeeeee li uploaditou ");
    try {
      const result = await uploadStream(req.file.buffer);
      console.log(result.secure_url);
      const { username, email, password, role } = req.body;
      // Input validation
      if (role !== "seller" && role !== "client") {
        return res.status(400).json({ message: "Invalid role" });
      }
      if (!username || !email || !password || !role) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Email format validation (simple regex)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      // Password strength check
      if (password.length < 8) {
        return res
          .status(400)
          .json({ message: "Password must be at least 8 characters long" });
      }

      // Check if the email is already in use
      const user = await User.findOne({ where: { email } });
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      await User.create({
        username,
        email,
        password: hashedPassword,
        role,
        profileImage: result.secure_url,
      });
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },
  userLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }
      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({
        message: "Login successful",
        role: user.role,
        userName: user.username,
        email: user.email,
        profilePicture: user.profileImage,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({
        include: [
          { model: Product, as: "products" },
          { model: Review, as: "reviews" },
          { model: Order, as: "orders" },
          { model: Cart, as: "carts" },
        ],
      });
      res.status(200).send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          { model: Product, as: "products" },
          { model: Review, as: "reviews" },
          { model: Order, as: "orders" },
          { model: Cart, as: "carts" },
        ],
      });
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
  getUserByName: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          username: req.params.username,
        },
        include: [
          { model: Product, as: "products" },
          { model: Review, as: "reviews" },
          { model: Order, as: "orders" },
          { model: Cart, as: "carts" },
        ],
      });
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
  AddUser: async (req, res) => {
    try {
      const newUser = req.body;
      const user = await User.create(newUser);
      res.status(200).send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await User.update(req.body, { where: { id } });
      if (updated) {
        const uptodate = await User.findByPk(id);
        res.status(200).send(uptodate);
      } else {
        res.status(404).send("not found");
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await User.destroy({ where: { id: id } });
      if (deleted) {
        res.status(200).send(" deleted successfully");
      } else {
        res.status(404).send("not found");
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  },
  checkStatus: async (req, res) => {
    const id = req.user.id;

    const user = await User.findByPk(id, {
      attributes: ["username", "email", "profileImage", "role"],
    });

    res.status(200).send(user);
  },
  userLogout: async (req, res) => {
    try {
      res.clearCookie("token", { httpOnly: true });
      res.status(200).json({ message: "Logged out successfully" });
      console.log("Logged out successfully");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
