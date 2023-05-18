import { computeValue } from "../functions/carFunctions";
import { Car, carInput } from "../types/Interface";

let carRecords: Car[] = [
  { id: 1, model: "Civic", year: 2014, value: "$6,614.00" },
];

export const getAllCars = () => {
  return carRecords;
};

export const addCar = (input: carInput) => {
  const newInput = {
    id: carRecords.length + 1,
    model: input.model,
    year: input.year,
    value: computeValue(input.model, input.year),
  };
  carRecords.push(newInput);
  return newInput;
};

export const getOneCar = (carID: number) => {
  const matchedRecord = carRecords.find((t) => t.id === carID);
  if (!matchedRecord) {
    throw "No record found.";
  }
  return matchedRecord;
};

export const updateCar = (carID: number, input: carInput) => {
  const matchedRecord = carRecords.find((t) => t.id === carID);
  if (!matchedRecord) {
    throw "No record found.";
  }

  matchedRecord.model = input.model;
  matchedRecord.year = input.year;
  matchedRecord.value = computeValue(matchedRecord.model, matchedRecord.year);

  return matchedRecord;
};

export const patchCar = (carID: number, model: string, year: number) => {
  const matchedRecord = carRecords.find((t) => t.id === carID);
  if (!matchedRecord) {
    throw "No record found.";
  }

  matchedRecord.model = model ?? matchedRecord.model;
  matchedRecord.year = year ?? matchedRecord.year;
  matchedRecord.value = computeValue(matchedRecord.model, matchedRecord.year);

  return matchedRecord;
};

export const deleteCar = (carID: number) => {
  const matchedRecord = carRecords.find((t) => t.id === carID);
  if (!matchedRecord) {
    throw "No record found.";
  }
  carRecords = carRecords.filter((r) => r.id !== carID);
  return `Record ID ${carID} has been deleted successfully.`;
};
