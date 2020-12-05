const MongoClient = require('mongodb').MongoClient
import express from 'express'
import pythonTest from './routes/pythonTest'
import cors from 'cors'
const server = express()

server.use(cors())

const uri = 'mongodb://localhost:27017'

async function run(res) {
  const client = new MongoClient(uri, { useUnifiedTopology: true })
  try {
    await client.connect()
    const database = client.db('test')
    const collection = database.collection('test_collection')
    const files = await collection.find()
    console.log(await files.toArray())
    // console.log(files.next())
    // res.json(files)
    res.json(await files.toArray())
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
server.get('/', (req, res) => {
  run(res)
})

server.listen(4000, () =>
  console.log('Server started on http://localhost:4000')
)
