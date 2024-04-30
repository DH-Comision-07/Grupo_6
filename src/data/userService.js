const fs = require('fs');
const path = require('path');



// **HASHEO**
const bcrypt = require("bcryptjs");
const salt = 12;



// **BASE DE DATOS**
const usersFilePath = path.join(__dirname, './users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



// **SERVICE**
let usersService = {

    // **GET**
    getByUsername: function(username) {
        return users.find(user => user.username === username)
    },



    // **GUARDAR**
    store: function(user, avatar) {
        let newUser = {
            id: users[users.length - 1].id + 1, // crea id, ARREGLAR?
            firstName: user.firstName.toLowerCase(),
            lastName: user.lastName.toLowerCase(),
            username: user.username,
            email: user.email,
            password: bcrypt.hashSync(user.password, salt),
            type: user.type,
            avatar: "/images/users/"+avatar.filename,
        };

        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
    }

};



module.exports = usersService;