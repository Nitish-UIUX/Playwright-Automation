// Mini Project – Complete API + UI End-to-End Workflow
// Final hour of Day 12
// Now we'll combine everything we've learned in Day 12 into one practical project.

// Project: E-commerce product workflow using API and UI testing.
// 1. What will we automate?
// Our test will perform these steps:
// 1. Fetch product information using an API.
// 2. Validate the API response.
// 3. Open the product page in the browser.
// 4. Verify that the product title and price are displayed.
// 5. Fetch cart information through an API.
// 6. Validate cart details.




const { test, expect } = require('@playwright/test');

test('Complete API and UI e-commerce workflow', async ({
  request,
  page,
}) => {
  // STEP 1: Get product details through API
  const productResponse = await request.get(
    'https://dummyjson.com/products/1'
  );

  expect(productResponse.status()).toBe(200);

  const product = await productResponse.json();

  expect(product.id).toBe(1);
  expect(product.title).toBeTruthy();
  expect(product.price).toBeGreaterThan(0);

  console.log('API Product:', product.title);
  console.log('API Price:', product.price);

  // STEP 2: Open product page in browser
  await page.goto('https://www.saucedemo.com/');

  // Verify login page is displayed
  await expect(page.locator('[data-test="username"]'))
    .toBeVisible();

  // STEP 3: Login to SauceDemo
  await page.locator('[data-test="username"]')
    .fill('standard_user');

  await page.locator('[data-test="password"]')
    .fill('secret_sauce');

  await page.locator('[data-test="login-button"]')
    .click();

  // STEP 4: Verify inventory page
  await expect(page.locator('.inventory_list'))
    .toBeVisible();

  const inventoryResponse = await request.get(
    'https://dummyjson.com/products'
  );

  expect(inventoryResponse.status()).toBe(200);

  const inventoryData = await inventoryResponse.json();

  expect(inventoryData.products.length)
    .toBeGreaterThan(0);

  console.log(
    'API inventory products:',
    inventoryData.products.length
  );

  // STEP 5: Add Sauce Labs Backpack to cart
  await page.locator(
    '[data-test="add-to-cart-sauce-labs-backpack"]'
  ).click();

  // STEP 6: Verify cart badge
  await expect(page.locator('.shopping_cart_badge'))
    .toHaveText('1');

  // STEP 7: Open cart
  await page.locator('.shopping_cart_link').click();

  await expect(page.locator('.cart_item'))
    .toHaveCount(1);

  await expect(page.locator('.inventory_item_name'))
    .toHaveText('Sauce Labs Backpack');

  console.log('UI cart validation successful');

  // STEP 8: Validate the cart API separately
  const cartResponse = await request.get(
    'https://dummyjson.com/carts/1'
  );

  expect(cartResponse.status()).toBe(200);

  const cart = await cartResponse.json();

  expect(cart.products.length).toBeGreaterThan(0);

  console.log('API cart validation successful');
});
