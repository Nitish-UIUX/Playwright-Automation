# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day5-form-debug.spec.js >> Inspect actual form fields
- Location: tests\day5-form-debug.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://practice.expandtesting.com/form-validation", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | 
  2  | import { test } from '@playwright/test';
  3  | 
  4  | test('Inspect actual form fields', async ({ page }) => {
  5  | 
> 6  |     await page.goto(
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  7  |         'https://practice.expandtesting.com/form-validation',
  8  |         { waitUntil: 'domcontentloaded' }
  9  |     );
  10 | 
  11 |     const fields = await page.locator('input, select, textarea')
  12 |         .evaluateAll(elements =>
  13 |             elements.map(element => ({
  14 |                 tag: element.tagName,
  15 |                 id: element.id,
  16 |                 name: element.name,
  17 |                 type: element.type,
  18 |                 placeholder: element.placeholder,
  19 |                 value: element.value,
  20 |                 labels: Array.from(element.labels || [])
  21 |                     .map(label => label.innerText.trim())
  22 |             }))
  23 |         );
  24 | 
  25 |     console.log('========== FORM FIELDS ==========');
  26 |     console.log(JSON.stringify(fields, null, 2));
  27 | 
  28 |     const buttons = await page.locator('button, input[type="submit"]')
  29 |         .evaluateAll(elements =>
  30 |             elements.map(element => ({
  31 |                 text: element.innerText,
  32 |                 type: element.type,
  33 |                 value: element.value
  34 |             }))
  35 |         );
  36 | 
  37 |     console.log('========== FORM BUTTONS ==========');
  38 |     console.log(JSON.stringify(buttons, null, 2));
  39 | 
  40 | 
  41 | 
  42 |     const payment = page.locator('[name="payment"]');
  43 | 
  44 |     const options = await payment.locator('option').evaluateAll(elements =>
  45 |         elements.map(option => ({
  46 |             text: option.textContent.trim(),
  47 |             value: option.value
  48 |         }))
  49 |     );
  50 | 
  51 |     console.log('Payment options:', options);
  52 | 
  53 | });
  54 | 
  55 | 
```