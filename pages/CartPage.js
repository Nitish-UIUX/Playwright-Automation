import { BasePage } from './BasePage.js';

export class CartPage extends BasePage {

    constructor(page) {
        super(page);

        this.cartTitle = page.locator('.title');
        this.cartItem = page.locator('.cart_item');
        this.checkoutButton = page.locator('#checkout');
        this.continueShoppingButton = page.locator('#continue-shopping');
    }

    async verifyCartPage() {
        await this.waitForElement(this.cartTitle);
        await this.cartItem.first().waitFor({ state: 'visible' });
    }

    async getCartItemCount() {
        return await this.cartItem.count();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }
}