// ----------------------Auto-waiting and Synchronization---------------------------
// Objective: Learn how Playwright waits for elements automatically and how to synchronize tests with page actions, navigation, and API responses.
// 1. What is auto-waiting?
// Playwright automatically waits for elements to become ready before performing actions.

// await page.locator('#login-button').click();

// Before clicking, Playwright checks whether the element is:
// - Visible
// - Stable
// - Enabled
// - Able to receive events
// This reduces timing-related failures.

// ------------------------------Understand different waiting methods------------------------
// locator.waitFor()	-----> Wait for an element state
// expect().toBeVisible()	-----> Wait until an element is visible
// page.waitForURL()	-----> Wait for URL navigation
// page.waitForResponse()	-----> Wait for an API response
// page.waitForLoadState()	-----> Wait for a page load state


// locator.waitFor() example is shown below in the test.
import { test, expect } from '@playwright/test';

test('Wait for login form elements', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  const username = page.locator('[data-test="username"]');
  const password = page.locator('[data-test="password"]');
  const loginButton = page.locator('[data-test="login-button"]');

  await username.waitFor({ state: 'visible' });
  await password.waitFor({ state: 'visible' });
  await loginButton.waitFor({ state: 'visible' });

  await username.fill('standard_user');
  await password.fill('secret_sauce');
  await loginButton.click();

  await expect(page).toHaveURL(/inventory/);
});


// waiting for navigation
test('Wait for URL after login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');

  await Promise.all([
    page.waitForURL('**/inventory.html'),
    page.locator('[data-test="login-button"]').click(),
  ]);

  await expect(page.locator('.inventory_list')).toBeVisible();
});

// waiting for API response
test('Wait for API response', async ({ page }) => {
  await page.goto('https://jsonplaceholder.typicode.com');

  const responsePromise = page.waitForResponse(
    response =>
      response.url().includes('/posts/1') &&
      response.status() === 200
  );

  const response = await page.request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  const apiResponse = await responsePromise;

  expect(apiResponse.status()).toBe(200);

  const data = await response.json();

  expect(data.id).toBe(1);
});




