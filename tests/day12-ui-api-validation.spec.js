// Practice using DummyJSON
// We'll use the DummyJSON products and carts API for a demonstration.

// First, understand these endpoints:
// Endpoint	Purpose
// GET /products/1	Retrieve a product
// GET /carts/1	Retrieve a cart
// GET /carts/user/1	Retrieve carts belonging to a user




const { test, expect } = require('@playwright/test');

test('Validate UI action using API response', async ({
  request,
  page,
}) => {

  // Step 1: Get product details using API
  const productResponse = await request.get(
    'https://dummyjson.com/products/1'
  );

  expect(productResponse.status()).toBe(200);

  const product = await productResponse.json();

  console.log('Product:', product.title);

  // Step 2: Open product page
  await page.goto('https://dummyjson.com/products/1');

  // Step 3: Verify product title in UI
  await expect(page.locator('body'))
    .toContainText(product.title);

  console.log('Product displayed successfully');

  // Step 4: Retrieve cart data using API
  const cartResponse = await request.get(
    'https://dummyjson.com/carts/1'
  );

  expect(cartResponse.status()).toBe(200);

  const cart = await cartResponse.json();

  // Step 5: Validate cart data
  expect(cart.products.length).toBeGreaterThan(0);

  const firstProduct = cart.products[0];

  expect(firstProduct.id).toBeTruthy();
  expect(firstProduct.quantity).toBeGreaterThan(0);

  console.log('Cart API validation successful');
});



// Important learning point
// This exercise verifies that:
// - Product details are available through an API.
// - The browser displays the expected product title.
// - Cart data can be retrieved and validated through an API.