const express = require('express');
const path = require('path');

const {validationResult} = require("express-validator");

let userService = require('../data/userService');
const { log } = require('console');

const usersController = { 

    // loggeo
    login: (req,res) => res.render("users/login.ejs"),

    checkLogin: (req,res) => {
        if (userService.validate(req.body)){
            let user = userService.getByUsername(req.body.username);
            req.session.user = {
                firstName: user.firstName,
                lastName: user.lastName
            }
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
            res.render("users/register.ejs", {errors: errors.mapped(), old: req.body});
        }
    },
}

module.exports = usersController;