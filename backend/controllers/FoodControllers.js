const { json } = require("body-parser");
const FoodModel = require("../models/FoodModel");
const fs = require("fs");

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

const listFood = async (req, res) => {
  try {
    const food = await FoodModel.find();
    res.json({ success: true, data: food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

const removeFood = async (req, res) => {
  try {
    let food = await FoodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await FoodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

module.exports = {
  addFood,
  listFood,
  removeFood,
};
