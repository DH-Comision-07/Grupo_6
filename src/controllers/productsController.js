const express = require('express');
const path = require('path');
let productos = require('../models/productsList.json');


const productsController = { 
    getAll: (req,res) => res.render("products/productAll", {products: productos}),

    getDetail: (req,res) => res.render("products/productDetail",{products: productos, product: productos.find ((producto) => producto.id==req.params.id)}),    
    
    getCart: (req,res) => res.render("products/productCart"),

    getNew: (req,res) => res.render("products/productCreate"),

    getEditBy: (req,res) => res.render("products/productEdit", {product: productos.find ((producto) => producto.id==req.params.id)}),
    
};

module.exports = productsController;