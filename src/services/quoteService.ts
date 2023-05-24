import { valueInput, Quote } from '../types/Interface';

let quotes: Quote[] = [
	{
		id: 1,
		carValue: 6613,
		riskRating: 5,
		annualPremium: 330.65,
		monthlyPremium: 27.55,
	},
];

export const getAllQuotes = () => {
	return quotes;
};

export const annualPrem = (input: valueInput): number => {
	const { carValue, riskRating } = input;
	if (typeof carValue !== 'number' || typeof riskRating !== 'number') {
		throw new Error(
			'Invalid input value(s): Car value and risk rating must be numbers'
		);
	} else if (carValue === 0 || riskRating === 0) {
		throw new Error('Invalid input value(s): Zero is not allowed');
	}
	const yPrem2Decimals = Math.round(((carValue * riskRating) / 100) * 100) / 100;
	return yPrem2Decimals;
};

export const monthlyPrem = (input: valueInput): number => {
	const yearlyPremium = annualPrem(input);
	const mPrem2Decimals = Math.round((yearlyPremium / 12) * 100) / 100;

	return mPrem2Decimals;
};

export const createAQuote = (input: valueInput) => {
	const newQuote = {
		id: quotes.length + 1,
		carValue: input.carValue,
		riskRating: input.riskRating,
		annualPremium: annualPrem(input),
		monthlyPremium: monthlyPrem(input),
	};
	quotes.push(newQuote);

	return newQuote;
};

const findQuoteById = (quoteId: number): Quote | undefined => {
	return quotes.find((q) => q.id === quoteId);
};

export const pullUpAQuote = (quoteId: number): Quote => {
	const matchedAQuote = findQuoteById(quoteId);
	if (!matchedAQuote) {
		throw new Error('Quote not found');
	}
	return matchedAQuote;
};

export const deleteAQuote = (quoteId: number) => {
	const matchedAQuote = findQuoteById(quoteId);
	if (!matchedAQuote) {
		throw new Error('Quote not found');
	}
	quotes = quotes.filter((q) => q.id !== quoteId);

	return true;
};

export const updateAQuote = (quoteId: number, input: valueInput) => {
	const matchedAQuote = findQuoteById(quoteId);

	if (!matchedAQuote) {
		throw new Error('Quote not found');
	}
	const updatedQuote = {
		...matchedAQuote,
		carValue: input.carValue ?? matchedAQuote.carValue,
		riskRating: input.riskRating ?? matchedAQuote.riskRating,
	};
	updatedQuote.annualPremium = annualPrem(updatedQuote);
	updatedQuote.monthlyPremium = monthlyPrem(updatedQuote);

	return updatedQuote;
};
