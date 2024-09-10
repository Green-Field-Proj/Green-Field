const express = require("express");
const cartRouter = express.Router();
const authenticate = require("../middleware");

const {
  addToCart,
  getCartItems,
  updateCartItem,
  removeFromCart,
                   } = require("../controllers/cart.controller");
cartRouter.post("addcart", addToCart);
cartRouter.get("/getitem/:userId", getCartItems);
cartRouter.put("/:id", updateCartItem);
cartRouter.delete("/:id", removeFromCart);
module.exports = cartRouter;
