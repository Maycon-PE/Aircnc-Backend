const { model, Schema } = require('mongoose')

const Booking = new Schema({
	date: String,
	approved: Boolean,
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'user'
	},
	spot: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'spot'
	}
})

module.exports = model('booking', Booking)
