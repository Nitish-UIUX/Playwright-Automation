# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day11-api-client.spec.js >> Reusable API Client >> GET post using API client
- Location: tests\day11-api-client.spec.js:11:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { ApiClient } = require('./helpers/api-client');
  3  | 
  4  | test.describe('Reusable API Client', () => {
  5  |   let api;
  6  | 
  7  |   test.beforeEach(async ({ request }) => {
  8  |     api = new ApiClient(request);
  9  |   });
  10 | 
  11 |   test('GET post using API client', async () => {
  12 |     const response = await api.get('/posts/1');
  13 | 
> 14 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  15 | 
  16 |     const body = await response.json();
  17 | 
  18 |     expect(body.id).toBe(1);
  19 |     expect(body.userId).toBe(1);
  20 |   });
  21 | 
  22 |   test('GET posts using query parameters', async () => {
  23 |     const response = await api.get('/posts', {
  24 |       userId: 1,
  25 |     });
  26 | 
  27 |     expect(response.status()).toBe(200);
  28 | 
  29 |     const body = await response.json();
  30 | 
  31 |     expect(body.length).toBeGreaterThan(0);
  32 | 
  33 |     for (const post of body) {
  34 |       expect(post.userId).toBe(1);
  35 |     }
  36 |   });
  37 | 
  38 |   test('POST post using API client', async () => {
  39 |     const response = await api.post('/posts', {
  40 |       title: 'Playwright API Testing',
  41 |       body: 'Testing reusable API clients',
  42 |       userId: 1,
  43 |     });
  44 | 
  45 |     expect(response.status()).toBe(201);
  46 | 
  47 |     const body = await response.json();
  48 | 
  49 |     expect(body.title).toBe('Playwright API Testing');
  50 |     expect(body.userId).toBe(1);
  51 |   });
  52 | });
```