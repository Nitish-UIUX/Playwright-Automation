# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day4.spec.js >> understand browser fixtures
- Location: tests\day4.spec.js:254:5

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
  235 | 
  236 | test('verify login page', async ({ page }) => {
  237 |     await page.goto('https://www.saucedemo.com/');
  238 | });
  239 | 
  240 | 
  241 | // Important built - in fixtures include:
  242 | // - page: Provides a new browser page for each test.
  243 | // - context: Provides a new browser context for each test.
  244 | // - browser: Provides the browser instance.
  245 | // - request: Provides an APIRequestContext for making HTTP requests.
  246 | // - testInfo: Provides information about the currently running test.
  247 | // - workerInfo: Provides information about the worker executing the test.
  248 | // - browserName: Provides the name of the browser being used for the test.
  249 | 
  250 | 
  251 | // understand the browser and context fixture.
  252 | // import { test, expect } from '@playwright/test';
  253 | 
  254 | test('understand browser fixtures', async ({
  255 |     browser,
  256 |     context,
  257 |     page
  258 | }) => {
  259 | 
  260 |     console.log('Browser:', browser.browserType().name());
  261 | 
  262 |     console.log('Context available:', !!context);
  263 | 
> 264 |     await page.goto('https://www.saucedemo.com/');
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  265 | 
  266 |     await expect(page).toHaveTitle('Swag Labs');
  267 | 
  268 | });
  269 | 
  270 | // What is happening?
  271 | // - browser: Gives access to the browser instance.
  272 | // - context: Gives access to the current isolated browser session.
  273 | // - page: Gives access to the current browser tab.
  274 | 
  275 | 
  276 | // *********************what is test isolation? ******************************
  277 | // Test Isolation is when each test is completely isolated from another test. Every test runs independently from any other test. This means that each test has its own local storage, session storage, cookies etc. Playwright achieves this using BrowserContexts which are equivalent to incognito-like profiles. They are fast and cheap to create and are completely isolated, even when running in a single browser. Playwright creates a context for each test, and provides a default Page in that context.
  278 | // Test isolation ensures that each test runs independently of others.
  279 | // This means that the state of one test does not affect another test.
  280 | // Playwright achieves test isolation by providing a fresh browser context and page for each test.
  281 | // This helps in avoiding flaky tests and ensures consistent test results.
  282 | 
  283 | 
```