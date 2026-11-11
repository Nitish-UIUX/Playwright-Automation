import { test as base, expect } from '@playwright/test';

const BASE_URL = 'https://dummyjson.com';

export const test = base.extend({

    apiToken: async ({ request }, use) => {

        const response = await request.post(`${BASE_URL}/auth/login`, {
            data: {
                username: 'emilys',
                password: 'emilyspass',
                expiresInMins: 30
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        const token = responseBody.accessToken;

        expect(token).toBeTruthy();

        await use(token);
    }

});

export { expect };