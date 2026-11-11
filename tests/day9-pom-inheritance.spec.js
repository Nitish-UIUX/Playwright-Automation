import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';

test('Verify POM inheritance', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Login page uses inherited navigation
    await loginPage.open();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await loginPage.verifySuccessfulLogin();

    // Inventory page uses inherited methods
    await inventoryPage.verifyInventoryPage();

    const title = await inventoryPage.getPageTitle();

    expect(title).toContain('Swag Labs');

    // Add product
    await inventoryPage.addBackpackToCart();

    await expect(inventoryPage.cartBadge).toHaveText('1');

    // Inherited screenshot method
    await inventoryPage.takeScreenshot('inventory-page');

    console.log('POM inheritance test completed');

});


// what we learn : - 
// BasePage	---> Common page functionality
// extends	---> Inherit methods from another class
// super(page) ---> 	Initialize the parent class
// this.page	---> Shared Playwright page reference
// Reusable methods	---> Avoid duplicate code