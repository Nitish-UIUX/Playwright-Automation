// ------------------------- Day 11 Advanced API Testing and Authentication ------------------------- 

// What we are learning in Day 11:
// 1. API testing fundamentals	 ---> request fixture, GET, POST and response validation
// 2. API authentication	---> Bearer tokens, API keys and authenticated requests
// 3. APIRequestContext	---> request.newContext(), headers and reusable API clients
// 4. API test data	---> POST, PUT, PATCH, DELETE and dynamic payloads
// 5. API helpers and assertions	---> Reusable API methods, status codes, response bodies and headers
// 6. Mini project	---> Build an authenticated API testing framework

// What is API testing? 
// API testing  verifies communication between applications whithout necessarily interaction with the browser UI.

// Understand the Playwright request fixture.
import { test, expect } from '@playwright/test';

test('Verify API response', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.id).toBe(1);

});

// request.get()	Sends GET request
// request.post()	Sends POST request
// request.put()	Sends PUT request
// request.patch()	Sends PATCH request
// request.delete()	Sends DELETE request




// ------------------------------ API Authentication ------------------------------ 
// What is API authentication?
// API authentication ensures that only authorized users can access certain API endpoints. Common methods include Bearer tokens, API keys, and basic authentication.

// plain text 
// POST /auth/login

// user credentials in the request body
// {
//     "username": "user1",
//     "password": "password123"
// }


// Command API authentication methods 

// Bearer Token	 ----> Sends an access token in the Authorization header
// API Key	----> Uses a key to identify or authorize an API client
// Basic Authentication	----> Sends username and password credentials, typically encoded in Base64
// OAuth 2.0	----> Uses access tokens issued through an authorization flow


// we weill use the DummyJSON authentication.
// Login endpoint for DummyJSON
// POST https://dummyjson.com/auth/login

// Request body for login
// {
//   "username": "emilys",
//   "password": "emilyspass"
// }


// API RequestContext and Reusable API Clients 
// Waht si APIReqestContext?
// Send GET, POST, PUT, PATCH and DELETE requests.
    
// Set common headers.

// Configure a base URL.

// Reuse API request configurations.

// Test backend APIs independently of the UI.



// ------------------ API Test Management ( POST , PUT, PATCH & DELETE) ------------------------
// POST	 ----> Create a new resource	Create a post
// PUT	-----> Replace an existing resource	Update the entire post
// PATCH ----> Update selected fields	Change only the title
// DELETE ----> Delete a resource	Delete a post
// PUT vs PATCH 
// PUT generally replaces the complete resource representation.
// PATCH modifies only the fields included in the request.


// ----------------------------------- Reusable API Helpers & Assertions ------------------------ 
// 1. Why do we need API helpers?
// Imagine you have 50 API test cases. If every test contains repeated status-code and response validation logic, maintaining the tests becomes difficult.

// We can create reusable functions for:
// - Checking response status.
// - Validating response data.
// - Validating response headers.
// - Checking response time.
// - Handling common API assertions.