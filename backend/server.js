const express = require("express");
const cors = require("cors");
const path = require("path");
const port = 4000;
const { connectDB } = require("./config/db.js");

const dotenv = require("dotenv");
dotenv.config();

const Foodrouter = require("./routes/FoodRouter.js");
const userRouter = require("./routes/UserRouter.js");
const CartRouter = require("./routes/CartRouter.js");
const OrderRouter = require("./routes/OrderRouter.js");
const uploads = path.join(__dirname, "uploads");

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

// console.log(uploads)

app.use("/api/food", Foodrouter);
app.use("/images", express.static(uploads));
app.use("/api/user", userRouter);
app.use("/api/cart", CartRouter);
app.use("/api/order", OrderRouter);

app.get("/", (req, res) => {
  res.send("api is running");
});

app.listen(port, (req, res) => {
  console.log(`server started on port ${port}`);
});
