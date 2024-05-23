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
            type: dataTypes.STRING(150),
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'categories'
    })

    return Category
};
