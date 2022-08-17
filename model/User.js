const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "list",
                key: "id",
            },
        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        onDelete: "CASCADE",
        modelName: "user",
    }
);

module.exports = User;
