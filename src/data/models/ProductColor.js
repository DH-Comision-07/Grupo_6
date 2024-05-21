module.exports = (sequelize, dataTypes) => {
    
    const ProductColor = sequelize.define('ProductColor', 
    {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        color_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: false,
        tableName: 'product_color'
    })

    return ProductColor
};
