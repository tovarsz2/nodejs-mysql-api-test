
import mssql from 'mssql'
import { DB_USER } from '../../config.js'
import { DB_PASSWORD } from '../../config.js'
import { DB_DATABASE } from '../../config.js'
import { SERVER } from '../../config.js'

const sqlConfig = {
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  server: SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

export async function connectToDatabase(query) {
  await mssql.connect(sqlConfig)
    const request = new mssql.Request()
    return await request.query(query)
}
