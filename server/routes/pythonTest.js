import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res('Hello World'))

export default router
