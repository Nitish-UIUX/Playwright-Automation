
const { test, expect } = require('@playwright/test');

const { ApiClient } = require('./helpers/api-client');

const {
  expectStatus,
  expectJsonResponse,
  expectJsonField,
} = require('./helpers/api-assertions');

const BASE_URL = 'https://dummyjson.com';

test.describe('Authenticated API Testing Framework', () => {
  let api;

  // Initialize API client before every test
  test.beforeEach(async ({ request }) => {
    api = new ApiClient(request, BASE_URL, {
      Accept: 'application/json',
    });
  });

  // Test 1: Login and access protected profile
  test('Login and access protected user profile', async () => {
    // Step 1: Login
    const loginResponse = await api.post('/auth/login', {
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30,
    });

    console.log('Login URL:', loginResponse.url());
    console.log('Login Status:', loginResponse.status());

    await expectStatus(loginResponse, 200);
    await expectJsonResponse(loginResponse);

    const loginData = await loginResponse.json();

    expect(loginData.accessToken).toBeTruthy();
    expect(loginData.username).toBe('emilys');

    console.log('Login successful');

    // Step 2: Access protected profile
    const profileResponse = await api.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${loginData.accessToken}`,
      },
    });

    console.log('Profile Status:', profileResponse.status());

    await expectStatus(profileResponse, 200);
    await expectJsonResponse(profileResponse);
    await expectJsonField(profileResponse, 'username', 'emilys');

    console.log('Protected profile accessed successfully');
  });

  // Test 2: Reject invalid login credentials
  test('Reject login with invalid credentials', async () => {
    const response = await api.post('/auth/login', {
      username: 'invalid_user',
      password: 'wrong_password',
    });

    console.log('Invalid Login URL:', response.url());
    console.log('Invalid Login Status:', response.status());

    await expectStatus(response, 400);
    await expectJsonResponse(response);

    const body = await response.json();

    expect(body.message).toBeTruthy();

    console.log('Invalid login correctly rejected');
  });

  // Test 3: Reject protected profile access without token
  test('Reject access to protected profile without token', async () => {
    const response = await api.get('/auth/me');

    console.log('Unauthenticated Status:', response.status());

    expect(response.status()).toBeGreaterThanOrEqual(400);
    expect(response.status()).toBeLessThan(500);

    console.log('Unauthenticated access correctly rejected');
  });
});
