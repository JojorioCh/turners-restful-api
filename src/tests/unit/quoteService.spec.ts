import {
	annualPrem,
	monthlyPrem,
	createAQuote,
	pullUpAQuote,
	deleteAQuote,
	updateAQuote,
} from '../../services/quoteService';
import { quoteTestCase, valueInput } from '../../types/Interface';

const QuoteTestCases: quoteTestCase[] = [
	{
		carValue: 5000,
		riskRating: 1,
		expectedAnnual: 50.0,
		expectedMonthly: 4.17,
	},
	{
		carValue: 2000,
		riskRating: 5,
		expectedAnnual: 100,
		expectedMonthly: 8.33,
	},
	{
		carValue: 44000,
		riskRating: 1,
		expectedAnnual: 440,
		expectedMonthly: 36.67,
	},
	{
		carValue: 44000,
		riskRating: 5,
		expectedAnnual: 2200,
		expectedMonthly: 183.33,
	},
];
describe('Quote calculation using car values and risk ratings', () => {
	QuoteTestCases.forEach((testCase, index) => {
		test(`calculates annual and monthly premiums correctly for test case ${
			index + 1
		}`, () => {
			const { carValue, riskRating, expectedAnnual, expectedMonthly } = testCase;
			const input: valueInput = { carValue, riskRating };
			const actualAnnual = annualPrem(input);
			const actualMonthly = monthlyPrem(input);
			expect(actualAnnual).toBe(expectedAnnual);
			expect(actualMonthly).toBe(expectedMonthly);
		});
	});
});

describe('String instead of Number', () => {
	test('should return an error instead of yearly/monthly premium', () => {
		const input: valueInput = {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			carValue: 'five hunnit' as any,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			riskRating: 3 as any,
		};
		expect(() => annualPrem(input)).toThrow(
			'Invalid input value(s): Car value and risk rating must be numbers'
		);
		expect(() => monthlyPrem(input)).toThrow(
			'Invalid input value(s): Car value and risk rating must be numbers'
		);
	});
});

describe('0 as the value for either input', () => {
	test('should return an error instead of yearly/monthly premium', () => {
		const input: valueInput = {
			carValue: 5000,
			riskRating: 0,
		};

		expect(() => annualPrem(input)).toThrow(
			'Invalid input value(s): Zero is not allowed'
		);
		expect(() => monthlyPrem(input)).toThrow(
			'Invalid input value(s): Zero is not allowed'
		);
	});
});

describe('New Quote function', () => {
	test('to see if annual and monthly premiums are calculated correctly', () => {
		const input: valueInput = {
			carValue: 34990,
			riskRating: 3,
		};

		const expectedAnnual = 1049.7;
		const expectedMonthly = 87.48;

		const { annualPremium, monthlyPremium } = createAQuote(input);

		expect(annualPremium).toBe(expectedAnnual);
		expect(monthlyPremium).toBe(expectedMonthly);
	});
});

describe('Brings up the Quote', () => {
	test('should return the matching quote', () => {
		const quoteId = 1;
		const quote = pullUpAQuote(quoteId);
		expect(quote.id).toBe(quoteId);
	});

	test('should throw an error if quote not found', () => {
		const quoteId = 999;
		expect(() => {
			pullUpAQuote(quoteId);
		}).toThrow('Quote not found');
	});
});

describe('deletes the Quote', () => {
	test('finds the quote by the id and should delete the matching quote', () => {
		const quoteId = 1;
		const result = deleteAQuote(quoteId);
		expect(result).toBe(true);
	});

	test('should throw an error if quote not found', () => {
		const quoteId = 999;
		expect(() => {
			deleteAQuote(quoteId);
		}).toThrow('Quote not found');
	});
});

describe('Updating a quote', () => {
	test('function should  of the quote', () => {
		const quoteId = 2;
		const input: valueInput = {
			carValue: 8000,
			riskRating: 3,
		};

		const updatedQuote = updateAQuote(quoteId, input);

		expect(updatedQuote.carValue).toBe(8000);
		expect(updatedQuote.riskRating).toBe(3);

		const updatedAnnualPremium = annualPrem(updatedQuote);
		const updatedMonthlyPremium = monthlyPrem(updatedQuote);

		expect(updatedQuote.annualPremium).toBe(updatedAnnualPremium);
		expect(updatedQuote.monthlyPremium).toBe(updatedMonthlyPremium);
	});
});
