# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day11-api-helpers.spec.js >> Reusable API Assertions >> Validate API response time
- Location: tests\day11-api-helpers.spec.js:21:3

# Error details

```
TypeError: response.request is not a function
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | async function expectStatus(response, expectedStatus = 200) {
  4  |   expect(response.status()).toBe(expectedStatus);
  5  | }
  6  | 
  7  | async function expectJsonResponse(response) {
  8  |   const contentType = response.headers()['content-type'];
  9  | 
  10 |   expect(contentType).toContain('application/json');
  11 | }
  12 | 
  13 | async function expectResponseTime(response, maxTime = 3000) {
> 14 |   const timing = response.request().timing();
     |                           ^ TypeError: response.request is not a function
  15 | 
  16 |   expect(timing.responseEnd).toBeLessThanOrEqual(maxTime);
  17 | }
  18 | 
  19 | async function expectJsonField(response, field, expectedValue) {
  20 |   const body = await response.json();
  21 | 
  22 |   expect(body[field]).toBe(expectedValue);
  23 | }
  24 | 
  25 | module.exports = {
  26 |   expectStatus,
  27 |   expectJsonResponse,
  28 |   expectResponseTime,
  29 |   expectJsonField,
  30 | };
```