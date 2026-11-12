# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day6-authentication.spec.js >> Login with valid credentials
- Location: tests\day6-authentication.spec.js:76:5

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
  30  |         await page.goto(BASE_URL);
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
> 111 |     await page.goto(BASE_URL);
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
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
  131 | // What is data-driven testin gin authentication ? 
  132 | // ans :- Data-driven testing in authentication involves running the same login test with multiple sets of credentials to verify different scenarios, such as valid login, invalid login, and locked-out users.
  133 | const users = [
  134 |     { username: 'standard_user', password: 'secret_sauce', expected: true },
  135 |     { username: 'wrong_user', password: 'wrong_password', expected: false }
  136 | ];
  137 | 
  138 | for (const user of users) {
  139 |     test(`Login test for ${user.username}`, async ({ page }) => {
  140 |         await page.goto('https://www.saucedemo.com/');
  141 | 
  142 |         await page.locator('[data-test="username"]').fill(user.username);
  143 |         await page.locator('[data-test="password"]').fill(user.password);
  144 |         await page.locator('[data-test="login-button"]').click();
  145 | 
  146 |         if (user.expected) {
  147 |             await expect(page).toHaveURL(/inventory.html/);
  148 |         } else {
  149 |             await expect(page.locator('[data-test="error"]')).toBeVisible();
  150 |         }
  151 |     });
  152 | }
  153 | 
  154 | 
  155 | 
  156 | // what is a reusable login helperr in Playwright>
  157 | // ans: - A reusable login helper in Playwright is a function that performs the login steps, such as filling in the username and password and clicking the login button. It can be called in multiple tests to avoid repeating the same login code.
  158 | 
  159 | export async function login(page, username, password) {
  160 |     await page.goto('https://www.saucedemo.com/');
  161 | 
  162 |     await page.locator('[data-test="username"]').fill(username);
  163 |     await page.locator('[data-test="password"]').fill(password);
  164 |     await page.locator('[data-test="login-button"]').click();
  165 | }
  166 | 
  167 | 
  168 | // What is storageState in Playwright, and how does it help with authentication?
  169 | // ans: - StorageState saves browser authentication-related state, such as cookies and local storage. This allows tests to reuse the authenticated state without logging in repeatedly, improving test efficiency and consistency.\
  170 | 
  171 | // Save authenticated state after logging in, inside a test or setup callback.
  172 | // See tests/auth.setup.js for the executable example:
  173 | // await page.context().storageState({
  174 | //     path: 'playwright/.auth/user.json'
  175 | // });
  176 | 
  177 | // Reuse it in a test.
  178 | // test.use({
  179 | //     storageState: 'playwright/.auth/user.json'
  180 | // });
  181 | 
  182 | 
  183 | 
  184 | 
  185 | 
  186 | //// ----------------- Positive and Negative Login Testing -------------------------------
  187 | // Login test these four scernarios:
  188 | // Valid login ---> standard_user	---> secret_sauce	---> Login successful
  189 | // Invalid username	---> wrong_user	 ---> secret_sauce	---> Error message
  190 | // Invalid password	---> standard_user	---> wrong_password	---> Error message
  191 | // Locked-out user	---> locked_out_user	---> secret_sauce	---> Account locked error
  192 | 
  193 | 
  194 | 
  195 | 
  196 | 
  197 | /// -------------------Test Data Management in Playwright -------------------------------
  198 | // Test data management involves organizing and maintaining test data separately from test scripts. This allows for easier updates, reusability, and better test coverage. In Playwright, test data can be managed using arrays, JSON files, or external data sources.
  199 | 
  200 | // Why do we need test data management? 
  201 | // ans: - we have 20 login test cases, If username and passwords and hardcoded in every test, updating credentials becomes difficult.
  202 | 
  203 | 
  204 | // Understand the important concepts 
  205 | // export const              ---------------> Make test data available to other files 
  206 | // import  ------------> imports the test data 
  207 | // for ----of  ------------> Iterates over each item in the test data array
  208 | // user.username  -------> Reads the username from the test data
  209 | // user.password  -------> Reads the password from the test data
  210 | // user.expectedResult  ---> Reads the expected result from the test data
  211 | 
```