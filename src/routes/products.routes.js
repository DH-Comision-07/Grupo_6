const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')


router.get('/', productsController.getAll);
router.get('/detalle/:id', productsController.getDetail)
router.get('/carrito', productsController.getCart)
router.get('/nuevo', productsController.getNew)
router.get('/editar/:id', productsController.getEditBy),
    

module.exports = router;