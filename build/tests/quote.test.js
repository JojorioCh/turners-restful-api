"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quote_1 = require("../services/quote");
const QuoteTestCases = [
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
        test(`calculates annual and monthly premiums correctly for test case ${index + 1}`, () => {
            const { carValue, riskRating, expectedAnnual, expectedMonthly } = testCase;
            const input = { carValue, riskRating };
            const actualAnnual = (0, quote_1.annualPrem)(input);
            const actualMonthly = (0, quote_1.monthlyPrem)(input);
            expect(actualAnnual).toBe(expectedAnnual);
            expect(actualMonthly).toBe(expectedMonthly);
        });
    });
});
describe('String instead of Number', () => {
    test('should return an error instead of yearly/monthly premium', () => {
        const input = {
            carValue: 'five hunnit',
            riskRating: 3,
        };
        expect(() => (0, quote_1.annualPrem)(input)).toThrow('Invalid input value(s): Car value and risk rating must be numbers');
        expect(() => (0, quote_1.monthlyPrem)(input)).toThrow('Invalid input value(s): Car value and risk rating must be numbers');
    });
});
describe('0 as the value for either input', () => {
    test('should return an error instead of yearly/monthly premium', () => {
        const input = {
            carValue: 5000,
            riskRating: 0,
        };
        expect(() => (0, quote_1.annualPrem)(input)).toThrow('Invalid input value(s): Zero is not allowed');
        expect(() => (0, quote_1.monthlyPrem)(input)).toThrow('Invalid input value(s): Zero is not allowed');
    });
});
describe('New Quote function', () => {
    test('to see if annual and monthly premiums are calculated correctly', () => {
        const input = {
            carValue: 34990,
            riskRating: 3,
        };
        const expectedAnnual = 1049.7;
        const expectedMonthly = 87.48;
        const { annualPremium, monthlyPremium } = (0, quote_1.createAQuote)(input);
        expect(annualPremium).toBe(expectedAnnual);
        expect(monthlyPremium).toBe(expectedMonthly);
    });
});
describe('Brings up the Quote', () => {
    test('should return the matching quote', () => {
        const quoteId = 1;
        const quote = (0, quote_1.pullUpAQuote)(quoteId);
        expect(quote.id).toBe(quoteId);
    });
    test('should throw an error if quote not found', () => {
        const quoteId = 999;
        expect(() => {
            (0, quote_1.pullUpAQuote)(quoteId);
        }).toThrow('Quote not found');
    });
});
const quotes = [
    {
        id: 1,
        carValue: 6613,
        riskRating: 5,
        annualPremium: 330.65,
        monthlyPremium: 27.55,
    },
    {
        id: 2,
        carValue: 6613,
        riskRating: 5,
        annualPremium: 330.65,
        monthlyPremium: 27.55,
    },
];
describe('deletes the Quote', () => {
    test('should delete the matching quote', () => {
        const quoteId = 1;
        const result = (0, quote_1.deleteAQuote)(quoteId);
        expect(result).toBe(true);
    });
    test('should throw an error if quote not found', () => {
        const quoteId = 999;
        expect(() => {
            (0, quote_1.deleteAQuote)(quoteId);
        }).toThrow('Quote not found');
    });
});
describe('Updating specific parts of a quote', () => {
    test('should update specific parts of the quote', () => {
        const quoteId = 2;
        const input = {
            carValue: 8000,
            riskRating: 3,
        };
        const updatedQuote = (0, quote_1.updateAQuote)(quoteId, input);
        expect(updatedQuote.carValue).toBe(8000);
        expect(updatedQuote.riskRating).toBe(3);
        const updatedAnnualPremium = (0, quote_1.annualPrem)(updatedQuote);
        const updatedMonthlyPremium = (0, quote_1.monthlyPrem)(updatedQuote);
        expect(updatedQuote.annualPremium).toBe(updatedAnnualPremium);
        expect(updatedQuote.monthlyPremium).toBe(updatedMonthlyPremium);
    });
});
