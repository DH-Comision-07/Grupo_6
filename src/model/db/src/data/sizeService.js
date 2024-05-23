const fs = require('fs');
const path = require('path');



// **BASE DE DATOS**
const db = require('./models');



// **SERVICE**
let sizeService = {

    // **GET**
    getAll: async function() {
        try {
            return await db.Size.findAll({})
        } catch (error) {
            return error 
        }
    }

}



module.exports = sizeService;