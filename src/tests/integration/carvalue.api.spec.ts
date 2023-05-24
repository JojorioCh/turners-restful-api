import app from '../../app';
import request from 'supertest';

describe('CarValue API', () => {
	it('should all car records predefined value', async () => {
		// Arrange
		const expected = [{ id: 1, model: 'Civic', year: 2014, value: 6614 }];

		// Act
		const res = await request(app).get('/api/carvalue');

		// Assert
		expect(res.status).toEqual(200);
		expect(res.body).toEqual(expected);
	});
});
