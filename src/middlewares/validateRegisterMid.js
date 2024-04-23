const {check} = require("express-validator");

let validateRegister = [
    check("firstName")
    .isEmpty().withMessage("Debe ingresar un nombre").bail()
    .isLength({min:3, max:20}).withMessage("El nombre ingresado debe tener entre 3 y 20 letras").bail(),
    

    check("lastName")
    .isEmpty().withMessage("Debe ingresar un apellido").bail()
    .isLength({min:3, max:20}).withMessage("El apellido ingresado debe tener entre 3 y 20 letras").bail(),
    
    check("username")
    .isEmpty().withMessage("Debe ingresar un nombre de usuario").bail()
    .isLength({min:3, max:20}).withMessage("El nombre de usuario ingresado debe tener entre 3 y 15 letras").bail(),
    
    // image validator?

    check("email")
    .isEmpty().withMessage("Debe ingresar un mail").bail()
    .isEmail().withMessage("Debe ingresar un mail valido").bail(),

    check("password")
    .isEmpty().withMessage("Debe ingresar una contraseña").bail()
    .isLength({min:8, max:20}).withMessage("La contraseña ingresada debe tener entre 8 y 20 caracteres").bail()
    .custom(value => {
        if (!/\d/.test(value)) {
          throw new Error("La contraseña debe incluir minimo un numero");
        }
        return true;
    }).bail()
]

module.exports = validateRegister;