const express = require('express');
const path = require('path');

const usersController = { 
    getLogin: (req,res) => res.render("users/login.ejs"),

    getRegister: (req, res) => res.render("users/register.ejs"),
}

module.exports = usersController;