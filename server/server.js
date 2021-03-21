import express from 'express'
import cors from 'cors'
import path from 'path'
import getPodcastsFromMongo from './lib/getPodcastsFromMongo.js'

const server = express()

server.use(cors())

server.use(express.static(path.join('..', 'client', 'build')))

server.get('/api', async (req, res) => {
  const podcasts = await getPodcastsFromMongo()

  res.json(podcasts)
})

server.get('/api/logger', (req, res) => {
  res.sendFile(path.resolve('../scrapper/scrapper.log'))
})

server.listen(7532, () =>
  console.log('Server started on http://localhost:7532')
)
