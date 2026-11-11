// CI/CD Integration with Playwright & GitHub Actions
// Week 4 – Day 16
// Welcome to Week 4! Today we'll start learning how to run Playwright automation tests automatically using CI/CD pipelines.

// Until now, you've been running tests manually from your VS Code terminal. Now we'll learn how to automate that process.

// Today's goal: Whenever you push code to GitHub, Playwright tests should execute automatically, and the test results should be available in GitHub Actions.


// CI/CD fundamentals -----> 	CI, CD, pipelines and GitHub Actions
// 2	GitHub repository setup ----> 	Connect your Playwright project to GitHub
// 3	GitHub Actions workflow	----> Create your first YAML workflow
// 4	Run Playwright tests in CI ----> 	Install dependencies and execute tests
// 5	Reports and artifacts	-----> Upload HTML reports, screenshots and traces
// 6	Mini project	-----> Complete Playwright CI/CD pipeline


// Understanding CI/CD Fundamentals
// 1. What is CI/CD?
// CI/CD is a development practice that automates software integration, testing and delivery.

// CI – Continuous Integration

// Whenever developers push code to a shared repository, automated processes can:
// - Install dependencies.
// - Build the application.
// - Execute automated tests.
// - Identify errors early.
// - Report test results.
// CD – Continuous Delivery / Deployment

// After successful integration and validation, software can be prepared for release or automatically deployed to an environment.


// What is GitHub Actions?
// GitHub Actions is a CI/CD platform that allows you to automate workflows directly inside your GitHub repository.

// You can use it to:
// - Run Playwright tests automatically.
// - Execute tests on every push.
// - Execute tests when a pull request is created.
// - Schedule tests.
// - Generate reports.
// - Upload test artifacts.


// Important GitHub Actions terminology
// Workflow	----> Complete automation process
// Event	-----> Trigger that starts a workflow
// Job	-----> Collection of steps
// Step	-----> Individual task in a job
// Runner	----> Machine executing the workflow
// Action	----> Reusable automation component
// Artifact	---> File generated and saved by a workflow
// YAML	----> Configuration format used to define workflows


// Understand a simple workflow
// Here is a basic example:


// name: Playwright Tests

// on:
//   push:
//     branches: [main]

// jobs:
//   test:
//     runs-on: ubuntu-latest

//     steps:
//       - name: Checkout code
//         uses: actions/checkout@v4

//       - name: Setup Node.js
//         uses: actions/setup-node@v4
//         with:
//           node-version: 22

//       - name: Install dependencies
//         run: npm ci

//       - name: Install Playwright browsers
//         run: npx playwright install --with-deps

//       - name: Run Playwright tests
//         run: npx playwright test




// GitHub Repository Setup
// In Hour 1, we learned CI/CD fundamentals and GitHub Actions. Now we'll prepare your existing Playwright project for GitHub integration.

// Goal: Connect your local Playwright project to a GitHub repository so GitHub Actions can execute your tests.
// 1. Check your Git installation
// Open your VS Code terminal:

// git --version