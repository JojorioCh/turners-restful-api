import express from 'express';
import {
	getAllCars,
	addCar,
	getOneCar,
	updateCar,
	patchCar,
	deleteCar,
}  from '../controller/carController';
import {
	getAllQuotes,
	createAQuote,
	pullUpAQuote,
	deleteAQuote,
	updateAQuote,
} from '../controller/quoteController';

const router = express.Router();
/*Routes for carController*/
router.get('/carvalue/', getAllCars);
router.post('/carvalue/',addCar);
router.get('/carvalue/:id', getOneCar);
router.put('/carvalue/:id', updateCar);
router.patch('/carvalue/:id', patchCar);
router.delete('/carvalue/:id',deleteCar);

/*Routes for QuoteController*/
router.get('/quotes/', getAllQuotes);
router.post('/quotes/',createAQuote);
router.get('/quotes/:id', pullUpAQuote);
router.delete('/quotes/:id', deleteAQuote);
router.patch('/quotes/:id', updateAQuote);

export default router;
