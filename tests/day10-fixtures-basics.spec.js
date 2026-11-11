import { test, expect } from '@playwright/test';

test('Verify page using page fixture', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle('Swag Labs');

    await expect(
        page.locator('#user-name')
    ).toBeVisible();

    console.log('Page fixture test completed');
});

test('Verify browser name using browserName fixture', async ({ page, browserName }) => {

    console.log('Current browser:', browserName);

    await page.goto('https://www.saucedemo.com/');

    await expect(page.locator('#login-button')).toBeVisible();
});


