const express = require('express');
const path = require('path');

const {validationResult} = require("express-validator");

let userService = require('../data/userService');

const usersController = { 
    // loggeo
    login: (req,res) => res.render("users/login.ejs"),

    checkLogin: (req,res) => {
        if (userService.validate(req.body)){
            res.send("valid login!")
        }
        else {
            res.send("no accont!")
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