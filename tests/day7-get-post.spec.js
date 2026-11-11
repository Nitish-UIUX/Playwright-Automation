// -----------GET and POST API Testing ---------------------

// GET request 
// ans :- A GET request retrieves existing data from the server.

import { test, expect } from '@playwright/test';

test('GET - Fetch all posts', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts'
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    // Verify response is an array
    expect(Array.isArray(responseBody)).toBeTruthy();

    // Verify total posts 
    expect(responseBody.length).toBe(100);

    // Verify first post
    expect(responseBody[0].id).toBe(1);

    console.log('Total Posts:', responseBody.length);

});

// POST request
// ans :- A POST request sends new data to the server to create a resource.

test('POST - Create a new post', async ({ request }) => {

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: {
                title: 'Learning Playwright API Testing',
                body: 'This is my first POST API test.',
                userId: 1
            }
        }
    );

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.title).toBe('Learning Playwright API Testing');

    expect(responseBody.body).toBe('This is my first POST API test.');

    expect(responseBody.userId).toBe(1);

    expect(responseBody.id).toBeTruthy();

    console.log('Created Post:', responseBody);

});

// 