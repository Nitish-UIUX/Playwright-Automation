# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day13-debugging-mini-project.spec.js >> Day 13 - Debugging Mini Project >> Debug incorrect locator
- Location: tests\day13-debugging-mini-project.spec.js:66:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#wrong-username')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('#wrong-username') with timeout 5000ms
  - waiting for locator('#wrong-username')

```

```yaml
- text: Swag Labs
- main:
  - form "Login":
    - textbox "Username"
    - textbox "Password"
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | test.describe('Day 13 - Debugging Mini Project', () => {
  5  | 
  6  |   test.beforeEach(async ({ page }) => {
  7  |     await page.goto('/');
  8  |   });
  9  | 
  10 |   // TEST 1: Successful login
  11 |   test('Successful login', async ({ page }) => {
  12 |     await page.locator('[data-test="username"]')
  13 |       .fill('standard_user');
  14 | 
  15 |     await page.locator('[data-test="password"]')
  16 |       .fill('secret_sauce');
  17 | 
  18 |     await page.locator('[data-test="login-button"]').click();
  19 | 
  20 |     await expect(page.locator('.inventory_list'))
  21 |       .toBeVisible();
  22 | 
  23 |     console.log('Successful login verified');
  24 |   });
  25 | 
  26 |   // TEST 2: Invalid login
  27 |   test('Invalid login', async ({ page }) => {
  28 |     await page.locator('[data-test="username"]')
  29 |       .fill('invalid_user');
  30 | 
  31 |     await page.locator('[data-test="password"]')
  32 |       .fill('wrong_password');
  33 | 
  34 |     await page.locator('[data-test="login-button"]').click();
  35 | 
  36 |     await expect(page.locator('[data-test="error"]'))
  37 |       .toBeVisible();
  38 | 
  39 |     console.log('Invalid login verified');
  40 |   });
  41 | 
  42 |   // TEST 3: Add product to cart
  43 |   test('Add product to cart', async ({ page }) => {
  44 |     await page.locator('[data-test="username"]')
  45 |       .fill('standard_user');
  46 | 
  47 |     await page.locator('[data-test="password"]')
  48 |       .fill('secret_sauce');
  49 | 
  50 |     await page.locator('[data-test="login-button"]').click();
  51 | 
  52 |     await expect(page.locator('.inventory_list'))
  53 |       .toBeVisible();
  54 | 
  55 |     await page.locator(
  56 |       '[data-test="add-to-cart-sauce-labs-backpack"]'
  57 |     ).click();
  58 | 
  59 |     await expect(page.locator('.shopping_cart_badge'))
  60 |       .toHaveText('1');
  61 | 
  62 |     console.log('Product added to cart successfully');
  63 |   });
  64 | 
  65 |   // TEST 4: Intentional failure for debugging practice
  66 |   test('Debug incorrect locator', async ({ page }) => {
  67 |     const wrongLocator = page.locator('#wrong-username');
  68 | 
> 69 |     await expect(wrongLocator).toBeVisible();
     |                                ^ Error: expect(locator).toBeVisible() failed
  70 |   });
  71 | 
  72 | });
  73 | 
```