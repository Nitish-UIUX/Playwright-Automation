// Advanced CI/CD with GitHub Actions.

// Day 16 introduced GitHub Actions and basic CI/CD. Today we'll build on that knowledge and learn how to create a more professional automation pipeline with cross-browser execution, parallel jobs, caching, scheduled runs, and failure reporting.



// -----------------Advanced CI/CD Pipeline------------------

// Advanced GitHub Actions	Workflow events, jobs and dependencies
// Cross-browser matrix testing	Chromium, Firefox and WebKit
// Parallel execution	Sharding and distributing tests
// CI performance optimization	npm caching and browser installation
// Scheduled automation	Cron jobs and manual execution
// Mini project	Build an advanced CI/CD pipeline

// Advanced GitHub Actions:- 
// Understand workflow jobs
// YAML 
// jobs:
//   playwright-tests:
//     runs-on: ubuntu-latest


// Unserstadn needs 
// example YAML :- 
// jobs:

//   install:
//     runs-on: ubuntu-latest
//     steps:
//       - name: Install dependencies
//         run: npm ci

//   test:
//     needs: install
//     runs-on: ubuntu-latest
//     steps:
//       - name: Run tests
//         run: npx playwright test

//   report:
//     needs: test
//     if: always()
//     runs-on: ubuntu-latest
//     steps:
//       - name: Generate report summary
//         run: echo "Test execution completed"


// workflow triggers 

// on:
//   push:
//     branches: [main]

//   pull_request:
//     branches: [main]