// Playwright Test Stability, Flaky Tests & Reliability.

// Day 16's GitHub Actions pipeline has not yet been verified through a shared execution result, so we'll keep that verification pending while continuing our learning.
// Day 17 – Test Stability & Reliability
// Today's objective: Learn how to identify flaky tests, reduce random failures, improve waits, and make your Playwright automation reliable in local and CI environments.

// Understanding flaky tests	----> Causes, symptoms and examples
// Auto-waiting and synchronization	---->Reliable waits and assertions
// Handling dynamic elements	----> Loading states, overlays and delayed elements
// Retry strategies	----> Retries, timeout configuration and failure analysis
// Test isolation	----> Independent tests, cleanup and shared state
// Mini project	----> Build a stable Playwright test suite

// ---------------------------Understanding flaky tests-------------------------
// What is a flaky test?
// A flaky test is a test that sometimes passes and sometimes fails without any relevant change to the application or test code.\

// Timing issues	----> Clicking before an element is ready
// Fixed waits	----> Using waitForTimeout(5000)
// Dynamic content	----> Element appears after an API response
// Network issues	----> Slow or failed API response
// Test dependency	----> One test depends on another test
// Shared state	----> Multiple tests modify the same data
// Poor selectors	----> Selecting elements using unstable CSS classes