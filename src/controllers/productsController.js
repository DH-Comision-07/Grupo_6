
// **SERVICE**
let productService = require('../data/productService');



// **CONTROLADOR**
const productsController = { 

    // **VISTAS**
    index: (req,res) => res.render("products/productAll", {products: productService.getAll()}),

    detail: (req,res) => res.render("products/productDetail",{products: productService.getAll(), product: productService.getOneBy(req.params.id)}),    
    
    cart: (req,res) => res.render("products/productCart"),



    // **CREACION DE PRODUCTOS**
    create: (req,res) => res.render("products/productCreate"), 

    store: (req,res) => {
        productService.store(req.body, req.file);
		res.redirect('/producto');
    },
    
    
    
    // **EDICION DE PRODUCTOS**
    edit: (req,res) => res.render("products/productEdit", {
        product: productService.getOneBy(req.params.id), user: req.session.user}),

    update: (req,res) => {
        productService.update(req.params.id, req.body, req.file);
        res.redirect('/producto/detalle/'+req.params.id)
    },



    // **ELIMINACION DE PRODUCTOS**
    destroy: (req, res) => {
        productService.deleteById(req.params.id);
		res.redirect('/producto');
    }
};



module.exports = productsController;