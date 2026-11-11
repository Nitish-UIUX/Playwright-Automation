
const { test, expect } = require('@playwright/test');

test('API setup and cleanup workflow', async ({ request }) => {
  // STEP 1: Setup - create a test post
  const createResponse = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Playwright Test Post',
        body: 'Created through API before UI testing',
        userId: 1,
      },
    }
  );

  expect(createResponse.status()).toBe(201);

  const createdPost = await createResponse.json();

  console.log('Created Post ID:', createdPost.id);
  expect(createdPost.title).toBe('Playwright Test Post');

  // STEP 2: Verify an existing post
  const getResponse = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(getResponse.status()).toBe(200);

  const postData = await getResponse.json();

  expect(postData.id).toBe(1);
  console.log('Retrieved Existing Post:', postData.title);

  // STEP 3: Cleanup - simulate deleting the created post
  const deleteResponse = await request.delete(
    `https://jsonplaceholder.typicode.com/posts/${createdPost.id}`
  );

  expect(deleteResponse.status()).toBe(200);

  console.log('Cleanup simulated for Post ID:', createdPost.id);
});
