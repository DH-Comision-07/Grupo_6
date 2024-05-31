const {check} = require("express-validator");

const bcrypt = require("bcryptjs");

const db = require('../model/models')


let validateLogin = [
  check("username")
  .notEmpty().withMessage("Debe ingresar un nombre de usuario.")
  .custom(async (value) => {
    let user = await db.User.findOne({ where : {username: value }});
    if (user == undefined) {
      throw new Error("Usuario no encontrado.")
    } else {
      return true;
    }
  }),


  check("email")
  .isEmail().withMessage("Debe ingresar un mail valido.")
  .custom(async (value) => {
    let user = await db.User.findOne({ where : {email: value }});
    if (user == undefined) {
      throw new Error("Mail no encontrado.");
    } else {
      return true;
    }
  }),


  check("password")
  .notEmpty().withMessage("Debe ingresar una contraseña.")
  .custom(async (value, {req}) => {
    let user = await db.User.findOne({ where : {email: req.body.email, username: req.body.username}});
    if (user != null && bcrypt.compareSync(value, user.password)) {
      return true;
    } else {
      throw new Error("Contraseña incorrecta.");
    }
  }),
  
]

module.exports = validateLogin;