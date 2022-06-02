const express = require('express')

const { createAnimal, deleteAnimal, getAnimal, getAnimalById, updateAnimal } = require('../controllers/animal.controllers.js')

const routerAnimais = express.Router()

routerAnimais.post('/', createAnimal)
routerAnimais.put('/', updateAnimal)
routerAnimais.get('/', getAnimal)
routerAnimais.get('/:id', getAnimalById)
routerAnimais.delete('/:id', deleteAnimal)

module.exports = routerAnimais
