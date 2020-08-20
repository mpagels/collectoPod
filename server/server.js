import express from 'express'
import pythonTest from './routes/pythonTest'
const server = express()

server.use('/', pythonTest)

server.listen(4000, () =>
  console.log('Server started on http://localhost:4000')
)
