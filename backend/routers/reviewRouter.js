const express = require("express");
const reviewRouter = express.Router();
const authenticate = require("../middleware");
const {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

reviewRouter.post("/post", createReview);
reviewRouter.get("/getreview", getAllReviews);
reviewRouter.get("getById/:id", getReviewById);
reviewRouter.put("updatereview/:id", updateReview);
reviewRouter.delete("deletereview/:id", deleteReview);
module.exports = reviewRouter;
