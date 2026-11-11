
import { test, expect } from '@playwright/test';

test.describe('Day 11 - API Authentication', () => {

    let accessToken;

    test('Login and generate access token', async ({ request }) => {

        const response = await request.post(
            'https://dummyjson.com/auth/login',
            {
                data: {
                    username: 'emilys',
                    password: 'emilyspass'
                }
            }
        );

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody.accessToken).toBeTruthy();

        accessToken = responseBody.accessToken;

        console.log('Access token generated successfully');

    });

    test('Access protected user profile', async ({ request }) => {

        const response = await request.get(
            'https://dummyjson.com/auth/me',
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );

        expect(response.status()).toBe(200);

        const user = await response.json();

        expect(user.username).toBe('emilys');

        console.log('Authenticated user:', user.username);

    });

});
