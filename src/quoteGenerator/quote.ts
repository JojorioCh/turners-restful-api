import { valueInput, Quote } from "../types/interfaces";

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
  if (typeof carValue !== "number" || typeof riskRating !== "number") {
    throw new Error(
      "Invalid input values: Car value and risk rating must be numbers"
    );
  } else if (carValue === 0 || riskRating === 0) {
    throw new Error("Invalid input values: Zero values not allowed");
  }
  return Math.round(((carValue * riskRating) / 100) * 100) / 100;
};

export const monthlyPrem = (input: valueInput): number => {
  const yearlyPremium = annualPrem(input);
  return Math.round((yearlyPremium / 12) * 100) / 100;
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
    throw new Error("Quote not found");
  }
  return matchedAQuote;
};

export const deleteAQuote = (quoteId: number) => {
  const matchedAQuote = findQuoteById(quoteId);
  if (!matchedAQuote) {
    throw new Error("Quote not found");
  }
  quotes = quotes.filter((q) => q.id !== quoteId);
  
  return true;
};

// export const updateAQuote = (quoteId: number) => {
//   const matchedAQuote = findQuoteById(quoteId)

//   if (!matchedAQuote) {
//     throw new Error('Quote not found')
//   }
//  const adjustQuote = {
//   matchedAQuote.carValue = quotes.carValue,
//   matchedAQuote.riskRating = quotes.riskRating
// }
//   return adjustQuote
// }

// export const updatePartOfQuote = (quote: number) => {
//   const matchedAQuote = quotes.find((q) => q.id === quote.id)

//   if (!matchedAQuote) {
//     throw new Error('Quote not found')
//   }

//   matchedAQuote.name = Quote.name ?? matchedQuote.name
//   matchedQuote.description = Quote.description ?? matchedQuote.description

//   return matchedQuote
// }
