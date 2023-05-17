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
