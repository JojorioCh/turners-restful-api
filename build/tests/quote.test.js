"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quote_1 = require("../quoteGenerator/quote");
test("calculates annual and monthly premiums correctly", () => {
    const carValue = 6613;
    const riskRating = 5;
    const annualExpected = 330.65;
    const monthlyExpected = 27.55;
    const annualActual = (0, quote_1.annualPrem)(carValue, riskRating);
    const monthlyActual = (0, quote_1.monthlyPrem)(carValue, riskRating);
    expect(annualActual).toBeCloseTo(annualExpected, 2);
    expect(monthlyActual).toBeCloseTo(monthlyExpected, 2);
});
test("calculates annual and monthly premiums correctly", () => {
    const carValue = 5000;
    const riskRating = 1;
    const annualExpected = 50.0;
    const monthlyExpected = 4.17;
    const annualActual = (0, quote_1.annualPrem)(carValue, riskRating);
    const monthlyActual = (0, quote_1.monthlyPrem)(carValue, riskRating);
    expect(annualActual).toBeCloseTo(annualExpected, 2);
    expect(monthlyActual).toBeCloseTo(monthlyExpected, 2);
});
test("calculates annual and monthly premiums correctly", () => {
    const carValue = 2000;
    const riskRating = 5;
    const annualExpected = 100;
    const monthlyExpected = 8.33;
    const annualActual = (0, quote_1.annualPrem)(carValue, riskRating);
    const monthlyActual = (0, quote_1.monthlyPrem)(carValue, riskRating);
    expect(annualActual).toBeCloseTo(annualExpected, 2);
    expect(monthlyActual).toBeCloseTo(monthlyExpected, 2);
});
test("calculates annual and monthly premiums correctly", () => {
    const carValue = 44000;
    const riskRating = 1;
    const annualExpected = 440.0;
    const monthlyExpected = 36.67;
    const annualActual = (0, quote_1.annualPrem)(carValue, riskRating);
    const monthlyActual = (0, quote_1.monthlyPrem)(carValue, riskRating);
    expect(annualActual).toBeCloseTo(annualExpected, 2);
    expect(monthlyActual).toBeCloseTo(monthlyExpected, 2);
});
test("calculates annual and monthly premiums correctly", () => {
    const carValue = 2000;
    const riskRating = 1;
    const annualExpected = 20.0;
    const monthlyExpected = 1.67;
    const annualActual = (0, quote_1.annualPrem)(carValue, riskRating);
    const monthlyActual = (0, quote_1.monthlyPrem)(carValue, riskRating);
    expect(annualActual).toBeCloseTo(annualExpected, 2);
    expect(monthlyActual).toBeCloseTo(monthlyExpected, 2);
});
test("calculates annual and monthly premiums correctly", () => {
    const carValue = 44000;
    const riskRating = 5;
    const annualExpected = 2200;
    const monthlyExpected = 183.33;
    const annualActual = (0, quote_1.annualPrem)(carValue, riskRating);
    const monthlyActual = (0, quote_1.monthlyPrem)(carValue, riskRating);
    expect(annualActual).toBeCloseTo(annualExpected, 2);
    expect(monthlyActual).toBeCloseTo(monthlyExpected, 2);
});
test("throws an error for having a car value of 0", () => {
    const carValue = 0;
    const riskRating = 5;
    expect(() => {
        (0, quote_1.annualPrem)(carValue, riskRating);
    }).toThrow("Invalid input values: Zero values not allowed");
});
test("throws an error for having a risk rating of 0", () => {
    const carValue = 10000;
    const riskRating = 0;
    expect(() => {
        (0, quote_1.annualPrem)(carValue, riskRating);
    }).toThrow("Invalid input values: Zero values not allowed");
});
