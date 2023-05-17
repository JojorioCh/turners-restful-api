"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthlyPrem = exports.annualPrem = void 0;
const annualPrem = (carValue, riskRating) => {
    if (carValue === 0 || riskRating === 0) {
        throw new Error("Invalid input values: Zero values not allowed");
    }
    return (carValue * riskRating) / 100;
};
exports.annualPrem = annualPrem;
const monthlyPrem = (carValue, riskRating) => {
    const yearlyPremium = (0, exports.annualPrem)(carValue, riskRating);
    return yearlyPremium / 12;
};
exports.monthlyPrem = monthlyPrem;
