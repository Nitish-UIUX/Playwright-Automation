import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Day 9 - POM Locator Practice', () => {

    test('Verify login page locators', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await expect(loginPage.usernameInput).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.loginButton).toBeVisible();

    });

    test('Verify invalid login error', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            'invalid_user',
            'invalid_password'
        );

        await expect(loginPage.errorMessage).toBeVisible();

        const error = await loginPage.getErrorMessage();

        console.log('Login Error:', error);

    });

});


// What you learned? 
// Constructor  ---> Initializes the page and locators 
// Reusable Locators  ---> Define selectors once.
// EnterUsername() ---> Reusable username action.
// EnterPassword() ---> Reusable password action.
// ClickLogin() ---> Reusable login button action.
// Login  ---> combine multiple page actions.
// getErrorMessage() ---> Reads the login error. 


// Moving Page Actions into Reusable Page Methods  ---> Improves code maintainability and readability.
// Login
// Add product to cart
// Open shopping cart
// Checkout
// Complete order

// for example : 
// await loginPage.login(username, password);
// await inventoryPage.addProductToCart();
// await cartPage.openCart();