import * as carService from "../services/carService";

// cars api to return default car record

describe("Testing carService.getAllCars()", () => {
  test("should return 1 record of car", () => {
    //Arrange
    const expected = [
      { id: 1, model: "Civic", year: 2014, value: "$6,614.00" },
    ];

    //Act
    const actual = carService.getAllCars();

    //Assert
    expect(actual).toEqual(expected);
  });
});

// cars api to add a new car record

describe("Testing carService.addCar()", () => {
  test("should add a new record of car", () => {
    const input = {
      id: 2,
      model: "Civic",
      year: 2014,
      value: "$6,614.00",
    };
    const expected = { id: 2, model: "Civic", year: 2014, value: "$6,614.00" };
    const actual = carService.addCar(input);
    expect(actual).toEqual(expected);
  });
});

// cars api addCar function that returns an error

interface TestCase {
  model: any;
  year: any;
  expected: string;
}

const testCases: TestCase[] = [
  {
    model: "C1vic",
    year: 2014,
    expected:
      "Please input a valid model. A string of alphabet with no spaces is accepted.",
  },
  {
    model: 99,
    year: 2014,
    expected:
      "Please input a valid model. A string of alphabet with no spaces is accepted.",
  },
  {
    model: false,
    year: 2014,
    expected:
      "Please input a valid model. A string of alphabet with no spaces is accepted.",
  },
  {
    model: "",
    year: 2014,
    expected: "Model is empty.",
  },
  {
    model: "Honda Civic",
    year: 2014,
    expected:
      "Please input a valid model. A string of alphabet with no spaces is accepted.",
  },
  {
    model: "Civic",
    year: -20,
    expected: "Please input a valid year from 1950 to 2023",
  },
  {
    model: "Civic",
    year: 1945,
    expected: "Please input a valid year from 1950 to 2023",
  },
  {
    model: "Civic",
    year: 2030,
    expected: "Please input a valid year from 1950 to 2023",
  },
  {
    model: "Civic",
    year: false,
    expected: "Please input a valid year from 1950 to 2023",
  },
];

describe("Testing carService.addCar() to return an error", () => {
  testCases.map((tc) => {
    test(`Model: ${tc.model} Year: ${tc.year} should return an Error: ${tc.expected}`, () => {
      const input = {
        id: 3,
        model: tc.model,
        year: tc.year,
      };
      const expected = tc.expected;
      expect(() => {
        carService.addCar(input);
      }).toThrow(expected);
    });
  });
});
