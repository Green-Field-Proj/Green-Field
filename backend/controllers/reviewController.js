// controllers/reviewController.js
const Review = require("../models/reviewModel");
const { Op } = require("sequelize");
require("dotenv").config();
module.exports = {
  // Create a review
  createReview: async (req, res) => {
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

  // Get all reviews
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.findAll();
      res.status(200).json(reviews);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get a review by ID
  getReviewById: async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.id);
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
      res.status(200).json(review);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update a review
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

  // Delete a review
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
