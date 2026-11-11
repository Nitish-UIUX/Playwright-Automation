// const { test, expect } = require('@playwright/test');

// test.describe('API and UI Integration Testing', () => {

//   test('API setup followed by UI validation', async ({ request, page }) => {

//     // Step 1: Get data using API
//     const response = await request.get(
//       'https://jsonplaceholder.typicode.com/posts/1'
//     );

//     expect(response.status()).toBe(200);

//     const post = await response.json();

//     console.log('API Post Title:', post.title);

//     // Step 2: Open a browser page
//     await page.goto('https://jsonplaceholder.typicode.com/posts/1');

//     // Step 3: Verify the browser displays the API resource
//     await expect(page.locator('body')).toContainText(post.title);

//     console.log('UI validation successful');

//     // Step 4: Validate the resource again using API
//     const verifyResponse = await request.get(
//       `https://jsonplaceholder.typicode.com/posts/${post.id}`
//     );

//     expect(verifyResponse.status()).toBe(200);

//     const verifyPost = await verifyResponse.json();

//     expect(verifyPost.id).toBe(post.id);
//     expect(verifyPost.title).toBe(post.title);

//     console.log('Backend validation successful');
//   });

// });



// // What should you learn from this exercise?
// // Fixture	Responsibility
// // request	Send API requests
// // page	Control browser
// // expect	Validate API and UI results

// const { test, expect } = require('@playwright/test');

// test.describe('API Test Data Creation', () => {

//   test('Create test data using API and verify response', async ({ request }) => {

//     // Step 1: Prepare dynamic test data
//     const testData = {
//       title: `Playwright Test ${Date.now()}`,
//       body: 'Created using Playwright API automation',
//       userId: 1,
//     };

//     // Step 2: Create resource using POST
//     const response = await request.post(
//       'https://jsonplaceholder.typicode.com/posts',
//       {
//         data: testData,
//       }
//     );

//     // Step 3: Validate response
//     expect(response.status()).toBe(201);

//     const createdPost = await response.json();

//     // Step 4: Validate returned data
//     expect(createdPost.title).toBe(testData.title);
//     expect(createdPost.body).toBe(testData.body);
//     expect(createdPost.userId).toBe(testData.userId);
//     expect(createdPost.id).toBeTruthy();

//     console.log('Created Post ID:', createdPost.id);
//     console.log('Created Post Title:', createdPost.title);

//   });

// });




const { test, expect } = require('@playwright/test');

test('Create multiple test records using API', async ({ request }) => {

  // Store all created records
  const createdPosts = [];

  // Create 3 records
  for (let i = 1; i <= 3; i++) {

    const testData = {
      title: `Automation Post ${i}`,
      body: `This is test record number ${i}`,
      userId: 1,
    };

    // Send POST request
    const response = await request.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        data: testData,
      }
    );

    // Validate response
    expect(response.status()).toBe(201);

    const result = await response.json();

    // Validate created data
    expect(result.title).toBe(testData.title);
    expect(result.body).toBe(testData.body);
    expect(result.id).toBeTruthy();

    // Store result
    createdPosts.push(result);

    console.log(`Created Record ${i}:`, result.title);
    console.log('Record ID:', result.id);
  }

  // Verify total records
  expect(createdPosts).toHaveLength(3);

  console.log('Total records created:', createdPosts.length);
});
