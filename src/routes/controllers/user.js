const User = require('../../models/User')

module.exports = {
	store: async (req, res) => {
		try {
			const { email } = req.body

			let user = await User.findOne({ email })

			if (!user) {
				user = await User.create({ email })
			}

			res.status(200).json(user)	 
		} catch(e) {
			res.status(400).json({ e })
		}
	}
}