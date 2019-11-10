const { model, Schema } = require('mongoose')

const Spot = new Schema({
	thumbnail: String,
	company: String,
	price: Number,
	techs: [String],
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'user'
	}
})

module.exports = model('spot', Spot)
