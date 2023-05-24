import * as carController from '../../controller/carController'
import { createRequest, createResponse } from 'node-mocks-http'
import { TestModelYear } from '../../types/Interface'

describe('getAllCars', () => {
  test('should send all car via response', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = [{ id: 1, model: 'Civic', year: 2014, value: 6614 }]

    // Act
    carController.getAllCars(req, res)

    //Assert
    expect(res.json()._getData()).toEqual(expected)
  })
})

describe('getOneCar', () => {
  test('should get car record of id 1', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = { id: 1, model: 'Civic', year: 2014, value: 6614 }

    req.params.id = '1'

    // Act
    carController.getOneCar(req, res)

    //Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)
  })

  test('should return an error if id parameter is 999', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = 'No record found.'

    req.params.id = '999'

    // Act
    carController.getOneCar(req, res)

    //Assert
    expect(res.statusCode).toBe(404)
    expect(res.json()._getData()).toEqual(expected)
  })
})

describe('addCar', () => {
  test('should add a new car record', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = { id: 2, model: 'Prius', year: 2015, value: 10315 }

    // Act
    req.body.model = 'Prius'
    req.body.year = 2015
    carController.addCar(req, res)

    //Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)
  })

  const testCases: TestModelYear[] = [
    {
      model: 'C1vic',
      year: 2014,
      expected:
        'Please input a valid model. A string of alphabet with no spaces is accepted.',
    },
    {
      model: 'Civic',
      year: 2050,
      expected: 'Please input a valid year from 1950 to 2023',
    },
  ]

  testCases.map((tc) => {
    test(`Model: ${tc.model} Year: ${tc.year} should return an Error: ${tc.expected}`, () => {
      const req = createRequest()
      const res = createResponse()
      const expected = tc.expected

      // Act
      req.body.model = tc.model
      req.body.year = tc.year
      carController.addCar(req, res)

      expect(res.statusCode).toBe(404)
      expect(res.json()._getData()).toEqual(expected)
    })
  })
})

describe('updateCar', () => {
  test('should add a new car record', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = { id: 2, model: 'Aqua', year: 2014, value: 6014 }

    // Act
    req.params.id = '2'
    req.body.model = 'Aqua'
    req.body.year = 2014
    carController.updateCar(req, res)

    //Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)
  })

  test('should return an error if we update the record of the car with id 999', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = 'No record found.'

    // Act
    req.params.id = '999'
    req.body.model = 'Markx'
    req.body.year = 2016
    carController.updateCar(req, res)

    //Assert
    expect(res.statusCode).toBe(404)
    expect(res.json()._getData()).toEqual(expected)
  })
})

describe('patchCar', () => {
  test('Should patch the model of car record 2 from Aqua to Civic then change the value to 6614', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = { id: 2, model: 'Civic', year: 2014, value: 6614 }

    // Act
    req.params.id = '2'
    req.body.model = 'Civic'
    carController.patchCar(req, res)

    //Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)
  })

  test('should return an error if we patch the record of the car with id 999', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = 'No record found.'

    // Act
    req.params.id = '999'
    req.body.year = 2016
    carController.patchCar(req, res)

    //Assert
    expect(res.statusCode).toBe(404)
    expect(res.json()._getData()).toEqual(expected)
  })
})

describe('deleteCar', () => {
  test('should delete the record of the car with id 2', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = 'Record ID 2 has been deleted successfully.'

    // Act
    req.params.id = '2'
    carController.deleteCar(req, res)

    //Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)
  })

  test('should return an error if we delete the record of the car with id 999', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = 'No record found.'

    // Act
    req.params.id = '999'
    carController.deleteCar(req, res)

    //Assert
    expect(res.statusCode).toBe(404)
    expect(res.json()._getData()).toEqual(expected)
  })
})
