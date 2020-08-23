import express from 'express'
import pythonTest from './routes/pythonTest'
import cors from 'cors'
const server = express()

server.use(cors())
server.use('/', pythonTest)

server.listen(4000, () =>
  console.log('Server started on http://localhost:4000')
)
