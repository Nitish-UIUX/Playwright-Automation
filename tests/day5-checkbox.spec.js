import { test, expect } from '@playwright/test';

test.describe('Day 5 - Checkbox Automation', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/checkboxes');

    });

    test('Test 1 - Verify checkbox count', async ({ page }) => {

        const checkboxes = page.locator(
            'input[type="checkbox"]'
        );

        await expect(checkboxes).toHaveCount(2);

    });

    test('Test 2 - Check first checkbox', async ({ page }) => {

        const checkbox = page.locator(
            'input[type="checkbox"]'
        ).nth(0);

        await checkbox.check();

        await expect(checkbox).toBeChecked();

    });

    test('Test 3 - Uncheck second checkbox', async ({ page }) => {

        const checkbox = page.locator(
            'input[type="checkbox"]'
        ).nth(1);

        await checkbox.uncheck();

        await expect(checkbox).not.toBeChecked();

    });

    test('Test 4 - Verify checkbox state', async ({ page }) => {

        const checkbox = page.locator(
            'input[type="checkbox"]'
        ).nth(0);

        // Check the checkbox first
        await checkbox.check();

        // Get current checkbox status
        const status = await checkbox.isChecked();

        console.log('First checkbox status:', status);

        // Verify checkbox is checked
        await expect(checkbox).toBeChecked();

    });

});