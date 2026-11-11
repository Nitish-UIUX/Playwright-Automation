
const { test, expect } = require('@playwright/test');

test('Browser compatibility debugging', async ({
  page,
  browserName,
}) => {
  console.log('Current browser:', browserName);

  await page.goto('https://www.saucedemo.com/');

  // Check page title
  await expect(page).toHaveTitle(/Swag Labs/);

  // Check login elements
  await expect(
    page.locator('[data-test="username"]')
  ).toBeVisible();

  await expect(
    page.locator('[data-test="password"]')
  ).toBeVisible();

  await expect(
    page.locator('[data-test="login-button"]')
  ).toBeEnabled();

  console.log(`${browserName}: Login page validation passed`);
});



// Common problems and solutions
// Problem	What to investigate
// Element not found	Locator and DOM snapshot
// Timeout	Page loading and element state
// Click intercepted	Overlapping elements and visibility
// Different layout	Viewport and CSS behavior
// Browser launch failure	Browser installation and dependencies
// Network failure	Request and response details