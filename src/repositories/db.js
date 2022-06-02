const pg = require('pg')

async function getConnect () {
  if (global.connection) return global.connection.connect()

  const pool = new pg.Pool({
    connectionString: process.env.DB_CONNECTION
  })

  global.connection = pool

  return pool.connect()
}

module.exports = { getConnect }
