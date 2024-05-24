module.exports = (sequelize, dataTypes) => {
    
    const User = sequelize.define('User', 
    {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastname: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(300),
            allowNull: false
        },
        img_url: {
            type: dataTypes.STRING(300),
            allowNull: false
        },
        role_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        username: {
            type: dataTypes.STRING(15),
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'users'
    })

    User.associate = function(models){
        User.belongsTo(models.Role, {
            as: 'roles',
            foreignKey: 'role_id'
        })
    }

    return User
};
