const express = require('express');
const path = require('path');

let productService = require('../data/productService');


const productsController = { 
    index: (req,res) => res.render("products/productAll", {products: productService.getAll(), user: req.session.user}),


    detail: (req,res) => res.render("products/productDetail",{products: productService.getAll(), product: productService.getOneBy(req.params.id), user: req.session.user}),    
    

    cart: (req,res) => res.render("products/productCart", {user: req.session.user}),


    create: (req,res) => res.render("products/productCreate", {user: req.session.user}), 
    store: (req,res) => {
        productService.store(req.body, req.file);
		res.redirect('/producto');
    },
    

    edit: (req,res) => res.render("products/productEdit", {
        product: productService.getOneBy(req.params.id), user: req.session.user}),
    update: (req,res) => {
        productService.update(req.params.id, req.body, req.file);
        res.redirect('/producto/detalle/'+req.params.id)
    },
    destroy: (req, res) => {
        productService.deleteById(req.params.id);
		res.redirect('/producto');
    }
};

module.exports = productsController;