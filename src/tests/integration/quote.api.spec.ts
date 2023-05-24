import app from '../../app'
import request from 'supertest'

describe('Quote API', () => {
  it('should all quote records predefined value', async () => {
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
