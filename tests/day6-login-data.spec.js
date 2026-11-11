import { test, expect } from '@playwright/test';
import { loginTestData } from './data/login-data.js';

test.describe('Day 6 - Data Driven Login Testing', () => {

    for (const user of loginTestData) {

        test(user.testName, async ({ page }) => {

            await page.goto('https://www.saucedemo.com/');

            await page.locator('[data-test="username"]')
                .fill(user.username);

            await page.locator('[data-test="password"]')
                .fill(user.password);

            await page.locator('[data-test="login-button"]').click();

            if (user.expectedResult === 'success') {

                await expect(page).toHaveURL(/inventory.html/);

                await expect(
                    page.getByText('Products', { exact: true })
                ).toBeVisible();

            } else {

                await expect(
                    page.locator('[data-test="error"]')
                ).toBeVisible();

                if (user.expectedResult === 'locked') {
                    await expect(
                        page.locator('[data-test="error"]')
                    ).toContainText('locked out');
                }
            }
        });
    }
});