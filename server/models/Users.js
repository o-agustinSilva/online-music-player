module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        hashedPassword:{
            type: DataTypes.STRING,
            allowNull: false
        },
        accessToken: {
            type: DataTypes.STRING, 
            allowNull: true 
        },
        refreshToken: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Users.associate = (models) => {
        Users.belongsTo(models.Rooms); // An user belongs to a room or not
    };
    
    return Users;
}