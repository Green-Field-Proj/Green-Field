const express = require("express");
const cartRouter = express.Router();
const authenticate = require("../middleware");

const {
  addToCart,
  getCartItems,
  updateCartItem,
  removeFromCart,
} = require("../controllers/cartController");
cartRouter.post("addcart", addToCart);
cartRouter.get("/getitem/:userId", getCartItems);
cartRouter.put("/updatecart/:id", updateCartItem);
cartRouter.delete("remove/:id", removeFromCart);
module.exports = cartRouter;
