
const { test, expect } = require('@playwright/test');

const viewports = [
  { name: 'Desktop', width: 1920, height: 1080 },
  { name: 'Laptop', width: 1366, height: 768 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Mobile', width: 390, height: 844 },
];

for (const viewport of viewports) {
  test(`Responsive testing - ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });

    await page.goto('https://www.saucedemo.com/');

    console.log(`Testing: ${viewport.name}`);
    console.log(`Width: ${viewport.width}`);
    console.log(`Height: ${viewport.height}`);

    // Verify login form
    await expect(
      page.locator('[data-test="username"]')
    ).toBeVisible();

    await expect(
      page.locator('[data-test="password"]')
    ).toBeVisible();

    await expect(
      page.locator('[data-test="login-button"]')
    ).toBeVisible();

    // Check for horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth >
        document.documentElement.clientWidth;   
    });

    expect(hasHorizontalOverflow).toBe(false);

    console.log(`${viewport.name} responsive test passed`);
  });
}



// Important concepts
// - page.setViewportSize() changes the browser viewport.
// - document.documentElement.scrollWidth measures document content width.
// - document.documentElement.clientWidth measures the visible document width.
// - Comparing them helps identify horizontal overflow





