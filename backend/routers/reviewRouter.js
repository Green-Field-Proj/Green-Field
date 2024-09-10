const express = require("express");
const reviewRouter = express.Router();
const authenticate = require("../middleware");
const {
  addReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
                   } = require("../controllers/review.controller");

reviewRouter.post("/add", addReview);
reviewRouter.get("/getAll", getAllReviews);
reviewRouter.get("/ById/:id", getReviewById);
reviewRouter.put("/:id", updateReview);
reviewRouter.delete("/:id", deleteReview);
module.exports = reviewRouter;
