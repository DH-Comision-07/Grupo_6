const {check, validationResult} = require("express-validator");

let validateRegister = [
  check("firstName").isLength({min: 3}).withMessage("minimo 3 letras")
]

module.exports = validateRegister;