
const { test, expect } = require('@playwright/test');

test('Debugging basic Playwright test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  console.log('Current URL:', page.url());

  // Check username field
  const username = page.locator('[data-test="username"]');

  await expect(username).toBeVisible();

  console.log('Username field is visible');

  // Check password field
  const password = page.locator('[data-test="password"]');

  await expect(password).toBeVisible();

  console.log('Password field is visible');

  // Login
  await username.fill('standard_user');
  await password.fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  // Validate successful login
  await expect(page.locator('.inventory_list')).toBeVisible();

  console.log('Login successful');
});
