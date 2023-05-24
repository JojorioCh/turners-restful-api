import * as quoteController from '../../controller/quoteApiControl'
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
