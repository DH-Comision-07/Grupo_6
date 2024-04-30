const express = require('express');
const path = require("path");
const router = express.Router();



// **MIDDLEWARES**
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, "public/images/users")
    },
    filename: function(req,file,cb) {
        cb(null, "img-"+(req.body.username).toLowerCase().replace(/\s/g, "-").replace(".", "")+path.extname(file.originalname))
    }
})
const uploadFile = multer({storage: storage});

const validateRegister = require("../middlewares/validateRegister")

const loggedOnly = require('../middlewares/loggedOnly');
const guestOnly = require('../middlewares/guestOnly');
const adminOnly = require('../middlewares/adminOnly');



// **CONTROLADOR**
const usersController = require('../controllers/usersController')



// **RUTAS**
router.get('/login', guestOnly, usersController.login);
router.post('/login', guestOnly, usersController.checkLogin)

router.get('/registro', guestOnly, usersController.register);
router.post('/', guestOnly, uploadFile.single("avatar"), validateRegister, usersController.storeRegister);

router.get("/logout", usersController.logout)


module.exports = router; 