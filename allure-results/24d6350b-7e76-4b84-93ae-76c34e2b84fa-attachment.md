# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day15.allure-demo.spec.js >> Allure Report Demo >> Verify SauceDemo login page
- Location: tests\day15.allure-demo.spec.js:6:3

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
  4  | test.describe('Allure Report Demo', () => {
  5  | 
  6  |   test('Verify SauceDemo login page', async ({ page }) => {
> 7  |     await page.goto('https://www.saucedemo.com/');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  8  | 
  9  |     await expect(page).toHaveTitle(/Swag Labs/);
  10 | 
  11 |     await expect(
  12 |       page.locator('[data-test="username"]')
  13 |     ).toBeVisible();
  14 |   });
  15 | 
  16 |   test('Verify successful login', async ({ page }) => {
  17 |     await page.goto('https://www.saucedemo.com/');
  18 | 
  19 |     await page.locator('[data-test="username"]')
  20 |       .fill('standard_user');
  21 | 
  22 |     await page.locator('[data-test="password"]')
  23 |       .fill('secret_sauce');
  24 | 
  25 |     await page.locator('[data-test="login-button"]').click();
  26 | 
  27 |     await expect(
  28 |       page.locator('.inventory_list')
  29 |     ).toBeVisible();
  30 |   });
  31 | 
  32 | });
  33 | 
  34 | 
  35 | 
  36 | 
```