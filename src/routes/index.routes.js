const express = require('express');
const path = require('path');
const routes = express.Router();
const productos = require('../database/products.json')

const productRouter = require('./products.routes');
const userRouter = require('./users.routes');

routes.get('/', (req,res) => res.render("index", {products: productos}));
routes.use('/producto', productRouter);
routes.use('/cuenta', userRouter);

module.exports = routes;