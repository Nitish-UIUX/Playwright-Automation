const { test, expect } = require('@playwright/test');

test.describe('API CRUD Operations', () => {
  let createdPostId;

  test('POST - Create a new post', async ({ request }) => {
    const response = await request.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        data: {
          title: 'Playwright API Testing',
          body: 'Learning CRUD operations',
          userId: 1,
        },
      }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.title).toBe('Playwright API Testing');
    expect(body.body).toBe('Learning CRUD operations');
    expect(body.userId).toBe(1);
    expect(body.id).toBeTruthy();

    createdPostId = body.id;

    console.log('Created Post ID:', createdPostId);
  });

  test('PUT - Replace an existing post', async ({ request }) => {
    const response = await request.put(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        data: {
          id: 1,
          title: 'Updated Playwright Title',
          body: 'Updated complete post content',
          userId: 1,
        },
      }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.title).toBe('Updated Playwright Title');
    expect(body.body).toBe('Updated complete post content');
  });

  test('PATCH - Update only the post title', async ({ request }) => {
    const response = await request.patch(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        data: {
          title: 'Only Title Updated',
        },
      }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.title).toBe('Only Title Updated');
  });

  test('DELETE - Delete an existing post', async ({ request }) => {
    const response = await request.delete(
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(response.status()).toBe(200);
  });
});