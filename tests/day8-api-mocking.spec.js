// ----------------Api Mocking -----------------------
// What is API mocking?
// ans:- API mocking is the process of simulating API responses without actually making network requests to the server. In Playwright, this can be achieved using the page.route() method to intercept requests and provide custom responses.

import { test, expect } from '@playwright/test';

test('Mock API response using route.fulfill()', async ({ page }) => {

    // Custom mock data
    const mockPosts = [
        {
            userId: 1,
            id: 101,
            title: 'Playwright Testing',
            body: 'Learning API mocking'
        },
        {
            userId: 2,
            id: 102,
            title: 'Automation Testing',
            body: 'Testing frontend with mock data'
        }
    ];

    // Intercept API request
    await page.route(
        'https://jsonplaceholder.typicode.com/posts',
        async route => {

            console.log('API request intercepted');

            // Return custom response
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(mockPosts)
            });
        }
    );

    // Trigger API request from browser
    await page.goto('https://jsonplaceholder.typicode.com/');

    const posts = await page.evaluate(async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );

        return await response.json();
    });

    // Validate mocked response
    expect(posts).toHaveLength(2);
    expect(posts[0].id).toBe(101);
    expect(posts[0].title).toBe('Playwright Testing');

    console.log('Mocked Posts:', posts);
    console.log('Total Mocked Posts:', posts.length);
});


// 