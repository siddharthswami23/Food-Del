const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)  
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB", err);
    });
};

module.exports = { connectDB };


// mongodb+srv://siddharthswami23:Danamma@cluster0.p2qpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
