// Auto-waiting in Playwright 
// what is Auto-waiting in Playwright
// Auto-waiting in Playwright is a feature where Playwright automatically waits for elements to be ready before performing actions on them.
// This includes waiting for elements to be visible, enabled, and stable in the DOM.
// It helps to reduce the need for explicit waits and makes tests more reliable.



const { test, expect } = require('@playwright/test');


test('verify dynamically loaded text', async ({ page }) => {

    // Step 1: Open the dynamic loading page
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    // Step 2: Locate and click the Start button
    await page.getByRole('button', { name: 'Start' }).click();

    // Step 3: Locate the dynamically loaded element
    const resultText = page.locator('#finish');

    // Step 4: Wait until the element becomes visible
    // await expect(resultText).toBeVisible();
    await expect(resultText).toBeVisible({
        timeout: 10000
    });
    // Step 5: Verify the expected text
    await expect(resultText).toHaveText('Hello World!');

});

// handling dynamic elements

test('verify dynamic loading completion', async ({ page }) => {

    // Step 1: Open dynamic loading example 2
    await page.goto(
        'https://the-internet.herokuapp.com/dynamic_loading/2'
    );

    // Step 2: Click Start
    await page.getByRole('button', { name: 'Start' }).click();

    // Step 3: Verify loading indicator disappears
    const loading = page.locator('#loading');

    // element should be hidden before proceeding
    await expect(loading).toBeHidden({
        timeout: 10000
    });

    // Step 4: Verify final content appears
    const result = page.locator('#finish');

    // Element should be visible before checking text
    await expect(result).toBeVisible({
        timeout: 10000
    });

    await expect(result).toHaveText('Hello World!');

});


// Playwright Wait Strategies
// we will learn three important waiting methods that help make automation tests reliable.
// waitForURL: Waits for the page to navigate to a specific URL.
// waitForState: Waits for the page to reach a specific state, such as 'load', 'domcontentloaded', or 'networkidle'.
// locator.waitFor: Waits for a specific condition on a locator, such as visibility or attachment to the DOM.



test('verify login navigation using waitForURL', async ({ page }) => {

    // Step 1: Open SauceDemo
    await page.goto('https://www.saucedemo.com/');

    // Step 2: Enter username
    await page.getByPlaceholder('Username')
        .fill('standard_user');

    // Step 3: Enter password
    await page.getByPlaceholder('Password')
        .fill('secret_sauce');

    // Step 4: Click Login
    await page.getByRole('button', {
        name: 'Login'
    }).click();

    // Step 5: Wait for inventory page URL
    await page.waitForURL('**/inventory.html');

    // Step 6: Verify inventory heading
    await expect(
        page.getByText('Products', { exact: true })
    ).toBeVisible();

});


// Test waitForLoadState()

test('verify page loading state', async ({ page }) => {

    // Step 1: Open website
    await page.goto('https://playwright.dev/');

    // Step 2: Wait until HTML document is parsed
    await page.waitForLoadState('domcontentloaded');

    // Step 3: Verify page heading
    await expect(
        page.getByRole('heading', { level: 1 })
    ).toBeVisible();

});


// Test locator.waitFor()

test('verify element using locator waitFor', async ({ page }) => {

    // Step 1: Open dynamic loading page
    await page.goto(
        'https://the-internet.herokuapp.com/dynamic_loading/1'
    );

    // Step 2: Locate Start button
    await page.getByRole('button', { name: 'Start' }).click();

    // Step 3: Locate result element
    const result = page.locator('#finish');

    // Step 4: Wait until element becomes visible
    await result.waitFor({
        state: 'visible',
        timeout: 10000
    });

    // Step 5: Verify text
    await expect(result).toHaveText('Hello World!');

});


// Navigation Handling and Multiple Pages.
// Navigate to a website -- page.goto()
// Click a navigation link -- 	getByRole().click()
// Verify URL changes -- 	waitForURL()
// Handle a new browser tab -- context.waitForEvent('page')
// Handle popup windows -- page.waitForEvent('popup')
// Verify page title -- toHaveTitle()

// practice Task 1 - Navigate between pages 


test('verify navigation using link', async ({ page }) => {

    // Open homepage
    await page.goto('https://the-internet.herokuapp.com/');

    // Click Form Authentication
    await page.getByRole('link', {
        name: 'Form Authentication'
    }).click();

    // Verify navigation
    await page.waitForURL('**/login');

    // Verify login page heading
    await expect(
        page.getByRole('heading', { name: 'Login Page' })
    ).toBeVisible();

});


// practice Task 2 - Handle new browser tab

test('verify newly opened browser tab', async ({ page }) => {

    // Open Multiple Windows page
    await page.goto('https://the-internet.herokuapp.com/windows');

    // Start waiting for a new page before clicking
    const newPagePromise = page.context().waitForEvent('page');

    await page.getByRole('link', {
        name: 'Click Here'
    }).click();

    // Capture the newly opened tab
    const newPage = await newPagePromise;

    // Wait for its HTML document
    await newPage.waitForLoadState('domcontentloaded');

    // Verify heading in the new tab
    await expect(
        newPage.getByRole('heading', { name: 'New Window' })
    ).toBeVisible();

});



// Complete Form Workflow 

// 1. What will we learn?
// We'll practise:
// - Filling multiple form fields.
// - Submitting forms.
// - Validating required fields.
// - Navigating through a checkout workflow.
// - Verifying success and error messages.
// - Combining multiple actions and assertions in one test.


test('complete SauceDemo checkout workflow', async ({ page }) => {

    // Step 1: Open login page
    await page.goto('https://www.saucedemo.com/');

    // Step 2: Login
    await page.getByPlaceholder('Username')
        .fill('standard_user');

    await page.getByPlaceholder('Password')
        .fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' })
        .click();

    // Step 3: Verify inventory page
    await expect(page).toHaveURL(/inventory.html/);

    // Step 4: Add Sauce Labs Backpack to cart
    const backpack = page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' });

    await backpack.getByRole('button', {
        name: 'Add to cart'
    }).click();

    // Step 5: Open shopping cart
    await page.locator('.shopping_cart_link').click();

    // Step 6: Verify cart item
    await expect(
        page.getByText('Sauce Labs Backpack')
    ).toBeVisible();

    // Step 7: Click Checkout
    await page.getByRole('button', {
        name: 'Checkout'
    }).click();


    // Step 8: Fill customer information

    const firstName = page.getByPlaceholder('First Name');
    const lastName = page.getByPlaceholder('Last Name');
    const postalCode = page.getByPlaceholder('Zip/Postal Code');

    await firstName.fill('John');
    await lastName.fill('Smith');
    await postalCode.fill('831001');

    // Verify all three fields contain the expected values
    await expect(firstName).toHaveValue('John');
    await expect(lastName).toHaveValue('Smith');
    await expect(postalCode).toHaveValue('831001');

    // Click Continue
    await page.getByRole('button', {
        name: 'Continue'
    }).click();

    // Verify checkout overview URL
    await expect(page).toHaveURL(/checkout-step-two.html/);

    // Verify overview title
    await expect(
        page.getByText('Checkout: Overview', { exact: true })
    ).toBeVisible();

    // Verify product in order overview
    await expect(
        page.getByText('Sauce Labs Backpack')
    ).toBeVisible();

    // Finish order
    await page.getByRole('button', {
        name: 'Finish'
    }).click();

    // Verify successful order
    await expect(
        page.getByRole('heading', {
            name: 'Thank you for your order!'
        })
    ).toBeVisible();
});

