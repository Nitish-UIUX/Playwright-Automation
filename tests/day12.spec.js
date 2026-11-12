// -----------------------Combining API and UI Testing in End-to-End Workflows----------------------
// what we are learn
// Understanding combined API and UI testing
// Creating test data through APIs
// Using API authentication and sharing tokens with browser tests
// Validating UI actions through API responses
// API-based test setup and cleanup
// Mini project – Complete API + UI end-to-end workflow


// --------- Understanding combined API and UI testing ---------
// A traditional UI-only test might:
// 1. Open the application.
// 2. Login.
// 3. Navigate to products.
// 4. Add a product.
// 5. Complete the checkout process.
// 6. Verify the order.

// Create test product	API
// Open product listing	UI
// Add product to cart	UI
// Verify cart item	UI
// Verify order was created	API
// Clean up test data	API




//  Creating Test Data Through APIs
// In Hour 1, we learned how to combine Playwright's request and page fixtures.

// Now we'll learn how to create test data using APIs and then use that data in browser automation.
// 1. Why create test data through APIs?
// Imagine testing an e-commerce application.

// To test the checkout process, you need:
// - A registered user.
// - A product.
// - A shopping cart.
// - An order.



// --------------------------Understand the post request ---------------------

const { test, expect } = require('@playwright/test');

test('Create test data through the API', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Playwright Automation',
        body: 'Creating test data through API',
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(201);

  const createdPost = await response.json();

  console.log(createdPost.id);
});

// Here:
// - request.post() sends the POST request.
// - data contains the request payload.
// - response.json() reads the created resource response.
// - createdPost.id gives the returned resource ID.







// ----------------------- API Authentication and Sharing Tokens with Browser Tests -------------------------------
// In Hour 2, we created multiple test records using API requests.
// Now we'll learn how to authenticate through an API and reuse the access token in browser-based testing.

// ----------------------Understand the workflow---------------

// Instead of entering the username and password through the UI, we can:
// 1. Login using an API request.
// 2. Receive an access token.
// 3. Store the token.
// 4. Use the token in browser requests.
// 5. Open the application and verify the authenticated experience.


//  Validating UI Actions Through API Responses
// In Hour 3, we learned how to authenticate through an API and store an access token in browser localStorage.

// Now we'll learn an important automation technique:

// Perform an action in the UI and verify the result using an API request.
// 1. Understand the workflow
// Consider an e-commerce application.

// When a user adds a product to the cart:
// 1. Open the application.
// 2. Click the Add to Cart button.
// 3. Verify the cart count in the UI.
// 4. Send an API request to retrieve the cart.
// 5. Verify that the product exists in the API response.




// API-Based Test Setup and Cleanup
// In this hour, we'll learn how to use APIs to prepare test data before UI tests and clean up test data afterward.
// 1. Why API setup and cleanup?
// Suppose you're testing an e-commerce application.

// Before testing, you need:
// - A test user.
// - A product.
// - An order.
