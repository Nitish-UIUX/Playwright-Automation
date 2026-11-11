import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('Day 7 - API Response Validation', () => {

    test('Test 1 - Validate status code', async ({ request }) => {

        const response = await request.get(`${BASE_URL}/posts/1`);

        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();

    });

    test('Test 2 - Validate response body', async ({ request }) => {

        const response = await request.get(`${BASE_URL}/posts/1`);

        const responseBody = await response.json();

        expect(responseBody.id).toBe(1);
        expect(responseBody.userId).toBe(1);

        expect(responseBody.title).toBeTruthy();
        expect(responseBody.body).toBeTruthy();

    });

    test('Test 3 - Validate data types', async ({ request }) => {

        const response = await request.get(`${BASE_URL}/posts/1`);

        const responseBody = await response.json();

        expect(typeof responseBody.id).toBe('number');
        expect(typeof responseBody.userId).toBe('number');
        expect(typeof responseBody.title).toBe('string');
        expect(typeof responseBody.body).toBe('string');

    });

    test('Test 4 - Validate response headers', async ({ request }) => {

        const response = await request.get(`${BASE_URL}/posts/1`);

        const headers = response.headers();

        expect(headers['content-type']).toContain('application/json');

        console.log('Content Type:', headers['content-type']);

    });

    test('Test 5 - Validate response time', async ({ request }) => {

        const startTime = Date.now();

        const response = await request.get(`${BASE_URL}/posts/1`);

        const endTime = Date.now();

        const responseTime = endTime - startTime;

        expect(response.status()).toBe(200);

        console.log('Response Time:', responseTime, 'ms');

        // Example threshold for this exercise
        expect(responseTime).toBeLessThan(5000);

    });

});




