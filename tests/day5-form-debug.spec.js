
import { test } from '@playwright/test';

test('Inspect actual form fields', async ({ page }) => {

    await page.goto(
        'https://practice.expandtesting.com/form-validation',
        { waitUntil: 'domcontentloaded' }
    );

    const fields = await page.locator('input, select, textarea')
        .evaluateAll(elements =>
            elements.map(element => ({
                tag: element.tagName,
                id: element.id,
                name: element.name,
                type: element.type,
                placeholder: element.placeholder,
                value: element.value,
                labels: Array.from(element.labels || [])
                    .map(label => label.innerText.trim())
            }))
        );

    console.log('========== FORM FIELDS ==========');
    console.log(JSON.stringify(fields, null, 2));

    const buttons = await page.locator('button, input[type="submit"]')
        .evaluateAll(elements =>
            elements.map(element => ({
                text: element.innerText,
                type: element.type,
                value: element.value
            }))
        );

    console.log('========== FORM BUTTONS ==========');
    console.log(JSON.stringify(buttons, null, 2));



    const payment = page.locator('[name="payment"]');

    const options = await payment.locator('option').evaluateAll(elements =>
        elements.map(option => ({
            text: option.textContent.trim(),
            value: option.value
        }))
    );

    console.log('Payment options:', options);

});

