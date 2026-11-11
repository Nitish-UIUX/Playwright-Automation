
const { test, expect } = require('@playwright/test');

test('Login should work across browsers', async ({ page, browserName }) => {
  console.log('Running browser:', browserName);

  await page.goto('https://www.saucedemo.com/');

  // Verify login page
  await expect(
    page.locator('[data-test="username"]')
  ).toBeVisible();

  // Enter credentials
  await page.locator('[data-test="username"]')
    .fill('standard_user');

  await page.locator('[data-test="password"]')
    .fill('secret_sauce');

  // Login
  await page.locator('[data-test="login-button"]').click();

  // Verify inventory page
  await expect(page.locator('.inventory_list'))
    .toBeVisible();

  console.log(`${browserName} login test passed`);
});
