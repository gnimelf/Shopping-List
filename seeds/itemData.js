const {Item} = require('../models')

const itemData = [
    {
        item_name: "Pasta",
        item_cost: 2.50,
    },
    {
        item_name: "Rice",
        item_cost: 2.50,
    },
    {
        item_name: "Milk",
        item_cost: 3.50,
    },
    {
        item_name: "Cheese",
        item_cost: 3.50,
    },
    {
        item_name: "Cooking oil",
        item_cost: 1.00,
    },
    {
        item_name: "Butter",
        item_cost: 1.25,
    },
    {
        item_name: "Onions",
        item_cost: 1.50,
    },
    {
        item_name: "Fruit",
        item_cost: 3.50,
    },
    {
        item_name: "Vegetables",
        item_cost: 3.00,
    },
    {
        item_name: "Herbs & spices",
        item_cost: 0.50,
    },
]

const seedItem = () => Item.bulkCreate(itemData, {
    individualHooks: true,
    returning: true,
})

module.exports = seedItem