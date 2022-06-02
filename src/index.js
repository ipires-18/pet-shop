require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routerProprietario = require('./routes/proprietario.route')
const routerAnimais = require('./routes/animal.route')

const server = express()

server.use(express.json())
server.use(cors())
server.use('/proprietario', routerProprietario)
server.use('/animal', routerAnimais)

server.use((err, req, res, next) => {
  res.status(400).json({ error: err.message })
})

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
