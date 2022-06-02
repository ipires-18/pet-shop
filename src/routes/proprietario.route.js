const express = require('express')

const { createProprietario, getProprietario, getProprietarioById, deleteProprietario, updateProprietario } = require('../controllers/proprietario.controllers')

const routerProprietario = express.Router()

routerProprietario.post('/', createProprietario)
routerProprietario.put('/', updateProprietario)
routerProprietario.get('/', getProprietario)
routerProprietario.get('/:id', getProprietarioById)
routerProprietario.delete('/:id', deleteProprietario)

module.exports = routerProprietario
