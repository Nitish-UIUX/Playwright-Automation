import { test, expect } from './fixtures/auth.fixture.js';

test.describe('Day 6 - Authentication Fixture', () => {

    test('Verify inventory page after login', async ({ authenticatedPage }) => {

        await expect(
            authenticatedPage.getByText('Products', { exact: true })
        ).toBeVisible();

    });

    test('Verify product list', async ({ authenticatedPage }) => {

        await expect(
            authenticatedPage.locator('.inventory_item')
        ).toHaveCount(6);

    });

});