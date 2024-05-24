module.exports = (sequelize, dataTypes) => {
    
    const Color = sequelize.define('Color', 
    {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'colors'
    })

    Color.associate = function(models) {
        Color.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_color',
            foreignKey: 'color_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }

    return Color
};
