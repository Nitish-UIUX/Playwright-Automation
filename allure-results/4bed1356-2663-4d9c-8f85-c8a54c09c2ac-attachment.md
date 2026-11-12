# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day12-mini-project.spec.js >> Complete API and UI e-commerce workflow
- Location: tests\day12-mini-project.spec.js:20:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1   | // Mini Project – Complete API + UI End-to-End Workflow
  2   | // Final hour of Day 12
  3   | // Now we'll combine everything we've learned in Day 12 into one practical project.
  4   | 
  5   | // Project: E-commerce product workflow using API and UI testing.
  6   | // 1. What will we automate?
  7   | // Our test will perform these steps:
  8   | // 1. Fetch product information using an API.
  9   | // 2. Validate the API response.
  10  | // 3. Open the product page in the browser.
  11  | // 4. Verify that the product title and price are displayed.
  12  | // 5. Fetch cart information through an API.
  13  | // 6. Validate cart details.
  14  | 
  15  | 
  16  | 
  17  | 
  18  | const { test, expect } = require('@playwright/test');
  19  | 
  20  | test('Complete API and UI e-commerce workflow', async ({
  21  |   request,
  22  |   page,
  23  | }) => {
  24  |   // STEP 1: Get product details through API
  25  |   const productResponse = await request.get(
  26  |     'https://dummyjson.com/products/1'
  27  |   );
  28  | 
  29  |   expect(productResponse.status()).toBe(200);
  30  | 
  31  |   const product = await productResponse.json();
  32  | 
  33  |   expect(product.id).toBe(1);
  34  |   expect(product.title).toBeTruthy();
  35  |   expect(product.price).toBeGreaterThan(0);
  36  | 
  37  |   console.log('API Product:', product.title);
  38  |   console.log('API Price:', product.price);
  39  | 
  40  |   // STEP 2: Open product page in browser
> 41  |   await page.goto('https://www.saucedemo.com/');
      |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  42  | 
  43  |   // Verify login page is displayed
  44  |   await expect(page.locator('[data-test="username"]'))
  45  |     .toBeVisible();
  46  | 
  47  |   // STEP 3: Login to SauceDemo
  48  |   await page.locator('[data-test="username"]')
  49  |     .fill('standard_user');
  50  | 
  51  |   await page.locator('[data-test="password"]')
  52  |     .fill('secret_sauce');
  53  | 
  54  |   await page.locator('[data-test="login-button"]')
  55  |     .click();
  56  | 
  57  |   // STEP 4: Verify inventory page
  58  |   await expect(page.locator('.inventory_list'))
  59  |     .toBeVisible();
  60  | 
  61  |   const inventoryResponse = await request.get(
  62  |     'https://dummyjson.com/products'
  63  |   );
  64  | 
  65  |   expect(inventoryResponse.status()).toBe(200);
  66  | 
  67  |   const inventoryData = await inventoryResponse.json();
  68  | 
  69  |   expect(inventoryData.products.length)
  70  |     .toBeGreaterThan(0);
  71  | 
  72  |   console.log(
  73  |     'API inventory products:',
  74  |     inventoryData.products.length
  75  |   );
  76  | 
  77  |   // STEP 5: Add Sauce Labs Backpack to cart
  78  |   await page.locator(
  79  |     '[data-test="add-to-cart-sauce-labs-backpack"]'
  80  |   ).click();
  81  | 
  82  |   // STEP 6: Verify cart badge
  83  |   await expect(page.locator('.shopping_cart_badge'))
  84  |     .toHaveText('1');
  85  | 
  86  |   // STEP 7: Open cart
  87  |   await page.locator('.shopping_cart_link').click();
  88  | 
  89  |   await expect(page.locator('.cart_item'))
  90  |     .toHaveCount(1);
  91  | 
  92  |   await expect(page.locator('.inventory_item_name'))
  93  |     .toHaveText('Sauce Labs Backpack');
  94  | 
  95  |   console.log('UI cart validation successful');
  96  | 
  97  |   // STEP 8: Validate the cart API separately
  98  |   const cartResponse = await request.get(
  99  |     'https://dummyjson.com/carts/1'
  100 |   );
  101 | 
  102 |   expect(cartResponse.status()).toBe(200);
  103 | 
  104 |   const cart = await cartResponse.json();
  105 | 
  106 |   expect(cart.products.length).toBeGreaterThan(0);
  107 | 
  108 |   console.log('API cart validation successful');
  109 | });
  110 | 
```