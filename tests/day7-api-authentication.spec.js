import { test, expect } from '@playwright/test';

const BASE_URL = 'https://dummyjson.com';

let accessToken;

test.describe('Day 7 - API Authentication', () => {

    // Test 1 - Login and generate access token
    test('Login and generate access token', async ({ request }) => {

        const response = await request.post(`${BASE_URL}/auth/login`, {
            data: {
                username: 'emilys',
                password: 'emilyspass',
                expiresInMins: 30
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        accessToken = responseBody.accessToken;

        expect(accessToken).toBeTruthy();

        console.log('Access Token Generated Successfully');

    });

    // Test 2 - Access protected API
    test('Access protected API using Bearer token', async ({ request }) => {

        test.skip(!accessToken, 'Login test did not generate a token');

        const response = await request.get(`${BASE_URL}/auth/me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody.username).toBe('emilys');

        console.log('Authenticated User:', responseBody.username);

    });

});