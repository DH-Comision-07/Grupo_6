const fs = require('fs');
const path = require('path');



// **BASE DE DATOS**
const db = require('./models');



// **SERVICE**
let categoryService = {

    // **GET**
    getAll: async function() {
        try {
            return await db.Category.findAll({})
        } catch (error) {
            return error 
        }
    }

}



module.exports = categoryService;