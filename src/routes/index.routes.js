const express = require('express');
const path = require('path');
const routes = express.Router();


// **SERVICE**
const productService = require("../data/productService");



// **RUTAS**
routes.get('/', (req,res) => res.render("index", {products: productService.getAll()}));


// *TESTEO BORRAR*
const db = require('../data/models')

const ser = {
    getData: async function() {
        try {
            return await db.Product.findAll()
        } catch (error) {
            return "ocurrio un error"
        }
    }
}

const con = {
    'list': async function(req, res){
        return res.render("dbTest", {products: await ser.getData()});
    }
}

routes.get("/test", con.list)



module.exports = routes;