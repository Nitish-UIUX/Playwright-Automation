
import { test, expect } from '@playwright/test';

test.describe('Day 5 - Complete Form Automation', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://practice.expandtesting.com/form-validation',
            {
                waitUntil: 'domcontentloaded',
                timeout: 60000
            }
        );

        await expect(page.locator('form')).toBeVisible();

    });

    // Test 1 - Verify form fields
    test('Test 1 - Verify form fields', async ({ page }) => {

        await expect(page.locator('[name="ContactName"]')).toBeVisible();
        await expect(page.locator('[name="contactnumber"]')).toBeVisible();
        await expect(page.locator('[name="pickupdate"]')).toBeVisible();
        await expect(page.locator('[name="payment"]')).toBeVisible();

        await expect(
            page.getByRole('button', { name: 'Register' })
        ).toBeVisible();

    });

    // Test 2 - Fill form fields
    test('Test 2 - Fill form fields', async ({ page }) => {

        await page.locator('[name="ContactName"]')
            .fill('John Smith');

        await page.locator('[name="contactnumber"]')
            .fill('012-3456789');

        await page.locator('[name="pickupdate"]')
            .fill('2026-11-10');

        await page.locator('[name="payment"]')
            .selectOption('card');

        // Verify values
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

    // Test 3 - Submit form and inspect response
    test('Test 3 - Submit valid form', async ({ page }) => {

        await page.locator('[name="ContactName"]')
            .fill('John Smith');

        await page.locator('[name="contactnumber"]')
            .fill('012-3456789');

        await page.locator('[name="pickupdate"]')
            .fill('2026-11-10');

        await page.locator('[name="payment"]')
            .selectOption('card');

        await page.getByRole('button', {
            name: 'Register'
        }).click();

        // Verify contact name validation
        await expect(
            page.getByText('Looks good!')
        ).toBeVisible();

        // Print the final page response
        console.log(
            'Final page response:',
            await page.locator('body').innerText()
        );

    });

});
