const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");



// **SERVICE**
let userService = require('../model/userService');
let roleService = require('../model/roleService')



// **CONTROLADOR**
const usersController = { 

    // **INCIAR SESION**
    login: (req,res) => res.render("users/login.ejs"),

    checkLogin: async function(req,res) {
        // let input = req.body;
        // let user = await userService.getByUsername(input.username);

        // if (user && user.username === input.username && user.email === input.email && bcrypt.compareSync(input.password, user.password)){
        //     req.session.user = user

        //     res.redirect("/");
        // }
        // else {
        //     res.render("users/login", {
        //         error: "Email, nombre de usuario o contraseña incorrectos.", 
        //         old: req.body
        //     })
        // }
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let input = req.body;
            let user = await userService.getByUsername(input.username);

            if (user && user.username === input.username && user.email === input.email && bcrypt.compareSync(input.password, user.password)){
                req.session.user = user

                res.redirect("/");
            }
            else {
                res.render("users/login", {
                    error: "Email, nombre de usuario o contraseña incorrectos.", 
                    old: req.body
                })
            }
        }
        else {
            res.render("users/login.ejs", {
                errors: errors.mapped(), 
                old: req.body
            });
        }
    },



    // **MOSTRAR USUARIO**
    profile: (req, res) => res.render('users/profile'),



    // **REGISTRAR USUARIO**
    register: async function(req, res) 
    {
        res.render("users/register.ejs", {
            roles: await roleService.getAll(),
        })
    },

    storeRegister: async function(req,res) {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            userService.store(req.body, req.file);
            res.redirect('/cuenta/login');
        }
        else {
            res.render("users/register.ejs", {
                errors: errors.mapped(), 
                old: req.body,
                roles: await roleService.getAll()
            });
        }
    },



    // **CERRAR SESION**
    logout: (req, res) => {
        req.session.destroy();
        res.redirect("/");
    },



    // **EDITAR USUARIO**
    edit: async function(req, res) {
        res.render('users/edit.ejs', {
            roles: await roleService.getAll()
        })
    },

    storeEdit: async function(req,res) {
        userService.update(req.body, req.params.id);
        res.redirect('/cuenta/perfil');
    }
}



module.exports = usersController;