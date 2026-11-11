
const { test, expect } = require('@playwright/test');

test('Test 1 - Successful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]')
    .fill('standard_user');

  await page.locator('[data-test="password"]')
    .fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('.inventory_list')).toBeVisible();
});

test('Test 2 - Invalid login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]')
    .fill('wrong_user');

  await page.locator('[data-test="password"]')
    .fill('wrong_password');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test.skip('Test 3 - Skipped test example', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test('Test 4 - Intentional assertion failure', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle('Incorrect Application Title');
});
