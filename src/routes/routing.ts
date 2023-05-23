import express from 'express';
import * as quoteApiControl from '../controller/quoteApiControl';

const router = express.Router();

router.get('/api/quotes', quoteApiControl.getAllQuotes);
router.post('/api/quotes', quoteApiControl.createAQuote);
router.get('/api/quotes/:id', quoteApiControl.pullUpAQuote);
router.delete('/api/quotes/:id', quoteApiControl.deleteAQuote);
router.patch('/api/quotes/:id', quoteApiControl.updateAQuote);

export default router;
