const { test } = require('@playwright/test');

const {
  expectStatus,
  expectJsonResponse,
  expectJsonField,
  expectResponseTime,
} = require('./helpers/api-assertions');

test.describe('Reusable API Assertions', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  test('Validate API status and JSON response', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/1`);

    await expectStatus(response, 200);
    await expectJsonResponse(response);
    await expectJsonField(response, 'id', 1);
  });

  test('Validate API response time', async ({ request }) => {
    const startTime = Date.now();

    const response = await request.get(`${baseURL}/posts/1`);

    const duration = Date.now() - startTime;

    await expectStatus(response, 200);
    expectResponseTime(duration, 5000);

    console.log('API Response Time:', duration, 'ms');
  });

  test('Validate response data', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/1`);

    await expectStatus(response, 200);
    await expectJsonField(response, 'userId', 1);
    await expectJsonField(response, 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  });
});


// what we learned 
// expectStatus()	Validate HTTP status
// expectJsonResponse()	Validate response content type
// expectJsonField()	Validate a particular JSON field
// expectResponseTime()	Validate request duration