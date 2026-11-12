# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day5-dropdown.spec.js >> Day 5 - Dropdown Automation >> Test 4 - Select Option by label
- Location: tests\day5-dropdown.spec.js:39:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://the-internet.herokuapp.com/dropdown", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Day 5 - Dropdown Automation', () => {
  4  | 
  5  |     test.beforeEach(async ({ page }) => {
  6  | 
> 7  |         await page.goto('https://the-internet.herokuapp.com/dropdown');
     |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  8  | 
  9  |     });
  10 | 
  11 |     test('Test 1 - Verify dropdown visibility', async ({ page }) => {
  12 | 
  13 |         await expect(
  14 |             page.locator('#dropdown')
  15 |         ).toBeVisible();
  16 | 
  17 |     });
  18 | 
  19 |     test('Test 2 - Select Option 1', async ({ page }) => {
  20 | 
  21 |         await page.locator('#dropdown').selectOption('1');
  22 | 
  23 |         await expect(
  24 |             page.locator('#dropdown')
  25 |         ).toHaveValue('1');
  26 | 
  27 |     });
  28 | 
  29 |     test('Test 3 - Select Option 2', async ({ page }) => {
  30 | 
  31 |         await page.locator('#dropdown').selectOption('2');
  32 | 
  33 |         await expect(
  34 |             page.locator('#dropdown')
  35 |         ).toHaveValue('2');
  36 | 
  37 |     });
  38 | 
  39 |     test('Test 4 - Select Option by label', async ({ page }) => {
  40 | 
  41 |         await page.locator('#dropdown').selectOption({
  42 |             label: 'Option 1'
  43 |         });
  44 | 
  45 |         await expect(
  46 |             page.locator('#dropdown')
  47 |         ).toHaveValue('1');
  48 | 
  49 |     });
  50 | 
  51 | });
```