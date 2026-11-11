// ----------------Modify and Blocking Network Requests -----------------------
// What is modifying and blocking network requests?
// ans:- Modifying network requests involves changing the request details (like headers, method, or body) before it is sent to the server. Blocking network requests involves preventing certain requests from reaching the server. In Playwright, this can be achieved using the page.route() method to intercept requests and either modify them using route.continue() or block them using route.abort().

import { test, expect } from '@playwright/test';

test('Modify outgoing request headers', async ({ page }) => {

    await page.route(
        'https://jsonplaceholder.typicode.com/posts/1',
        async route => {

            const request = route.request();
``
            // Get existing headers
            const headers = {
                ...request.headers(),
                'x-test-client': 'playwright-automation'
            };

            console.log('Modifying request headers');

            // Continue with modified headers
            await route.continue({ headers });
        }
    );

    await page.goto('https://jsonplaceholder.typicode.com/');

    const responsePromise = page.waitForResponse(
        response => response.url().includes('/posts/1')
    );

    const post = await page.evaluate(async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts/1'
        );

        return response.json();
    });

    const response = await responsePromise;

    expect(response.status()).toBe(200);
    expect(post.id).toBe(1);

    console.log('Request completed:', response.status());
});

test('Block unwanted image requests', async ({ page }) => {

    await page.route('**/*.{png,jpg,jpeg,svg}', async route => {

        console.log('Blocked image:', route.request().url());

        await route.abort();
    });

    await page.goto('https://practice.expandtesting.com/');

    console.log('Page loaded without requested images');

    await expect(page).toHaveURL(/practice\.expandtesting\.com/);
});


// Method:
// route.request() ---> Gets the original request object.
// route.headers() --->  Reads existing request headers.
// route.continue({headers}) ---> Continues with modified headers.
// route.abort() ---> Blocks a request. 
// route.continue() ---> Allow the original request to proceed without modification.

