// What is test Isolation ? 
// ans :- 
// Test 1: Login to the application.
// Test 2: Add a product to the cart.
// Test 3: Complete checkout.


// Good approach --- independetnt tests 
// def:- Test isolation ensures that each test runs independently without being affected by the state left by other tests.
// Example:
// Test 1: Login to the application should not depend on Test 2 or Test 3.
// Test 2: Add a product to the cart should not depend on Test 1 or Test 3.
// Test 3: Complete checkout should not depend on Test 1 or Test 2.



// Plawright Fixtures :- 
// Playwright creates a fresh browser context and page for each test by default when using the built-in page fixture.


import { test, expect } from '@playwright/test';

// test('Test 1 - Login page', async ({ page }) => {
//     await page.goto('/');
//     await expect(page.locator('[data-test="login-button"]'))
//         .toBeVisible();
// });

// test('Test 2 - Login page title', async ({ page }) => {
//     await page.goto('/');
//     await expect(page).toHaveTitle(/Swag Labs/);
// });




// Avoid shared mutable variables  

// let sharedUser;

// test('Create user', async () => {
//   sharedUser = {
//     username: 'standard_user',
//   };
// });

// test('Use created user', async () => {
//   console.log(sharedUser.username);
// });



// Better approach : 
// import { test, expect } from '@playwright/test';

// test('Login using independent test data', async ({ page }) => {
//   const user = {
//     username: 'standard_user',
//     password: 'secret_sauce',
//   };

//   await page.goto('/');

//   await page.locator('[data-test="username"]').fill(user.username);
//   await page.locator('[data-test="password"]').fill(user.password);
//   await page.locator('[data-test="login-button"]').click();

//   await expect(page).toHaveURL(/inventory/);
// });


// Use beforeEach() for reusable setup 


// test.describe('Independent login tests', () => {

//   test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//   });

//   test('Verify login button', async ({ page }) => {
//     await expect(
//       page.locator('[data-test="login-button"]')
//     ).toBeVisible();
//   });

//   test('Verify username field', async ({ page }) => {
//     await expect(
//       page.locator('[data-test="username"]')
//     ).toBeVisible();
//   });

// });

// afterEach() for reusable cleanup
test.afterEach(async ({ page }) => {
  console.log('Test completed:', page.url());
});





test.describe('Playwright Test Isolation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Test 1 - Verify username field', async ({ page }) => {
    await expect(
      page.locator('[data-test="username"]')
    ).toBeVisible();
  });

  test('Test 2 - Verify password field', async ({ page }) => {
    await expect(
      page.locator('[data-test="password"]')
    ).toBeVisible();
  });

  test('Test 3 - Verify login button', async ({ page }) => {
    await expect(
      page.locator('[data-test="login-button"]')
    ).toBeVisible();
  });

  test('Test 4 - Successful login independently', async ({ page }) => {
    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory/);
  });

});
