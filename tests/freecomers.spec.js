
const { test, expect } = require('@playwright/test');

test('Freecomers website loads successfully', async ({ page }) => {
  const response = await page.goto('https://freecomers.com/', {
    waitUntil: 'domcontentloaded',
  });

  // Verify that the website responds successfully.
  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);

  // Verify that the page has a title and visible body.
  await expect(page).toHaveTitle(/.+/);
  await expect(page.locator('body')).toBeVisible();

  console.log('Page title:', await page.title());
  console.log('Website status:', response.status());
});
