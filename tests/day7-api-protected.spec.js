import { test, expect } from './fixtures/api-auth.fixture.js';

const BASE_URL = 'https://dummyjson.com';

test('Access protected API using authenticated fixture', async ({ request, apiToken }) => {

    const response = await request.get(`${BASE_URL}/auth/me`, {
        headers: {
            Authorization: `Bearer ${apiToken}`
        }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.username).toBe('emilys');

    console.log('Authenticated User:', responseBody.username);

});