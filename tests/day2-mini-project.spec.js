


const { test, expect } = require('@playwright/test');

test('verify SauceDemo login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle('Swag Labs');

  await expect(
    page.getByPlaceholder('Username')
  ).toBeVisible();

  await expect(
    page.getByPlaceholder('Password')
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Login' })
  ).toBeVisible();
});
