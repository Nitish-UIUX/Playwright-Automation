
const { test, expect } = require('@playwright/test');

test('Device emulation testing', async ({ page, browserName }) => {
  await page.goto('https://www.saucedemo.com/');

  const viewport = page.viewportSize();

  console.log('Browser:', browserName);
  console.log('Viewport width:', viewport.width);
  console.log('Viewport height:', viewport.height);

  // Verify username field
  await expect(
    page.locator('[data-test="username"]')
  ).toBeVisible();

  // Verify password field
  await expect(
    page.locator('[data-test="password"]')
  ).toBeVisible();

  // Verify login button
  await expect(
    page.locator('[data-test="login-button"]')
  ).toBeVisible();

  console.log('Device emulation test completed');
});

test('Test mobile viewport', async ({ page }) => {
  await page.setViewportSize({
    width: 390,
    height: 844,
  });

  await page.goto('https://www.saucedemo.com/');

  await expect(
    page.locator('[data-test="username"]')
  ).toBeVisible();
});
