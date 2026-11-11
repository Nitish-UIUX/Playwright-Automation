// Cross-Browser Testing & Device Emulation
// Week 3 – Day 14
// Today we'll learn how to run Playwright tests across multiple browsers, understand browser compatibility issues, and test applications using different devices and screen sizes.

// Today's goal: Build confidence that your application works consistently across Chromium, Firefox, WebKit, and mobile viewports.


// Cross-browser testing fundamentals	---> Chromium, Firefox, WebKit
// Browser projects	---> Configure and execute multiple browser projects
// Device emulation	---> Mobile, tablet, viewport, user agent
// Responsive testing	---> Desktop, tablet and mobile layouts
// Browser-specific debugging	---> Identify and troubleshoot compatibility issues
// Mini project	---> Cross-browser and responsive testing framework


// Cross-Browser Testing Fundamentals
// 1. What is cross-browser testing?
// Cross-browser testing means running the same automated tests in different browsers to verify that your application behaves consistently.

// Understand Playwright browser projects
// You already have Chromium, Firefox and WebKit configured in your playwright.config.js.

// A typical configuration looks like this:


// projects: [
//   {
//     name: 'chromium',
//     use: { ...devices['Desktop Chrome'] },
//   },
//   {
//     name: 'firefox',
//     use: { ...devices['Desktop Firefox'] },
//   },
//   {
//     name: 'webkit',
//     use: { ...devices['Desktop Safari'] },
//   },
// ],




// Playwright Browser Projects
// In Hour 1, we introduced cross-browser testing. Now we'll learn how to configure browser projects and execute tests selectively or across multiple browsers.
// 1. What is a Playwright project?
// A Playwright project is a configuration that defines how a group of tests should run.

// For example, you can configure:
// - Chromium with desktop Chrome settings.
// - Firefox with desktop Firefox settings.
// - WebKit with desktop Safari settings.
// - Mobile Chrome with Android device settings.
// You can execute the same test suite against different projects without duplicating test code.
// 2. Understand your playwright.config.js
// Open your existing configuration.

// Your projects section should look similar to this:




// Device Emulation in Playwright
// In this hour, we'll learn how to test applications on mobile and tablet devices without needing physical devices.

// Goal: Test your application using different screen sizes, browser settings, and device configurations.
// 1. What is device emulation?
// Device emulation allows Playwright to simulate device characteristics such as:
// - Screen width and height.
// - Mobile viewport.
// - Device scale factor.
// - Touch support.
// - User agent.
// - Mobile browser settings.



// Import Playwright device configurations
// Playwright provides predefined device configurations.
const { devices } = require('@playwright/test');


// You can use predefined device profiles such as:
// Device profile	Purpose
// iPhone 13	iPhone viewport and settings
// iPhone 13 Pro	iPhone Pro profile
// Pixel 7	Android mobile profile
// iPad (gen 7)	Tablet profile



// Configure mobile projects
// Open your existing playwright.config.js.

// Add mobile projects inside the existing projects array:



// {
//   name: 'Mobile Chrome',
//   use: {
//     ...devices['Pixel 7'],
//   },
// },
// {
//   name: 'Mobile Safari',
//   use: {
//     ...devices['iPhone 13'],
//   },
// },





// Responsive Testing
// Now we'll learn how to test the same application at different screen sizes.
// 1. What is responsive testing?
// Responsive testing checks whether an application displays correctly across different screen widths and heights.


// Device	Width	Height
// Desktop	1920	1080
// Laptop	1366	768
// Tablet	768	1024
// Mobile	390	844





// Browser-Specific Debugging & Compatibility Issues
// In this hour, we'll learn how to identify and troubleshoot issues that occur in one browser but not in another.

// Goal: Understand how to investigate browser-specific failures and write reliable cross-browser tests.
// 1. What are browser compatibility issues?
// The same application may behave differently across browsers because of differences in:
// - Browser engines.
// - CSS rendering.
// - JavaScript APIs.
// - Font rendering.
// - Viewport and device behavior.
// - Timing and loading behavior.