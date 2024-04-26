const express = require('express');
const path = require('path');

const {validationResult} = require("express-validator");

let userService = require('../data/userService');

const usersController = { 
    login: (req,res) => res.render("users/login.ejs"),

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