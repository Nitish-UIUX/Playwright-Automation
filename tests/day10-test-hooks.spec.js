// -----------------------------------Test Hooks--------------------------------------
// beforeEach	---> Runs before every test
// afterEach	---> Runs after every test
// beforeAll	---> Runs once before tests in a file or describe group
// afterAll	    ---> Runs once after tests in a file or describe group

import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('Before All: Test suite started');
});

test.beforeEach(async ({ page }) => {
    console.log('Before Each: Opening application');

    await page.goto('https://www.saucedemo.com/');
});

test.afterEach(async () => {
    console.log('After Each: Test completed');
});

test.afterAll(async () => {
    console.log('After All: Test suite completed');
});

test('Verify login page title', async ({ page }) => {

    await expect(page).toHaveTitle('Swag Labs');

});

test('Verify username field', async ({ page }) => {

    await expect(page.locator('#user-name')).toBeVisible();

});

test('Verify login button', async ({ page }) => {

    await expect(page.locator('#login-button')).toBeVisible();

});