import { test, expect } from '@playwright/test';

test.describe('SauceDemo Hooks Practice', () => {

    // Runs before every test
    test.beforeEach(async ({ page }) => {

        console.log('Before Each: Login started');

        await page.goto('https://www.saucedemo.com/');

        await page.getByPlaceholder('Username')
            .fill('standard_user');

        await page.getByPlaceholder('Password')
            .fill('secret_sauce');

        await page.getByRole('button', { name: 'Login' })
            .click();

        await expect(page).toHaveURL(/inventory.html/);

    });

    // Runs after every test
    test.afterEach(async () => {

        console.log('After Each: Test completed');

    });

    test('Test 1 - Verify products page', async ({ page }) => {

        await expect(
            page.getByText('Products', { exact: true })
        ).toBeVisible();

    });

    test('Test 2 - Verify product count', async ({ page }) => {

        await expect(
            page.locator('.inventory_item')
        ).toHaveCount(6);

    });

    test('Test 3 - Verify shopping cart', async ({ page }) => {

        await expect(
            page.locator('.shopping_cart_link')
        ).toBeVisible();

    });

});

