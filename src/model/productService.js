const fs = require('fs');
const path = require('path');



// **BASE DE DATOS**
const db = require('./models');



// **SERVICE**
let productService = {

    // **GET**
    getAll: async function() {
        try {
            return await db.Product.findAll({
                include: [
                    {association: 'colors'},
                    {association: 'sizes'}
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

    getAmmPerCategory: async function(){
        try {
            let products = await db.Product.findAll()
            let categories = await db.Category.findAll()
            let count = Object.fromEntries(categories.map(key => [key.name, products.filter(prod => prod.category_id === key.id).length ]));

            return count

        } catch(error) {
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
    update: async function(id, product, image) {
        
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
    deleteById: async function(id){
        try {

            await db.ProductColor.destroy({where: {product_id: id}})

            await db.ProductSize.destroy({where: {product_id: id}})

            await db.Product.destroy({where: {id: id}})

        } catch (error) {
            console.error(error);
        }
    }
}



module.exports = productService;