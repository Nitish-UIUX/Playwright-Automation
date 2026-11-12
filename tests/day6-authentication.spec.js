// Authentication , Test Data Management and Resuable End-to-End Tests

// what we learning :- 
// 1. Authentication Workflow ---> Automate login and logout 
// 2. Positive and negative login testing ---> Verify correct and incorrect credentials
// 3. Test Data Management ---> Store and reuse test data efficiently
// 4. Reusable login helper  ---> Create login.helper.js
// 5. Authentication using fixtures ---> Create a reusable authenticated setup
// 6. Authentication mini project ---> Complete SourceDemo login-to-checkout workflow




// What is authentication Workflow 
// Authentication is the proecess of verfying a user's identity before allowing access to an application.
// Username or email
// Password



import { test, expect } from '@playwright/test';

// define the url 
const BASE_URL = 'https://www.saucedemo.com/';

test.describe('Day 6 - Authentication Workflow', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(BASE_URL);

    });

    // Test 1 - Verify login page
    test('Test 1 - Verify login page visibility', async ({ page }) => {

        await expect(
            page.locator('[data-test="username"]')
        ).toBeVisible();

        await expect(
            page.locator('[data-test="password"]')
        ).toBeVisible();

        await expect(
            page.locator('[data-test="login-button"]')
        ).toBeVisible();

    });

    // Test 2 - Verify successful login
    test('Test 2 - Login with valid credentials', async ({ page }) => {

        await page.locator('[data-test="username"]')
            .fill('standard_user');

        await page.locator('[data-test="password"]')
            .fill('secret_sauce');

        await page.locator('[data-test="login-button"]')
            .click();

        await expect(page).toHaveURL(/inventory.html/);

        await expect(
            page.getByText('Products', { exact: true })
        ).toBeVisible();

    });

});

// how do you automate a login process using Playwright?
// ans :- we are using the playwright locators actions such a fill() and click() to automate the login process.

test('Login with valid credentials', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
});


// How do you vrify that login was successful?
// ans :- We can verify successful login by checking the URL and the visibility of elements that are only present after login, such as the 'Products' heading on the inventory page.

// The valid-credentials test above checks both the URL and Products heading.

// How do you test login with invalid credentials?
// ans :- Enter incorrect credentials and verify that the login fails by checking for an error message or that the URL remains the same.

test('Login with invalid credentials', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').fill('invalid_password');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(BASE_URL);
    await expect(page.locator('[data-test="error"]')).toBeVisible();
});

// What is test.beforeEach() and why is it useful for authentication testing?
// ans :- test.beforeEach() executes before every test inside its scope. It helps us avoid repeating common setup steps , such as opening the login page.

test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
});


// What is a locked-out user is an account that is prevented from logging in. 
// ans :- A locked-ourtt user is an accoutn hat is prevented from loggin in.
test('Login with a locked-out user', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]'))
        .toContainText('locked out');
});






// What is data-driven testin gin authentication ? 
// ans :- Data-driven testing in authentication involves running the same login test with multiple sets of credentials to verify different scenarios, such as valid login, invalid login, and locked-out users.
const users = [
    { username: 'standard_user', password: 'secret_sauce', expected: true },
    { username: 'wrong_user', password: 'wrong_password', expected: false }
];

for (const user of users) {
    test(`Login test for ${user.username}`, async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await page.locator('[data-test="username"]').fill(user.username);
        await page.locator('[data-test="password"]').fill(user.password);
        await page.locator('[data-test="login-button"]').click();

        if (user.expected) {
            await expect(page).toHaveURL(/inventory.html/);
        } else {
            await expect(page.locator('[data-test="error"]')).toBeVisible();
        }
    });
}



// what is a reusable login helperr in Playwright>
// ans: - A reusable login helper in Playwright is a function that performs the login steps, such as filling in the username and password and clicking the login button. It can be called in multiple tests to avoid repeating the same login code.

export async function login(page, username, password) {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill(username);
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-button"]').click();
}


// What is storageState in Playwright, and how does it help with authentication?
// ans: - StorageState saves browser authentication-related state, such as cookies and local storage. This allows tests to reuse the authenticated state without logging in repeatedly, improving test efficiency and consistency.\

// Save authenticated state after logging in, inside a test or setup callback.
// See tests/auth.setup.js for the executable example:
// await page.context().storageState({
//     path: 'playwright/.auth/user.json'
// });

// Reuse it in a test.
// test.use({
//     storageState: 'playwright/.auth/user.json'
// });





//// ----------------- Positive and Negative Login Testing -------------------------------
// Login test these four scernarios:
// Valid login ---> standard_user	---> secret_sauce	---> Login successful
// Invalid username	---> wrong_user	 ---> secret_sauce	---> Error message
// Invalid password	---> standard_user	---> wrong_password	---> Error message
// Locked-out user	---> locked_out_user	---> secret_sauce	---> Account locked error





/// -------------------Test Data Management in Playwright -------------------------------
// Test data management involves organizing and maintaining test data separately from test scripts. This allows for easier updates, reusability, and better test coverage. In Playwright, test data can be managed using arrays, JSON files, or external data sources.

// Why do we need test data management? 
// ans: - we have 20 login test cases, If username and passwords and hardcoded in every test, updating credentials becomes difficult.


// Understand the important concepts 
// export const              ---------------> Make test data available to other files 
// import  ------------> imports the test data 
// for ----of  ------------> Iterates over each item in the test data array
// user.username  -------> Reads the username from the test data
// user.password  -------> Reads the password from the test data
// user.expectedResult  ---> Reads the expected result from the test data


// Creating a Reusable Login Helper Function 
// ans: - A reusable login helper function allows you to encapsulate the login steps in a single function, which can then be called in multiple tests. This reduces code duplication and makes tests easier to maintain.

// Inside tests/helpers/login.helper.js, add:
// The login() helper above demonstrates the same steps.
// The reusable implementation is in tests/helpers/login.helper.js.


// Authentication Using Playwright Fixtures and Storage State 
// what we are learn 
// 1. Fixtures - Reuse browser setup and authentication login across tests.
// 2. Storage State - Save and reuse authenticated state to avoid repeated logins.

// What are Playwright fixtures?
// ans :- Playwright fixtures are a way to define reusable setup and teardown logic for tests. They allow you to create and share common test resources, such as browser contexts, authenticated sessions, or test data, across multiple tests. Fixtures help in reducing code duplication and managing test dependencies efficiently.

// page ---> Provided a browser page
// browser ---> Provided a browser instance
// context ---> Provided an isolated browser context
// request ---> Provideds an API request context 


// What is Storage State in Playwright? 
// ans :- Storage state allows Playwright to save and reuse browser authentication information , including cookies and local storage.
// Instead of loggin in befor every test, we can :
// 1. Log in once.
// 2. Save the authentication state.
// 3. Reuse that state in other tests.
