export interface Car {
  id: number;
  model: string;
  year: number;
  value: string;
}

export interface carInput {
  model: string;
  year: number;
}

export interface TestCase {
  model: any;
  year: any;
  expected: string;
}

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
