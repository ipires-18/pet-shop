const { insertProprietario, getProprietarios, getProprietarioById, deletePropriedade, updatePropriedade } = require('../repositories/proprietario.repository')
const { getProprietarioAnimal } = require('../repositories/animal.repository')

async function create (proprietario) {
  return await insertProprietario(proprietario)
}

async function getAll () {
  return await getProprietarios()
}

async function getById (id) {
  return await getProprietarioById(id)
}

async function deleteById (id) {
  const result = await getProprietarioAnimal(id)

  if (result) {
    throw new Error('Não pode excluir, pois existe um animal com esse proprietario')
  }

  return await deletePropriedade(id)
}

async function update (proprietario) {
  return await updatePropriedade(proprietario)
}

module.exports = { create, getAll, getById, deleteById, update }
