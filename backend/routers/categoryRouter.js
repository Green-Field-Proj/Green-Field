const express = require("express");
const CategoryRouter = express.Router();
const authenticate = require("../middleware");
const {
  getAllCategorys,
  AddCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getCategoryByName  } = require("../controllers/category.controller");

  CategoryRouter.get("/getAll", getAllCategorys);
  CategoryRouter.post("/add", AddCategory);
  CategoryRouter.get("/byId/:id", getCategoryById);
  CategoryRouter.get("/byName/:name", getCategoryByName);
  CategoryRouter.put("/:id", updateCategory);
  CategoryRouter.delete("/:id", deleteCategory);

module.exports = CategoryRouter;
