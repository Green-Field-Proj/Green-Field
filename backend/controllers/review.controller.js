// controllers/reviewController.js
const Review = require("../models/review.model");
const User = require("../models/user.model");
const Product = require("../models/product.model");
const { Op } = require("sequelize");
require("dotenv").config();
module.exports = {
  
  addReview: async (req, res) => {
    try {
      const { rating, comment, userId, productId } = req.body;
      const newReview = await Review.create({
        rating,
        comment,
        userId,
        productId,
      });
      res.status(201).json(newReview);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.findAll({ include:[User,Product]});
      res.status(200).json(reviews);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  
  getReviewById: async (req, res) => {
    try {
      const review = await Review.findOne({
        where : {
            id : req.params.id
        },
        include:[User,Product]
    });
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
      res.status(200).json(review);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  
  updateReview: async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.id);
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
      const { rating, comment } = req.body;
      await review.update({ rating, comment });
      res.status(200).json(review);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },


  deleteReview: async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.id);
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
      await review.destroy();
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
