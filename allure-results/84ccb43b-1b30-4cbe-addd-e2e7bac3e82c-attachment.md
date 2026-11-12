# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day6-authentication.spec.js >> Day 6 - Authentication Workflow >> Test 2 - Login with valid credentials
- Location: tests\day6-authentication.spec.js:52:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1   | // Authentication , Test Data Management and Resuable End-to-End Tests
  2   | 
  3   | // what we learning :- 
  4   | // 1. Authentication Workflow ---> Automate login and logout 
  5   | // 2. Positive and negative login testing ---> Verify correct and incorrect credentials
  6   | // 3. Test Data Management ---> Store and reuse test data efficiently
  7   | // 4. Reusable login helper  ---> Create login.helper.js
  8   | // 5. Authentication using fixtures ---> Create a reusable authenticated setup
  9   | // 6. Authentication mini project ---> Complete SourceDemo login-to-checkout workflow
  10  | 
  11  | 
  12  | 
  13  | 
  14  | // What is authentication Workflow 
  15  | // Authentication is the proecess of verfying a user's identity before allowing access to an application.
  16  | // Username or email
  17  | // Password
  18  | 
  19  | 
  20  | 
  21  | import { test, expect } from '@playwright/test';
  22  | 
  23  | // define the url 
  24  | const BASE_URL = 'https://www.saucedemo.com/';
  25  | 
  26  | test.describe('Day 6 - Authentication Workflow', () => {
  27  | 
  28  |     test.beforeEach(async ({ page }) => {
  29  | 
> 30  |         await page.goto(BASE_URL);
      |                    ^ Error: page.goto: Target page, context or browser has been closed
  31  | 
  32  |     });
  33  | 
  34  |     // Test 1 - Verify login page
  35  |     test('Test 1 - Verify login page visibility', async ({ page }) => {
  36  | 
  37  |         await expect(
  38  |             page.locator('[data-test="username"]')
  39  |         ).toBeVisible();
  40  | 
  41  |         await expect(
  42  |             page.locator('[data-test="password"]')
  43  |         ).toBeVisible();
  44  | 
  45  |         await expect(
  46  |             page.locator('[data-test="login-button"]')
  47  |         ).toBeVisible();
  48  | 
  49  |     });
  50  | 
  51  |     // Test 2 - Verify successful login
  52  |     test('Test 2 - Login with valid credentials', async ({ page }) => {
  53  | 
  54  |         await page.locator('[data-test="username"]')
  55  |             .fill('standard_user');
  56  | 
  57  |         await page.locator('[data-test="password"]')
  58  |             .fill('secret_sauce');
  59  | 
  60  |         await page.locator('[data-test="login-button"]')
  61  |             .click();
  62  | 
  63  |         await expect(page).toHaveURL(/inventory.html/);
  64  | 
  65  |         await expect(
  66  |             page.getByText('Products', { exact: true })
  67  |         ).toBeVisible();
  68  | 
  69  |     });
  70  | 
  71  | });
  72  | 
  73  | // how do you automate a login process using Playwright?
  74  | // ans :- we are using the playwright locators actions such a fill() and click() to automate the login process.
  75  | 
  76  | test('Login with valid credentials', async ({ page }) => {
  77  |     await page.goto(BASE_URL);
  78  | 
  79  |     await page.locator('[data-test="username"]').fill('standard_user');
  80  |     await page.locator('[data-test="password"]').fill('secret_sauce');
  81  |     await page.locator('[data-test="login-button"]').click();
  82  | 
  83  |     await expect(page).toHaveURL(/inventory.html/);
  84  |     await expect(page.getByText('Products', { exact: true })).toBeVisible();
  85  | });
  86  | 
  87  | 
  88  | // How do you vrify that login was successful?
  89  | // ans :- We can verify successful login by checking the URL and the visibility of elements that are only present after login, such as the 'Products' heading on the inventory page.
  90  | 
  91  | // The valid-credentials test above checks both the URL and Products heading.
  92  | 
  93  | // How do you test login with invalid credentials?
  94  | // ans :- Enter incorrect credentials and verify that the login fails by checking for an error message or that the URL remains the same.
  95  | 
  96  | test('Login with invalid credentials', async ({ page }) => {
  97  |     await page.goto(BASE_URL);
  98  | 
  99  |     await page.locator('[data-test="username"]').fill('invalid_user');
  100 |     await page.locator('[data-test="password"]').fill('invalid_password');
  101 |     await page.locator('[data-test="login-button"]').click();
  102 | 
  103 |     await expect(page).toHaveURL(BASE_URL);
  104 |     await expect(page.locator('[data-test="error"]')).toBeVisible();
  105 | });
  106 | 
  107 | // What is test.beforeEach() and why is it useful for authentication testing?
  108 | // ans :- test.beforeEach() executes before every test inside its scope. It helps us avoid repeating common setup steps , such as opening the login page.
  109 | 
  110 | test.beforeEach(async ({ page }) => {
  111 |     await page.goto(BASE_URL);
  112 | });
  113 | 
  114 | 
  115 | // What is a locked-out user is an account that is prevented from logging in. 
  116 | // ans :- A locked-ourtt user is an accoutn hat is prevented from loggin in.
  117 | test('Login with a locked-out user', async ({ page }) => {
  118 |     await page.locator('[data-test="username"]').fill('locked_out_user');
  119 |     await page.locator('[data-test="password"]').fill('secret_sauce');
  120 |     await page.locator('[data-test="login-button"]').click();
  121 | 
  122 |     await expect(page.locator('[data-test="error"]'))
  123 |         .toContainText('locked out');
  124 | });
  125 | 
  126 | 
  127 | 
  128 | 
  129 | 
  130 | 
```