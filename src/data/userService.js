const fs = require('fs');
const path = require('path');

const bcrypt = require("bcryptjs");
const salt = 12;

const usersFilePath = path.join(__dirname, './users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let usersService = {
    // guardar registro
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
    },

    // validar logeo
    validate: function(input) {
        for (let user of users){
            if (user.username === input.username && user.email === input.email && bcrypt.compareSync(input.password, user.password)){
                return true;
            }
        }
        return false
    },

    getByUsername: function(username) {
        return users.find(user => user.username === username)
    }
};

module.exports = usersService;