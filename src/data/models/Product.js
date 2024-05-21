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
            allowNull: false,
            defaultValue: 0
        },
        units_sold: {
            type: dataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image_url: {
            type: dataTypes.STRING(200),
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'products'
    })

    Product.associate = function(models) {
        Product.belongsToMany(models.Color, { 
            as: 'colors',
            through: 'product_color',
            foreignKey: 'product_id',
            otherKey: 'color_id',
            timestamps: false
        })
        Product.belongsToMany(models.Size, {
            as: 'sizes',
            through: 'product_size',
            foreignKey: 'product_id',
            otherKey: 'size_id',
            timestamps: false
        })
    }

    return Product
};


