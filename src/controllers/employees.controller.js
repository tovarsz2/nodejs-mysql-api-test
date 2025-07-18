import { connectToDatabase } from '../db/db_connection.js'

export const getEmployees = (req, res) => {
    connectToDatabase(`SELECT * FROM employee`)
        .then(result => {
            console.log(result)
            res.send(result.recordset)
        })
        .catch(err => {
            console.error('SQL error:', err)
            res.status(500).send('Internal Server Error')
        })
}

export const getEmployee = (req, res) => {
    connectToDatabase(`SELECT * FROM employee WHERE id = ${req.params.id}`)
        .then(result => {

            if (result.recordset.length === 0) {
                return res.status(404).json({ code: 404, message: 'No employees found' })
            }
            console.log(result)
            res.send(result.recordset)
        })
        .catch(err => {
            console.error('SQL error:', err)
            res.status(500).send('Internal Server Error')
        })
}

export const createEmployees = (req, res) => {
    connectToDatabase(`INSERT INTO employee (name, salary) VALUES ('${req.body.name}', ${req.body.salary})`)
        .then(result => {
            console.log(result.rowsAffected)
            res.send("Empleados post")
        })
        .catch(err => {
            console.error('SQL error:', err)
            res.status(500).send('Internal Server Error')
        })
}

export const updateEmployees = (req, res) => {
    connectToDatabase(`UPDATE employee SET name = ISNULL('${req.body.name}', name), salary = ISNULL(${req.body.salary}, salary) WHERE id = ${req.body.id}`)
        .then(result => {
            if (result.rowsAffected[0] === 0) {
                return res.status(404).json({ code: 404, message: 'No employees found' })
            }
            console.log(result.rowsAffected)
            res.send("Empleados update")
        })
        .catch(err => {
            console.error('SQL error:', err)
            res.status(500).send('Internal Server Error')
        })
}

export const deleteEmployees = (req, res) => {
    connectToDatabase(`DELETE FROM employee WHERE id = ${req.body.id}`)
        .then(result => {
            if (result.rowsAffected[0] === 0) {
                return res.status(404).json({ code: 404, message: 'No employees found' })
            }
            console.log(result.rowsAffected)
            res.send("Empleados delete")
        })
        .catch(err => {
            console.error('SQL error:', err)
            res.status(500).send('Internal Server Error')
        })
}
