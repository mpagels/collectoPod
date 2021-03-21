import MongoClient from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const dataBase = process.env.DATABASE
const passWord = process.env.PASSWORD
const clusterURL = process.env.CLUSTER

const uri = `mongodb+srv://${dataBase}:${passWord}@${clusterURL}/podcasts?retryWrites=true&w=majority`

const queries = [
  'verbrechen-von-nebenan',
  'mordlust',
  'zeit-verbrechen',
  /* 'darfs-ein-bisschen-mord-sein', */
  'verbrechen-der-vergangenheit',
  'revisiting-sunnydale',
  'zeit-pfarrerstoechter',
  'rescherschen-und-arschiv',
  'eine-stunde-history',
  'spezialgelagerter-sonderpodcast',
  'ndr-corona-update',
  'your-wrong-about',
  'apokalypse-und-filterkaffee',
]

export default async function () {
  const client = new MongoClient.MongoClient(uri, { useUnifiedTopology: true })
  try {
    await client.connect()
    const database = client.db('podcasts')

    const queriedPodcasts = await Promise.all(
      queries.map(async (podcast) => {
        const collection = database.collection(podcast)
        const sortedPodcast = await collection.find().sort({ publish: -1 })
        return await sortedPodcast.toArray()
      })
    )

    const collection = database.collection('lastUpdated')
    const updateTimes = await collection.find()

    return [await updateTimes.toArray(), ...queriedPodcasts]
  } finally {
    await client.close()
  }
}
