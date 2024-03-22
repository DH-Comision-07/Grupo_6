const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')


router.get('/', productsController.index);
router.get('/detalle/:id', productsController.productDetail)
router.get('/carrito', productsController.getCart)
router.get('/nuevo', productsController.getNew)
router.get('/editar/:id', productsController.getEditBy),
    

module.exports = router;