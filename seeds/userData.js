const  {User} = require('../models')

const userData = [
    {
        user_name: "Alec",
        last_name: "Simone",
        email: "alecsimone2@gmail.com",
        password: "password",
    },
    {
        user_name: "Anisa",
        last_name: "Ali",
        email: "anisa.ali.5999385@gmail.com",
        password: "password",
    },
    {
        user_name: "Taja",
        last_name: "Jones",
        email: "taja.jones2@gmail.com",
        password: "password",
    },
    {
        user_name: "Abdul",
        last_name: "Mohamud",
        email: "AbdiganiMoham@gmail.com",
        password: "password",
    },
    {
        user_name: "Justin",
        last_name: "Fleming",
        email: "fezzygo@gmail.com",
        password: "password",
    },
]

const seedUser = () => User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    })

module.exports = seedUser