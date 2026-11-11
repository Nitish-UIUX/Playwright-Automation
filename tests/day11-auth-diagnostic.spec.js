const { test, expect } = require('@playwright/test');

test('Verify DummyJSON authentication endpoint', async ({ request }) => {
  const response = await request.post(
    'https://dummyjson.com/auth/login',
    {
      data: {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30,
      },
    }
  );

  console.log('Status:', response.status());
  console.log('Response:', await response.text());

  expect(response.status()).toBe(200);
});