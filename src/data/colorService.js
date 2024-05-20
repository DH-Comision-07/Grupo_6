const fs = require('fs');
const path = require('path');



// **BASE DE DATOS**
const db = require('./models');



// **SERVICE**
let colorService = {

    // **GET**
    getAll: async function() {
        try {
            return await db.Color.findAll({})
        } catch (error) {
            return error 
        }
    }

}



module.exports = colorService;