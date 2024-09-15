const express = require("express");
const ProductsRouter = express.Router();
const authenticate = require("../middleware");
const {
  getAllProducts,
  AddProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductByName,
  getFlashSaleProducts,
  searchProducts,
  getSellerProducts,
} = require("../controllers/product.controller");

ProductsRouter.get("/getAll", getAllProducts);
ProductsRouter.post("/add", authenticate, AddProduct);
ProductsRouter.get("/byId/:id", getProductById);
ProductsRouter.get("/byName/:name", getProductByName);
ProductsRouter.put("/:id", updateProduct);
ProductsRouter.delete("/:id", deleteProduct);
ProductsRouter.get("/flash-sale", getFlashSaleProducts);
ProductsRouter.get("/search", searchProducts);
ProductsRouter.get("/seller", authenticate, getSellerProducts);

module.exports = ProductsRouter;
