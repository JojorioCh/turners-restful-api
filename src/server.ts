import express from 'express'
import env from 'dotenv'
import carRoutes from './routes/index'

env.config()

const server = express()
server.use(express.json())

server.use('/api', carRoutes)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
