// ------------------------- Build a Playwright project using the Page Object Model -------------------------
// What we are learn?
// Understanding Page Object Model (POM)
// Creating page classes and reusable locators
// Moving page actions into page methods
// Separating test data and test logic
// Reusable components and page inheritance
// Mini project – SauceDemo automation using POM

// What is POM?
// Ans :- Page Object Model (POM) is a design pattern in test automation that encourages creating separate classes for each page of the application. Each class contains locators and methods to interact with the page, promoting code reusability, maintainability, and separation of test logic from page structure.

// Withoght POM, your test contains all the locators and actions.

import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/inventory/);

});

// what we learn.
// class LoginPage  ---> Define a page object 
// constructor(page) ---> Receives the Playwright page.
// this.page ---> Stores the page reference.

// Locators  ----> Stores in one reusable class
// async open() ---> Opens the application.
// async Login () ---> Performs the login workflow.
// new LoginPage(page) ---> Creates a page object.


// ----------- Creating Page Classes and Reusable Locators -----------

// Reusable locators belong in a page class constructor.
// See pages/LoginPage.js:
// constructor(page) {
//     this.usernameInput = page.locator('#user-name');
//     this.passwordInput = page.locator('#password');
//     this.loginButton = page.locator('#login-button');
// }

// These locators can be used in the page methods to perform actions like login.


// Reusable Components and Page Inheritance.

// What is page inheritance?
// Ans :- Page inheritance allows creating a base page class with common functionality and having other page classes inherit from it. This promotes code reuse and reduces duplication across different page classes.
// Login Page
// Inventory Page
// Cart Page
// Checkout Page

// All these pages need common functionality , such as :
// - Accessing the browser page 
// - Navigating to another URL
// - Taking screenshots 
// - Waiting for elements. 

// Create BasePage.js 
