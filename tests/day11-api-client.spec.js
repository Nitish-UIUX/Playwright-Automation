const { test, expect } = require('@playwright/test');
const { ApiClient } = require('./helpers/api-client');

test.describe('Reusable API Client', () => {
  let api;

  test.beforeEach(async ({ request }) => {
    api = new ApiClient(request);
  });

  test('GET post using API client', async () => {
    const response = await api.get('/posts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.userId).toBe(1);
  });

  test('GET posts using query parameters', async () => {
    const response = await api.get('/posts', {
      userId: 1,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.length).toBeGreaterThan(0);

    for (const post of body) {
      expect(post.userId).toBe(1);
    }
  });

  test('POST post using API client', async () => {
    const response = await api.post('/posts', {
      title: 'Playwright API Testing',
      body: 'Testing reusable API clients',
      userId: 1,
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.title).toBe('Playwright API Testing');
    expect(body.userId).toBe(1);
  });
});