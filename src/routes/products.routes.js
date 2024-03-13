const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')


router.get('/detalle', productsController.getDetail)
router.get('/carrito', productsController.getCart)


router.get('/nuevo', productsController.getNew)                     // Ruta para mostrar el formulario de creación de productos

router.get('/editar/:id', productsController.getEditBy),
    

module.exports = router;