module.exports = (sequelize, dataTypes) => {
    
    const Role = sequelize.define('Role', 
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
        tableName: 'roles'
    })

    Role.associate = function(models){
        Role.hasMany(models.User, {
            as: 'users',
            foreignKey: 'role_id'
        })
    }

    return Role
};
