import MongoClient from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const dataBase = process.env.DATABASE
const passWord = process.env.PASSWORD
const clusterURL = process.env.CLUSTER

const uri = `mongodb+srv://${dataBase}:${passWord}@${clusterURL}/podcasts?retryWrites=true&w=majority`

export default async function () {
  const client = new MongoClient.MongoClient(uri, { useUnifiedTopology: true })
  try {
    await client.connect()

    const database = client.db('podcasts')
    let collection = database.collection('verbrechen-von-nebenan')
    const verbrechen = await collection.find().sort({ publish: -1 })
    collection = database.collection('mordlust')
    const mordlust = await collection.find().sort({ publish: -1 })
    collection = database.collection('zeit-verbrechen')
    const zeit_verbrechen = await collection.find().sort({ publish: -1 })
    collection = database.collection('darfs-ein-bisschen-mord-sein')
    const darfs_ein_bisschen_mord_sein = await collection
      .find()
      .sort({ publish: -1 })
    collection = database.collection('verbrechen-der-vergangenheit')
    const verbrechen_der_vergangenheit = await collection
      .find()
      .sort({ publish: -1 })
    collection = database.collection('revisiting-sunnydale')
    const revisiting_sunnydale = await collection.find().sort({ publish: -1 })
    collection = database.collection('zeit-pfarrerstoechter')
    const zeit_pfarrerstoechter = await collection.find().sort({ publish: -1 })
    collection = database.collection('rescherschen-und-arschiv')
    const rescherschen_und_arschiv = await collection
      .find()
      .sort({ publish: -1 })
    collection = database.collection('eine-stunde-history')
    const eine_stunde_history = await collection.find().sort({ publish: -1 })
    collection = database.collection('ndr-corona-update')
    const ndrCoronaUpdate = await collection.find().sort({ publish: -1 })
    collection = database.collection('your-wrong-about')
    const yourWrongAbout = await collection.find().sort({ publish: -1 })
    collection = database.collection('apokalypse-und-filterkaffee')
    const apokalypseUndFilterkaffee = await collection
      .find()
      .sort({ publish: -1 })
    collection = database.collection('spezialgelagerter-sonderpodcast')
    const spezialgelagerterSonderpodcast = await collection
      .find()
      .sort({ publish: -1 })
    const collection2 = database.collection('lastUpdated')
    const updateTimes = await collection2.find()

    return [
      await updateTimes.toArray(),
      await verbrechen.toArray(),
      await mordlust.toArray(),
      await zeit_verbrechen.toArray(),
      await verbrechen_der_vergangenheit.toArray(),
      await revisiting_sunnydale.toArray(),
      await zeit_pfarrerstoechter.toArray(),
      await rescherschen_und_arschiv.toArray(),
      await eine_stunde_history.toArray(),
      await spezialgelagerterSonderpodcast.toArray(),
      await ndrCoronaUpdate.toArray(),
      await yourWrongAbout.toArray(),
      await apokalypseUndFilterkaffee.toArray(),
    ]
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
