
const { test, expect } = require('@playwright/test');

test('Trace Viewer debugging example', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]')
    .fill('standard_user');

  await page.locator('[data-test="password"]')
    .fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('.inventory_list')).toBeVisible();

  console.log('Login successful');

  // Add a product to the cart
  await page.locator(
    '[data-test="add-to-cart-sauce-labs-backpack"]'
  ).click();

  await expect(page.locator('.shopping_cart_badge'))
    .toHaveText('1');

  console.log('Product added to cart');
});




// Explore Trace Viewer
// When Trace Viewer opens, investigate these sections:
// Section	What to inspect
// Actions	Every browser action
// Before / After	DOM snapshots around actions
// Screenshots	Browser appearance
// Call	Source code and action details
// Network	Requests and responses
// Console	Browser console messages