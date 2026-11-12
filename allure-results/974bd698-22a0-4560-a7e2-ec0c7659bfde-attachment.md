# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day6-mini-project.spec.js >> Day 6 - Authentication Mini Project >> Complete shopping workflow after authentication
- Location: tests\day6-mini-project.spec.js:5:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /inventory.html/
Received string:  "https://www.saucedemo.com/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- main:
  - form "Login":
    - textbox "Username"
    - textbox "Password"
    - alert:
      - button "Dismiss error"
      - text: "Epic sadface: You can only access '/inventory.html' when you are logged in."
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Day 6 - Authentication Mini Project', () => {
  4  | 
  5  |     test('Complete shopping workflow after authentication', async ({ page }) => {
  6  | 
  7  |         // Step 1: Open inventory page using saved session
  8  |         await page.goto('https://www.saucedemo.com/inventory.html');
  9  | 
> 10 |         await expect(page).toHaveURL(/inventory.html/);
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  11 | 
  12 |         // Step 2: Verify inventory
  13 |         await expect(
  14 |             page.getByText('Products', { exact: true })
  15 |         ).toBeVisible();
  16 | 
  17 |         // Step 3: Add product to cart
  18 |         await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  19 | 
  20 |         // Step 4: Verify cart badge
  21 |         await expect(
  22 |             page.locator('[data-test="shopping-cart-badge"]')
  23 |         ).toHaveText('1');
  24 | 
  25 |         // Step 5: Open shopping cart
  26 |         await page.locator('[data-test="shopping-cart-link"]').click();
  27 | 
  28 |         await expect(page).toHaveURL(/cart.html/);
  29 | 
  30 |         // Step 6: Verify product in cart
  31 |         await expect(
  32 |             page.getByText('Sauce Labs Backpack', { exact: true })
  33 |         ).toBeVisible();
  34 | 
  35 |         // Step 7: Continue checkout
  36 |         await page.locator('[data-test="checkout"]').click();
  37 | 
  38 |         // Step 8: Enter customer information
  39 |         await page.locator('[data-test="firstName"]').fill('John');
  40 | 
  41 |         await page.locator('[data-test="lastName"]').fill('Smith');
  42 | 
  43 |         await page.locator('[data-test="postalCode"]').fill('834001');
  44 | 
  45 |         await page.locator('[data-test="continue"]').click();
  46 | 
  47 |         // Step 9: Verify checkout overview
  48 |         await expect(page).toHaveURL(/checkout-step-two.html/);
  49 | 
  50 |         await expect(
  51 |             page.getByText('Sauce Labs Backpack', { exact: true })
  52 |         ).toBeVisible();
  53 | 
  54 |         // Step 10: Finish order
  55 |         await page.locator('[data-test="finish"]').click();
  56 | 
  57 |         // Step 11: Verify order confirmation
  58 |         await expect(page).toHaveURL(/checkout-complete.html/);
  59 | 
  60 |         await expect(
  61 |             page.getByText('Thank you for your order!', { exact: true })
  62 |         ).toBeVisible();
  63 | 
  64 |     });
  65 | 
  66 | });
```