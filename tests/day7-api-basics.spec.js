import { test, expect } from '@playwright/test';

test.describe('Day 7 - API Testing Basics', () => {

    test('Verify GET API response', async ({ request }) => {

        // Send GET request
        const response = await request.get(
            'https://jsonplaceholder.typicode.com/posts/1'
        );

        // Verify status code
        expect(response.status()).toBe(200);

        // Read response body
        const responseBody = await response.json();

        // Verify response data
        expect(responseBody.id).toBe(1);

        expect(responseBody.userId).toBe(1);

        expect(responseBody.title).toBeTruthy();

        console.log('API Status:', response.status());

        console.log('API Response:', responseBody);

    });

});

// You should see:
// - 1 API test executed.
// - HTTP status 200.
// - Post ID 1.
// - User ID 1.
// - A non-empty title.
// Important: Notice that we are using { request } instead of { page }. This test sends an API request directly and does not need to open a browser page.



