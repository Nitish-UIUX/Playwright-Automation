import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('Day 8 - Network Interception Mini Project', () => {

    // This test suite covers various network interception scenarios including monitoring requests and responses, mocking API responses, modifying request headers, blocking requests, and validating API response status.
    test('Test 1 - Monitor API request and response', async ({ page }) => {

        const requests = [];
        const responses = [];

        page.on('request', request => {
            if (request.url().includes('/posts/1')) {
                requests.push(request.url());
            }
        });

        page.on('response', response => {
            if (response.url().includes('/posts/1')) {
                responses.push(response.status());
            }
        });

        await page.goto(BASE_URL);

        await page.evaluate(async () => {
            await fetch('/posts/1');
        });

        expect(requests.length).toBe(1);
        expect(responses).toContain(200);

        console.log('Requests:', requests);
        console.log('Responses:', responses);
    });

// Test 2 covers mocking API responses to return custom data instead of making actual network requests.
    test('Test 2 - Mock API response', async ({ page }) => {

        const mockPosts = [
            {
                userId: 1,
                id: 101,
                title: 'Mocked Playwright Post',
                body: 'Testing with mocked API data'
            }
        ];

        await page.route(`${BASE_URL}/posts`, async route => {

            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(mockPosts)
            });

        });

        await page.goto(BASE_URL);

        const posts = await page.evaluate(async () => {
            const response = await fetch('/posts');
            return response.json();
        });

        expect(posts).toHaveLength(1);
        expect(posts[0].id).toBe(101);

        console.log('Mocked API Data:', posts);
    });


    // Test 3 covers modifying request headers before sending them to the server.
    test('Test 3 - Modify request headers', async ({ page }) => {

        let modifiedHeader = '';

        await page.route(`${BASE_URL}/posts/1`, async route => {

            const headers = {
                ...route.request().headers(),
                'x-test-client': 'playwright'
            };

            modifiedHeader = headers['x-test-client'];

            await route.continue({ headers });
        });

        await page.goto(BASE_URL);

        const response = await page.evaluate(async () => {
            return fetch('/posts/1').then(res => res.json());
        });

        expect(modifiedHeader).toBe('playwright');
        expect(response.id).toBe(1);

        console.log('Modified Header:', modifiedHeader);
    });


    // Test 4 covers blocking specific API requests to prevent them from reaching the server.
    test('Test 4 - Block an API request', async ({ page }) => {

        let requestBlocked = false;

        await page.route(`${BASE_URL}/posts/2`, async route => {

            requestBlocked = true;

            await route.abort();
        });

        await page.goto(BASE_URL);

        const result = await page.evaluate(async () => {

            try {
                await fetch('/posts/2');
                return 'Request succeeded';
            } catch (error) {
                return 'Request blocked';
            }

        });

        expect(requestBlocked).toBe(true);
        expect(result).toBe('Request blocked');

        console.log('Blocked Request:', result);
    });


    // Test 5 covers validating the status of API responses to ensure they meet expected criteria.
    test('Test 5 - Validate API response status', async ({ page }) => {

        await page.goto(BASE_URL);

        const responsePromise = page.waitForResponse(
            response => response.url().endsWith('/posts/1')
        );

        const post = await page.evaluate(async () => {
            const response = await fetch('/posts/1');
            return response.json();
        });

        const response = await responsePromise;

        expect(response.status()).toBe(200);
        expect(post.id).toBe(1);
        expect(post.title).toBeTruthy();

        console.log('Status:', response.status());
        console.log('Post:', post.title);
    });

});


// page.on('request') – Monitor outgoing requests.

// page.on('response') – Monitor incoming responses.

// page.waitForResponse() – Wait for a specific response.

// page.route() – Intercept network requests.

// route.fulfill() – Return custom response data.

// route.continue() – Continue the request.

// route.abort() – Block the request.