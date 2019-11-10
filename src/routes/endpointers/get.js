const route = require('express').Router()

const user = require('../controllers/user')

route.post('/', user.create)

module.exports = app => app.use(route)
