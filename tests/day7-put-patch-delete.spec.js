import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';


// PUT - request to update a complete resource
test('PUT - Update complete post', async ({ request }) => {

    const response = await request.put(`${BASE_URL}/posts/1`, {
        data: {
            id: 1,
            title: 'Updated Playwright Title',
            body: 'Updated complete post content',
            userId: 1
        }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toBe('Updated Playwright Title');
    expect(responseBody.body).toBe('Updated complete post content');

    console.log('PUT Response:', responseBody);
});

// Explanation:
// request.put() sends a PUT request.
// data contains the replacement representation.
// toBe(200) checks the successful response.
// We validate the updated response fields.


// PATCH - request to update a partial resource

test('PATCH - Update post title only', async ({ request }) => {

    const response = await request.patch(`${BASE_URL}/posts/1`, {
        data: {
            title: 'Only Title Updated'
        }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toBe('Only Title Updated');

    console.log('PATCH Response:', responseBody);
});

// Explanation:
// - request.patch() sends a partial update.
// - We send only the title field.
// - We verify the updated title.

test('DELETE - Delete post', async ({ request }) => {

    const response = await request.delete(`${BASE_URL}/posts/1`);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log('DELETE Status:', response.status());
    console.log('DELETE Response:', responseBody);

});

// Explanation:
// - request.delete() sends a DELETE request.
// - We verify the HTTP response status.
// - JSONPlaceholder simulates deletion; it does not permanently remove the post.

