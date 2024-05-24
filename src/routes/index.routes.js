const express = require('express');
const path = require('path');
const routes = express.Router();


// **SERVICE**
const productService = require("../model/productService");



// **RUTAS**
routes.get('/', async function(req,res) {
    return res.render("index", {
        products: await productService.getAll(),
        productsOnSale: await productService.getOnSale(),
        productsNew: await productService.getNew()
    })
});



module.exports = routes;