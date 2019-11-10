const fs = require('fs')	

const Spot = require('../../models/Spot')
const User = require('../../models/User')

module.exports = {
	index: async (req, res) => {
		const { tech } = req.query

		const spots = await Spot.find({ techs: tech })

		res.json({ spots })
	},

	store: async (req, res) => {
		try {
			const { filename: thumbnail } = req.file
			const { company, price, techs: techsString } = req.body
			const { user } = req.headers

			if (!await User.findById(user)) {
				fs.unlink(req.file.path, err => {
					if (err) res.status(400).json({ err })
					else res.status(400).send()
				})
			} else {
				const techs = techsString
					.split(',')
					.map(tech => tech.trim())


				Spot.create({ thumbnail, company, price, techs, user })
					.then(_document => {
						res.status(201).json({ _document })		
					})
					.catch(e => res.status(400).json({ e }))
			}			

		} catch(e) {
			res.status(500).json({ e })
		}
	}
}