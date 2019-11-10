const routes = require('express').Router()
const multer = require('multer')

const storage = require('../../config/multer')

const user = require('../controllers/user')
const spot = require('../controllers/spot')
const booking = require('../controllers/booking')

const upload = multer(storage)

routes.post('/user', user.store)
routes.post('/spot', upload.single('thumbnail'), spot.store)
routes.post('/spot/:id/booking', booking.store)

module.exports = app => app.use(routes)
