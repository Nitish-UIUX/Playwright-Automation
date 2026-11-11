
import { test, expect } from '../fixtures/pom-fixtures.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

import { checkoutTestData } from '../data/login-data.js';

test.describe('Day 10 - Reusable Fixture Mini Project', () => {

  test.beforeEach(async () => {
    console.log('Test starting...');
  });

  test.afterEach(async () => {
    console.log('Test finished...');
  });

  // Test 1: Verify authenticated inventory
  test('Verify inventory page after automatic login', async ({
    authenticatedApp
  }) => {

    await expect(
      authenticatedApp.inventoryTitle
    ).toBeVisible();

  });

  // Test 2: Add product to cart
  test('Add backpack to cart', async ({ authenticatedApp }) => {

    await authenticatedApp.addBackpackToCart();

    await expect(
      authenticatedApp.cartBadge
    ).toHaveText('1');

  });

  // Test 3: Complete checkout
  test('Complete checkout using reusable fixtures', async ({
    authenticatedApp,
    page
  }) => {

    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await authenticatedApp.addBackpackToCart();

    await authenticatedApp.openCart();

    await cartPage.verifyCartPage();

    expect(
      await cartPage.getCartItemCount()
    ).toBe(1);

    await cartPage.proceedToCheckout();

    await checkoutPage.fillCustomerDetails(
      checkoutTestData.customer.firstName,
      checkoutTestData.customer.lastName,
      checkoutTestData.customer.postalCode
    );

    await checkoutPage.continueCheckout();

    await expect(page).toHaveURL(/checkout-step-two.html/);

    await checkoutPage.finishCheckout();

    await expect(page).toHaveURL(/checkout-complete.html/);

    await expect(
      checkoutPage.successMessage
    ).toHaveText('Thank you for your order!');

    console.log('Checkout completed successfully');

  });

});
