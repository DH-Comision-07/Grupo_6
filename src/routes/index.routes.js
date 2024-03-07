const express = require('express');
const path = require('path');
const routes = express.Router();

const productRouter = require('./products.routes');
const userRouter = require('./users.routes');

routes.get('/', (req,res) => res.sendFile(path.resolve(__dirname, '../views/index.html')));
routes.use('/producto', productRouter);
routes.use('/cuenta', userRouter);

module.exports = routes;