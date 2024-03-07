const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

// router.get('/', productsController.getAll);
// router.get('/:id', productsController.getOne);

router.get('/detalle', productsController.getDetail)
router.get('/carrito', productsController.getCart)

module.exports = router;