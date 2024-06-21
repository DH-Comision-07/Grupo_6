const fs = require('fs');
const path = require('path');



// **HASHEO**
const bcrypt = require("bcryptjs");
const salt = 12;



// **BASE DE DATOS**
const usersFilePath = path.join(__dirname, './users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const db = require('./models');



// **SERVICE**
let usersService = {

    // **GET**
    getAll: async function(){
        try {
            return await db.User.findAll()
        } catch(error) {
            console.error(error)
            return undefined
        }
    },

    getByUsername: async function(username) {
        try {
            return await db.User.findOne({
                where: {
                    username: username
                }
            })
        } catch (error) {
            console.error(error)
            return undefined
        }
    },

    getById: async function(id) {
        try {
            return await db.User.findOne({
                where: {
                    id: id
                }
            })
        } catch (error) {
            console.error(error)
            return undefined
        }
    },



    // **GUARDAR**
    store: async function(user, avatar) {
        let newUser = {
            // id: users[users.length - 1].id + 1, 
            name: user.firstName.toLowerCase(),
            lastname: user.lastName.toLowerCase(),
            username: user.username,
            email: user.email,
            password: bcrypt.hashSync(user.password, salt),
            role_id: user.role,
        };
        if(avatar){
            newUser.img_url = "/images/users/"+avatar.filename
        } else {
            newUser.img_url = "/images/users/default.png"
        }

        // users.push(newUser);
        // fs.writeFileSync(usersFilePath, JSON.stringify(users));
        try {
            await db.User.create(newUser)
        } catch (error) {
            console.error(error)
        }
    },



    // **EDITAR**
    update: async function(update, updateId) {
        

        let updatedUser = {
            id: updateId,
            name: update.firstName,
            lastname: update.lastName,
            username: update.username,
            role_id: update.role
        }

        db.User.update(updatedUser, {where: {id: updateId}})
    }

};



module.exports = usersService;