const express = require('express');
const path = require('path');

let productService = require('../data/productService');


const productsController = { 
    index: (req,res) => res.render("products/productAll", {products: productService.getAll()}),

    productDetail: (req,res) => res.render("products/productDetail",{products: productService.getAll(), product: productService.getOneBy(req.params.id)}),    
    
    productCart: (req,res) => res.render("products/productCart"),

    // creacion de productos
    productCreate: (req,res) => res.render("products/productCreate"), 
    
    productEdit: (req,res) => res.render("products/productEdit", {product: productService.getOneBy(req.params.id)}),
    
    store: (req,res) => {
        productService.save(req.body, req.file);
		res.redirect('/producto');
    },
};

module.exports = productsController;