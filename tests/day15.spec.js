// Playwright Test Reports & Result Analysis
// Week 3 – Day 15
// Today we'll learn how to generate professional test reports, analyze execution results, and understand how reporting works in a real automation project.

// Today's goal: Generate HTML reports, understand test results, and prepare test execution reports that can be shared with your team or manager.

// Six-hour execution plan
// Playwright HTML Reports	----> Generate and view HTML reports
// Report configuration	-----> Configure reporters and output folders
// Test result analysis	------> Passed, failed, skipped, flaky tests
// Allure Reports	-----> Install and configure Allure
// Screenshots, traces and report attachments	-----> Add debugging evidence to reports
// Mini project	-----> Build a test reporting workflow


// Playwright HTML Reports
// 1. What is a test report?
// A test report provides a summary of your automation execution.

// For example, after running your tests, you might see:

// A report helps you understand:
// - Total tests executed.
// - Passed tests.
// - Failed tests.
// - Skipped tests.
// - Execution duration.
// - Browser-specific results.
// - Error details and attachments.


// What can you see in Allure?

// Feature	----> Purpose
// Overview	----> Total passed, failed, broken and skipped tests
// Suites	----> Test files and test cases
// Graphs	----> Test execution statistics
// Behaviors	----> Tests grouped by features and stories
// Categories	----> Failure classification
// Attachments	----> Screenshots, videos, logs and traces
// History	----> Test execution trends across report runs


// Install Allure packages
// npm install --save-dev allure-playwright

// Install the Allure command-line tool:
// npm install --save-dev allure



// Test Result Analysis – Passed, Failed, Skipped & Flaky Tests


// Allure Advanced Features – Categories, History, Trends & Test Grouping
// In this hour, we'll learn how to organize test reports professionally and analyze test execution over multiple runs.

// Goal: Make your Allure reports useful for QA teams, developers and managers.
// 1. Allure Categories
// Categories help classify test failures into meaningful groups.

// For example:
// - Product defects
// - Automation bugs
// - Environment issues
// - Network failures
// - Assertion failures



// Attach Screenshots, Videos, Logs and Traces to Allure Reports
// In this hour, we'll learn how to attach debugging evidence to Allure reports.

// Goal: When a test fails, developers should be able to open the report and inspect screenshots, logs, videos and traces without manually searching through project folders.

// Screenshot	Shows the browser state
// Video	Shows the test execution
// Logs	Shows custom execution messages
// Trace ZIP	Helps investigate browser actions and network activity
// JSON	Stores API responses or test data