import request from 'supertest';
import { server } from '../src/server';

describe('Server Test File: Get /', () => {
    it('should return Hello World', async () => {
        const expectedResult = 'Hello World';

        const response = await request(server).get('/');

        expect(response.status).toEqual(200);
        expect(response.text).toEqual(expectedResult);
    });
});
