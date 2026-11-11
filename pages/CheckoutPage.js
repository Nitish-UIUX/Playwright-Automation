import { BasePage } from './BasePage.js';

export class CheckoutPage extends BasePage {

    constructor(page) {
        super(page);

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');

        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');

        this.checkoutOverview = page.locator('.title');
        this.successMessage = page.locator('.complete-header');
    }

    async fillCustomerDetails(first, last, postal) {
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(postal);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }

    async verifyCheckoutOverview() {
        await this.waitForElement(this.checkoutOverview);
    }

    async getSuccessMessage() {
        return await this.successMessage.textContent();
    }
}