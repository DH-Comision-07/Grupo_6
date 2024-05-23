module.exports = (sequelize, dataTypes) => {
    
    const Size = sequelize.define('Size', 
    {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(10),
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'sizes'
    })

    Size.associate = function(models) {
        Size.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_size',
            foreignKey: 'size_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }

    return Size
};