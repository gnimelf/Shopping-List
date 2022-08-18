const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Item extends Model {}

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true,
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        item_cost: {
            type: DataTypes.DECIMAL,
        },
        table_id: {
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
        moduleName: "item",
    }
)

module.exports = Item
