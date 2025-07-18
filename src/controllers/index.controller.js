
import { connectToDatabase } from '../db/db_connection.js'

export const getPong = async (req, res) => {

    try {

        connectToDatabase(`SELECT 'Pong' AS value`)
            .then(result => {
                res.json(result.recordset[0])
            })
            .catch(err => {
                console.error('SQL error:', err)
                res.status(500).send('Internal Server Error')
            })

    } catch (error) {
        console.error('Error connecting to the database:', error)
        res.status(500).send('Internal Server Error')
        return
    }
}