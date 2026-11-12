# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day5-form.spec.js >> Day 5 - Complete Form Automation >> Test 2 - Fill form fields
- Location: tests\day5-form.spec.js:35:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://practice.expandtesting.com/form-validation", waiting until "domcontentloaded"

```

# Test source

```ts
  1   | 
  2   | import { test, expect } from '@playwright/test';
  3   | 
  4   | test.describe('Day 5 - Complete Form Automation', () => {
  5   | 
  6   |     test.beforeEach(async ({ page }) => {
  7   | 
> 8   |         await page.goto(
      |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  9   |             'https://practice.expandtesting.com/form-validation',
  10  |             {
  11  |                 waitUntil: 'domcontentloaded',
  12  |                 timeout: 60000
  13  |             }
  14  |         );
  15  | 
  16  |         await expect(page.locator('form')).toBeVisible();
  17  | 
  18  |     });
  19  | 
  20  |     // Test 1 - Verify form fields
  21  |     test('Test 1 - Verify form fields', async ({ page }) => {
  22  | 
  23  |         await expect(page.locator('[name="ContactName"]')).toBeVisible();
  24  |         await expect(page.locator('[name="contactnumber"]')).toBeVisible();
  25  |         await expect(page.locator('[name="pickupdate"]')).toBeVisible();
  26  |         await expect(page.locator('[name="payment"]')).toBeVisible();
  27  | 
  28  |         await expect(
  29  |             page.getByRole('button', { name: 'Register' })
  30  |         ).toBeVisible();
  31  | 
  32  |     });
  33  | 
  34  |     // Test 2 - Fill form fields
  35  |     test('Test 2 - Fill form fields', async ({ page }) => {
  36  | 
  37  |         await page.locator('[name="ContactName"]')
  38  |             .fill('John Smith');
  39  | 
  40  |         await page.locator('[name="contactnumber"]')
  41  |             .fill('012-3456789');
  42  | 
  43  |         await page.locator('[name="pickupdate"]')
  44  |             .fill('2026-11-10');
  45  | 
  46  |         await page.locator('[name="payment"]')
  47  |             .selectOption('card');
  48  | 
  49  |         // Verify values
  50  |         await expect(
  51  |             page.locator('[name="ContactName"]')
  52  |         ).toHaveValue('John Smith');
  53  | 
  54  |         await expect(
  55  |             page.locator('[name="contactnumber"]')
  56  |         ).toHaveValue('012-3456789');
  57  | 
  58  |         await expect(
  59  |             page.locator('[name="pickupdate"]')
  60  |         ).toHaveValue('2026-11-10');
  61  | 
  62  |         await expect(
  63  |             page.locator('[name="payment"]')
  64  |         ).toHaveValue('card');
  65  | 
  66  |     });
  67  | 
  68  |     // Test 3 - Submit form and inspect response
  69  |     test('Test 3 - Submit valid form', async ({ page }) => {
  70  | 
  71  |         await page.locator('[name="ContactName"]')
  72  |             .fill('John Smith');
  73  | 
  74  |         await page.locator('[name="contactnumber"]')
  75  |             .fill('012-3456789');
  76  | 
  77  |         await page.locator('[name="pickupdate"]')
  78  |             .fill('2026-11-10');
  79  | 
  80  |         await page.locator('[name="payment"]')
  81  |             .selectOption('card');
  82  | 
  83  |         await page.getByRole('button', {
  84  |             name: 'Register'
  85  |         }).click();
  86  | 
  87  |         // Verify contact name validation
  88  |         await expect(
  89  |             page.getByText('Looks good!')
  90  |         ).toBeVisible();
  91  | 
  92  |         // Print the final page response
  93  |         console.log(
  94  |             'Final page response:',
  95  |             await page.locator('body').innerText()
  96  |         );
  97  | 
  98  |     });
  99  | 
  100 | });
  101 | 
```