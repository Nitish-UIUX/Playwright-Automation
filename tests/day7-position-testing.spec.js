import { test, expect } from '@playwright/test';

test.describe('UI Position Testing', () => {

    test('Verify login button position', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        const loginButton = page.locator('[data-test="login-button"]');

        // Get element position and dimensions
        const position = await loginButton.boundingBox();

        console.log('Login Button Position:', position);

        // Verify element is visible
        await expect(loginButton).toBeVisible();

        // Verify position exists
        expect(position).not.toBeNull();

        // Verify coordinates
        expect(position.x).toBeGreaterThan(0);
        expect(position.y).toBeGreaterThan(0);

        // Verify dimensions
        expect(position.width).toBeGreaterThan(0);
        expect(position.height).toBeGreaterThan(0);

    });

});