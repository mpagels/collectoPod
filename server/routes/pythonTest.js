import express from 'express'
import { PythonShell } from 'python-shell'

const router = express.Router()

router.get('/', (req, res) => {
  console.log('request')
  PythonShell.run(
    '/Users/student/Documents/neuefische/podcaster/server/services/podcastScrapper.py',
    null,
    (err, data) => {
      res.json(JSON.parse(data))
    }
  )
})

export default router
