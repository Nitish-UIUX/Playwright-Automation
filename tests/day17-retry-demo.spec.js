// Retry Strategies, Timeouts & Failure Analysis.

// Objective: Learn how Playwright handles failed tests, how retries work, how to configure timeouts, and how to investigate failures without hiding real problems.
// 1. What are test retries?
// Sometimes a test fails because of temporary issues such as network delays or application instability.

// Playwright allows us to retry failed tests.



// Understand timeout settings
// Playwright has different timeout settings.
// timeout	----> Maximum duration for an individual test
// expect.timeout	----> Maximum wait for an assertion
// actionTimeout	----> Maximum wait for an action
// navigationTimeout	----> Maximum wait for navigation

// export default defineConfig({
//   timeout: 30000,

//   expect: {
//     timeout: 5000,
//   },

//   use: {
//     actionTimeout: 10000,
//     navigationTimeout: 15000,
//   },
// });


// Need to check whether a test is running as retry 
// playwright provides testInfor.retry.


import { test, expect } from '@playwright/test';

test('Understand retry execution', async ({ page }, testInfo) => {
  console.log('Test title:', testInfo.title);
  console.log('Retry number:', testInfo.retry);

  if (testInfo.retry === 0) {
    console.log('First execution');
  } else {
    console.log('Retry execution');
  }

  await page.goto('https://www.saucedemo.com');

  await expect(
    page.locator('[data-test="login-button"]')
  ).toBeVisible();

  console.log('Expected status:', testInfo.expectedStatus);
  console.log('Actual status:', testInfo.status);
});


// Unserstand the test status 
// playwright provides testInfo.status to check the status of the test 
// testInfo.status
// testInfo.expectedStaus 
// testInfo.retry
// testInfo.title 



test('Check test execution status', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com');

  await expect(
    page.locator('[data-test="login-button"]')
  ).toBeVisible();

  console.log('Expected status:', testInfo.expectedStatus);
  console.log('Retry number:', testInfo.retry);
})