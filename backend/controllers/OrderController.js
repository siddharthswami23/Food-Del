const express = require("express");
const OrderRouter = express.Router();
const OrderModel = require("../models/OrderModel");

// Create a new order
const createOrder = async (req, res) => {
    try {
        const { userId, items, address, amount } = req.body;

        if (!userId || !items || !address || !amount) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newOrder = new OrderModel({
            userId,
            items,
            address,
            amount,
        });


        res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = {
    createOrder,
};  