
const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Capture screenshots during test execution', async ({ page }) => {
  // Create screenshots directory if it doesn't exist
  fs.mkdirSync('screenshots', { recursive: true });

  // Open application
  await page.goto('https://www.saucedemo.com/');

  // Capture login page
  await page.screenshot({
    path: 'screenshots/login-page.png',
    fullPage: true,
  });

  // Login
  await page.locator('[data-test="username"]')
    .fill('standard_user');

  await page.locator('[data-test="password"]')
    .fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('.inventory_list')).toBeVisible();

  // Capture inventory page
  await page.screenshot({
    path: 'screenshots/inventory-page.png',
    fullPage: true,
  });

  // Capture inventory element
  await page.locator('.inventory_list').screenshot({
    path: 'screenshots/inventory-section.png',
  });

  console.log('Screenshots captured successfully');
});
