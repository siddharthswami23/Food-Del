const { json } = require("body-parser");
const FoodModel = require("../models/FoodModel");

const addFood = async (req, res) => {
  const image_filename = req.file.filename;

  const food = new FoodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });
  try {
    await food.save();
    res.status(200).json({ success: true, message: "food added" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "failed to add food" });
  }
};

module.exports = {
  addFood,
};
