// Request Interception Using page.route().
// What is request interception?
// ans:- Request interception is the ability to monitor, modify, or block network requests made by the browser. In Playwright, this can be achieved using the page.route() method, which allows you to define a route for specific network requests and handle them as needed.

// Normal Flow: - 
// 1. User opens the application.
// 2. Browser sends a network request to the server.
// 3. Server returns the response.
// 4. Browser processes and displays the response.

// Playwright Flow with Request Interception: -
// 1. Define a route using page.route() for specific network requests.
// 2. Intercept the request and decide whether to continue, modify, or block it.
// 3. If continuing, the request is sent to the server.
// 4. Server returns the response.
// 5. Browser processes and displays the response.

import { test, expect } from '@playwright/test';

test('Intercept browser API request', async ({ page }) => {

    // Intercept the request
    await page.route(
        'https://jsonplaceholder.typicode.com/posts/1',
        async route => {

            console.log('Request intercepted!');

            // Continue the original request
            await route.continue();
        }
    );

    // Trigger the API request
    await page.goto('https://jsonplaceholder.typicode.com/');

    const responsePromise = page.waitForResponse(
        response => response.url().includes('/posts/1')
    );

    const post = await page.evaluate(async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts/1'
        );

        return await response.json();
    });

    const response = await responsePromise;

    // Validate
    expect(response.status()).toBe(200);
    expect(post.id).toBe(1);

    console.log('Response Status:', response.status());
    console.log('Post Title:', post.title);
});


// important methods 
// page.route(url, handler)	---> Defines a route for specific network requests and handles them.
// route.continue()	---> Continues the intercepted request without modification.
// route.fulfill(response)	---> Fulfills the intercepted request with a custom response.
// route.abort()	---> Aborts the intercepted request.
// page.waitForResponse(urlOrPredicate)	---> Waits for a matching response.
// response.status()	---> Returns HTTP status of the response.
// response.url()	---> Returns the URL of the response.
// response.json()	---> Reads JSON response data.