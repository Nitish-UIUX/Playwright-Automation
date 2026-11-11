export class BasePage {

    constructor(page) {
        this.page = page;
    }

    // Navigate to URL
    async navigate(url) {
        await this.page.goto(url);
    }

    // Take screenshot
    async takeScreenshot(name) {
        await this.page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: true
        });
    }

    // Wait for element
    async waitForElement(locator) {
        await locator.waitFor({
            state: 'visible'
        });
    }

    // Get page title
    async getPageTitle() {
        return await this.page.title();
    }
}