const { getConnect } = require('./db')

async function insertAnimal (animal) {
  const conn = await getConnect()

  try {
    const query = `
    INSERT INTO animais (nome, tipo, proprietario_id) 
    VALUES ($1, $2, $3)
    RETURNING *
  `
    const values = [
      animal.nome,
      animal.tipo,
      animal.proprietario_id
    ]

    const { rows } = await conn.query(query, values)

    return rows[0]
  } catch (error) {
    throw new Error(`Error interno ${error}`)
  } finally {
    conn.release()
  }
}

async function getAnimal () {
  const conn = await getConnect()

  try {
    const sql = 'SELECT * FROM animais'

    const { rows } = await conn.query(sql)

    return rows
  } catch (error) {
    throw new Error(`Error interno ${error}`)
  } finally {
    conn.release()
  }
}

async function getProprietarioAnimal (id) {
  const conn = await getConnect()

  try {
    const sql = 'SELECT * FROM animais WHERE proprietario_id = $1'

    const values = [id]

    const { rows } = await conn.query(sql, values)

    return rows
  } catch (error) {
    throw new Error(`Error interno ${error}`)
  } finally {
    conn.release()
  }
}

async function getAnimalById (id) {
  const conn = await getConnect()

  try {
    const sql = 'SELECT * FROM animais WHERE animal_id = $1'

    const values = [id]

    const { rows } = await conn.query(sql, values)

    return rows[0]
  } catch (error) {
    throw new Error(`Error interno ${error}`)
  } finally {
    conn.release()
  }
}

async function updateAnimal (animal) {
  const conn = await getConnect()

  try {
    const sql = 'UPDATE animais SET nome = $1, tipo = $2, proprietario_id = $3 WHERE animal_id = $4'
    const values = [animal.nome, animal.tipo, animal.proprietario_id, animal.animal_id]

    const { rows } = await conn.query(sql, values)

    return rows[0]
  } catch (error) {
    throw new Error(`Error interno ${error}`)
  } finally {
    conn.release()
  }
}

async function deleteAnimal (id) {
  const conn = await getConnect()

  try {
    const sql = 'DELETE FROM animais WHERE animal_id = $1'

    const values = [id]

    const { rows } = await conn.query(sql, values)

    return rows[0]
  } catch (error) {
    throw new Error(`Error interno ${error}`)
  } finally {
    conn.release()
  }
}

module.exports = { insertAnimal, getAnimal, getAnimalById, updateAnimal, getProprietarioAnimal, deleteAnimal }
