const sequelize = require('../config/connection')
const seedUsers = require('./userData')
const seedLists = require('./listData')
const seedItems = require('./itemData')

const seedAll = async () => {
  await sequelize.sync({ force: true })

  await seedUsers()

  await seedItems()

  await seedLists()

  process.exit(0)
}

seedAll()