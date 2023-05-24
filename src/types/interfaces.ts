export interface Quote {
  id: number;
  carValue: number;
  riskRating: number;
  annualPremium: number;
  monthlyPremium: number;
}

export interface valueInput {
  carValue: number;
  riskRating: number;
}

export interface quoteTestCase extends valueInput {
  expectedAnnual: number;
  expectedMonthly: number;
}
