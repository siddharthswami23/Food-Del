const express = require("express");
const cors = require("cors");
const port = 4000;
const { connectDB } = require("./config/db.js");
const Foodrouter = require("./routes/FoodRouter.js");

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use("/api/food", Foodrouter);

app.get("/", (req, res) => {
  res.send("api is running");
});

app.listen(port, (req, res) => {
  console.log(`server started on port ${port}`);
});
