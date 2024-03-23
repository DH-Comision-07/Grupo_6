const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, './products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let productService = {
    getAll: function() {
        return products;
    },

    getOneBy: function(id) {
        return products.find((product) => product.id == id)
    }
}

module.exports = productService;