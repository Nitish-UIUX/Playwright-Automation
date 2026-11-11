// Playwright Inspector and page.pause()
// In Hour 1, we introduced debugging fundamentals. Now we'll learn how to pause test execution and inspect the browser interactively.
// 1. What is Playwright Inspector?
// Playwright Inspector is a debugging tool that allows you to:
// - Pause test execution.
// - Inspect page elements.
// - Identify and test locators.
// - Execute actions step by step.
// - Resume or stop test execution.



const { test, expect } = require('@playwright/test');

test('Debug using Playwright Inspector', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  console.log('Browser opened');

  // Pause execution and open Playwright Inspector
  await page.pause();

  const username = page.locator('[data-test="username"]');
  const password = page.locator('[data-test="password"]');

  await username.fill('standard_user');
  await password.fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('.inventory_list')).toBeVisible();

  console.log('Login successful');
});

// Important: page.pause() vs --debug

// page.pause()	Pauses execution at a specific line
// --debug	Starts Playwright in interactive debugging mode
// Locator picker	Helps identify page elements
// Resume	Continues test execution
