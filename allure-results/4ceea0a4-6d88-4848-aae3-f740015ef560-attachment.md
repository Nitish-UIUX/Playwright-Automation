# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day6-auth-fixture.spec.js >> Day 6 - Authentication Fixture >> Verify inventory page after login
- Location: tests\day6-auth-fixture.spec.js:5:9

# Error details

```
Test timeout of 30000ms exceeded while setting up "authenticatedPage".
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test as base, expect } from '@playwright/test';
  2  | 
  3  | export const test = base.extend({
  4  | 
  5  |     authenticatedPage: async ({ page }, use) => {
  6  | 
  7  |         // Open login page
> 8  |         await page.goto('https://www.saucedemo.com/');
     |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  9  | 
  10 |         await page.locator('[data-test="username"]')
  11 |             .fill('standard_user'); // Login
  12 |        
  13 | 
  14 |         await page.locator('[data-test="password"]')
  15 |             .fill('secret_sauce');
  16 | 
  17 |         await page.locator('[data-test="login-button"]').click();
  18 | 
  19 |         // Verify successful login
  20 |         await expect(page).toHaveURL(/inventory.html/);
  21 | 
  22 |         // Provide authenticated page to the test
  23 |         await use(page);
  24 |     }
  25 | 
  26 | });
  27 | 
  28 | export { expect };
```