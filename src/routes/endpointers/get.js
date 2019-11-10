const routes = require('express').Router()

const spot = require('../controllers/spot')
const dashboard = require('../controllers/dashboard')

routes.get('/spot?:tech', spot.index)
routes.get('/dashboard', dashboard.show)

module.exports = app => app.use(routes)