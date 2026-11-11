import { test, expect } from '@playwright/test';

test.describe('Day 5 - Dropdown Automation', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/dropdown');

    });

    test('Test 1 - Verify dropdown visibility', async ({ page }) => {

        await expect(
            page.locator('#dropdown')
        ).toBeVisible();

    });

    test('Test 2 - Select Option 1', async ({ page }) => {

        await page.locator('#dropdown').selectOption('1');

        await expect(
            page.locator('#dropdown')
        ).toHaveValue('1');

    });

    test('Test 3 - Select Option 2', async ({ page }) => {

        await page.locator('#dropdown').selectOption('2');

        await expect(
            page.locator('#dropdown')
        ).toHaveValue('2');

    });

    test('Test 4 - Select Option by label', async ({ page }) => {

        await page.locator('#dropdown').selectOption({
            label: 'Option 1'
        });

        await expect(
            page.locator('#dropdown')
        ).toHaveValue('1');

    });

});