const express = require('express');
const { createOrder, ConfirmPayment } = require('../controllers/OrderController');
const OrderRouter = express.Router();

OrderRouter.post('/create', createOrder);

module.exports = OrderRouter;