module.exports = (sequelize, dataTypes) => {
    
    const Category = sequelize.define('Category', 
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
        size_guide_url: {
            type: dataTypes.STRING(150)
        },
    },
    {
        timestamps: false,
        tableName: 'categories'
    });

    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as: 'product',
            foreignKey: 'category_id'
        })
    }

    return Category
};