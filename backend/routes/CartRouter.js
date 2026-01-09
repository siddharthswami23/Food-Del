const express = require("express");
const authMiddleware = require("../middlewares/Auth.js");
const CartRouter = express.Router();
const {
  addToCart,
  getCart,
  removeFromCart,
  ClearCart,
} = require("../controllers/CartController.js");

CartRouter.post("/add", addToCart);
CartRouter.post("/remove", removeFromCart);
CartRouter.post("/get", getCart);
CartRouter.post("/clear", ClearCart);

module.exports = CartRouter;
