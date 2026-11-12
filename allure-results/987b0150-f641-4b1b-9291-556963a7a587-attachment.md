# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day15-allure-mini-project.spec.js >> Day 15 - Allure Reporting Framework >> 02 - Successful login
- Location: tests\day15-allure-mini-project.spec.js:45:3

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
  1   | 
  2   | const { test, expect } = require('@playwright/test');
  3   | const { allure } = require('allure-playwright');
  4   | const fs = require('fs');
  5   | 
  6   | test.describe('Day 15 - Allure Reporting Framework', () => {
  7   | 
  8   |   test('01 - Login page validation', async ({ page }) => {
  9   |     const logs = [];
  10  | 
  11  |     await allure.epic('E-commerce Application');
  12  |     await allure.feature('Authentication');
  13  |     await allure.story('Login Page Validation');
  14  |     await allure.severity('critical');
  15  |     await allure.owner('QA Automation Team');
  16  | 
  17  |     await page.goto('https://www.saucedemo.com/');
  18  | 
  19  |     await expect(page).toHaveTitle(/Swag Labs/);
  20  | 
  21  |     await expect(
  22  |       page.locator('[data-test="username"]')
  23  |     ).toBeVisible();
  24  | 
  25  |     logs.push('Login page opened successfully');
  26  |     logs.push('Username field is visible');
  27  | 
  28  |     const screenshot = await page.screenshot({
  29  |       fullPage: true,
  30  |     });
  31  | 
  32  |     await allure.attachment(
  33  |       'Login Page Screenshot',
  34  |       screenshot,
  35  |       'image/png'
  36  |     );
  37  | 
  38  |     await allure.attachment(
  39  |       'Execution Logs',
  40  |       logs.join('\n'),
  41  |       'text/plain'
  42  |     );
  43  |   });
  44  | 
  45  |   test('02 - Successful login', async ({ page }) => {
  46  |     await allure.epic('E-commerce Application');
  47  |     await allure.feature('Authentication');
  48  |     await allure.story('Successful Login');
  49  |     await allure.severity('critical');
  50  |     await allure.owner('QA Automation Team');
  51  | 
> 52  |     await page.goto('https://www.saucedemo.com/');
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  53  | 
  54  |     await page.locator('[data-test="username"]')
  55  |       .fill('standard_user');
  56  | 
  57  |     await page.locator('[data-test="password"]')
  58  |       .fill('secret_sauce');
  59  | 
  60  |     await page.locator('[data-test="login-button"]').click();
  61  | 
  62  |     await expect(
  63  |       page.locator('.inventory_list')
  64  |     ).toBeVisible();
  65  | 
  66  |     await allure.attachment(
  67  |       'Login Success',
  68  |       'User logged in successfully',
  69  |       'text/plain'
  70  |     );
  71  |   });
  72  | 
  73  |   test('03 - Product inventory validation', async ({ page }) => {
  74  |     await allure.epic('E-commerce Application');
  75  |     await allure.feature('Products');
  76  |     await allure.story('Product Inventory');
  77  |     await allure.severity('normal');
  78  |     await allure.owner('QA Automation Team');
  79  | 
  80  |     await page.goto('https://www.saucedemo.com/');
  81  | 
  82  |     await page.locator('[data-test="username"]')
  83  |       .fill('standard_user');
  84  | 
  85  |     await page.locator('[data-test="password"]')
  86  |       .fill('secret_sauce');
  87  | 
  88  |     await page.locator('[data-test="login-button"]').click();
  89  | 
  90  |     await expect(
  91  |       page.locator('.inventory_item')
  92  |     ).toHaveCount(6);
  93  | 
  94  |     await allure.attachment(
  95  |       'Inventory Validation',
  96  |       'All six products are displayed',
  97  |       'text/plain'
  98  |     );
  99  |   });
  100 | 
  101 |   test.skip('04 - Checkout validation (future test)', async ({ page }) => {
  102 |     await page.goto('https://www.saucedemo.com/');
  103 |   });
  104 | 
  105 | });
  106 | 
```