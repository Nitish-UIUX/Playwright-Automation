# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day5-mini-project.spec.js >> Day 5 - Form Automation Mini Project >> Test 2 - Fill all form fields
- Location: tests\day5-mini-project.spec.js:50:9

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
  1   | // complete Form Autotmation Mini Project 
  2   | 
  3   | 
  4   | import { test, expect } from '@playwright/test';
  5   | import { fillContactForm } from './helpers/form.helper.js';
  6   | 
  7   | test.describe('Day 5 - Form Automation Mini Project', () => {
  8   | 
  9   |     test.beforeEach(async ({ page }) => {
  10  | 
> 11  |         await page.goto(
      |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  12  |             'https://practice.expandtesting.com/form-validation',
  13  |             {
  14  |                 waitUntil: 'domcontentloaded'
  15  |             }
  16  |         );
  17  | 
  18  |     });
  19  | 
  20  |     test.afterEach(async ({ browserName }) => {
  21  | 
  22  |         console.log(`Test completed on: ${browserName}`);
  23  | 
  24  |     });
  25  | 
  26  |     // Test 1 - Verify form fields
  27  |     test('Test 1 - Verify all form fields', async ({ page }) => {
  28  | 
  29  |         await expect(page.locator('form')).toBeVisible();
  30  | 
  31  |         await expect(
  32  |             page.locator('[name="ContactName"]')
  33  |         ).toBeVisible();
  34  | 
  35  |         await expect(
  36  |             page.locator('[name="contactnumber"]')
  37  |         ).toBeVisible();
  38  | 
  39  |         await expect(
  40  |             page.locator('[name="pickupdate"]')
  41  |         ).toBeVisible();
  42  | 
  43  |         await expect(
  44  |             page.locator('[name="payment"]')
  45  |         ).toBeVisible();
  46  | 
  47  |     });
  48  | 
  49  |     // Test 2 - Fill contact form
  50  |     test('Test 2 - Fill all form fields', async ({ page }) => {
  51  | 
  52  |         await fillContactForm(page);
  53  | 
  54  |         await expect(
  55  |             page.locator('[name="ContactName"]')
  56  |         ).toHaveValue('John Smith');
  57  | 
  58  |         await expect(
  59  |             page.locator('[name="contactnumber"]')
  60  |         ).toHaveValue('012-3456789');
  61  | 
  62  |         await expect(
  63  |             page.locator('[name="pickupdate"]')
  64  |         ).toHaveValue('2026-11-10');
  65  | 
  66  |         await expect(
  67  |             page.locator('[name="payment"]')
  68  |         ).toHaveValue('card');
  69  | 
  70  |     });
  71  | 
  72  |     // Test 3 - Verify payment options
  73  |     test('Test 3 - Select cash on delivery', async ({ page }) => {
  74  | 
  75  |         const payment = page.locator('[name="payment"]');
  76  | 
  77  |         await payment.selectOption('cashondelivery');
  78  | 
  79  |         await expect(payment).toHaveValue('cashondelivery');
  80  | 
  81  |     });
  82  | 
  83  |     // Test 4 - Verify card payment
  84  |     test('Test 4 - Select card payment', async ({ page }) => {
  85  | 
  86  |         const payment = page.locator('[name="payment"]');
  87  | 
  88  |         await payment.selectOption('card');
  89  | 
  90  |         await expect(payment).toHaveValue('card');
  91  | 
  92  |     });
  93  | 
  94  |     // Test 5 - Verify contact name validation
  95  |     test('Test 5 - Validate successful form submission', async ({ page }) => {
  96  | 
  97  |         await fillContactForm(page);
  98  | 
  99  |         await page.getByRole('button', {
  100 |             name: 'Register'
  101 |         }).click();
  102 | 
  103 |         await expect(page).toHaveURL(/form-confirmation/);
  104 | 
  105 |         await expect(
  106 |             page.getByText('Thank you for validating your ticket')
  107 |         ).toBeVisible();
  108 | 
  109 |     });
  110 |     // Test 6 - Complete form submission
  111 |     test('Test 6 - Verify confirmation page', async ({ page }) => {
```