const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, './users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let usersService = {
    store: function(user, avatar) {
        let newUser = {
            id: users[users.length - 1].id + 1, // crea id, ARREGLAR?
            firstName: user.firstName.toLowerCase(),
            lastName: user.lastName.toLowerCase(),
            email: user.email,
            password: user.password,   // ENCRIPTAR !!
            type: user.type,
            avatar: "/images/users/"+avatar.filename,
        };

        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
    },
};

module.exports = usersService;