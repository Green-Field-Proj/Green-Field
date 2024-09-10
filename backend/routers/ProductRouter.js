const express = require("express");
const ProductsRouter = express.Router();
const authenticate = require("../middleware");
const {
  getAllProducts,
  AddProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductByName                 } = require("../controllers/product.controller");

ProductsRouter.get("/getAll", getAllProducts);
ProductsRouter.post("/add", AddProduct);
ProductsRouter.get("/byId/:id", getProductById);
ProductsRouter.get("/byName/:id", getProductByName);
ProductsRouter.put("/:id", updateProduct);
ProductsRouter.delete("/:id", deleteProduct);
module.exports = ProductsRouter;
