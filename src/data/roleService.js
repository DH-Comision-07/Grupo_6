
// **BASE DE DATOS**
const db = require('./models');



// **SERVICE**
let roleService = {

    // **GET**
    getAll: async function() {
        try {
            return await db.Role.findAll({})
        } catch (error) {
            return error 
        }
    },

    getBy: async function(name) {
        try {
            let role =  await db.Role.findOne({
                where: {
                    name: name
                }
            })
            return role.id
        } catch (error) {
            return error 
        }
    }

}



module.exports = roleService;