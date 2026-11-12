// Handling Dynamic Elements, Loading States & Overlays
// Objective: Learn how to handle elements that appear after API calls, loading indicators, delayed content, and popup overlays without making tests flaky.
// 1. What are dynamic elements?
// Dynamic elements are page elements whose visibility, content, or state changes while the application is running.

// Examples:
// - Loading spinner appears while data is fetched.
// - Products load after an API response.
// - Success message appears after submitting a form.
// - Modal opens after clicking a button.
// - An element becomes enabled after validation.


// Handle loading indicators 
// Suppose an application displays a loading spinner while fetching data.

// You should wait for it to disappear before interacting with the loaded content.

import { test, expect } from '@playwright/test';

test('Wait for loading spinner to disappear', async ({ page }) => {
  await page.goto('https://example.com');

  const loader = page.locator('.loading-spinner');

  await expect(loader).toBeHidden();

  await expect(page.locator('.product-list')).toBeVisible();
});

// Handle dynamicalaly appearing elements 

test('Handle dynamically appearing message', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.locator('[data-test="login-button"]').click();

  const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).toBeVisible();

  await expect(errorMessage).toContainText(
    'Username is required'
  );
});


// Handle modal dialogs

test('Handle browser dialog', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', async dialog => {
    console.log('Dialog message:', dialog.message());

    await dialog.accept();
  });

  await page.getByRole('button', {
    name: 'Click for JS Alert',
  }).click();

  await expect(page.locator('#result'))
    .toHaveText('You successfully clicked an alert');
});



// --------------------Handle disabled and enabled elements ------------------------

// Some buttons become enabled only after a condition is satisfied

test('Check button enabled state', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  const loginButton = page.locator('[data-test="login-button"]');

  await expect(loginButton).toBeEnabled();

  await page.locator('[data-test="username"]')
    .fill('standard_user');

  await page.locator('[data-test="password"]')
    .fill('secret_sauce');

  await expect(loginButton).toBeEnabled();
});

// methods
// toBeVisible() - asserts that an element is visible
// toBeHidden() - asserts that an element is hidden
// toBeEnabled() - asserts that an element is enabled
// toBeDisabled() - asserts that an element is disabled
// toContainText() - asserts that an element contains specific text
// toHaveText() - asserts that an element has exact text content


test.describe('Dynamic Element Handling', () => {

  test('Verify login error appears dynamically', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.locator('[data-test="login-button"]').click();

    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Username is required');
  });

  test('Verify login button is enabled', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    const loginButton = page.locator('[data-test="login-button"]');

    await expect(loginButton).toBeEnabled();
  });

  test('Verify error disappears after successful login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.locator('[data-test="login-button"]').click();

    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();

    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(errorMessage).toBeHidden();
    await expect(page).toHaveURL(/inventory/);
  });

});



// Note : If we want to run only one test from multiple tests, we can use test.only instead of test.
test.describe.only('Dynamic Element Handling', () => {
  test('Verify login error appears dynamically', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.locator('[data-test="login-button"]').click();

    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Username is required');
  });
});