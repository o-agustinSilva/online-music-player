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
        }
    });

    return Rooms;
};