import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';

test('Complete login and add product workflow using POM', async ({ page }) => {

    // Initialize page objects
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Step 1: Open login page
    await loginPage.open();

    // Step 2: Login
    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Step 3: Verify login
    await loginPage.verifySuccessfulLogin();

    // Step 4: Verify inventory page
    await inventoryPage.verifyInventoryPage();

    // Step 5: Add backpack to cart
    await inventoryPage.addBackpackToCart();

    // Step 6: Verify cart count
    await expect(inventoryPage.cartBadge).toHaveText('1');

    // Step 7: Open cart
    await inventoryPage.openCart();

    // Step 8: Verify cart URL
    await expect(page).toHaveURL(/cart.html/);

    console.log('Login and add-to-cart workflow completed successfully');

});