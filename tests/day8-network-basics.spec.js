import { test, expect } from '@playwright/test';

test('Monitor browser network requests', async ({ page }) => {

    // Listen for browser requests
    page.on('request', request => {
        console.log('REQUEST:', request.method(), request.url());
    });

    // Listen for browser responses
    page.on('response', response => {
        console.log(
            'RESPONSE:',
            response.status(),
            response.url()
        );
    });

    // Open a demo website
    await page.goto('https://jsonplaceholder.typicode.com/');

    // Verify page title
    await expect(page).toHaveTitle(/JSONPlaceholder/);

});


