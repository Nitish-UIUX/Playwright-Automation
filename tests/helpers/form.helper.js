export async function fillContactForm(page) {

    await page.locator('[name="ContactName"]')
        .fill('John Smith');

    await page.locator('[name="contactnumber"]')
        .fill('012-3456789');

    await page.locator('[name="pickupdate"]')
        .fill('2026-11-10');

    await page.locator('[name="payment"]')
        .selectOption('card');

}