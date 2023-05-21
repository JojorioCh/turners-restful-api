export interface Car {
  id: number
  model: string
  year: number
  value: number
}

export interface carInput {
  model: string
  year: number
}

export interface TestModelYear {
  model: any
  year: any
  expected: string
}

export interface Quote {
  id: number
  carValue: number
  riskRating: number
  annualPremium: number
  monthlyPremium: number
}

export interface valueInput {
  carValue: number
  riskRating: number
}

export interface quoteTestCase extends valueInput {
  expectedAnnual: number
  expectedMonthly: number
}
