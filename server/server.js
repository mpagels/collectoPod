import express from 'express'
import router from './routes/api.js'
import cors from 'cors'
import path from 'path'
const server = express()
const __dirname = path.resolve()
import MongoClient from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const dataBase = process.env.DATABASE
const passWord = process.env.PASSWORD
const clusterURL = process.env.CLUSTER

const uri = `mongodb+srv://${dataBase}:${passWord}@${clusterURL}/podcasts?retryWrites=true&w=majority`

server.use(cors())

server.use(express.static(path.join('..', 'client', 'build')))

server.get('/', function (req, res) {
  res.sendFile(path.join('..', 'client', 'build', 'index.html'))
})
server.get('/api', (req, res) => {
  run(res)
})
server.listen(7532, () =>
  console.log('Server started on http://localhost:7532')
)

async function run(res) {
  const client = new MongoClient.MongoClient(uri, { useUnifiedTopology: true })
  try {
    await client.connect()

    const database = client.db('podcasts')
    let collection = database.collection('verbrechen-von-nebenan')
    const verbrechen = await collection.find()
    collection = database.collection('mordlust')
    const mordlust = await collection.find()
    collection = database.collection('zeit-verbrechen')
    const zeit_verbrechen = await collection.find()
    collection = database.collection('darfs-ein-bisschen-mord-sein')
    const darfs_ein_bisschen_mord_sein = await collection.find()
    collection = database.collection('verbrechen-der-vergangenheit')
    const verbrechen_der_vergangenheit = await collection.find()
    collection = database.collection('revisiting-sunnydale')
    const revisiting_sunnydale = await collection.find()
    collection = database.collection('zeit-pfarrerstoechter')
    const zeit_pfarrerstoechter = await collection.find()
    collection = database.collection('rescherschen-und-arschiv')
    const rescherschen_und_arschiv = await collection.find()
    collection = database.collection('eine-stunde-history')
    const eine_stunde_history = await collection.find()
    const collection2 = database.collection('lastUpdated')
    const updateTimes = await collection2.find()

    res.json([
      await updateTimes.toArray(),
      await verbrechen.toArray(),
      await mordlust.toArray(),
      await zeit_verbrechen.toArray(),
      await darfs_ein_bisschen_mord_sein.toArray(),
      await verbrechen_der_vergangenheit.toArray(),
      await revisiting_sunnydale.toArray(),
      await zeit_pfarrerstoechter.toArray(),
      await rescherschen_und_arschiv.toArray(),
      await eine_stunde_history.toArray(),
    ])
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
