const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')


router.get('/', productsController.index);
router.get('/detalle/:id', productsController.productDetail)
router.get('/carrito', productsController.productCart)
router.get('/nuevo', productsController.getNew)            // no usar get, reservado para sercvice
router.get('/editar/:id', productsController.getEditBy),
    

module.exports = router;