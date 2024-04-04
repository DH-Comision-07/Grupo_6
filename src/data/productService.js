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

    store: function(product, image) {
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
            image: "/images/products/"+image.filename,
            discount: product.discount,
            stock: product.stock,
        };

        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
    },

    update: function(id, update, image) {
        let updateIndex = products.findIndex((product) => product.id == id);
        let newProduct = {
            id: id,
            name: update.name.toUpperCase(),
            description: update.description,
            materials: update.materials,
            care: update.care,
            category: update.category,
            colors: update.colors.replace(/\s/g, "").split(","),
            sizes: update.sizes.replace(/\s/g, "").split(","),
            price: update.price,
            // image: "/images/updates/"+image.filename,
            discount: update.discount,
            stock: update.stock,
        };

        if (image != undefined) {
            newProduct.image = "/images/products/"+image.filename;
        } else {
            newProduct.image = products[updateIndex].image;
        }

        products[updateIndex] = newProduct;
        fs.writeFileSync(productsFilePath, JSON.stringify(products));

    },
     
    deleteById: function(id) {
        let deleteIndex = products.findIndex((product) => product.id == id);
        products.splice(deleteIndex, 1);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
    }
}

module.exports = productService;