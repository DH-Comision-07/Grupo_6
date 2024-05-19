const fs = require('fs');
const path = require('path');



// **BASE DE DATOS**
const db = require('./models');

const productsFilePath = path.join(__dirname, './products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



// **SERVICE**
let productService = {

    // **GET**
    // getAll: function() { return products; },
    getAll: async function() {
        try {
            return await db.Product.findAll({
                include: [
                    {association: 'colors'},
                    {association: 'sizes'},
                    {association: 'images'}
                ]
            })
        } catch (error) {
            return error 
        }
    },

    // getOneBy: function(id) { return products.find((product) => product.id == id) },
    getOneBy: async function(id) {
        try {
            return await db.Product.findByPk(id, {
                include: [
                    {association: 'colors'},
                    {association: 'sizes'},
                    {association: 'images'}
                ]
            })
        } catch (error) {
            return error 
        }
    },

    getOnSale: async function() {
        try {
            return await db.Product.findAll({
                where: {
                    on_sale: 1
                },
                include: [
                    {association: 'colors'},
                    {association: 'sizes'},
                    {association: 'images'}
                ]
            })
        } catch (error) {
            return error 
        }
    },

    getNew: async function() {
        try {
            return await db.Product.findAll({
                where: {
                    new_release: 1
                },
                include: [
                    {association: 'colors'},
                    {association: 'sizes'},
                    {association: 'images'}
                ]
            })
        } catch (error) {
            return error 
        }
    },



    // **GUARDAR**
    store: function(product, image) {
        
        let newProduct = {
            id: products[products.length - 1].id + 1, // crea id, ARREGLAR?
            name: product.name.toUpperCase(),
            description: product.description,
            materials: product.materials,
            care: product.care,
            category: product.category,
            colors: typeof product.colors == "string" ? [product.colors] : product.colors,
            sizes: typeof product.sizes == "string" ? [product.sizes] : product.sizes,
            price: product.price,
            image: "/images/products/"+image.filename,
            discount: product.discount,
            stock: product.stock,
        };

        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
    },



    // **EDITAR**
    update: function(id, update, image) {
        let updateIndex = products.findIndex((product) => product.id == id);

        let newProduct = {
            id: id,
            name: update.name.toUpperCase(),
            description: update.description,
            materials: update.materials,
            care: update.care,
            category: update.category,
            colors: typeof update.colors == "string" ? [update.colors] : update.colors,
            sizes: typeof update.sizes == "string" ? [update.sizes] : update.sizes,
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
     

    
    // **ELIMINAR**
    deleteById: function(id) {
        let deleteIndex = products.findIndex((product) => product.id == id);
        products.splice(deleteIndex, 1);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
    }
}



module.exports = productService;