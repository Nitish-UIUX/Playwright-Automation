import { test, expect } from '../fixtures/pom-fixtures.js';

test.describe('Day 10 - POM Fixtures', () => {

    test('Verify inventory page using authenticated fixture', async ({ authenticatedApp }) => {

        await expect(
            authenticatedApp.inventoryTitle
        ).toBeVisible();

    });

    test('Add product using authenticated fixture', async ({ authenticatedApp }) => {

        await authenticatedApp.addBackpackToCart();

        await expect(
            authenticatedApp.cartBadge
        ).toHaveText('1');

    });

});