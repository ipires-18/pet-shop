const { insertAnimal, getAnimal, getAnimalById, deleteAnimal, updateAnimal, getProprietarioAnimal } = require('../repositories/animal.repository')

async function create (animais) {
  return await insertAnimal(animais)
}

async function getAll (id) {
  const { proprietario_id } = id

  if (proprietario_id) {
    return await getProprietarioAnimal(proprietario_id)
  }

  return await getAnimal()
}

async function getById (id) {
  return await getAnimalById(id)
}

async function deleteById (id) {
  return await deleteAnimal(id)
}

async function update (animais) {
  return await updateAnimal(animais)
}

module.exports = { create, getAll, getById, deleteById, update }
