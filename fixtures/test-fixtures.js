import { test as base, expect } from '@playwright/test';

export const test = base.extend({

    appPage: async ({ page }, use) => {

        // Setup
        await page.goto('https://www.saucedemo.com/');

        console.log('Custom fixture: Application opened');

        // Provide page to the test
        await use(page);

        // Teardown
        console.log('Custom fixture: Test completed');
    }

});

export { expect };