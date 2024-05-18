module.exports = (sequelize, dataTypes) => {
    
    const Product = sequelize.define('Product', 
    {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        materials: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        care: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        final_price: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        visibility: {
            type: dataTypes.TINYINT,
            allowNull: false
        },
        new_release: {
            type: dataTypes.TINYINT,
            allowNull: false
        },
        on_sale: {
            type: dataTypes.TINYINT,
            allowNull: false
        },
        sales_amount: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        units_sold: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'products'
    });

    Product.associate = function(models){
        Product.hasMany(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })
    }

    return Product
};


