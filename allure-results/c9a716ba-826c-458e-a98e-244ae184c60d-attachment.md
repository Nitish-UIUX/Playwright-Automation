# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day14-cross-browser.spec.js >> Login should work across browsers
- Location: tests\day14-cross-browser.spec.js:4:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | test('Login should work across browsers', async ({ page, browserName }) => {
  5  |   console.log('Running browser:', browserName);
  6  | 
> 7  |   await page.goto('https://www.saucedemo.com/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  8  | 
  9  |   // Verify login page
  10 |   await expect(
  11 |     page.locator('[data-test="username"]')
  12 |   ).toBeVisible();
  13 | 
  14 |   // Enter credentials
  15 |   await page.locator('[data-test="username"]')
  16 |     .fill('standard_user');
  17 | 
  18 |   await page.locator('[data-test="password"]')
  19 |     .fill('secret_sauce');
  20 | 
  21 |   // Login
  22 |   await page.locator('[data-test="login-button"]').click();
  23 | 
  24 |   // Verify inventory page
  25 |   await expect(page.locator('.inventory_list'))
  26 |     .toBeVisible();
  27 | 
  28 |   console.log(`${browserName} login test passed`);
  29 | });
  30 | 
```