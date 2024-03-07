const express = require('express');
const path = require('path');

const usersController = { 
    getLogin: (req,res) => res.sendFile(path.join(__dirname,'../views/users/login.html')),

    getRegister: (req, res) => res.sendFile(path.join(__dirname, '../views/users/register.html')),

    // getAll: (req, res) => res.send("Estas viendo el listasdo de usuarios"),

    // getOne: (req, res) => res.send(`Estas viendo el detalle del usuario nro ${req.params.id}`),
}

module.exports = usersController;