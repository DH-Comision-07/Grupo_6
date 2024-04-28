const express = require('express');
const path = require('path');
const bcrypt = require("bcryptjs");

const {validationResult} = require("express-validator");

let userService = require('../data/userService');

const usersController = { 

    // loggeo
    login: (req,res) => res.render("users/login.ejs"),

    checkLogin: (req,res) => {
        let input = req.body;
        let user = userService.getByUsername(input.username);

        if (user && user.username === input.username && user.email === input.email && bcrypt.compareSync(input.password, user.password)){
            
            req.session.user = {
                firstName: user.firstName,
                lastName: user.lastName,
                type: user.type
            }
            req.session.isLogged = true;

            res.redirect("/");
        }
        else {
            res.render("users/login", {error: "Email, nombre de usuario o contraseña incorrectos.", old: req.body})
        }
    },


    // registro
    register: (req, res) => res.render("users/register.ejs"),

    storeRegister: (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            userService.store(req.body, req.file);
            res.redirect('/');
        }
        else {
            res.render("users/register.ejs", {errors: errors.mapped(), old: req.body });
        }
    },
}

module.exports = usersController;