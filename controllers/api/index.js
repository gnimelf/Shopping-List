const router = require('express').Router()

const userRoutes = require('./user-routes')
const listRoutes = require('./user-routes')
const itemRoutes = require('./user-routes')

router.use('/user', userRoutes)
router.use('/list', listRoutes)
router.use('/item', itemRoutes)

module.exports = router