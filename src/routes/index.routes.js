const express = require('express');
const path = require('path');
const routes = express.Router();
// const productos = require('../data/products.json')

const productService = require("../data/productService");


routes.get('/', (req,res) => res.render("index", {products: productService.getAll()}));


module.exports = routes;