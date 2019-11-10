const Booking = require('../../models/Booking')
const Spot = require('../../models/Spot')

module.exports = {
	store: async (req, res) => {
		try {
			const { user } = req.headers
			const { id } = req.params
			const { date } = req.body

			const spot = await Spot.findById(id)

			if (spot) {
				if (spot.user != user) {
					const booking = await Booking.create({ user, spot: id, date })

					await booking.populate('spot').populate('user').execPopulate()

					res.status(201).json(booking)
				} else {
					res.status(400).send('Não pode agendar o prórpio spot')	
				}
			} else {
				res.status(400).send('spot não existe')
			}

		} catch(e) {
			res.status(500).send()
		}
	}
}