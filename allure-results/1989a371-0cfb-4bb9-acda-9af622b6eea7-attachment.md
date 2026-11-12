# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day5-radio.spec.js >> Day 5 - Radio Button Automation >> Test 1 - Verify radio buttons are visible
- Location: tests\day5-radio.spec.js:17:9

# Error details

```
Error: page.goto: NS_ERROR_NET_TIMEOUT
Call log:
  - navigating to "https://practice.expandtesting.com/radio-buttons", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- article [ref=e3]:
  - generic [ref=e6]:
    - heading "The connection has timed out" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - text: The server at
      - strong [ref=e9]: practice.expandtesting.com
      - text: is taking too long to respond.
    - generic [ref=e10]:
      - heading "What can you do about it?" [level=3] [ref=e11]
      - list [ref=e12]:
        - listitem [ref=e13]: The site could be temporarily unavailable or too busy. Try again in a few moments.
        - listitem [ref=e14]: If you are unable to load any pages, check your computer’s network connection.
        - listitem [ref=e15]: If your computer or network is protected by a firewall or proxy, make sure that Nightly is permitted to access the web.
    - button "Try Again" [ref=e18]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Day 5 - Radio Button Automation', () => {
  4  | 
  5  |     test.beforeEach(async ({ page }) => {
  6  | 
> 7  |         await page.goto(
     |                    ^ Error: page.goto: NS_ERROR_NET_TIMEOUT
  8  |             'https://practice.expandtesting.com/radio-buttons',
  9  |             {
  10 |                 waitUntil: 'domcontentloaded',
  11 |                 timeout: 60000
  12 |             }
  13 |         );
  14 | 
  15 |     });
  16 | 
  17 |     test('Test 1 - Verify radio buttons are visible', async ({ page }) => {
  18 | 
  19 |         await expect(
  20 |             page.locator('input[type="radio"]').first()
  21 |         ).toBeVisible();
  22 | 
  23 |     });
  24 | 
  25 |     test('Test 2 - Select Yellow color', async ({ page }) => {
  26 | 
  27 |         const yellow = page.locator('#yellow');
  28 | 
  29 |         await yellow.check({ timeout: 60000 });
  30 | 
  31 |         await expect(yellow).toBeChecked();
  32 | 
  33 |     });
  34 | 
  35 |     test('Test 3 - Select Football', async ({ page }) => {
  36 | 
  37 |         const football = page.locator('#football');
  38 | 
  39 |         await football.check();
  40 | 
  41 |         await expect(football).toBeChecked();
  42 | 
  43 |     });
  44 | 
  45 |     test('Test 4 - Verify only one color is selected', async ({ page }) => {
  46 | 
  47 |         const yellow = page.locator('#yellow');
  48 |         const black = page.locator('#black');
  49 | 
  50 |         await yellow.check({ timeout: 15000 });
  51 | 
  52 |         await expect(yellow).toBeChecked();
  53 | 
  54 |         await expect(black).not.toBeChecked();
  55 | 
  56 |     });
  57 | 
  58 | });
```