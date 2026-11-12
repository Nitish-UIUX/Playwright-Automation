# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day9.spec.js >> Login test
- Location: tests\day9.spec.js:17:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | // ------------------------- Build a Playwright project using the Page Object Model -------------------------
  2  | // What we are learn?
  3  | // Understanding Page Object Model (POM)
  4  | // Creating page classes and reusable locators
  5  | // Moving page actions into page methods
  6  | // Separating test data and test logic
  7  | // Reusable components and page inheritance
  8  | // Mini project – SauceDemo automation using POM
  9  | 
  10 | // What is POM?
  11 | // Ans :- Page Object Model (POM) is a design pattern in test automation that encourages creating separate classes for each page of the application. Each class contains locators and methods to interact with the page, promoting code reusability, maintainability, and separation of test logic from page structure.
  12 | 
  13 | // Withoght POM, your test contains all the locators and actions.
  14 | 
  15 | import { test, expect } from '@playwright/test';
  16 | 
  17 | test('Login test', async ({ page }) => {
  18 | 
> 19 |     await page.goto('https://www.saucedemo.com/');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  20 | 
  21 |     await page.locator('#user-name').fill('standard_user');
  22 | 
  23 |     await page.locator('#password').fill('secret_sauce');
  24 | 
  25 |     await page.locator('#login-button').click();
  26 | 
  27 |     await expect(page).toHaveURL(/inventory/);
  28 | 
  29 | });
  30 | 
  31 | // what we learn.
  32 | // class LoginPage  ---> Define a page object 
  33 | // constructor(page) ---> Receives the Playwright page.
  34 | // this.page ---> Stores the page reference.
  35 | 
  36 | // Locators  ----> Stores in one reusable class
  37 | // async open() ---> Opens the application.
  38 | // async Login () ---> Performs the login workflow.
  39 | // new LoginPage(page) ---> Creates a page object.
  40 | 
  41 | 
  42 | // ----------- Creating Page Classes and Reusable Locators -----------
  43 | 
  44 | // Reusable locators belong in a page class constructor.
  45 | // See pages/LoginPage.js:
  46 | // constructor(page) {
  47 | //     this.usernameInput = page.locator('#user-name');
  48 | //     this.passwordInput = page.locator('#password');
  49 | //     this.loginButton = page.locator('#login-button');
  50 | // }
  51 | 
  52 | // These locators can be used in the page methods to perform actions like login.
  53 | 
  54 | 
  55 | // Reusable Components and Page Inheritance.
  56 | 
  57 | // What is page inheritance?
  58 | // Ans :- Page inheritance allows creating a base page class with common functionality and having other page classes inherit from it. This promotes code reuse and reduces duplication across different page classes.
  59 | // Login Page
  60 | // Inventory Page
  61 | // Cart Page
  62 | // Checkout Page
  63 | 
  64 | // All these pages need common functionality , such as :
  65 | // - Accessing the browser page 
  66 | // - Navigating to another URL
  67 | // - Taking screenshots 
  68 | // - Waiting for elements. 
  69 | 
  70 | // Create BasePage.js 
  71 | 
```