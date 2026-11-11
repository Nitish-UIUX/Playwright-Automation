
const { test, expect } = require('@playwright/test');

// Test to verify the Playwright website title
test('verify the Playwright website title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});

// Test to verify the "Get started" link is visible
test('verify the documentation link is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toBeVisible();
});


// Test to click "Get started" and verify the Installation page is visible
test('click Get started and verify Installation page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});

// Search for a specific element on the page and verify it is visible

test('search Playwright documentation', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Open the documentation search.
  await page.getByRole('button', { name: 'Search' }).click();

  // Find the search input and enter a query.
  const searchInput = page.getByRole('searchbox');
  await searchInput.fill('locators');

  // Verify that the search query was entered.
  await expect(searchInput).toHaveValue('locators');
});


// verify the search results are visible

test('verify search results for locators', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('button', { name: 'Search' }).click();

  const searchInput = page.getByRole('searchbox');
  await searchInput.fill('locators');

  // Verify that the matching search result is visible.
  await expect(
    page.getByRole('link', { name: 'Locators', exact: true })
  ).toBeVisible();
});



// create the intentional failure test
test('practice debugging a failed assertion', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Intentionally incorrect expectation for practice.
  await expect(page).toHaveTitle(/Playwright/);
});

// test for the other website title
test('verify the Freecomers website title', async ({ page }) => {
  await page.goto('https://freecomers.com/');

  await expect(page).toHaveTitle(/Freecomers/);
});