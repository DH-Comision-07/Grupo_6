module.exports = (sequelize, dataTypes) => {
    
    const ProductSize = sequelize.define('ProductSize', 
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
        size_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: false,
        tableName: 'product_size'
    })

    return ProductSize
};
