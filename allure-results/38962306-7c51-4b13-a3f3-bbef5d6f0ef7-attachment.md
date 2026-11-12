# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day10-test-hooks.spec.js >> Verify login page title
- Location: tests\day10-test-hooks.spec.js:27:5

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
  1  | // -----------------------------------Test Hooks--------------------------------------
  2  | // beforeEach	---> Runs before every test
  3  | // afterEach	---> Runs after every test
  4  | // beforeAll	---> Runs once before tests in a file or describe group
  5  | // afterAll	    ---> Runs once after tests in a file or describe group
  6  | 
  7  | import { test, expect } from '@playwright/test';
  8  | 
  9  | test.beforeAll(async () => {
  10 |     console.log('Before All: Test suite started');
  11 | });
  12 | 
  13 | test.beforeEach(async ({ page }) => {
  14 |     console.log('Before Each: Opening application');
  15 | 
> 16 |     await page.goto('https://www.saucedemo.com/');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  17 | });
  18 | 
  19 | test.afterEach(async () => {
  20 |     console.log('After Each: Test completed');
  21 | });
  22 | 
  23 | test.afterAll(async () => {
  24 |     console.log('After All: Test suite completed');
  25 | });
  26 | 
  27 | test('Verify login page title', async ({ page }) => {
  28 | 
  29 |     await expect(page).toHaveTitle('Swag Labs');
  30 | 
  31 | });
  32 | 
  33 | test('Verify username field', async ({ page }) => {
  34 | 
  35 |     await expect(page.locator('#user-name')).toBeVisible();
  36 | 
  37 | });
  38 | 
  39 | test('Verify login button', async ({ page }) => {
  40 | 
  41 |     await expect(page.locator('#login-button')).toBeVisible();
  42 | 
  43 | });
```