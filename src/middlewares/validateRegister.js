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
  .isEmail().withMessage("Debe ingresar un mail valido")
  .custom(async (value) => {
    const user = await User.findOne({ email: value });
    if (user) {
      throw new Error('El correo electrónico ya está en uso');
    }
    return true;
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
  })

  //validar imagen y confirmar contraseña
  //administrador o comporador y terminos ?
]

module.exports = validateRegister;