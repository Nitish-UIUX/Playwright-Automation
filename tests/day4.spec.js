// we are learning 
// Test Organization
// Hooks
// Fixtures
// Reusable Functions


// *************Organizing tests using test.describe *************
// Imagine we have 20 test cases for an e-commerce application:
// - 5 login test cases
// - 5 product test cases
// - 5 cart test cases
// - 5 checkout test cases
// If we write everything without grouping, the test file becomes difficult to maintain.

// Playwright provides test.describe() to group related test cases together.\

// import { test, expect } from '@playwright/test';

// test.describe('Login Tests', () => {

//     test('should display login page', async ({ page }) => {
//         await page.goto('https://www.saucedemo.com/');

//         await expect(page).toHaveTitle('Swag Labs');
//     });

//     test('should display username field', async ({ page }) => {
//         await page.goto('https://www.saucedemo.com/');

//         await expect(
//             page.getByPlaceholder('Username')
//         ).toBeVisible();
//     });

// });

// understand the code 
// - test.describe() is used to group related tests together
// 'Login Tests' Name of the test group
// 'should display login page' and 'should display username field' are individual test cases within the group
// - test() is used to define individual test cases
// - async function  - allows the use of await within the test case for asynchronous operations
// {page} is the Playwright page object used to interact with the web page
// - page.goto() navigates to the specified URL
// - page.getByPlaceholder() selects an element by its placeholder text
// - toBeVisible() is an assertion to check if the element is visible on the page
// - expect() is used for assertions within the test cases


// Multiple test groups 
// we cna create mulitiple group insdie one test file.

// import { test, expect } from '@playwright/test';

// login tests group
// This group contains tests related to the login functionality of the application.
// test.describe('Login Tests', () => {

//     test('valid login', async ({ page }) => {
//         await page.goto('https://www.saucedemo.com/');

//         await page.getByPlaceholder('Username')
//             .fill('standard_user');

//         await page.getByPlaceholder('Password')
//             .fill('secret_sauce');

//         await page.getByRole('button', { name: 'Login' })
//             .click();

//         await expect(page).toHaveURL(/inventory.html/);
//     });

// });

// product tests group
// This group contains tests related to the product functionality of the application.
// test.describe('Product Tests', () => {

//     test('should display products page', async ({ page }) => {
//         await page.goto('https://www.saucedemo.com/');

//         await page.getByPlaceholder('Username')
//             .fill('standard_user');

//         await page.getByPlaceholder('Password')
//             .fill('secret_sauce');

//         await page.getByRole('button', { name: 'Login' })
//             .click();

//         await expect(
//             page.getByText('Products', { exact: true })
//         ).toBeVisible();
//     });

// });


// Pactical exercises\
import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login Tests', () => {

    test('should display login page', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await expect(page).toHaveTitle('Swag Labs');

    });

    test('should display username and password fields', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await expect(
            page.getByPlaceholder('Username')
        ).toBeVisible();

        await expect(
            page.getByPlaceholder('Password')
        ).toBeVisible();

    });

});

test.describe('SauceDemo Product Tests', () => {

    test('should display products after login', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.getByPlaceholder('Username').fill('standard_user');

        await page.getByPlaceholder('Password').fill('secret_sauce');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL(/inventory.html/);

        await expect(
            page.getByText('Products', { exact: true })
        ).toBeVisible();

    });

});



// beforeEach and AfterEach hooks can be used to set up and tear down test conditions.

// Hooks: Hooks are functions that execute automatically at specific points during test execution.

// Playwright provides several hooks.
// beforeAll()	Once before all tests in the group
// beforeEach()	Before every test
// afterEach()	After every test
// afterAll()	Once after all tests in the group


// Before each :- 
// defination: Suppose we have three SauceDemo test cases.
// Every test needs to open the website and log in.
// Without hooks, we repeat the login code three times.
// Using beforeEach(), we can write the login setup once.

// import { test, expect } from '@playwright/test';

test.describe('SauceDemo Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.getByPlaceholder('Username')
            .fill('standard_user');

        await page.getByPlaceholder('Password')
            .fill('secret_sauce');

        await page.getByRole('button', { name: 'Login' })
            .click();

        await expect(page).toHaveURL(/inventory.html/);

    });

    test('should display products page', async ({ page }) => {

        await expect(
            page.getByText('Products', { exact: true })
        ).toBeVisible();

    });

    test('should display product list', async ({ page }) => {

        await expect(
            page.locator('.inventory_item')
        ).toHaveCount(6);

    });

});


// After each :- 
// definition: Suppose we want to perform some cleanup after each test, like logging out.
// Using afterEach(), we can write the cleanup code once and it will run after every test.
// afterEach() runs after every test.

// It is useful for cleanup activities, such as:
// - Logging information about the test.
// - Removing test-created data when appropriate.
// - Capturing additional debugging information.
// - Performing other test-specific cleanup.

test.describe('SauceDemo Tests', () => {

    test.afterEach(async ({ page }) => {

        console.log('Test execution completed.');

    });

});


// Playwright Fixtures
// A fixture provides the resuources and setup that a test needs to execute.

test('verify login page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});


// Important built - in fixtures include:
// - page: Provides a new browser page for each test.
// - context: Provides a new browser context for each test.
// - browser: Provides the browser instance.
// - request: Provides an APIRequestContext for making HTTP requests.
// - testInfo: Provides information about the currently running test.
// - workerInfo: Provides information about the worker executing the test.
// - browserName: Provides the name of the browser being used for the test.


// understand the browser and context fixture.
// import { test, expect } from '@playwright/test';

test('understand browser fixtures', async ({
    browser,
    context,
    page
}) => {

    console.log('Browser:', browser.browserType().name());

    console.log('Context available:', !!context);

    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle('Swag Labs');

});

// What is happening?
// - browser: Gives access to the browser instance.
// - context: Gives access to the current isolated browser session.
// - page: Gives access to the current browser tab.


// *********************what is test isolation? ******************************
// Test Isolation is when each test is completely isolated from another test. Every test runs independently from any other test. This means that each test has its own local storage, session storage, cookies etc. Playwright achieves this using BrowserContexts which are equivalent to incognito-like profiles. They are fast and cheap to create and are completely isolated, even when running in a single browser. Playwright creates a context for each test, and provides a default Page in that context.
// Test isolation ensures that each test runs independently of others.
// This means that the state of one test does not affect another test.
// Playwright achieves test isolation by providing a fresh browser context and page for each test.
// This helps in avoiding flaky tests and ensures consistent test results.

