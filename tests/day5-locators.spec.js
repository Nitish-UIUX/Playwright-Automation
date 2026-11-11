import { test, expect } from '@playwright/test';

test.describe('Day 5 - Advanced Locators', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

    });

    test('Test 1 - Locate username using CSS selector', async ({ page }) => {

        await expect(
            page.locator('#user-name')
        ).toBeVisible();

    });

    test('Test 2 - Locate password using CSS selector', async ({ page }) => {

        await expect(
            page.locator('[data-test="password"]')
        ).toBeVisible();

    });

    test('Test 3 - Locate login button using XPath', async ({ page }) => {

        await expect(
            page.locator('//input[@type="submit"]')
        ).toBeVisible();

    });

    test('Test 4 - Locate login button using CSS class', async ({ page }) => {

        await expect(
            page.locator('.submit-button')
        ).toBeVisible();

    });

});