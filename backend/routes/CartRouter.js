const express = require("express");
const authMiddleware = require("../middlewares/Auth.js");
const CartRouter = express.Router();
const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/CartController.js");

CartRouter.post("/add", addToCart);
CartRouter.post("/remove", removeFromCart);
CartRouter.post("/get", getCart);

module.exports = CartRouter;
