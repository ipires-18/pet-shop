const { create, getAll, getById, deleteById, update } = require('../services/animal.service')

async function createAnimal (request, response, next) {
  try {
    const { nome, tipo, proprietario_id } = request.body

    if (!nome || !tipo || !proprietario_id) throw new Error('Nome, tipo, e Proprietario_id são obrigatórios')

    const objBody = { nome, tipo, proprietario_id }

    const result = await create(objBody)

    return response.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

async function getAnimal (request, response, next) {
  try {
    const result = await getAll(request.query)

    return response.send(result)
  } catch (error) {
    next(error)
  }
}

async function getAnimalById (request, response, next) {
  try {
    const { id } = request.params

    const result = await getById(id)

    return response.json(result)
  } catch (error) {
    next(error)
  }
}

async function deleteAnimal (request, response, next) {
  try {
    const { id } = request.params

    await deleteById(id)

    return response.send()
  } catch (error) {
    next(error)
  }
}

async function updateAnimal (request, response, next) {
  try {
    const { nome, tipo, proprietario_id, animal_id } = request.body

    if (!nome || !tipo || !proprietario_id || !animal_id) throw new Error('Nome, tipo, Proprietario_id e animal_id são obrigatórios')

    const objUpdate = { nome, tipo, proprietario_id, animal_id }

    const result = await update(objUpdate)

    return response.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { createAnimal, getAnimal, getAnimalById, deleteAnimal, updateAnimal }
