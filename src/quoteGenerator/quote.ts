export const annualPrem = (carValue: number, riskRating: number): number => {
  if (carValue === 0 || riskRating === 0) {
    throw new Error("Invalid input values: Zero values not allowed");
  }
  return (carValue * riskRating) / 100;
};

export const monthlyPrem = (carValue: number, riskRating: number): number => {
  const yearlyPremium = annualPrem(carValue, riskRating);
  return yearlyPremium / 12;
};
