const { create, getAll, getById, deleteById, update } = require('../services/proprietario.service')

async function createProprietario (request, response, next) {
  try {
    const { nome, telefone } = request.body

    if (!nome || !telefone) throw new Error('Nome e Telefone são obrigatorios')

    const objBody = { nome, telefone }

    const result = await create(objBody)

    return response.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

async function getProprietario (request, response, next) {
  try {
    const result = await getAll()

    return response.send(result)
  } catch (error) {
    next(error)
  }
}

async function getProprietarioById (request, response, next) {
  try {
    const { id } = request.params

    const result = await getById(id)

    return response.json(result)
  } catch (error) {
    next(error)
  }
}

async function deleteProprietario (request, response, next) {
  try {
    const { id } = request.params

    await deleteById(id)

    return response.send()
  } catch (error) {
    next(error)
  }
}

async function updateProprietario (request, response, next) {
  try {
    const { nome, telefone, proprietario_id } = request.body

    if (!nome || !telefone || !proprietario_id) throw new Error('Nome, Telefone e proprietario_id')

    const objUpdate = { nome, telefone, proprietario_id }

    const result = await update(objUpdate)

    return response.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { createProprietario, getProprietario, getProprietarioById, deleteProprietario, updateProprietario }
