// End-to-End Shopping Automation

// Task -1 : Validate checkout form fields and workflow


const { test, expect } = require('@playwright/test');

test('verify checkout required field validation', async ({ page }) => {

    // Step 1: Open SauceDemo
    await page.goto('https://www.saucedemo.com/');

    // Step 2: Login
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    // Step 3: Add product to cart
    await page.getByRole('button', {
        name: 'Add to cart'
    }).first().click();

    // Step 4: Open cart
    await page.locator('.shopping_cart_link').click();

    // Step 5: Start checkout
    await page.getByRole('button', { name: 'Checkout' }).click();

    // Step 6: Continue without entering customer information
    await page.getByRole('button', { name: 'Continue' }).click();

    // Step 7: Verify required field error
    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();

    await expect(errorMessage).toContainText(
        'First Name is required'
    );

});



// Task -2 : Complete checkout workflow with valid customer information


test('verify successful shopping checkout', async ({ page }) => {

    // Step 1: Login
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    // Step 2: Add product
    const product = page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' });

    await product.getByRole('button', {
        name: 'Add to cart'
    }).click();

    // Step 3: Open cart
    await page.locator('.shopping_cart_link').click();

    await expect(
        page.getByText('Sauce Labs Backpack')
    ).toBeVisible();

    // Step 4: Checkout
    await page.getByRole('button', { name: 'Checkout' }).click();

    // Step 5: Enter customer details
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Smith');
    await page.getByPlaceholder('Zip/Postal Code').fill('831001');

    // Step 6: Continue
    await page.getByRole('button', { name: 'Continue' }).click();

    // Step 7: Verify checkout overview
    await expect(page).toHaveURL(/checkout-step-two.html/);

    await expect(
        page.getByText('Checkout: Overview', { exact: true })
    ).toBeVisible();

    // Step 8: Finish order
    await page.getByRole('button', { name: 'Finish' }).click();

    // Step 9: Verify confirmation
    await expect(
        page.getByRole('heading', {
            name: 'Thank you for your order!'
        })
    ).toBeVisible();

});
