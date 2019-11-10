const path = require('path')
const fs = require('fs')

const dir = path.resolve(__dirname, 'endpointers')

module.exports = app =>
	fs.readdirSync(dir)
		.forEach(file => {
			require(`${dir}/${file}`)(app)
		})
