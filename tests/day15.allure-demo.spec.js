
const { test, expect } = require('@playwright/test');

test.describe('Allure Report Demo', () => {

  test('Verify SauceDemo login page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle(/Swag Labs/);

    await expect(
      page.locator('[data-test="username"]')
    ).toBeVisible();
  });

  test('Verify successful login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(
      page.locator('.inventory_list')
    ).toBeVisible();
  });

});



