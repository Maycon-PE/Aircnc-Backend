const { model, Schema } = require('mongoose')

const User = new Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		validate: email => email.includes('@')	
	}
})

module.exports = model('user', User)
