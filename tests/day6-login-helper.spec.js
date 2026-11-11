import { test, expect } from '@playwright/test';
import { login } from './helpers/login.helper.js';

test.describe('Day 6 - Reusable Login Helper', () => {

    test('Login with valid credentials', async ({ page }) => {

        await login(page, 'standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/inventory.html/);

        await expect(
            page.getByText('Products', { exact: true })
        ).toBeVisible();
    });

    test('Login with invalid credentials', async ({ page }) => {

        await login(page, 'wrong_user', 'wrong_password');

        await expect(
            page.locator('[data-test="error"]')
        ).toBeVisible();
    });

    test('Login with locked out user', async ({ page }) => {

        await login(page, 'locked_out_user', 'secret_sauce');

        await expect(
            page.locator('[data-test="error"]')
        ).toContainText('locked out');
    });

});