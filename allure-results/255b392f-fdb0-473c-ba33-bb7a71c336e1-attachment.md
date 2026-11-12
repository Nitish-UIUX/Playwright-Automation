# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day13-screenshot.spec.js >> Capture screenshots during test execution
- Location: tests\day13-screenshot.spec.js:5:1

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
  3  | const fs = require('fs');
  4  | 
  5  | test('Capture screenshots during test execution', async ({ page }) => {
  6  |   // Create screenshots directory if it doesn't exist
  7  |   fs.mkdirSync('screenshots', { recursive: true });
  8  | 
  9  |   // Open application
> 10 |   await page.goto('https://www.saucedemo.com/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  11 | 
  12 |   // Capture login page
  13 |   await page.screenshot({
  14 |     path: 'screenshots/login-page.png',
  15 |     fullPage: true,
  16 |   });
  17 | 
  18 |   // Login
  19 |   await page.locator('[data-test="username"]')
  20 |     .fill('standard_user');
  21 | 
  22 |   await page.locator('[data-test="password"]')
  23 |     .fill('secret_sauce');
  24 | 
  25 |   await page.locator('[data-test="login-button"]').click();
  26 | 
  27 |   await expect(page.locator('.inventory_list')).toBeVisible();
  28 | 
  29 |   // Capture inventory page
  30 |   await page.screenshot({
  31 |     path: 'screenshots/inventory-page.png',
  32 |     fullPage: true,
  33 |   });
  34 | 
  35 |   // Capture inventory element
  36 |   await page.locator('.inventory_list').screenshot({
  37 |     path: 'screenshots/inventory-section.png',
  38 |   });
  39 | 
  40 |   console.log('Screenshots captured successfully');
  41 | });
  42 | 
```