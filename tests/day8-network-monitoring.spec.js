// ------------------------------ Monitoring Network Requests and Responses -----------------------
import { test, expect } from '@playwright/test';

test('Monitor and validate API response', async ({ page }) => {

    // Open JSONPlaceholder
    await page.goto('https://jsonplaceholder.typicode.com/');

    // Wait for a specific API response
    const responsePromise = page.waitForResponse(
        response =>
            response.url() === 'https://jsonplaceholder.typicode.com/posts/1'
            && response.status() === 200
    );

    // Trigger the API request from the browser
    const apiResponse = await page.evaluate(async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts/1'
        );

        return await response.json();
    });

    // Wait for the response
    const response = await responsePromise;

    // Validate response
    expect(response.status()).toBe(200);
    expect(apiResponse.id).toBe(1);
    expect(apiResponse.userId).toBe(1);

    console.log('Response Status:', response.status());
    console.log('Post Title:', apiResponse.title);
});

// page.waitForRequest()	---> Waits for a matching outgoing request
// page.waitForResponse()	---> Waits for a matching response
// response.status()	---> Returns HTTP status
// response.url()	---> Returns response URL
// response.json()	---> Reads JSON response data



