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
const validateProduct = require('../middlewares/validateProduct')


// **CONTROLADOR**
const productsController = require('../controllers/productsController');



// **RUTAS**
router.get('/', adminOnly, productsController.index);

router.get('/detalle/:id', productsController.detail)

router.get('/nuevo', adminOnly, productsController.create)
router.post('/', adminOnly, uploadFile.single("image"), validateProduct, productsController.store)

router.get('/:id/editar', adminOnly, productsController.edit)
router.put('/detalle/:id', adminOnly,  uploadFile.single("image"), validateProduct, productsController.update)

router.get('/carrito', loggedOnly, productsController.cart)

router.delete('/detalle/:id/delete', adminOnly, productsController.destroy)



module.exports = router;