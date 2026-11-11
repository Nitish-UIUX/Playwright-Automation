import { test, expect } from '@playwright/test';

test.describe('Day 5 - Radio Button Automation', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://practice.expandtesting.com/radio-buttons',
            {
                waitUntil: 'domcontentloaded',
                timeout: 60000
            }
        );

    });

    test('Test 1 - Verify radio buttons are visible', async ({ page }) => {

        await expect(
            page.locator('input[type="radio"]').first()
        ).toBeVisible();

    });

    test('Test 2 - Select Yellow color', async ({ page }) => {

        const yellow = page.locator('#yellow');

        await yellow.check({ timeout: 60000 });

        await expect(yellow).toBeChecked();

    });

    test('Test 3 - Select Football', async ({ page }) => {

        const football = page.locator('#football');

        await football.check();

        await expect(football).toBeChecked();

    });

    test('Test 4 - Verify only one color is selected', async ({ page }) => {

        const yellow = page.locator('#yellow');
        const black = page.locator('#black');

        await yellow.check({ timeout: 15000 });

        await expect(yellow).toBeChecked();

        await expect(black).not.toBeChecked();

    });

});