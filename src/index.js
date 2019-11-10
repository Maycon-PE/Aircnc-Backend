require('dotenv').config()
const express = require('express')

const app = express()
app.use(express.json())
const port = process.env.PORT || 3001

require('./routes/')(app)

app.listen(port, err => console.log(err ? 'Ocorreu um erro' : `Servidor rodando na porta :${port}` ))
