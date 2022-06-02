const { getConnect } = require('./db')

async function insertProprietario (proprietario) {
  const conn = await getConnect()

  try {
    const query = `
      INSERT INTO proprietarios (
      nome,
      telefone) 
      VALUES ($1, $2)
      RETURNING *
    `

    const values = [
      proprietario.nome,
      proprietario.telefone
    ]

    const { rows } = await conn.query(query, values)

    return rows[0]
  } catch (error) {
    throw new Error(`Error interno ${error}`)
  } finally {
    conn.release()
  }
}

async function getProprietarios () {
  const conn = await getConnect()

  try {
    const query = `
    SELECT * FROM proprietarios
  `

    const { rows } = await conn.query(query)

    return rows
  } catch (error) {
    throw new Error(`Error interno ${error}`)
  } finally {
    conn.release()
  }
}

async function getProprietarioById (id) {
  const conn = await getConnect()

  try {
    const query = `
    SELECT * FROM proprietarios
    WHERE proprietario_id = $1
  `

    const values = [
      id
    ]

    const { rows } = await conn.query(query, values)

    return rows[0]
  } catch (error) {
    throw new Error(`Error interno ${error}`)
  } finally {
    conn.release()
  }
}

async function updatePropriedade (proprietario) {
  const conn = await getConnect()

  try {
    const query = 'UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3'

    const values = [proprietario.nome, proprietario.telefone, proprietario.proprietario_id]

    const { rows } = await conn.query(query, values)

    return rows[0]
  } catch (error) {
    throw new Error(`Error interno ${error}`)
  } finally {
    conn.release()
  }
}

async function deletePropriedade (id) {
  const conn = await getConnect()
  try {
    const query = 'DELETE FROM proprietarios WHERE proprietario_id = $1'

    const values = [id]

    const { rows } = await conn.query(query, values)

    return rows[0]
  } catch (error) {
    throw new Error(`Error interno ${error}`)
  } finally {
    conn.release()
  }
}

module.exports = { insertProprietario, getProprietarios, getProprietarioById, updatePropriedade, deletePropriedade }
