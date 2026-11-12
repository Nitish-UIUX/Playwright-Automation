# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day11-api-auth.spec.js >> Day 11 - API Authentication >> Access protected user profile
- Location: tests\day11-api-auth.spec.js:32:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | test.describe('Day 11 - API Authentication', () => {
  5  | 
  6  |     let accessToken;
  7  | 
  8  |     test('Login and generate access token', async ({ request }) => {
  9  | 
  10 |         const response = await request.post(
  11 |             'https://dummyjson.com/auth/login',
  12 |             {
  13 |                 data: {
  14 |                     username: 'emilys',
  15 |                     password: 'emilyspass'
  16 |                 }
  17 |             }
  18 |         );
  19 | 
  20 |         expect(response.status()).toBe(200);
  21 | 
  22 |         const responseBody = await response.json();
  23 | 
  24 |         expect(responseBody.accessToken).toBeTruthy();
  25 | 
  26 |         accessToken = responseBody.accessToken;
  27 | 
  28 |         console.log('Access token generated successfully');
  29 | 
  30 |     });
  31 | 
  32 |     test('Access protected user profile', async ({ request }) => {
  33 | 
  34 |         const response = await request.get(
  35 |             'https://dummyjson.com/auth/me',
  36 |             {
  37 |                 headers: {
  38 |                     Authorization: `Bearer ${accessToken}`
  39 |                 }
  40 |             }
  41 |         );
  42 | 
> 43 |         expect(response.status()).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  44 | 
  45 |         const user = await response.json();
  46 | 
  47 |         expect(user.username).toBe('emilys');
  48 | 
  49 |         console.log('Authenticated user:', user.username);
  50 | 
  51 |     });
  52 | 
  53 | });
  54 | 
```