const express = require('express');
const path = require("path");
const router = express.Router();



// **MIDDLEWARES**
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

const loggedOnly = require('../middlewares/loggedOnly');
const guestOnly = require('../middlewares/guestOnly');
const adminOnly = require('../middlewares/adminOnly');



// **RUTAS**
const productsController = require('../controllers/productsController');

router.get('/', productsController.index);

router.get('/detalle/:id', productsController.detail)

router.get('/nuevo', productsController.create)
router.post('/', uploadFile.single("image"), productsController.store)

router.get('/:id/editar', adminOnly, productsController.edit)
router.put('/detalle/:id', uploadFile.single("image"), productsController.update)

router.get('/carrito', productsController.cart)

router.delete('/detalle/:id/delete', productsController.destroy)


module.exports = router;