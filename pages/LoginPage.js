import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async open() {
        await this.navigate('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifySuccessfulLogin() {
        await this.page.waitForURL('**/inventory.html');
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }
}