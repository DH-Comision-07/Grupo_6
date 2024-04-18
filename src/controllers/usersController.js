const express = require('express');
const path = require('path');

let userService = require('../data/userService');

const usersController = { 
    login: (req,res) => res.render("users/login.ejs"),

    register: (req, res) => res.render("users/register.ejs"),

    storeRegister: (req,res) => {
        userService.store(req.body);
		res.redirect('/');
    },
}

module.exports = usersController;