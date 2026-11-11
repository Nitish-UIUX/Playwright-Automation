// complete Form Autotmation Mini Project 


import { test, expect } from '@playwright/test';
import { fillContactForm } from './helpers/form.helper.js';

test.describe('Day 5 - Form Automation Mini Project', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://practice.expandtesting.com/form-validation',
            {
                waitUntil: 'domcontentloaded'
            }
        );

    });

    test.afterEach(async ({ browserName }) => {

        console.log(`Test completed on: ${browserName}`);

    });

    // Test 1 - Verify form fields
    test('Test 1 - Verify all form fields', async ({ page }) => {

        await expect(page.locator('form')).toBeVisible();

        await expect(
            page.locator('[name="ContactName"]')
        ).toBeVisible();

        await expect(
            page.locator('[name="contactnumber"]')
        ).toBeVisible();

        await expect(
            page.locator('[name="pickupdate"]')
        ).toBeVisible();

        await expect(
            page.locator('[name="payment"]')
        ).toBeVisible();

    });

    // Test 2 - Fill contact form
    test('Test 2 - Fill all form fields', async ({ page }) => {

        await fillContactForm(page);

        await expect(
            page.locator('[name="ContactName"]')
        ).toHaveValue('John Smith');

        await expect(
            page.locator('[name="contactnumber"]')
        ).toHaveValue('012-3456789');

        await expect(
            page.locator('[name="pickupdate"]')
        ).toHaveValue('2026-11-10');

        await expect(
            page.locator('[name="payment"]')
        ).toHaveValue('card');

    });

    // Test 3 - Verify payment options
    test('Test 3 - Select cash on delivery', async ({ page }) => {

        const payment = page.locator('[name="payment"]');

        await payment.selectOption('cashondelivery');

        await expect(payment).toHaveValue('cashondelivery');

    });

    // Test 4 - Verify card payment
    test('Test 4 - Select card payment', async ({ page }) => {

        const payment = page.locator('[name="payment"]');

        await payment.selectOption('card');

        await expect(payment).toHaveValue('card');

    });

    // Test 5 - Verify contact name validation
    test('Test 5 - Validate successful form submission', async ({ page }) => {

        await fillContactForm(page);

        await page.getByRole('button', {
            name: 'Register'
        }).click();

        await expect(page).toHaveURL(/form-confirmation/);

        await expect(
            page.getByText('Thank you for validating your ticket')
        ).toBeVisible();

    });
    // Test 6 - Complete form submission
    test('Test 6 - Verify confirmation page', async ({ page }) => {

        await fillContactForm(page);

        await page.getByRole('button', {
            name: 'Register'
        }).click();

        await expect(page).toHaveURL(/form-confirmation/);

        await expect(
            page.getByText('Form Confirmation', { exact: true })
        ).toBeVisible();

        await expect(
            page.getByText('Thank you for validating your ticket')
        ).toBeVisible();

        console.log('Form submitted successfully!');

    });



    // test('Debug - Inspect form submission response', async ({ page }) => {

    //     await fillContactForm(page);

    //     // Capture the URL before submission
    //     console.log('Before submission URL:', page.url());

    //     // Submit the form
    //     await page.getByRole('button', {
    //         name: 'Register'
    //     }).click();

    //     // Allow the page to finish any immediate navigation
    //     await page.waitForLoadState('domcontentloaded').catch(() => { });

    //     console.log('After submission URL:', page.url());

    //     // Inspect the complete page instead of assuming form still exists
    //     const bodyText = await page.locator('body').innerText({
    //         timeout: 15000
    //     });

    //     console.log('========== PAGE RESPONSE ==========');
    //     console.log(bodyText);

    //     // Inspect remaining input fields, if any
    //     const fields = await page.locator('input').evaluateAll(elements =>
    //         elements.map(element => ({
    //             name: element.name,
    //             value: element.value,
    //             valid: element.checkValidity(),
    //             message: element.validationMessage
    //         }))
    //     );

    //     console.log('========== FIELD VALIDATION ==========');
    //     console.log(fields);

    // });



});

