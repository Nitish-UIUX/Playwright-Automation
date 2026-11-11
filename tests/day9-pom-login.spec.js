import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('Login using Page Object Model', async ({ page }) => {

    // Create LoginPage object
    const loginPage = new LoginPage(page);

    // Open login page
    await loginPage.open();

    // Login
    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Verify successful login
    await expect(page).toHaveURL(/inventory.html/);

    console.log('Login successful using POM');

});