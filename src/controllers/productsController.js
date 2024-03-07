const express = require('express');
const path = require('path');

const productsController = { 
    getDetail: (req,res) => res.sendFile(path.join(__dirname,'../views/products/productDetail.html')),    
    
    getCart: (req,res) => res.sendFile(path.join(__dirname, '../views/products/productCart.html')),

    // getAll: (req, res) => res.send("Estas viendo el listado de productos"),

    // getOne: (req, res) => res.send(productos.find((producto)=> producto.id == req.params.id)),
    
};

module.exports = productsController;