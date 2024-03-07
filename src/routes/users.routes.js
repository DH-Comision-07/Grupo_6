const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

// router.get('/', usersController.getAll);
// router.get('/:id', usersController.getOne);

router.get('/login', usersController.getLogin);
router.get('/registro', usersController.getRegister);


module.exports = router;