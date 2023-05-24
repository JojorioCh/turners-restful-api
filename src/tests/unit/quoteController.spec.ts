import * as quoteController from '../../controller/quoteController'
import { createRequest, createResponse } from 'node-mocks-http'

describe('getAllQuotes', () => {
  test('should send all quotes via response', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = [
      {
        id: 1,
        carValue: 6613,
        riskRating: 5,
        annualPremium: 330.65,
        monthlyPremium: 27.55,
      },
    ]

    // Act
    quoteController.getAllQuotes(req, res)

    //Assert
    expect(res.json()._getData()).toEqual(expected)
  })
})

describe('getOneQuote', () => {
  test('should get car record of id 1', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = {
      id: 1,
      carValue: 6613,
      riskRating: 5,
      annualPremium: 330.65,
      monthlyPremium: 27.55,
    }

    req.params.id = '1'

    // Act
    quoteController.pullUpAQuote(req, res)

    //Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)
  })

  test('should return an error if id parameter is 999', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()

    req.params.id = '999'

    // Act
    quoteController.pullUpAQuote(req, res)

    //Assert
    expect(res.statusCode).toBe(404)
  })
})

describe('createAQuote', () => {
  test('should add a new quote record', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = {
      id: 2,
      carValue: 34990,
      riskRating: 3,
      annualPremium: 1049.7,
      monthlyPremium: 87.48,
    }

    // Act
    req.body.carValue = 34990
    req.body.riskRating = 3

    quoteController.createAQuote(req, res)

    //Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)
  })
})

describe('updateCar', () => {
  test('should add a new car record', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = {
      id: 2,
      carValue: 34990,
      riskRating: 2,
      annualPremium: 699.8,
      monthlyPremium: 58.32,
    }

    // Act
    req.params.id = '2'
    req.body.carValue = 34990
    req.body.riskRating = 2
    quoteController.updateAQuote(req, res)

    //Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)
  })

  test('should return an error if we update a quotewith id 999', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()

    // Act
    req.params.id = '999'
    req.body.carValue = 34990
    req.body.riskRating = 2
    quoteController.updateAQuote(req, res)

    //Assert
    expect(res.statusCode).toBe(404)
  })
})

describe('deleteQuote', () => {
  test('should delete a quote with id 2', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = 'true'

    // Act
    req.params.id = '2'
    quoteController.deleteAQuote(req, res)

    //Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)
  })

  test('should return an error if we delete a quote with id 999', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()

    // Act
    req.params.id = '999'
    quoteController.deleteAQuote(req, res)

    //Assert
    expect(res.statusCode).toBe(404)
  })
})
