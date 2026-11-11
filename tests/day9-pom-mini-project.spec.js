import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

import { checkoutTestData } from '../data/login-data.js';

test.describe('Day 9 - POM Complete Shopping Workflow', () => {

    test('Complete shopping and checkout using POM', async ({ page }) => {
 
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        // Step 1: Login
        await loginPage.open();

        await loginPage.login(
            checkoutTestData.username,
            checkoutTestData.password
        );

        await loginPage.verifySuccessfulLogin();

        // Step 2: Add product to cart
        await inventoryPage.verifyInventoryPage();
        await inventoryPage.addBackpackToCart();

        await expect(inventoryPage.cartBadge).toHaveText('1');

        // Step 3: Open cart
        await inventoryPage.openCart();

        await cartPage.verifyCartPage();

        expect(await cartPage.getCartItemCount()).toBe(1);

        // Step 4: Proceed to checkout
        await cartPage.proceedToCheckout();

        await expect(page).toHaveURL(/checkout-step-one.html/);

        // Step 5: Enter customer details
        await checkoutPage.fillCustomerDetails(
            checkoutTestData.customer.firstName,
            checkoutTestData.customer.lastName,
            checkoutTestData.customer.postalCode
        );

        await checkoutPage.continueCheckout();

        // Step 6: Verify checkout overview
        await expect(page).toHaveURL(/checkout-step-two.html/);

        await checkoutPage.verifyCheckoutOverview();

        // Step 7: Finish order
        await checkoutPage.finishCheckout();

        // Step 8: Verify order confirmation
        await expect(page).toHaveURL(/checkout-complete.html/);

        await expect(checkoutPage.successMessage)
            .toHaveText('Thank you for your order!');

        console.log('POM Shopping Workflow Completed Successfully');

    });

});