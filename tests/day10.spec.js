// ------------------------------- Advanced Fixtures , Hooks & Playwright Configuration -------------------------------
// Playwright fixtures ---->	page, browser, context, request and fixture lifecycle
// Test hooks	---> beforeEach, afterEach, beforeAll, afterAll
// Custom fixtures	---> Create reusable fixtures using test.extend()
// Fixture dependencies	---> Share page objects and authentication setup through fixtures
// Playwright configuration	---> use, projects, retries, workers, timeout, baseURL
// Mini project	---> Build a reusable test setup using custom fixtures and configuratio

// What is a fixture in Playwright? 
// A fixture is a reusable setup or context that can be shared across tests, such as a browser, page, or custom setup.
// for example, instead of manually opening a browser and creating a page in every test, Playwright provides built-in fixtures.

// Buit-in fixtures :
//  - page ---> Provides a browser (tab)
//  - browser ---> Provides the browser instance 
//  - context ---> Provides an isolated browser context.
//  - request ---> provides an API request context.
//  - browserName ---> Provides the browser name for the current test. 



// -----------------------------------Test Hooks--------------------------------------
// beforeEach	---> Runs before every test
// afterEach	---> Runs after every test
// beforeAll	---> Runs once before tests in a file or describe group
// afterAll	    ---> Runs once after tests in a file or describe group



// -------------------------------Custom Fixtures using test.extend() ------------------------------
// What is a custom fixture?
// A custom fixture is a user-defined setup that can be shared across tests, similar to built-in fixtures.
// It allows you to create reusable test setups, such as authenticated sessions, page objects, or any other context needed for your tests.

// await page.goto('https://www.saucedemo.com/');



// ------------------Fixture Dependencies and POM Integration ------------------
// Fixture dependencies allow you to share setup and context between different fixtures.
// For example, you can create a fixture for an authenticated session and use it in multiple tests.
// Page Object Model (POM) integration helps in organizing locators and actions for different pages, making tests more maintainable.



// ------------------------ Playwright Configuration ------------------------
    // testDir	----> Directory containing test files
    // timeout	----> Maximum duration for an individual test
    // expect.timeout	----> Maximum wait for an auto-retrying assertion
    // retries	----> Number of retries after a test failure
    // workers	----> Number of parallel workers
    // baseURL	----> Base URL for application navigation
    // projects	----> Browser or environment configurations
    // reporter	----> Test result reporting format
    // headless	----> Run browser without displaying its UI


// ------------------------- Final project Goal: Build a reusable SauceDemo test Framework -------------------------

// Today we'll combine everything we've learned:
// 1. Built-in Playwright fixtures.
// 2. Test hooks.
// 3. Custom fixtures using test.extend().
// 4. Fixture dependencies.
// 5. Page Object Model integration.
// 6. Centralized Playwright configuration.

