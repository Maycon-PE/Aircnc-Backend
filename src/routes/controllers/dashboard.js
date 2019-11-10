const Spot = require('../../models/Spot')
const User = require('../../models/User')

module.exports = {
	show: async (req, res) => {
		const { user } = req.headers

		if (!await User.findById(user))	{
			res.status(400).send()
		} else {
			const spots = await Spot.find({ user })

			res.status(200).json({ spots })
		}
	}
}