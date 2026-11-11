// export class InventoryPage {

//     constructor(page) {
//         this.page = page;

//         // Locators
//         this.inventoryTitle = page.locator('.title');
//         this.addBackpackButton = page.locator(
//             '[data-test="add-to-cart-sauce-labs-backpack"]'
//         );
//         this.cartIcon = page.locator('.shopping_cart_link');
//         this.cartBadge = page.locator('.shopping_cart_badge');
//     }

//     // Verify inventory page
//     async verifyInventoryPage() {
//         await this.inventoryTitle.waitFor({
//             state: 'visible'
//         });
//     }

//     // Add backpack to cart
//     async addBackpackToCart() {
//         await this.addBackpackButton.click();
//     }

//     // Open shopping cart
//     async openCart() {
//         await this.cartIcon.click();
//     }

//     // Get cart item count
//     async getCartCount() {
//         return await this.cartBadge.textContent();
//     }
// }




import { BasePage } from './BasePage.js';

export class InventoryPage extends BasePage {

    constructor(page) {
        super(page);

        this.inventoryTitle = page.locator('.title');

        this.addBackpackButton = page.locator(
            '[data-test="add-to-cart-sauce-labs-backpack"]'
        );

        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async verifyInventoryPage() {
        await this.waitForElement(this.inventoryTitle);
    }

    async addBackpackToCart() {
        await this.addBackpackButton.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }
}