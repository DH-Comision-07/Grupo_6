const express = require('express');
const path = require('path');

const productsController = { 
    getDetail: (req,res) => res.render("products/productDetail"),    
    
    getCart: (req,res) => res.render("products/productCart"),
    
};

module.exports = productsController;