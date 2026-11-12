// Mini Project – Build a Stable Playwright Test Suite
// Final hour of Day 17
// Now we'll combine everything from today's lessons into one practical project.

// Objective: Build a reliable SauceDemo automation suite using auto-waiting, assertions, reusable setup, test isolation, retries, and failure diagnostics.


import { test, expect } from '@playwright/test';

test.describe('Day 17 - Stable Playwright Test Suite', () => {

  // Common setup for every test
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // Test 1: Verify login page
  test('Verify login page elements', async ({ page }) => {
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

  // Test 2: Verify required field validation
  test('Verify login validation message', async ({ page }) => {
    await page.locator('[data-test="login-button"]').click();

    await expect(
      page.locator('[data-test="error"]')
    ).toContainText('Username is required');
  });

  // Test 3: Verify invalid credentials
  test('Verify invalid login credentials', async ({ page }) => {
    await page.locator('[data-test="username"]')
      .fill('invalid_user');

    await page.locator('[data-test="password"]')
      .fill('invalid_password');

    await page.locator('[data-test="login-button"]').click();

    await expect(
      page.locator('[data-test="error"]')
    ).toBeVisible();

    await expect(
      page.locator('[data-test="error"]')
    ).toContainText('Username and password do not match');
  });

  // Test 4: Verify successful login
  test('Verify successful login', async ({ page }) => {
    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory/);

    await expect(
      page.locator('.inventory_list')
    ).toBeVisible();
  });

  // Test 5: Verify product inventory
  test('Verify inventory products', async ({ page }) => {
    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('.inventory_item'))
      .toHaveCount(6);
  });

  // Test 6: Verify add to cart
  test('Verify add product to cart', async ({ page }) => {
    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    await expect(
      page.locator('.shopping_cart_badge')
    ).toHaveText('1');
  });

  // Test 7: Verify logout
  test('Verify logout functionality', async ({ page }) => {
    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await page.locator('#react-burger-menu-btn').click();

    await page.locator('[data-test="logout-sidebar-link"]')
      .click();

    await expect(page).toHaveURL('/');
    await expect(
      page.locator('[data-test="login-button"]')
    ).toBeVisible();
  });

});


// what we converd 
// Login page elements ----> 	Visibility and enabled assertions
// Login validation	-------> Dynamic error handling
// Invalid credentials	-----> Negative testing
// Successful login	-------> Navigation synchronization
// Inventory products	-------> Dynamic content validation
// Add to cart	-------> UI interaction and state validation
// Logout	-------> Test isolation and navigation