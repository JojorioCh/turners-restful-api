/* eslint-disable linebreak-style */
import { Request, Response } from 'express';
import * as quoteGenerator from '../services/quoteService';
import { valueInput } from '../types/Interface';

export const getAllQuotes = (req: Request, res: Response) => {
	const quotes = quoteGenerator.getAllQuotes();
	res.send(quotes);
};

export const createAQuote = (req: Request, res: Response) => {
	try{
		const input: valueInput = {
			carValue: req.body.carValue,
			riskRating: req.body.riskRating,
		};
		const newQuote = quoteGenerator.createAQuote(input);
		res.send(newQuote);
	} catch (e) {
		res.status(404).send(e);
	}
};

export const pullUpAQuote = (req: Request, res: Response) => {
	const quoteId = parseInt(req.params.id);

	try {
		const matchedQuote = quoteGenerator.pullUpAQuote(quoteId);
		res.send(matchedQuote);
	} catch (e) {
		res.status(404).send(e);
	}
};

export const deleteAQuote = (req: Request, res: Response) => {
	try {
		const quoteId = parseInt(req.params.id);
		const quoteDeleted = quoteGenerator.deleteAQuote(quoteId);
		res.send(quoteDeleted);
	} catch (e) {
		res.status(404).send(e);
	}
};

export const updateAQuote = (req: Request, res: Response) => {
	try {
		const quoteId = parseInt(req.params.id);
		const carValue = req.body.carValue;
		const riskRating = req.body.riskRating;
		const input = {
			carValue: carValue,
			riskRating: riskRating
		};

		const updatedQuote = quoteGenerator.updateAQuote(quoteId, input);

		res.send(updatedQuote);
	} catch (e) {
		res.status(404).send(e);
	}
};