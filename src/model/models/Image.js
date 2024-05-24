module.exports = (sequelize, dataTypes) => {
    
    const Image = sequelize.define('Image', 
    {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: dataTypes.STRING(150),
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'images'
    })

    Image.associate = function(models) {
        Image.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_image',
            foreignKey: 'image_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }

    return Image
};
