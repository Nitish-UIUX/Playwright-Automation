import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';

export const test = base.extend({

    // Fixture 1: Create LoginPage
    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

    // Fixture 2: Create InventoryPage
    inventoryPage: async ({ page }, use) => {

        const inventoryPage = new InventoryPage(page);

        await use(inventoryPage);
    },

    // Fixture 3: Login automatically
    authenticatedApp: async ({ loginPage, inventoryPage }, use) => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await loginPage.verifySuccessfulLogin();

        await inventoryPage.verifyInventoryPage();

        console.log('Authenticated application is ready');

        await use(inventoryPage);

        console.log('Authenticated application test completed');
    }

});

export { expect };