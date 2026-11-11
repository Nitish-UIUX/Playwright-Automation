// Best practice for test isolation

// Use a separate page/context per test	-----> Avoid browser-state interference
// Perform setup independently	-----> Tests don't depend on execution order
// Avoid shared mutable variables	-----> Prevent unexpected test results
// Use unique test data 	-----> Avoid database conflicts
// Clean up test data	-----> Prevent old data from affecting new tests
// Use reusable helpers	-----> Reduce duplicate setup code

// what is shared state?
// Shared state occurs when multiple tests rely on the same data or environment.
// It can lead to flaky tests and unexpected failures.
// Test isolation helps to avoid shared state by providing independent contexts and pages for each test.

// example :- 
    // lobal variables
    // Shared database records
    // Common test accounts
    // Files
    // External API data
    // Shared browser sessions

    import { test, expect } from '@playwright/test';

test.describe('Playwright Test Isolation', () => {

    test('Test 1 - Login to SauceDemo', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.getByPlaceholder('Username')
            .fill('standard_user');

        await page.getByPlaceholder('Password')
            .fill('secret_sauce');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL(/inventory.html/);

        console.log('Test 1: Login successful');

    });

    test('Test 2 - Verify fresh browser session', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await expect(
            page.getByPlaceholder('Username')
        ).toBeVisible();

        console.log('Test 2: Fresh login page opened');

    });

    test('Test 3 - Verify independent page state', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await expect(page).toHaveTitle('Swag Labs');

        await expect(
            page.getByPlaceholder('Username')
        ).toHaveValue('');

        console.log('Test 3: Independent page state verified');

    });

});