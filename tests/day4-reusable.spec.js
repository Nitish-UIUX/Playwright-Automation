import { test, expect } from '@playwright/test';

import { login } from './helpers/auth.helper.js';

test.describe('Reusable Login Helper', () => {

    test('should login successfully', async ({ page }) => {

        await login(page);

        await expect(page).toHaveURL(/inventory.html/);

    });

    test('should display products after login', async ({ page }) => {

        await login(page);

        await expect(
            page.getByText('Products', { exact: true })
        ).toBeVisible();

    });

});