// // @ts-check
// import { defineConfig, devices } from '@playwright/test';

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // import dotenv from 'dotenv';
// // import path from 'path';
// // dotenv.config({ path: path.resolve(__dirname, '.env') });

// /**
//  * @see https://playwright.dev/docs/test-configuration
//  */
// export default defineConfig({
//   testDir: './tests',
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('')`. */
//     // baseURL: 'http://localhost:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     // trace: 'on-first-retry',
//     trace: 'on',
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },

//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://localhost:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });






// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run test files in parallel
  fullyParallel: true,

  // Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests only in CI
  retries: process.env.CI ? 2 : 0,

  // Control parallel workers
  workers: process.env.CI ? 1 : undefined,

  // Test execution timeout
  timeout: 30000,

  // Assertion timeout
  expect: {
    timeout: 5000,
  },

  // HTML report
    // reporter: 'html',
  reporter: [
  ['html', {
    outputFolder: 'playwright-report',
    open: 'never',
  }],
  ['allure-playwright', {
    resultsDir: 'allure-results',
  }],
],

  // Shared settings
  use: {
    // SauceDemo application URL
    baseURL: 'https://www.saucedemo.com',

    // Run browser without UI
    headless: true,

    // Capture screenshots on failure
    screenshot: 'only-on-failure',

    // Collect trace
    trace: 'on',

    // Record video on failure
    video: 'retain-on-failure',
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 7'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 13'],
      },
    },

  ],


});


// Setting	--------------   Your existing config	---------------------- Updated config
// fullyParallel	----------------true	----------------------------------Preserved
// forbidOnly	--------------------CI-based	----------------------------Preserved
// retries	--------------------- 2 in CI	----------------------------------Preserved
// workers	--------------------- 1 in CI	----------------------------------Preserved
// reporter	--------------------- HTML	----------------------------------Preserved
// projects	--------------------- 3 browsers	----------------------------------Preserved
// baseURL	--------------------- Not configured	----------------------------------Added
// timeout	--------------------- Default	----------------------------------30 seconds
// expect.timeout	--------------- Default	----------------------------------5 seconds
// screenshot	--------------------Default	----------------------------------Failure only
// trace	------------------------on----------------------------------Preserved
// video	------------------------Not configured	----------------------------------Failure only





// -------------------------------Available options:-------------------------
// Option	Meaning
// off	No automatic screenshots
// on	Screenshot after every test
// only-on-failure	Screenshot only when a test fails