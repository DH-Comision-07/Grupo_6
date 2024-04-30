const express = require('express');
const path = require('path');
const routes = express.Router();


// **SERVICE**
const productService = require("../data/productService");
const { reconstructFieldPath } = require('express-validator/src/field-selection');



// **RUTAS**
routes.get('/', (req,res) => res.render("index", {products: productService.getAll()}));

routes.get("/e", (req,res) => res.render("error404"))



module.exports = routes;