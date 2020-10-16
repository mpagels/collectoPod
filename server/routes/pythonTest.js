import express from 'express'
import { PythonShell } from 'python-shell'

let options = {
  pythonPath: '/usr/bin/python3.9',
  scriptPath: '/home/martin/projects/collectoPod/server/services/',
}

const router = express.Router()

router.get('/', (req, res) => {
  PythonShell.run('podcastScrapper.py', options, (err, data) => {
    console.log('request')
    res.json(JSON.parse(data))
  })
})

export default router
