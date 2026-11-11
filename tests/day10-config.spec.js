
import { test, expect } from '@playwright/test';

test('Verify baseURL configuration', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Swag Labs');

  console.log('Current URL:', page.url());
});

test('Verify configured browser', async ({ page, browserName }) => {
  await page.goto('/');

  console.log('Browser:', browserName);

  await expect(
    page.locator('#login-button')
  ).toBeVisible();
});
