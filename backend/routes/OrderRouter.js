const express = require('express');
const { createOrder, ConfirmPayment } = require('../controllers/OrderController');
const OrderRouter = express.Router();

OrderRouter.post('/create', createOrder);
OrderRouter.post('/confirm-payment', ConfirmPayment);

module.exports = OrderRouter;