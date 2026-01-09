const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        default: "Food Processing"
    },
    payment: {
        type: Boolean,
        default: false
    }
})

const OrderModel = mongoose.models.order || mongoose.model("order", orderSchema);

module.exports = OrderModel;