const express = require('express');
const path = require('path');

let productService = require('../data/productService');


const productsController = { 
    index: (req,res) => res.render("products/productAll", {products: productService.getAll()}),


    detail: (req,res) => res.render("products/productDetail",{products: productService.getAll(), product: productService.getOneBy(req.params.id)}),    
    

    cart: (req,res) => res.render("products/productCart"),


    create: (req,res) => res.render("products/productCreate"), 
    store: (req,res) => {
        productService.store(req.body, req.file);
		res.redirect('/producto');
    },
    

    edit: (req,res) => res.render("products/productEdit", {
        product: productService.getOneBy(req.params.id)
    }),
    update: (req,res) => {
        productService.update(req.params.id, req.body, req.file);
        res.redirect('/producto/detalle/'+req.params.id)
    },
    destroy: (req, res) => {
        productService.deleteById(req.params.id);
		res.redirect('/products');
    }
};

module.exports = productsController;