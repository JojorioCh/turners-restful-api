import * as carService from "../services/carService";
import { TestCase, carInput } from "../types/Interface";

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

// cars api to update a car record

describe("Testing carService.updateCar", () => {
  test(`Should update the model and year of car record with id 2 and value computed should change to $10,315.00 `, () => {
    //Arrange
    const id = 2;
    const input: carInput = {
      model: "Prius",
      year: 2015,
    };

    //Act
    const actual = carService.updateCar(id, input);

    //Assert
    expect(actual.model).toBe("Prius");
    expect(actual.year).toBe(2015);
    expect(actual.value).toBe("$10,315.00");
  });
});

describe("Testing carService.patchCar", () => {
  test(`Should update the year to 2014 and value computed should change to $10,314.00`, () => {
    //Arrange
    const id = 2;
    const model = "Prius";
    const year = 2014;

    //Act
    const actual = carService.patchCar(id, model, year);

    //Assert
    expect(actual.year).toBe(2014);
    expect(actual.value).toBe("$10,314.00");
  });
});

describe("Testing carService.deleteCar", () => {
  test(`Should delete the record with id 2`, () => {
    //Arrange
    const id = 2;

    //Act
    const actual = carService.deleteCar(id);

    //Assert
    expect(actual).toEqual("Record ID 2 has been deleted successfully.");
  });
});
