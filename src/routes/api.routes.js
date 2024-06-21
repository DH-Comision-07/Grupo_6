const express = require('express');
const routes = express.Router();


// **BASE DE DATOS**
const db = require('../model/models');


// **RUTAS**
routes.get('/users', async function(req,res) {
    try {
        let usersData = await db.User.findAll()
        let users = usersData.map(({id,name,email}) => ({id,name,email, detail: 'http://localhost:3030/api/users/'+id}))

        return res.json({
            count: users.length,
            users: users
        })
    } catch (error) {
        return error 
    }
});

routes.get('/users/:id', async function(req,res) {
    try {
        let user = await db.User.findByPk(req.params.id)

        return res.json({
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            img: user.img_url
        })
    } catch (error) {
        return error 
    }
});



module.exports = routes;