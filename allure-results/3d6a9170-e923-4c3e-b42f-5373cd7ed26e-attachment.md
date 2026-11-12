# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day2-mini-project.spec.js >> verify SauceDemo login page
- Location: tests\day2-mini-project.spec.js:6:1

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
  2  | 
  3  | 
  4  | const { test, expect } = require('@playwright/test');
  5  | 
  6  | test('verify SauceDemo login page', async ({ page }) => {
> 7  |   await page.goto('https://www.saucedemo.com/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  8  | 
  9  |   await expect(page).toHaveTitle('Swag Labs');
  10 | 
  11 |   await expect(
  12 |     page.getByPlaceholder('Username')
  13 |   ).toBeVisible();
  14 | 
  15 |   await expect(
  16 |     page.getByPlaceholder('Password')
  17 |   ).toBeVisible();
  18 | 
  19 |   await expect(
  20 |     page.getByRole('button', { name: 'Login' })
  21 |   ).toBeVisible();
  22 | });
  23 | 
```