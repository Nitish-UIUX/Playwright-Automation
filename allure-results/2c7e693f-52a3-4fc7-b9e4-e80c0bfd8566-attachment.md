# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day4.spec.js >> SauceDemo Product Tests >> should display products after login
- Location: tests\day4.spec.js:132:9

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
  34  | //     });
  35  | 
  36  | // });
  37  | 
  38  | // understand the code 
  39  | // - test.describe() is used to group related tests together
  40  | // 'Login Tests' Name of the test group
  41  | // 'should display login page' and 'should display username field' are individual test cases within the group
  42  | // - test() is used to define individual test cases
  43  | // - async function  - allows the use of await within the test case for asynchronous operations
  44  | // {page} is the Playwright page object used to interact with the web page
  45  | // - page.goto() navigates to the specified URL
  46  | // - page.getByPlaceholder() selects an element by its placeholder text
  47  | // - toBeVisible() is an assertion to check if the element is visible on the page
  48  | // - expect() is used for assertions within the test cases
  49  | 
  50  | 
  51  | // Multiple test groups 
  52  | // we cna create mulitiple group insdie one test file.
  53  | 
  54  | // import { test, expect } from '@playwright/test';
  55  | 
  56  | // login tests group
  57  | // This group contains tests related to the login functionality of the application.
  58  | // test.describe('Login Tests', () => {
  59  | 
  60  | //     test('valid login', async ({ page }) => {
  61  | //         await page.goto('https://www.saucedemo.com/');
  62  | 
  63  | //         await page.getByPlaceholder('Username')
  64  | //             .fill('standard_user');
  65  | 
  66  | //         await page.getByPlaceholder('Password')
  67  | //             .fill('secret_sauce');
  68  | 
  69  | //         await page.getByRole('button', { name: 'Login' })
  70  | //             .click();
  71  | 
  72  | //         await expect(page).toHaveURL(/inventory.html/);
  73  | //     });
  74  | 
  75  | // });
  76  | 
  77  | // product tests group
  78  | // This group contains tests related to the product functionality of the application.
  79  | // test.describe('Product Tests', () => {
  80  | 
  81  | //     test('should display products page', async ({ page }) => {
  82  | //         await page.goto('https://www.saucedemo.com/');
  83  | 
  84  | //         await page.getByPlaceholder('Username')
  85  | //             .fill('standard_user');
  86  | 
  87  | //         await page.getByPlaceholder('Password')
  88  | //             .fill('secret_sauce');
  89  | 
  90  | //         await page.getByRole('button', { name: 'Login' })
  91  | //             .click();
  92  | 
  93  | //         await expect(
  94  | //             page.getByText('Products', { exact: true })
  95  | //         ).toBeVisible();
  96  | //     });
  97  | 
  98  | // });
  99  | 
  100 | 
  101 | // Pactical exercises\
  102 | import { test, expect } from '@playwright/test';
  103 | 
  104 | test.describe('SauceDemo Login Tests', () => {
  105 | 
  106 |     test('should display login page', async ({ page }) => {
  107 | 
  108 |         await page.goto('https://www.saucedemo.com/');
  109 | 
  110 |         await expect(page).toHaveTitle('Swag Labs');
  111 | 
  112 |     });
  113 | 
  114 |     test('should display username and password fields', async ({ page }) => {
  115 | 
  116 |         await page.goto('https://www.saucedemo.com/');
  117 | 
  118 |         await expect(
  119 |             page.getByPlaceholder('Username')
  120 |         ).toBeVisible();
  121 | 
  122 |         await expect(
  123 |             page.getByPlaceholder('Password')
  124 |         ).toBeVisible();
  125 | 
  126 |     });
  127 | 
  128 | });
  129 | 
  130 | test.describe('SauceDemo Product Tests', () => {
  131 | 
  132 |     test('should display products after login', async ({ page }) => {
  133 | 
> 134 |         await page.goto('https://www.saucedemo.com/');
      |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  135 | 
  136 |         await page.getByPlaceholder('Username').fill('standard_user');
  137 | 
  138 |         await page.getByPlaceholder('Password').fill('secret_sauce');
  139 | 
  140 |         await page.getByRole('button', { name: 'Login' }).click();
  141 | 
  142 |         await expect(page).toHaveURL(/inventory.html/);
  143 | 
  144 |         await expect(
  145 |             page.getByText('Products', { exact: true })
  146 |         ).toBeVisible();
  147 | 
  148 |     });
  149 | 
  150 | });
  151 | 
  152 | 
  153 | 
  154 | // beforeEach and AfterEach hooks can be used to set up and tear down test conditions.
  155 | 
  156 | // Hooks: Hooks are functions that execute automatically at specific points during test execution.
  157 | 
  158 | // Playwright provides several hooks.
  159 | // beforeAll()	Once before all tests in the group
  160 | // beforeEach()	Before every test
  161 | // afterEach()	After every test
  162 | // afterAll()	Once after all tests in the group
  163 | 
  164 | 
  165 | // Before each :- 
  166 | // defination: Suppose we have three SauceDemo test cases.
  167 | // Every test needs to open the website and log in.
  168 | // Without hooks, we repeat the login code three times.
  169 | // Using beforeEach(), we can write the login setup once.
  170 | 
  171 | // import { test, expect } from '@playwright/test';
  172 | 
  173 | test.describe('SauceDemo Tests', () => {
  174 | 
  175 |     test.beforeEach(async ({ page }) => {
  176 | 
  177 |         await page.goto('https://www.saucedemo.com/');
  178 | 
  179 |         await page.getByPlaceholder('Username')
  180 |             .fill('standard_user');
  181 | 
  182 |         await page.getByPlaceholder('Password')
  183 |             .fill('secret_sauce');
  184 | 
  185 |         await page.getByRole('button', { name: 'Login' })
  186 |             .click();
  187 | 
  188 |         await expect(page).toHaveURL(/inventory.html/);
  189 | 
  190 |     });
  191 | 
  192 |     test('should display products page', async ({ page }) => {
  193 | 
  194 |         await expect(
  195 |             page.getByText('Products', { exact: true })
  196 |         ).toBeVisible();
  197 | 
  198 |     });
  199 | 
  200 |     test('should display product list', async ({ page }) => {
  201 | 
  202 |         await expect(
  203 |             page.locator('.inventory_item')
  204 |         ).toHaveCount(6);
  205 | 
  206 |     });
  207 | 
  208 | });
  209 | 
  210 | 
  211 | // After each :- 
  212 | // definition: Suppose we want to perform some cleanup after each test, like logging out.
  213 | // Using afterEach(), we can write the cleanup code once and it will run after every test.
  214 | // afterEach() runs after every test.
  215 | 
  216 | // It is useful for cleanup activities, such as:
  217 | // - Logging information about the test.
  218 | // - Removing test-created data when appropriate.
  219 | // - Capturing additional debugging information.
  220 | // - Performing other test-specific cleanup.
  221 | 
  222 | test.describe('SauceDemo Tests', () => {
  223 | 
  224 |     test.afterEach(async ({ page }) => {
  225 | 
  226 |         console.log('Test execution completed.');
  227 | 
  228 |     });
  229 | 
  230 | });
  231 | 
  232 | 
  233 | // Playwright Fixtures
  234 | // A fixture provides the resuources and setup that a test needs to execute.
```