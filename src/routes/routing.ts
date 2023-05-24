import express from 'express'
import * as quoteApiControl from '../controller/quoteApiControl'

const router = express.Router()

router.get('/quotes', quoteApiControl.getAllQuotes)
router.post('/quotes', quoteApiControl.createAQuote)
router.get('/quotes/:id', quoteApiControl.pullUpAQuote)
router.delete('/quotes/:id', quoteApiControl.deleteAQuote)
router.patch('/quotes/:id', quoteApiControl.updateAQuote)

export default router
