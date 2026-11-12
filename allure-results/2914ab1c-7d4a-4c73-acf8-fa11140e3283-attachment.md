# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day6-login-scenarios.spec.js >> Day 6 - Login Scenarios >> Login with valid credentials
- Location: tests\day6-login-scenarios.spec.js:10:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Day 6 - Login Scenarios', () => {
  4  | 
  5  |     test.beforeEach(async ({ page }) => {
> 6  |         await page.goto('https://www.saucedemo.com/');
     |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  7  |     });
  8  | 
  9  |     // Test 1: Valid Login
  10 |     test('Login with valid credentials', async ({ page }) => {
  11 | 
  12 |         await page.locator('[data-test="username"]').fill('standard_user');
  13 |         await page.locator('[data-test="password"]').fill('secret_sauce');
  14 | 
  15 |         await page.locator('[data-test="login-button"]').click();
  16 | 
  17 |         await expect(page).toHaveURL(/inventory.html/);
  18 |         await expect(page.getByText('Products', { exact: true })).toBeVisible();
  19 |     });
  20 | 
  21 |     // Test 2: Invalid Username
  22 |     test('Login with invalid username', async ({ page }) => {
  23 | 
  24 |         await page.locator('[data-test="username"]').fill('wrong_user');
  25 |         await page.locator('[data-test="password"]').fill('secret_sauce');
  26 | 
  27 |         await page.locator('[data-test="login-button"]').click();
  28 | 
  29 |         await expect(page.locator('[data-test="error"]')).toBeVisible();
  30 |     });
  31 | 
  32 |     // Test 3: Invalid Password
  33 |     test('Login with invalid password', async ({ page }) => {
  34 | 
  35 |         await page.locator('[data-test="username"]').fill('standard_user');
  36 |         await page.locator('[data-test="password"]').fill('wrong_password');
  37 | 
  38 |         await page.locator('[data-test="login-button"]').click();
  39 | 
  40 |         await expect(page.locator('[data-test="error"]')).toBeVisible();
  41 |     });
  42 | 
  43 |     // Test 4: Locked Out User
  44 |     test('Login with locked out user', async ({ page }) => {
  45 | 
  46 |         await page.locator('[data-test="username"]').fill('locked_out_user');
  47 |         await page.locator('[data-test="password"]').fill('secret_sauce');
  48 | 
  49 |         await page.locator('[data-test="login-button"]').click();
  50 | 
  51 |         await expect(page.locator('[data-test="error"]'))
  52 |             .toContainText('locked out');
  53 |     });
  54 | 
  55 | });
```