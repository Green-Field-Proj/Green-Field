const express = require("express");
const ProductsRouter = express.Router();
const authenticate = require("../middleware");
const {
  getAllProducts,
  AddProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/Products");
ProductsRouter.get("/get", getAllProducts);
ProductsRouter.post("/add", AddProduct);
ProductsRouter.get("/get/:id", getProductById);
ProductsRouter.put("/update/:id", updateProduct);
ProductsRouter.delete("/delete/:id", deleteProduct);
module.exports = ProductsRouter;
