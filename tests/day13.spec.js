// Debugging, Playwright Inspector & Trace Viewer
// Today we'll learn how to debug Playwright tests professionally, identify failures, inspect browser actions, and analyze test execution.

// Today's goal: When a Playwright test fails, you should be able to identify why it failed and fix it without randomly changing code.
// Day 13 – Six-hour execution plan
// Hour	Topic	What you'll learn
// 1	Debugging fundamentals	Debugging strategies, error messages, stack traces
// 2	Playwright Inspector	page.pause(), Inspector, locator inspection
// 3	Debug mode	--debug, headed mode, step-by-step execution
// 4	Trace Viewer	Open traces, inspect actions, DOM snapshots, network
// 5	Screenshots and videos	Capture screenshots, videos, and failure evidence
// 6	Mini project	Debug and troubleshoot a failing test suite



// Debugging Fundamentals
// 1. What is debugging?
// Debugging means finding and fixing the reason a test is failing.

await page.locator('#login-button').click();

// Suppose your test fails because the locator cannot find the login button.

// Possible reasons:
// - Incorrect locator.
// - Page has not loaded.
// - Element is hidden.
// - Element is disabled.
// - Wrong page or URL.



// Playwright Debug Mode, Headed Mode & Step-by-Step Execution
// In this hour, we'll learn how to run tests in different debugging modes and control test execution.

// Headless vs Headed mode
// Playwright supports two ways to run browser tests.

// Run tests in headed mode

// npx playwright test tests/day13-debugging-basics.spec.js --project=chromium --headed


// Run tests in debug mode
// npx playwright test tests/day13-debugging-basics.spec.js --project=chromium --debug

// Debug mode opens Playwright Inspector and lets you execute the test step by step.


// Run a specific test by its title

//test('Debugging basic Playwright test', async ({ page }) => {
  // Test code
//});

// You can execute it by matching its title:


// npx playwright test -g "Debugging basic Playwright test" --project=chromium




/// Use slow motion execution

// $env:PWDEBUG="1"
// $env:PLAYWRIGHT_SLOW_MO="1000"
// npx playwright test tests/day13-debugging-basics.spec.js --project=chromium --headed


// Quick command reference

// --headed	-----> Show browser window
// --debug	-----> Open interactive debugging
// -g "test name"	-----> Run matching test
// --project=chromium	-----> Run only Chromium
// --workers=1	-----> Run tests with one worker



// -----------------------------Playwright Trace Viewer--------------------------------

// Trace Viewer is one of the most useful Playwright debugging tools. It helps you understand exactly what happened during test execution.
// 1. What is Trace Viewer?
// Trace Viewer records test execution details, including:
// - Actions performed by Playwright.
// - Screenshots of browser activity.
// - DOM snapshots before and after actions.
// - Network requests and responses.
// - Console messages.
// - Errors and execution timing.


// Enable tracing in Playwright configuration
// Open your existing playwright.config.js.

// Find the use section and configure:

// use: {
//   baseURL: 'https://www.saucedemo.com',
//   headless: true,

//   trace: 'on',
//   screenshot: 'only-on-failure',
//   video: 'retain-on-failure',
// },

// Trace Options : 

// on	Record traces for every test
// off	Disable tracing
// on-first-retry	Record trace on first retry
// retain-on-failure	Keep trace only for failed tests










// Screenshots, Videos and Failure Evidence
// In this hour, we'll learn how to capture screenshots and videos during test execution. These are useful when debugging failures and preparing test reports.
// 1. Screenshots in Playwright
// Playwright supports screenshots of the entire page or individual elements.

// ---------------------Full-page screenshot:------------------------

// await page.screenshot({
//   path: 'screenshots/homepage.png',
//   fullPage: true,
// });

// ---------------------Visible viewport screenshot:---------------------

await page.screenshot({
  path: 'screenshots/current-page.png',
});

//-----------------------Element Screenshot --------------------------

await page.locator('.inventory_list').screenshot({
  path: 'screenshots/inventory.png',
});


// Debugging Mini Project
// Final hour – Week 3
// Now we'll build a practical debugging project that combines everything learned today.

// Project: SauceDemo UI Automation – Debugging and Failure Analysis.
// 1. What will we implement?
// Our mini project will contain four test scenarios:
// Test	Scenario	Expected result
// 1	Successful login	Pass
// 2	Invalid login	Pass
// 3	Add product to cart	Pass
// 4	Intentionally incorrect locator	Fail initially; fix afterward


// Configure Playwright
// Open playwright.config.js.

// Inside your existing use configuration, ensure these settings are present:



// use: {
//   baseURL: 'https://www.saucedemo.com',
//   headless: true,

//   screenshot: 'only-on-failure',
//   video: 'retain-on-failure',
//   trace: 'retain-on-failure',
// },



// Create the mini-project test file
// Create:

// tests/day13-debugging-mini-project.spec.js
