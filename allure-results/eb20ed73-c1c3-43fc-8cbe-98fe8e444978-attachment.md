# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day10-config.spec.js >> Verify configured browser
- Location: tests\day10-config.spec.js:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#login-button')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('#login-button') with timeout 5000ms
  - waiting for locator('#login-button')
  - Test timeout of 30000ms exceeded.

```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | test('Verify baseURL configuration', async ({ page }) => {
  5  |   await page.goto('/');
  6  | 
  7  |   await expect(page).toHaveTitle('Swag Labs');
  8  | 
  9  |   console.log('Current URL:', page.url());
  10 | });
  11 | 
  12 | test('Verify configured browser', async ({ page, browserName }) => {
  13 |   await page.goto('/');
  14 | 
  15 |   console.log('Browser:', browserName);
  16 | 
  17 |   await expect(
  18 |     page.locator('#login-button')
> 19 |   ).toBeVisible();
     |     ^ Error: expect(locator).toBeVisible() failed
  20 | });
  21 | 
```