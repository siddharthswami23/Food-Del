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
        // Save the order to the database
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const ConfirmPayment = async (req, res) => {
    try {
        const { orderId } = req.body;

        if (!orderId) {
            return res.status(400).json({ message: "Order ID is required" });
        }

        const updatedOrder = await OrderModel.findByIdAndUpdate(
            orderId,
            { payment: true, status: "Food Delivered" },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json(updatedOrder);
    } catch (error) {
        console.error("Error confirming payment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    createOrder,
    ConfirmPayment
};  