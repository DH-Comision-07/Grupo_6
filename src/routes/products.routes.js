const express = require('express');
const path = require("path");
const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, "public/images/products")
    },
    filename: function(req,file,cb) {
        cb(null, "img-"+req.body.name.toLowerCase().replace(/\s/g, "-")+path.extname(file.originalname))
    }
})
const uploadFile = multer({storage: storage});

const productsController = require('../controllers/productsController');


router.get('/', productsController.index);
router.get('/detalle/:id', productsController.productDetail)
router.get('/carrito', productsController.productCart)

// creacion de productos
router.get('/nuevo', productsController.productCreate)
router.post('/', uploadFile.single("image"), productsController.store)

router.get('/:id/editar', productsController.productEdit)
    

module.exports = router;
