# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day15-result-analysis.spec.js >> Test 2 - Invalid login
- Location: tests\day15-result-analysis.spec.js:18:1

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
  4  | test('Test 1 - Successful login', async ({ page }) => {
  5  |   await page.goto('https://www.saucedemo.com/');
  6  | 
  7  |   await page.locator('[data-test="username"]')
  8  |     .fill('standard_user');
  9  | 
  10 |   await page.locator('[data-test="password"]')
  11 |     .fill('secret_sauce');
  12 | 
  13 |   await page.locator('[data-test="login-button"]').click();
  14 | 
  15 |   await expect(page.locator('.inventory_list')).toBeVisible();
  16 | });
  17 | 
  18 | test('Test 2 - Invalid login', async ({ page }) => {
> 19 |   await page.goto('https://www.saucedemo.com/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  20 | 
  21 |   await page.locator('[data-test="username"]')
  22 |     .fill('wrong_user');
  23 | 
  24 |   await page.locator('[data-test="password"]')
  25 |     .fill('wrong_password');
  26 | 
  27 |   await page.locator('[data-test="login-button"]').click();
  28 | 
  29 |   await expect(page.locator('[data-test="error"]')).toBeVisible();
  30 | });
  31 | 
  32 | test.skip('Test 3 - Skipped test example', async ({ page }) => {
  33 |   await page.goto('https://www.saucedemo.com/');
  34 | });
  35 | 
  36 | test('Test 4 - Intentional assertion failure', async ({ page }) => {
  37 |   await page.goto('https://www.saucedemo.com/');
  38 | 
  39 |   await expect(page).toHaveTitle('Incorrect Application Title');
  40 | });
  41 | 
```