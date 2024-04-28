const express = require('express');
const path = require('path');
const routes = express.Router();


// **SERVICE**
const productService = require("../data/productService");



// **RUTAS**
routes.get('/', (req,res) => res.render("index", {products: productService.getAll()}));



module.exports = routes;