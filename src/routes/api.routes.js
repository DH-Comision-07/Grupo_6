const express = require('express');
const routes = express.Router();



// **SERVICE**
const userService = require('../model/userService.js')
const productService = require('../model/productService');
const categoryService = require('../model/categoryService.js');



// **RUTAS DE USUARIOS**
routes.get('/users', async function(req,res) {
    let usersData = await userService.getAll()
    let users = usersData.map(({id,name,email}) => ({id,name,email, detail: 'http://localhost:3030/api/users/'+id}))

   return res.json({
        count: users.length,
        users: users
    })
});


routes.get('/users/:id', async function(req,res) {
    let user = await userService.getById(req.params.id)

    return res.json({
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        img: user.img_url
    })
});



// **RUTAS DE PRODUCTOS**
routes.get('/products', async function(req,res){
    let products = await productService.getAll();
    let countByCategory = await productService.getAmmPerCategory()
    
    return res.json({
        count: products.length,
        countByCategory: countByCategory,
        products: products.map(({id, name, description, sizes, detail}) => ({
            id, name, description, 
            sizes: sizes.map(size => size.name), 
            detail: 'http://localhost:3030/api/products/'+id
        }))
    })
})

routes.get('/products/:id', async function(req,res){
    let product = await productService.getOneBy(req.params.id)

    return res.json(product)
})

module.exports = routes;