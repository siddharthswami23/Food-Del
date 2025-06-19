const express = require("express");
const userRouter = express.Router();

const {
  loginUser,
  registerUser,
  getuserById,
} = require("../controllers/UserController");

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/getuserbyid/:id", getuserById);

module.exports = userRouter;
