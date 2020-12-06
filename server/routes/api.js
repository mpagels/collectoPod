import express from 'express'
import MongoClient from 'mongodb'
const router = express.Router()
const uri = 'mongodb://localhost:27017'

async function run(res) {
  const client = new MongoClient(uri, { useUnifiedTopology: true })
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

router.get('/api', (req, res) => {
  run(res)
})

export default router
