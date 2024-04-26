const {check} = require("express-validator");

let validateRegister = [
  check("firstName")
  .notEmpty().withMessage("Debe ingresar un nombre.")
  .isLength({min: 2, max: 20}).withMessage("El nombre ingresado debe tener entre 3 y 20 letras."),

  check("lastName")
  .notEmpty().withMessage("Debe ingresar un apellido.")
  .isLength({min: 2, max: 20}).withMessage("El apellido ingresado debe tener entre 3 y 20 letras."),

  check("username")
  .notEmpty().withMessage("Debe ingresar un nombre de usuario.")
  .isLength({min: 5, max: 15}).withMessage("El nombre de usuario ingresado debe tener entre 5 y 15 letras."),

  check("email")
  .notEmpty().withMessage("Debe ingresar un mail.")
  .isEmail().withMessage("Debe ingresar un mail valido"),

  check("password")
  .notEmpty().withMessage("Debe ingresar una contrasena.")
  .isLength({min: 8, max: 25}).withMessage("La contrasena ingresada debe tener entre 8 y 25 letras.")
  .custom(value => {
    if (!(/[A-Z]/.test(value))) {
      throw new Error("La contrasena ingresada debe contener mayusculas.");
    }
    return true;
  })
  .custom(value => {
    if (!(/[a-z]/.test(value))) {
      throw new Error("La contrasena ingresada debe contener minusculas.");
    }
    return true;
  })
  .custom(value => {
    if (!/[a-zA-Z]/.test(value) || !/\d/.test(value)) {
        throw new Error("La contrasena ingresada debe contener numeros y letras")
    }
    return true;
  })

  //validar imagen y confirmar contrasena
  //administrador o comporador y terminos ?
]

module.exports = validateRegister;