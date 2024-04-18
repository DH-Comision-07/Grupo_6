const express = require('express');
const path = require("path");
const router = express.Router();

// const multer = require("multer");
// const storage = multer.diskStorage({
//     destination: function(req,file,cb) {
//         cb(null, "public/images/users")
//     },
//     filename: function(req,file,cb) {
//         cb(null, "img-"+req.body.firstName.toLowerCase().replace(/\s/g, "-")+"-"+req.body.lastName.toLowerCase().replace(/\s/g, "-")+path.extname(file.originalname))
//     }
// })
// const uploadFile = multer({storage: storage});

const usersController = require('../controllers/usersController')



router.get('/login', usersController.login);

router.get('/registro', usersController.register);
router.post('/', usersController.storeRegister);


module.exports = router;