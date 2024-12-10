const express = require("express");
const Foodrouter = express.Router();
const { addFood } = require("../controllers/FoodControllers");
const multer = require("multer");

Foodrouter.get("/", (req, res) => {
  res.send("food router");
});

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()} ${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Foodrouter.get("/add", (req, res) => {
//   res.send("add food router");
// });
Foodrouter.post("/add", upload.single("image"), addFood);

module.exports = Foodrouter;
