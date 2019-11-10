require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3001

require('./routes/')(app)

app.listen(port, err => console.log(err ? 'Ocorreu um erro' : `Servidor rodando na porta :${port}` ))
