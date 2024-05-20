const fs = require('fs');
const path = require('path');



// **BASE DE DATOS**
const db = require('./models');

const productsFilePath = path.join(__dirname, './products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



// **SERVICE**
let productService = {

    // **GET**
    getAll: async function() {
        try {
            return await db.Product.findAll({
                include: [
                    {association: 'colors'},
                    {association: 'sizes'},
                    // {association: 'images'}
                ]
            })
        } catch (error) {
            return error 
        }
    },


    getOneBy: async function(id) {
        try {
            return await db.Product.findByPk(id, {
                include: [
                    {association: 'colors'},
                    {association: 'sizes'}
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
                    {association: 'sizes'}
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
                    {association: 'sizes'}
                ]
            })
        } catch (error) {
            return error 
        }
    },



    // **GUARDAR**
    store: function(product, image) {
        
        let newProduct = {
            name: product.name.toLowerCase(),
            description: product.description,
            materials: product.materials,
            care: product.care,
            category_id: product.category,
            price: product.price,
            discount: product.discount,
            final_price: product.price-((product.discount*product.price)/100),
            product_id: product.product_id,
            visibility: product.visibility == 'on' ? 1 : 0,
            on_sale: product.on_sale == 'on' ? 1 : 0,
            new_release: product.new_release == 'on' ? 1 : 0,
            image_url: "/images/products/"+image.filename,
        };

        db.Product.create(newProduct)
        .then(p => {
            let colors = typeof product.colors == "string" ? [product.colors] : product.colors
            colors.forEach(color => {
                db.ProductColor.create({
                    product_id: p.id,
                    color_id: color
                })
            })
            let sizes = typeof product.sizes == "string" ? [product.sizes] : product.sizes
            sizes.forEach(size => {
                db.ProductSize.create({
                    product_id: p.id,
                    size_id: size
                })
            })
        })
    },



    // **EDITAR**
    // update: function(id, update, image) {
    //     let updateIndex = products.findIndex((product) => product.id == id);

    //     let newProduct = {
    //         id: id,
    //         name: update.name.toUpperCase(),
    //         description: update.description,
    //         materials: update.materials,
    //         care: update.care,
    //         category: update.category,
    //         colors: typeof update.colors == "string" ? [update.colors] : update.colors,
    //         sizes: typeof update.sizes == "string" ? [update.sizes] : update.sizes,
    //         price: update.price,
    //         // image: "/images/updates/"+image.filename,
    //         discount: update.discount,
    //         stock: update.stock,
    //     };

    //     if (image != undefined) {
    //         newProduct.image = "/images/products/"+image.filename;
    //     } else {
    //         newProduct.image = products[updateIndex].image;
    //     }

    //     products[updateIndex] = newProduct;
    //     fs.writeFileSync(productsFilePath, JSON.stringify(products));

    // },
    update: function(id, product, image) {
        
        let updatedProduct = {
            id: id,
            name: product.name.toLowerCase(),
            description: product.description,
            materials: product.materials,
            care: product.care,
            category_id: product.category,
            price: product.price,
            discount: product.discount,
            final_price: product.price-((product.discount*product.price)/100),
            product_id: product.product_id,
            visibility: product.visibility == 'on' ? 1 : 0,
            on_sale: product.on_sale == 'on' ? 1 : 0,
            new_release: product.new_release == 'on' ? 1 : 0,
            // image_url: "/images/products/"+image.filename,
        };

        if (image != undefined) {
            updatedProduct.image_url = "/images/products/"+image.filename;
        } else {
            updatedProduct.image_url = this.getOneBy(id).image_url;
        }


        db.ProductColor.destroy({
            where: {product_id: id}
        })
        db.ProductSize.destroy({
            where: {product_id: id}
        })
        
        db.Product.update(updatedProduct, {where: {id: id}})
        .then(p => {
            let colors = typeof product.colors == "string" ? [product.colors] : product.colors
            colors.forEach(color => {
                db.ProductColor.create({
                    product_id: id,
                    color_id: color
                })
            })
            let sizes = typeof product.sizes == "string" ? [product.sizes] : product.sizes
            sizes.forEach(size => {
                db.ProductSize.create({
                    product_id: id,
                    size_id: size
                })
            })
        })
    },
     

    
    // **ELIMINAR**
    deleteById: function(id) {
        let deleteIndex = products.findIndex((product) => product.id == id);
        products.splice(deleteIndex, 1);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
    }
}



module.exports = productService;