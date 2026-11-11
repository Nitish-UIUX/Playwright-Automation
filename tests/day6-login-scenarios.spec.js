import { test, expect } from '@playwright/test';

test.describe('Day 6 - Login Scenarios', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    // Test 1: Valid Login
    test('Login with valid credentials', async ({ page }) => {

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');

        await page.locator('[data-test="login-button"]').click();

        await expect(page).toHaveURL(/inventory.html/);
        await expect(page.getByText('Products', { exact: true })).toBeVisible();
    });

    // Test 2: Invalid Username
    test('Login with invalid username', async ({ page }) => {

        await page.locator('[data-test="username"]').fill('wrong_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');

        await page.locator('[data-test="login-button"]').click();

        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

    // Test 3: Invalid Password
    test('Login with invalid password', async ({ page }) => {

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('wrong_password');

        await page.locator('[data-test="login-button"]').click();

        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

    // Test 4: Locked Out User
    test('Login with locked out user', async ({ page }) => {

        await page.locator('[data-test="username"]').fill('locked_out_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');

        await page.locator('[data-test="login-button"]').click();

        await expect(page.locator('[data-test="error"]'))
            .toContainText('locked out');
    });

});