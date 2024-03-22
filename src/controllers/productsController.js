const express = require('express');
const path = require('path');

let productService = require('../database/productService');


const productsController = { 
    index: (req,res) => res.render("products/productAll", {products: productService.getAll()}),

    productDetail: (req,res) => res.render("products/productDetail",{products: productService.getAll(), product: productService.getOneBy(req.params.id)}),    
    
    productCart: (req,res) => res.render("products/productCart"),

    productCreate: (req,res) => res.render("products/productCreate"), 

    productEdit: (req,res) => res.render("products/productEdit", {product: productService.getOneBy(req.params.id)}),
    
};

module.exports = productsController;