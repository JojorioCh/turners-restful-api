import app from '../../app'
import request from 'supertest'

describe('CarValue API', () => {
  it('should all car records predefined value', async () => {
    // Arrange
    const expected = [{ id: 1, model: 'Civic', year: 2014, value: 6614 }]

    // Act
    const res = await request(app).get('/api/carvalue')

    // Assert
    expect(res.status).toEqual(200)
    expect(res.body).toEqual(expected)
  })
})

describe('RiskRating API', () => {
  it('should all risk rating records predefined value', async () => {
    // Arrange
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
    const res = await request(app).get('/api/quotes')

    // Assert
    expect(res.status).toEqual(200)
    expect(res.body).toEqual(expected)
  })
})
