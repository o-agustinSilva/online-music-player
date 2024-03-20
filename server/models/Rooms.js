module.exports = (sequelize, DataTypes) => {
    const Rooms = sequelize.define("Rooms", {
        access_code:{
            type: DataTypes.INTEGER(6),
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        guests_can_pause: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        guests_can_skip: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        OwnerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    // Sequelize creates an get() function
    Rooms.associate = (models) => {
        Rooms.hasMany(models.Users, { as: 'Guests'});
        Rooms.belongsTo(models.Users, { as: 'Owner' }); // A room belongs only to one user
    };

    return Rooms;
};