
import { test, expect } from '@playwright/test';

test('Unreliable fixed wait example', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Fixed wait: not a reliable synchronization strategy
  await page.waitForTimeout(5000);

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory/);
});


// Replace the previous code with: 

import { test, expect } from '@playwright/test';

test('Stable login test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.locator('[data-test="username"]')
    .fill('standard_user');

  await page.locator('[data-test="password"]')
    .fill('secret_sauce');

  await page.locator('[data-test="login-button"]')
    .click();

  await expect(page).toHaveURL(/inventory/);

  await expect(
    page.locator('.inventory_list')
  ).toBeVisible();
});



// what changed?.
// Removed the unnecessary fixed wait.
// Used Playywright locator actions that automaticaaly wait for actionability.
// Used web-first assertions that automatically retry untill the expected condition is met or times out.

