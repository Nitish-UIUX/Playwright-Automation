
const { test, expect } = require('@playwright/test');

test.describe('Day 14 - Cross Browser Testing', () => {

  test('01 - Login page validation', async ({ page, browserName }) => {
    console.log('Browser:', browserName);

    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle(/Swag Labs/);

    await expect(
      page.locator('[data-test="username"]')
    ).toBeVisible();

    await expect(
      page.locator('[data-test="password"]')
    ).toBeVisible();

    await expect(
      page.locator('[data-test="login-button"]')
    ).toBeEnabled();
  });

  test('02 - Successful login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('.inventory_list'))
      .toBeVisible();
  });

  test('03 - Inventory validation', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('.inventory_item'))
      .toHaveCount(6);
  });

  test('04 - Add product to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    ).click();

    await expect(page.locator('.shopping_cart_badge'))
      .toHaveText('1');
  });

  test('05 - Responsive viewport validation', async ({ page }) => {
    const viewports = [
      { width: 1920, height: 1080 },
      { width: 1366, height: 768 },
      { width: 768, height: 1024 },
      { width: 390, height: 844 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);

      await page.goto('https://www.saucedemo.com/');

      await expect(
        page.locator('[data-test="username"]')
      ).toBeVisible();

      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth >
          document.documentElement.clientWidth;
      });

      expect(hasOverflow).toBe(false);

      console.log(
        `Viewport passed: ${viewport.width}x${viewport.height}`
      );
    }
  });

  test('06 - Browser information validation', async ({
    page,
    browserName,
  }) => {
    await page.goto('https://www.saucedemo.com/');

    expect(['chromium', 'firefox', 'webkit'])
      .toContain(browserName);

    console.log('Browser validation:', browserName);

    await expect(
      page.locator('[data-test="login-button"]')
    ).toBeVisible();
  });

});
