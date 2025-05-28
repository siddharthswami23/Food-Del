const userModel = require("../models/UserModel");

const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    console.log(req.body);
    const userData = await userModel.findOne({ id: userId });
    console.log(userData);
    if (!userData) return res.status(404).json({ success: false, message: "User not found" });

    let cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added To Cart", user: userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};



const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    const userData = await userModel.findById(userId);
    if (!userData) return res.status(404).json({ success: false, message: "User not found" });

    let cartData = userData.cartData || {};

    if (cartData[itemId] && cartData[itemId] > 0) {
      cartData[itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};



const getCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findOne({ id: userId });
    console.log(userData);
    if (!userData) return res.status(404).json({ success: false, message: "User not found" });

    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};


module.exports = { addToCart, removeFromCart, getCart };
