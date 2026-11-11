import { test as base, expect } from '@playwright/test';

export const test = base.extend({

    authenticatedPage: async ({ page }, use) => {

        // Open login page
        await page.goto('https://www.saucedemo.com/');

        await page.locator('[data-test="username"]')
            .fill('standard_user'); // Login
       

        await page.locator('[data-test="password"]')
            .fill('secret_sauce');

        await page.locator('[data-test="login-button"]').click();

        // Verify successful login
        await expect(page).toHaveURL(/inventory.html/);

        // Provide authenticated page to the test
        await use(page);
    }

});

export { expect };