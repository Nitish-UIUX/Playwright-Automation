import { test, expect } from '@playwright/test';
import { login } from './helpers/auth.helper.js';

test.describe('SauceDemo - Product Tests', () => {

    // Common setup before every test
    test.beforeEach(async ({ page }) => {

        await login(page);

        await expect(page).toHaveURL(/inventory.html/);

    });

    // Common execution after every test
    test.afterEach(async ({ browserName }) => {

        console.log(`Test completed on: ${browserName}`);

    });

    test('should display products page', async ({ page }) => {

        await expect(
            page.getByText('Products', { exact: true })
        ).toBeVisible();

    });

    test('should display six products', async ({ page }) => {

        await expect(
            page.locator('.inventory_item')
        ).toHaveCount(6);

    });

    test('should display shopping cart', async ({ page }) => {

        await expect(
            page.locator('.shopping_cart_link')
        ).toBeVisible();

    });

    test('should display product names', async ({ page }) => {

        await expect(
            page.getByText('Sauce Labs Backpack')
        ).toBeVisible();

        await expect(
            page.getByText('Sauce Labs Bike Light')
        ).toBeVisible();

    });

    test('should add product to shopping cart', async ({ page }) => {

        await page.getByRole('button', {
            name: 'Add to cart'
        }).first().click();

        await expect(
            page.locator('.shopping_cart_badge')
        ).toHaveText('1');

    });

});