import { test, expect } from '@playwright/test';

test.describe('Day 6 - Authentication Mini Project', () => {

    test('Complete shopping workflow after authentication', async ({ page }) => {

        // Step 1: Open inventory page using saved session
        await page.goto('https://www.saucedemo.com/inventory.html');

        await expect(page).toHaveURL(/inventory.html/);

        // Step 2: Verify inventory
        await expect(
            page.getByText('Products', { exact: true })
        ).toBeVisible();

        // Step 3: Add product to cart
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        // Step 4: Verify cart badge
        await expect(
            page.locator('[data-test="shopping-cart-badge"]')
        ).toHaveText('1');

        // Step 5: Open shopping cart
        await page.locator('[data-test="shopping-cart-link"]').click();

        await expect(page).toHaveURL(/cart.html/);

        // Step 6: Verify product in cart
        await expect(
            page.getByText('Sauce Labs Backpack', { exact: true })
        ).toBeVisible();

        // Step 7: Continue checkout
        await page.locator('[data-test="checkout"]').click();

        // Step 8: Enter customer information
        await page.locator('[data-test="firstName"]').fill('John');

        await page.locator('[data-test="lastName"]').fill('Smith');

        await page.locator('[data-test="postalCode"]').fill('834001');

        await page.locator('[data-test="continue"]').click();

        // Step 9: Verify checkout overview
        await expect(page).toHaveURL(/checkout-step-two.html/);

        await expect(
            page.getByText('Sauce Labs Backpack', { exact: true })
        ).toBeVisible();

        // Step 10: Finish order
        await page.locator('[data-test="finish"]').click();

        // Step 11: Verify order confirmation
        await expect(page).toHaveURL(/checkout-complete.html/);

        await expect(
            page.getByText('Thank you for your order!', { exact: true })
        ).toBeVisible();

    });

});