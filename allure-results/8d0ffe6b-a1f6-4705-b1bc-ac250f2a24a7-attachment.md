# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day14-responsive-testing.spec.js >> Responsive testing - Mobile
- Location: tests\day14-responsive-testing.spec.js:12:3

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
  4  | const viewports = [
  5  |   { name: 'Desktop', width: 1920, height: 1080 },
  6  |   { name: 'Laptop', width: 1366, height: 768 },
  7  |   { name: 'Tablet', width: 768, height: 1024 },
  8  |   { name: 'Mobile', width: 390, height: 844 },
  9  | ];
  10 | 
  11 | for (const viewport of viewports) {
  12 |   test(`Responsive testing - ${viewport.name}`, async ({ page }) => {
  13 |     await page.setViewportSize({
  14 |       width: viewport.width,
  15 |       height: viewport.height,
  16 |     });
  17 | 
> 18 |     await page.goto('https://www.saucedemo.com/');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  19 | 
  20 |     console.log(`Testing: ${viewport.name}`);
  21 |     console.log(`Width: ${viewport.width}`);
  22 |     console.log(`Height: ${viewport.height}`);
  23 | 
  24 |     // Verify login form
  25 |     await expect(
  26 |       page.locator('[data-test="username"]')
  27 |     ).toBeVisible();
  28 | 
  29 |     await expect(
  30 |       page.locator('[data-test="password"]')
  31 |     ).toBeVisible();
  32 | 
  33 |     await expect(
  34 |       page.locator('[data-test="login-button"]')
  35 |     ).toBeVisible();
  36 | 
  37 |     // Check for horizontal overflow
  38 |     const hasHorizontalOverflow = await page.evaluate(() => {
  39 |       return document.documentElement.scrollWidth >
  40 |         document.documentElement.clientWidth;   
  41 |     });
  42 | 
  43 |     expect(hasHorizontalOverflow).toBe(false);
  44 | 
  45 |     console.log(`${viewport.name} responsive test passed`);
  46 |   });
  47 | }
  48 | 
  49 | 
  50 | 
  51 | // Important concepts
  52 | // - page.setViewportSize() changes the browser viewport.
  53 | // - document.documentElement.scrollWidth measures document content width.
  54 | // - document.documentElement.clientWidth measures the visible document width.
  55 | // - Comparing them helps identify horizontal overflow
  56 | 
  57 | 
  58 | 
  59 | 
  60 | 
  61 | 
```