# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day14-device-emulation.spec.js >> Device emulation testing
- Location: tests\day14-device-emulation.spec.js:4:1

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
  4  | test('Device emulation testing', async ({ page, browserName }) => {
> 5  |   await page.goto('https://www.saucedemo.com/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  6  | 
  7  |   const viewport = page.viewportSize();
  8  | 
  9  |   console.log('Browser:', browserName);
  10 |   console.log('Viewport width:', viewport.width);
  11 |   console.log('Viewport height:', viewport.height);
  12 | 
  13 |   // Verify username field
  14 |   await expect(
  15 |     page.locator('[data-test="username"]')
  16 |   ).toBeVisible();
  17 | 
  18 |   // Verify password field
  19 |   await expect(
  20 |     page.locator('[data-test="password"]')
  21 |   ).toBeVisible();
  22 | 
  23 |   // Verify login button
  24 |   await expect(
  25 |     page.locator('[data-test="login-button"]')
  26 |   ).toBeVisible();
  27 | 
  28 |   console.log('Device emulation test completed');
  29 | });
  30 | 
  31 | test('Test mobile viewport', async ({ page }) => {
  32 |   await page.setViewportSize({
  33 |     width: 390,
  34 |     height: 844,
  35 |   });
  36 | 
  37 |   await page.goto('https://www.saucedemo.com/');
  38 | 
  39 |   await expect(
  40 |     page.locator('[data-test="username"]')
  41 |   ).toBeVisible();
  42 | });
  43 | 
```