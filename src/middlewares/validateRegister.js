const {check} = require("express-validator");

const db = require('../model/models')

let validateRegister = [
  check("firstName")
  .notEmpty().withMessage("Debe ingresar un nombre.")
  .isLength({min: 2, max: 20}).withMessage("El nombre ingresado debe tener entre 2 y 20 letras."),


  check("lastName")
  .notEmpty().withMessage("Debe ingresar un apellido.")
  .isLength({min: 2, max: 20}).withMessage("El apellido ingresado debe tener entre 2 y 20 letras."),


  check("username")
  .notEmpty().withMessage("Debe ingresar un nombre de usuario.")
  .isLength({min: 5, max: 15}).withMessage("El nombre de usuario ingresado debe tener entre 5 y 15 letras.")
  .custom(async (value) => {
    let user = await db.User.findOne({ where : {username: value }});
    if (user == undefined) {
      return true;
    } else {
      throw new Error("El nombre de usuario ingresado ya esta en uso.");
    }
  }),


  check("email")
  .notEmpty().withMessage("Debe ingresar un mail.")
  .isEmail().withMessage("Debe ingresar un mail valido")
  .custom(async (value) => {
    let user = await db.User.findOne({ where : {email: value }});
    if (user == undefined) {
      return true;
    } else {
      throw new Error("El mail ingresado ya esta en uso.");
    }
  }),


  check("password")
  .notEmpty().withMessage("Debe ingresar una contraseña.")
  .isLength({min: 8, max: 25}).withMessage("La contraseña ingresada debe tener entre 8 y 25 letras.")
  .custom(value => {
    if (!(/[A-Z]/.test(value))) {
      throw new Error("La contraseña ingresada debe contener mayúsculas.");
    }
    return true;
  })
  .custom(value => {
    if (!(/[a-z]/.test(value))) {
      throw new Error("La contraseña ingresada debe contener minúsculas.");
    }
    return true;
  })
  .custom(value => {
    if (!/[a-zA-Z]/.test(value) || !/\d/.test(value)) {
        throw new Error("La contraseña ingresada debe contener numeros y letras")
    }
    return true;
  }),


  check('avatar')
  .custom((value, {req}) => {
        if((req.file.mimetype.toLowerCase() === 'image/png') || (req.file.mimetype.toLowerCase() === 'image/jpeg') || (req.file.mimetype.toLowerCase() === 'image/jpg') || (req.file.mimetype.toLowerCase() === 'image/gif')){
            return true; 
        }else{
            return false; 
        }
    })
  .withMessage('La imagen debe ser formato PNG, JPEG, JPG O GIF.'),


  check('confirm-password')
  .custom((value, {req}) => {
    if(value  === req.body.password){
      return true;
    } else { 
      return false;
    }
  })
  .withMessage('Las contraseñas no coinciden.')
]

module.exports = validateRegister;