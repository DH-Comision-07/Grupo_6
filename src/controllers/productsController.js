const {validationResult} = require("express-validator");

// **SERVICES**
let productService = require('../model/productService');
let categoryService = require('../model/categoryService');
let colorService = require('../model/colorService');
let sizeService = require('../model/sizeService');



// **CONTROLADOR**
const productsController = { 

    // **VISTAS**
    index: async function(req,res) {
        return res.render("products/productAll", {
            products: await productService.getAll()
        })
    },

    detail: async function(req,res){
        return res.render("products/productDetail",{
            products: await productService.getAll(), 
            product: await productService.getOneBy(req.params.id),
            onSale: await productService.getOnSale()
        })
    }, 
    
    cart: (req,res) => res.render("products/productCart"),



    // **CREACION DE PRODUCTOS**
    create: async function(req,res) {
        return res.render("products/productCreate",
        {
            categories: await categoryService.getAll(),
            colors: await colorService.getAll(),
            sizes: await sizeService.getAll(),
        }
    )}, 

    store: async function (req,res) {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            productService.store(req.body, req.file);
		    res.redirect('/producto');
        } else {
            res.render("products/productCreate.ejs", {
            errors: errors.mapped(), 
            old: req.body,
            categories: await categoryService.getAll(),
            colors: await colorService.getAll(),
            sizes: await sizeService.getAll(),
        });
    }
    },
    
    
    
    // **EDICION DE PRODUCTOS**
    edit: async function(req,res) { 
        return res.render("products/productEdit", 
        {
            user: req.session.user,
            product: await productService.getOneBy(req.params.id), 
            categories: await categoryService.getAll(),
            colors: await colorService.getAll(),
            sizes: await sizeService.getAll(),
    })},

    update: (req,res) => {
        productService.update(req.params.id, req.body, req.file);
        res.redirect('/producto/detalle/'+req.params.id)
    },



    // **ELIMINACION DE PRODUCTOS**
    destroy: async function (req, res){
        await productService.deleteById(req.params.id);
		res.redirect('/producto');
    }
};



module.exports = productsController;