const express = require('express');
const productsRouter = express.Router();
const { getProductsLising } = require('../controllers/products');

productsRouter.get('/gen', getProductsLising);

module.exports = productsRouter;
