import { test, expect } from '@playwright/test';

test.describe('Playwright Built-in Fixtures', () => {

    test('Test 1 - Explore page fixture', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        console.log('Page URL:', page.url());

        await expect(page).toHaveTitle('Swag Labs');

    });

    test('Test 2 - Explore browser fixture', async ({ browser }) => {

        console.log(
            'Browser Name:',
            browser.browserType().name()
        );

    });

    test('Test 3 - Explore context fixture', async ({ context, page }) => {

        await page.goto('https://www.saucedemo.com/');

        console.log(
            'Number of pages:',
            context.pages().length
        );

        await expect(page).toHaveTitle('Swag Labs');

    });

    test('Test 4 - Explore browserName fixture', async ({ browserName }) => {

        console.log('Current Browser:', browserName);

    });

});