const express = require("express");
const authMiddleware = require("../middlewares/Auth.js");
const CartRouter = express.Router();
const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/CartController.js");

CartRouter.post("/add", authMiddleware, addToCart);
CartRouter.post("/remove", authMiddleware, removeFromCart);
CartRouter.post("/get", getCart);

module.exports = CartRouter;
