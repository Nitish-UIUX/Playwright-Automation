
const { test, expect } = require('@playwright/test');

test.describe('Day 13 - Debugging Mini Project', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // TEST 1: Successful login
  test('Successful login', async ({ page }) => {
    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('.inventory_list'))
      .toBeVisible();

    console.log('Successful login verified');
  });

  // TEST 2: Invalid login
  test('Invalid login', async ({ page }) => {
    await page.locator('[data-test="username"]')
      .fill('invalid_user');

    await page.locator('[data-test="password"]')
      .fill('wrong_password');

    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]'))
      .toBeVisible();

    console.log('Invalid login verified');
  });

  // TEST 3: Add product to cart
  test('Add product to cart', async ({ page }) => {
    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('.inventory_list'))
      .toBeVisible();

    await page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    ).click();

    await expect(page.locator('.shopping_cart_badge'))
      .toHaveText('1');

    console.log('Product added to cart successfully');
  });

  // TEST 4: Intentional failure for debugging practice
  test('Debug incorrect locator', async ({ page }) => {
    const wrongLocator = page.locator('#wrong-username');

    await expect(wrongLocator).toBeVisible();
  });

});
