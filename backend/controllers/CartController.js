const userModel = require("../models/UserModel");
const addToCart = async (req, res) => {
  try {
    const { userid, itemId } = req.body;

    if (!userid || !itemId) {
      return res.status(400).json({ success: false, message: "User ID and Item ID are required" });
    }

    const userData = await userModel.findById(userid);
    if (!userData) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    let cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userid, { cartData });
    res.json({ success: true, message: "Added To Cart", user: userData });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ success: false, message: "Error occurred" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { userid, itemId } = req.body;
    const userData = await userModel.findById(userid);
    if (!userData) return res.status(404).json({ success: false, message: "User not found" });
    let cartData = userData.cartData || {};
    if (cartData[itemId] && cartData[itemId] > 0) {
      cartData[itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(userid, { cartData });
    res.json({ success: true, message: "Removed From Cart", user: userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const getCart = async (req, res) => {
  try {
    const { userid } = req.body;
    const userData = await userModel.findById(userid);
    if (!userData) return res.status(404).json({ success: false, message: "User not found" });

    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

module.exports = { addToCart, removeFromCart, getCart };