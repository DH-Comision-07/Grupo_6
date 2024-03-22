const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.index);
router.get('/detalle/:id', productsController.productDetail)
router.get('/carrito', productsController.productCart)
router.get('/nuevo', productsController.productCreate)
router.get('/editar/:id', productsController.productEdit)
    

module.exports = router;
