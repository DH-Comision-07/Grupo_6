const express = require('express');
const path = require("path");
const router = express.Router();

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

const usersController = require('../controllers/usersController')

const validateRegister = require("../middlewares/validateRegisterMid")



router.get('/login', usersController.login);

router.get('/registro', usersController.register);
router.post('/', uploadFile.single("avatar"), validateRegister, usersController.storeRegister);


module.exports = router; 