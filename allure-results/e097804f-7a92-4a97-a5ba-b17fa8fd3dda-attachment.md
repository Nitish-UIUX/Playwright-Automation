# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day13-inspector.spec.js >> Debug using Playwright Inspector
- Location: tests\day13-inspector.spec.js:15:1

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
  1  | // Playwright Inspector and page.pause()
  2  | // In Hour 1, we introduced debugging fundamentals. Now we'll learn how to pause test execution and inspect the browser interactively.
  3  | // 1. What is Playwright Inspector?
  4  | // Playwright Inspector is a debugging tool that allows you to:
  5  | // - Pause test execution.
  6  | // - Inspect page elements.
  7  | // - Identify and test locators.
  8  | // - Execute actions step by step.
  9  | // - Resume or stop test execution.
  10 | 
  11 | 
  12 | 
  13 | const { test, expect } = require('@playwright/test');
  14 | 
  15 | test('Debug using Playwright Inspector', async ({ page }) => {
> 16 |   await page.goto('https://www.saucedemo.com/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  17 | 
  18 |   console.log('Browser opened');
  19 | 
  20 |   // Pause execution and open Playwright Inspector
  21 |   await page.pause();
  22 | 
  23 |   const username = page.locator('[data-test="username"]');
  24 |   const password = page.locator('[data-test="password"]');
  25 | 
  26 |   await username.fill('standard_user');
  27 |   await password.fill('secret_sauce');
  28 | 
  29 |   await page.locator('[data-test="login-button"]').click();
  30 | 
  31 |   await expect(page.locator('.inventory_list')).toBeVisible();
  32 | 
  33 |   console.log('Login successful');
  34 | });
  35 | 
  36 | // Important: page.pause() vs --debug
  37 | 
  38 | // page.pause()	Pauses execution at a specific line
  39 | // --debug	Starts Playwright in interactive debugging mode
  40 | // Locator picker	Helps identify page elements
  41 | // Resume	Continues test execution
  42 | 
```