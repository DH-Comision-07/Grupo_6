const express = require('express');
const path = require('path');
const routes = express.Router();


// **SERVICE**
const productService = require("../data/productService");



// **RUTAS**
routes.get('/', async function(req,res) {
    return res.render("index", {products: await productService.getAll()})
});



module.exports = routes;