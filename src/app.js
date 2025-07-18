import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())
app.use(indexRoutes)
app.use('/api', employeesRoutes)

app.use((req, res, next) => { 
    res.status(404).json({ code: 404, message: 'URL Not Found' })
    next()
})

export default app