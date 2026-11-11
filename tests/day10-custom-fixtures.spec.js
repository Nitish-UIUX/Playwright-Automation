import { test, expect } from '../fixtures/test-fixtures.js';

test('Verify login page using custom fixture', async ({ appPage }) => {

    await expect(appPage).toHaveTitle('Swag Labs');

    await expect(
        appPage.locator('#user-name')
    ).toBeVisible();

});

test('Verify login button using custom fixture', async ({ appPage }) => {

    await expect(
        appPage.locator('#login-button')
    ).toBeVisible();

});