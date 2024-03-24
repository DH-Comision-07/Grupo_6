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
    },

    save: function(product, image) {
        let newProduct = {
            id: products[products.length - 1].id + 1, // crea id, ARREGLAR?
            name: product.name.toUpperCase(),
            description: product.description,
            materials: product.materials,
            care: product.care,
            category: product.category,
            colors: product.colors.replace(/\s/g, "").split(","),
            sizes: product.sizes.replace(/\s/g, "").split(","),
            price: product.price,
            image: "/images/products/"+image.filename,    // ARREGLAR
            discount: product.discount,
            stock: product.stock,
        };

        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
    },
}

module.exports = productService;