import { test, expect } from '@playwright/test';

test('Verify authenticated session', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page).toHaveURL(/inventory.html/);

    await expect(
        page.getByText('Products', { exact: true })
    ).toBeVisible();

});